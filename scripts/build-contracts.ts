import { resolve as resolvePath } from 'path';
import { copyFileSync } from 'fs';
import { promisify } from 'util';
import * as camelcase from 'camelcase';
import * as execute from 'execa';
import * as rimraf from 'rimraf';

import {
  CurrentColonyVersion,
  releaseMap,
  CurrentCoinMachineVersion,
  CurrentOneTxPaymentVersion,
  CurrentVotingReputationVersion,
} from '../src/versions';
import { Extension } from '../src/clients/Extensions/colonyContractExtensions';

/*
 * State Vars
 */
let currentNetworkTag: string;

const rimrafPromise = promisify(rimraf);

const networkDir = resolvePath(__dirname, '../vendor/colonyNetwork');
const relativeBuildDir = 'build/contracts';
const relativeTokenDir = 'lib/colonyToken/build/contracts';
const buildDir = resolvePath(networkDir, relativeBuildDir);
const tokenBuildDir = resolvePath(networkDir, relativeTokenDir);
const vendorTokenDir = resolvePath(__dirname, '../vendor/tokens');

const contractsToBuild = ['IColony', 'IColonyNetwork', 'TokenLocking'];

const extensionContracts = [
  Extension.OneTxPayment,
  Extension.CoinMachine,
  Extension.VotingReputation,
];

const currentExtensionsVersions = {
  [Extension.OneTxPayment]: CurrentOneTxPaymentVersion,
  [Extension.CoinMachine]: CurrentCoinMachineVersion,
  [Extension.VotingReputation]: CurrentVotingReputationVersion,
};

const tokenContracts = [
  // ERC20 tokens
  'Token',
  'TokenERC20',
  'TokenSAI',
];
const version = CurrentColonyVersion;
const outRoot = resolvePath(__dirname, '../src/contracts');
const colonyContractsOutDir = `${outRoot}/colony/${version}`;
const deployDir = `${outRoot}/deploy`;

const provisionNetworkVendor = async (tag: string): Promise<void> => {
  if (!tag) {
    throw new Error(
      `Version ${version} of colonyNetwork doesn't seem to exist`,
    );
  }

  console.info(`Checking out network tag ${tag}`);
  const git = execute('git', ['checkout', tag], {
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
};

const buildColonyContracts = async (): Promise<void> => {
  // @ts-ignore
  const releaseTag: string = releaseMap.colony[version];

  if (currentNetworkTag !== releaseTag) {
    await provisionNetworkVendor(releaseTag);
    currentNetworkTag = releaseTag;
  }

  // Just build token contracts for the latest version
  contractsToBuild.push(...tokenContracts);
  const contractGlobs = `{${contractsToBuild
    .map((c) => `${c}.json`)
    .join(',')}}`;

  const typechain = execute('typechain', [
    '--target',
    'ethers-v4',
    '--outDir',
    colonyContractsOutDir,
    `{${networkDir}/{${relativeBuildDir},${relativeTokenDir}}/${contractGlobs},${vendorTokenDir}/${contractGlobs}}`,
  ]);
  if (typechain.stdout) typechain.stdout.pipe(process.stdout);
  await typechain;
};

const buildExtensionContracts = async (): Promise<void> => {
  await Promise.all(
    extensionContracts.map(async (extensionContract) => {
      const extensionVersion = currentExtensionsVersions[extensionContract];
      const releaseTag: string =
        // @ts-ignore
        releaseMap.extension[camelcase(extensionContract)][extensionVersion];

      if (currentNetworkTag !== releaseTag) {
        await provisionNetworkVendor(releaseTag);
        currentNetworkTag = releaseTag;
      }

      const extensionOutDir = `${outRoot}/extensions/${camelcase(
        extensionContract,
      )}/${currentExtensionsVersions[extensionContract]}`;
      const typechain = execute('typechain', [
        '--target',
        'ethers-v4',
        '--outDir',
        extensionOutDir,
        `${networkDir}/${relativeBuildDir}/${extensionContract}.json`,
      ]);
      if (typechain.stdout) typechain.stdout.pipe(process.stdout);
      await typechain;
    }),
  );
};

const orchestrateBuild = async (): Promise<void> => {
  await buildColonyContracts();
  await buildExtensionContracts();
};

orchestrateBuild();
