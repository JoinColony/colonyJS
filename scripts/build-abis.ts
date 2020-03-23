import { resolve } from 'path';

import { options } from 'yargs';
import * as execute from 'execa';

import ColonyVersions from '../versions';
import { releaseMap } from './config';

const networkDir = resolve(__dirname, '../lib/colonyNetwork');

const args = options({
  'contract-version': { type: 'string', alias: 'C', demandOption: true },
}).argv;

const version = (args.contractVersion as unknown) as ColonyVersions;

if (!releaseMap[version]) {
  throw new Error(`Version ${version} of colonyNetwork doesn't seem to exist`);
}

(async () => {
  console.info(`Checking out network tag ${releaseMap[version]}`);
  const git = execute('git', ['checkout', releaseMap[version]], {
    cwd: networkDir,
  });
  if (git.stdout) git.stdout.pipe(process.stdout);
  await git;

  const yarn = execute('yarn', ['install'], {
    cwd: networkDir,
  });
  if (yarn.stdout) yarn.stdout.pipe(process.stdout);
  await yarn;

  const truffle = execute('yarn', ['truffle', 'compile'], {
    cwd: networkDir,
  });
  if (truffle.stdout) truffle.stdout.pipe(process.stdout);
  await truffle;
})();
