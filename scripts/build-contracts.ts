import { resolve as resolvePath } from 'path';
import { promisify } from 'util';
import rimraf from 'rimraf';
import execa from 'execa';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const LATEST_TAG = 'glwss2';

/*
 * Colony Network contract release tags
 *
 * glider-rc.1
 * glider
 * auburn-glider
 * burgundy-glider
 * lwss
 * clwss
 * dlwss
 * elwss
 * elwss2
 * elwss3
 * flwss
 * flwss2
 * flwss3
 * glwss
 * glwss2
 *
 */

// Map versioned contracts to network release tags
const RELEASE_MAP = {
  IColony: {
    'glider-rc.1': 1,
    glider: 2,
    'auburn-glider': 3,
    'burgundy-glider': 4,
    lwss: 5,
    clwss: 6,
    dlwss: 7,
    elwss3: 8,
    flwss: 9,
    glwss: 10,
    glwss2: 11,
  },
  CoinMachine: {
    clwss: 1,
    dlwss: 2,
    elwss2: 3,
    elwss3: 4,
    flwss: 5,
    glwss: 6,
    glwss2: 7,
  },
  EvaluatedExpenditure: {
    elwss: 1,
    flwss: 2,
    glwss2: 3,
  },
  FundingQueue: {
    lwss: 1,
    dlwss: 2,
    flwss: 3,
    glwss2: 4,
  },
  IVotingReputation: {
    flwss3: 6,
    glwss: 7,
    glwss2: 8,
  },
  OneTxPayment: {
    clwss: 1,
    dlwss: 2,
    flwss: 3,
    glwss2: 4,
  },
  ReputationBootstrapper: {
    glwss2: 1,
  },
  StakedExpenditure: {
    glwss: 1,
    glwss2: 2,
  },
  StreamingPayments: {
    glwss: 1,
    glwss2: 2,
  },
  TokenSupplier: {
    lwss: 1,
    dlwss: 2,
    flwss: 3,
    glwss2: 4,
  },
  // VotingReputation got replaced by IVotingReputation, so this does not need to be updated
  VotingReputation: {
    clwss: 1,
    dlwss: 2,
    elwss: 3,
    flwss: 4,
    flwss2: 5,
  },
  Whitelist: {
    elwss: 1,
    flwss: 2,
    glwss2: 3,
  },
};

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
  ...VERSIONED_CONTRACTS,
  ...UPGRADABLE_CONTRACTS,
  'MetaTxToken',
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
