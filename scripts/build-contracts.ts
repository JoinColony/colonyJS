import { resolve as resolvePath } from 'path';
import { promisify } from 'util';
import * as rimraf from 'rimraf';
import * as execa from 'execa';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import {
  LatestReleaseTag,
  Core,
  Extensions,
  releaseMap,
} from '../src/versions';

const NETWORK_BUILD_DIR = resolvePath(
  __dirname,
  '../vendor/colonyNetwork/build/contracts',
);
const STATIC_DIR = resolvePath(__dirname, '../src/abis/static');
const OUT_ROOT_DIR = resolvePath(__dirname, '../src/contracts');

const VERSIONED_CONTRACTS = [
  Core.Colony,
  Extensions.CoinMachine,
  Extensions.OneTxPayment,
  Extensions.VotingReputation,
  Extensions.Whitelist,
];

const UNVERSIONED_CONTRACTS = [
  // Colony Network Interface ABIs
  'IColonyNetwork',
  'TokenLocking',
  // ERC20 tokens
  'Token',
  'TokenERC20',
  'TokenSAI',
];

const rm = promisify(rimraf);

const buildVersionedContracts = async (
  releaseTag: string,
  inputDir: string,
): Promise<void[]> => {
  const promises = VERSIONED_CONTRACTS.map(async (contractName) => {
    const availableContracts = releaseMap[contractName];
    const versionTag = releaseTag === 'develop' ? 'DEV' : releaseTag;
    if (versionTag in availableContracts) {
      const outDir = resolvePath(
        OUT_ROOT_DIR,
        contractName,
        String(availableContracts[versionTag]),
      );

      await rm(outDir);

      const typechain = execa('typechain', [
        '--target',
        'ethers-v4',
        '--out-dir',
        outDir,
        `${inputDir}/${contractName}.json`,
      ]);
      if (typechain.stdout) typechain.stdout.pipe(process.stdout);
      await typechain;
    }
  });
  return Promise.all(promises);
};

const buildUnversionedContracts = async (inputDir: string) => {
  const contractGlobs = `{${UNVERSIONED_CONTRACTS.map((c) => `${c}.json`).join(
    ',',
  )}}`;
  const typechain = execa('typechain', [
    '--target',
    'ethers-v4',
    '--out-dir',
    OUT_ROOT_DIR,
    `{${inputDir},${STATIC_DIR}}/${contractGlobs}`,
  ]);

  if (typechain.stdout) typechain.stdout.pipe(process.stdout);
  await typechain;
};

const build = async () => {
  const { argv } = yargs(hideBin(process.argv)).options({
    tag: { alias: 't', type: 'string', default: 'develop' },
  });
  const args = await argv;
  const { tag } = args;

  const abiDir = resolvePath(__dirname, `../src/abis/${tag}`);
  const inputDir = tag === 'develop' ? NETWORK_BUILD_DIR : abiDir;

  console.info(`Building release tag ${tag}...`);

  await buildVersionedContracts(tag, inputDir);

  if (tag === 'develop' || tag === LatestReleaseTag) {
    await buildUnversionedContracts(inputDir);
  }
};

build();
