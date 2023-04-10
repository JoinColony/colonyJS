import { resolve as resolvePath } from 'path';
import { promisify } from 'util';
import rimraf from 'rimraf';
import execa from 'execa';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import { LATEST_TAG, RELEASE_MAP } from '../src/versions';

// Upgradable contract names that will be generated
const VERSIONED_CONTRACTS = [
  'IColony',
  'CoinMachine',
  'EvaluatedExpenditure',
  'FundingQueue',
  'IVotingReputation',
  'OneTxPayment',
  'ReputationBootstrapper',
  'StakedExpenditure',
  'StreamingPayments',
  'TokenSupplier',
  'VotingReputation',
  'Whitelist',
];

const UPGRADABLE_CONTRACTS = ['IColonyNetwork'];

// Names of non-upgradable contracts that will be generated
const UNVERSIONED_CONTRACTS = ['ColonyExtension', 'IBasicMetaTransaction'];

const STATIC_CONTRACTS = ['MotionTarget'];

// Names of Token contracts used
const TOKEN_CONTRACTS = [
  // New Colony token with MetaTx support
  'MetaTxToken',
  // Legacy Colony token
  'Token',
  // Token Authoriy contract
  'TokenAuthority',
  // Token Locking contract
  'TokenLocking',
];

const TOKEN_STATIC_CONTRACTS = [
  // Default ERC20 token
  'TokenERC20',
  // ERC20 + permit
  'TokenERC2612',
  // "NFT"
  'TokenERC721',
  // Special ABI for SAI (not strictly ERC20?)
  'TokenSAI',
];

const ABI_DIR = resolvePath(__dirname, '../abis/dist');
const VERSIONED_DIR = resolvePath(ABI_DIR, 'versions');
const STATIC_DIR = resolvePath(ABI_DIR, 'static');
const EVENTS_DIR = resolvePath(ABI_DIR, 'events');
const TOKENS_STATIC_DIR = resolvePath(ABI_DIR, 'tokens');
const OUT_ROOT_DIR = resolvePath(__dirname, '../src/contracts');
const OUT_STATIC_DIR = resolvePath(OUT_ROOT_DIR, 'static');
const OUT_EVENTS_DIR = resolvePath(OUT_ROOT_DIR, 'events');
const OUT_TOKEN_DIR = resolvePath(__dirname, '../src/tokens/contracts');
const OUT_TOKEN_STATIC_DIR = resolvePath(OUT_TOKEN_DIR, 'static');

const EVENTS_CONTRACTS = [
  ...TOKEN_CONTRACTS,
  ...VERSIONED_CONTRACTS,
  ...UPGRADABLE_CONTRACTS,
];

const rm = promisify(rimraf);

const buildVersionedContracts = async (
  inputDir: string,
  releaseTag: string,
): Promise<void[]> => {
  const promisesVersioned = VERSIONED_CONTRACTS.map(async (contractName) => {
    const availableVersions =
      RELEASE_MAP[contractName as keyof typeof RELEASE_MAP];
    if (releaseTag in availableVersions) {
      const outDir = resolvePath(
        OUT_ROOT_DIR,
        contractName,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        String(availableVersions[releaseTag]),
      );

      await rm(outDir);

      const typechain = execa('typechain', [
        '--target',
        'ethers-v5',
        '--out-dir',
        outDir,
        `${inputDir}/${contractName}.json`,
      ]);

      if (typechain.stdout) typechain.stdout.pipe(process.stdout);
      await typechain;
    }
  });
  return Promise.all(promisesVersioned);
};

const buildLatestContracts = async (inputDir: string) => {
  const contractGlobs = `{${[...UPGRADABLE_CONTRACTS, ...UNVERSIONED_CONTRACTS]
    .map((c) => `${c}.json`)
    .join(',')}}`;

  const typechain = execa('typechain', [
    '--target',
    'ethers-v5',
    '--out-dir',
    OUT_ROOT_DIR,
    `${inputDir}/${contractGlobs}`,
  ]);

  if (typechain.stdout) typechain.stdout.pipe(process.stdout);
  return typechain;
};

const buildStaticContracts = async () => {
  const contractGlobs = `${STATIC_CONTRACTS.map((c) => `${c}.json`).join(',')}`;

  const typechain = execa('typechain', [
    '--target',
    'ethers-v5',
    '--out-dir',
    OUT_STATIC_DIR,
    `${STATIC_DIR}/${contractGlobs}`,
  ]);

  if (typechain.stdout) typechain.stdout.pipe(process.stdout);
  await typechain;
};

const buildLatestTokentContracts = async (inputDir: string) => {
  const contractGlobs = `{${TOKEN_CONTRACTS.map((c) => `${c}.json`).join(
    ',',
  )}}`;

  const typechain = execa('typechain', [
    '--target',
    'ethers-v5',
    '--out-dir',
    OUT_TOKEN_DIR,
    `${inputDir}/${contractGlobs}`,
  ]);

  if (typechain.stdout) typechain.stdout.pipe(process.stdout);
  return typechain;
};

const buildStaticTokenContracts = async () => {
  const contractGlobs = `{${TOKEN_STATIC_CONTRACTS.map((c) => `${c}.json`).join(
    ',',
  )}}`;
  const typechain = execa('typechain', [
    '--target',
    'ethers-v5',
    '--out-dir',
    OUT_TOKEN_STATIC_DIR,
    `${TOKENS_STATIC_DIR}/${contractGlobs}`,
  ]);

  if (typechain.stdout) typechain.stdout.pipe(process.stdout);
  await typechain;
};

const buildEventsContracts = async () => {
  const contractGlobs = `{${EVENTS_CONTRACTS.map((c) => `${c}Events.json`).join(
    ',',
  )}}`;

  const typechain = execa('typechain', [
    '--target',
    'ethers-v5',
    '--out-dir',
    OUT_EVENTS_DIR,
    `${EVENTS_DIR}/${contractGlobs}`,
  ]);

  if (typechain.stdout) typechain.stdout.pipe(process.stdout);
  await typechain;
};

const build = async () => {
  const { argv } = yargs(hideBin(process.argv)).options({
    tag: { alias: 't', type: 'string', default: LATEST_TAG },
  });
  const args = await argv;
  const { tag } = args;

  const versionDir = resolvePath(VERSIONED_DIR, tag);

  console.info(`Building release tag ${tag}...`);

  if (tag === 'static') {
    await buildStaticContracts();
    await buildStaticTokenContracts();
  } else {
    await buildVersionedContracts(versionDir, tag);
  }

  if (tag === LATEST_TAG) {
    await buildLatestContracts(versionDir);
    await buildLatestTokentContracts(versionDir);
    await buildEventsContracts();
  }
};

build();
