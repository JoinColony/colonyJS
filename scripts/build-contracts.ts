import { resolve as resolvePath } from 'path';
import { copyFileSync } from 'fs';
import { promisify } from 'util';

import { options } from 'yargs';
import * as execute from 'execa';
import * as rimraf from 'rimraf';

import { ColonyVersion, CurrentVersion } from '../src/constants';
import { releaseMap } from './config';

const rimrafPromise = promisify(rimraf);

const networkDir = resolvePath(__dirname, '../vendor/colonyNetwork');
const buildDir = resolvePath(networkDir, 'build/contracts');

const args = options({
  V: { type: 'number', alias: 'contract-version', demandOption: true },
}).argv;

const version = args.V as ColonyVersion;
const outRoot = resolvePath(__dirname, '../src/contracts');
const outDir = `${outRoot}/${version}`;
const deployDir = `${outRoot}/deploy`;
const isCurrentVersion = version === CurrentVersion;

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

  const typechain = execute('typechain', [
    '--target',
    'ethers-v4',
    '--outDir',
    outDir,
    `${buildDir}/I*.json`,
  ]);
  if (typechain.stdout) typechain.stdout.pipe(process.stdout);
  await typechain;

  // Copy contract json files of latest version for deployment purposes
  if (isCurrentVersion) {
    copyFileSync(`${buildDir}/Colony.json`, `${deployDir}/Colony.json`);
  }
};

buildContracts();
