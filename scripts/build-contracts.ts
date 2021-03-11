import { resolve as resolvePath } from 'path';
import { copyFileSync } from 'fs';
import { promisify } from 'util';

import { options } from 'yargs';
import * as execute from 'execa';
import * as rimraf from 'rimraf';

import { ColonyVersion, CurrentVersion, releaseMap } from '../src/versions';

const rimrafPromise = promisify(rimraf);

const networkDir = resolvePath(__dirname, '../vendor/colonyNetwork');
const relativeBuildDir = 'build/contracts';
const relativeTokenDir = 'lib/colonyToken/build/contracts';
const buildDir = resolvePath(networkDir, relativeBuildDir);
const tokenBuildDir = resolvePath(networkDir, relativeTokenDir);
const vendorTokenDir = resolvePath(__dirname, '../vendor/tokens');

const contractsToBuild = ['IColony', 'IColonyNetwork', 'TokenLocking'];

const extensionContracts = ['OneTxPayment', 'CoinMachine', 'VotingReputation'];

const tokenContracts = [
  // ERC20 tokens
  'Token',
  'TokenERC20',
  'TokenSAI',
];

const args = options({
  V: { type: 'number', alias: 'contract-version', demandOption: true },
}).argv;

const version = args.V as ColonyVersion;
const outRoot = resolvePath(__dirname, '../src/contracts');
const outDir = `${outRoot}/${version}`;
const deployDir = `${outRoot}/deploy`;

if (!releaseMap[version]) {
  throw new Error(`Version ${version} of colonyNetwork doesn't seem to exist`);
}

const buildContracts = async (): Promise<void> => {
  console.info(`Checking out network tag ${releaseMap[version]}`);
  const git = execute('git', ['checkout', releaseMap[version]], {
    cwd: networkDir,
  });
  if (git.stdout) git.stdout.pipe(process.stdout);
  await git;

  const gitSubmodule = execute('git', ['submodule', 'update'], {
    cwd: networkDir,
  });
  if (gitSubmodule.stdout) gitSubmodule.stdout.pipe(process.stdout);
  await gitSubmodule;

  const yarn = execute('yarn', ['install'], {
    cwd: networkDir,
  });
  if (yarn.stdout) yarn.stdout.pipe(process.stdout);
  await yarn;

  await rimrafPromise(buildDir);

  const truffle = execute('yarn', ['truffle', 'compile'], {
    cwd: networkDir,
  });
  if (truffle.stdout) truffle.stdout.pipe(process.stdout);
  await truffle;

  if (version === CurrentVersion) {
    // Copy contract json files of latest version for deployment purposes
    copyFileSync(`${tokenBuildDir}/Token.json`, `${deployDir}/Token.json`);
    copyFileSync(
      `${tokenBuildDir}/TokenAuthority.json`,
      `${deployDir}/TokenAuthority.json`,
    );

    /*
     * Add extensions contracts to be built
     */
    contractsToBuild.push(...extensionContracts);

    // Just build token contracts for the latest version
    contractsToBuild.push(...tokenContracts);
  }
  const contractGlobs = `{${contractsToBuild
    .map((c) => `${c}.json`)
    .join(',')}}`;

  const typechain = execute('typechain', [
    '--target',
    'ethers-v4',
    '--outDir',
    outDir,
    `{${networkDir}/{${relativeBuildDir},${relativeTokenDir}}/${contractGlobs},${vendorTokenDir}/${contractGlobs}}`,
  ]);
  if (typechain.stdout) typechain.stdout.pipe(process.stdout);
  await typechain;
};

buildContracts();
