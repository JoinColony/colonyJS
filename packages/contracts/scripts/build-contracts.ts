import { resolve as resolvePath } from 'path';
import { rimraf } from 'rimraf';
import execa from 'execa';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import { LATEST_TAG, RELEASES, RELEASE_MAP } from '../src/versions';

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

const TYPECHAIN_PLUGINS = ['ethers-v5', 'ethers-v6'];

const ABI_DIR = resolvePath(
  __dirname,
  '../../../node_modules/@colony/abis/dist',
);
const VERSIONED_DIR = resolvePath(ABI_DIR, 'versions');
const STATIC_DIR = resolvePath(ABI_DIR, 'static');
const EVENTS_DIR = resolvePath(ABI_DIR, 'events');
const OUT_ROOT_DIR = resolvePath(__dirname, '../dist');

const EVENTS_CONTRACTS = [
  ...TOKEN_CONTRACTS,
  ...VERSIONED_CONTRACTS,
  ...UPGRADABLE_CONTRACTS,
];

const buildVersionedContracts = async (
  inputDir: string,
  releaseTag: string,
): Promise<void[]> => {
  const promisesVersioned = VERSIONED_CONTRACTS.map(async (contractName) => {
    const availableVersions =
      RELEASE_MAP[contractName as keyof typeof RELEASE_MAP];
    if (releaseTag in availableVersions) {
      await Promise.all(
        TYPECHAIN_PLUGINS.map(async (plugin) => {
          const outDir = resolvePath(
            OUT_ROOT_DIR,
            plugin,
            contractName,
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            String(availableVersions[releaseTag]),
          );

          const typechain = execa('typechain', [
            '--target',
            plugin,
            '--out-dir',
            outDir,
            `${inputDir}/${contractName}.json`,
          ]);

          if (typechain.stdout) typechain.stdout.pipe(process.stdout);
          await typechain;
        }),
      );
    }
  });
  return Promise.all(promisesVersioned);
};

const buildLatestContracts = async (inputDir: string) => {
  const contractGlobs = `{${[...UPGRADABLE_CONTRACTS, ...UNVERSIONED_CONTRACTS]
    .map((c) => `${c}.json`)
    .join(',')}}`;

  return Promise.all(
    TYPECHAIN_PLUGINS.map((plugin) => {
      const typechain = execa('typechain', [
        '--target',
        plugin,
        '--out-dir',
        resolvePath(OUT_ROOT_DIR, plugin),
        `${inputDir}/${contractGlobs}`,
      ]);

      if (typechain.stdout) typechain.stdout.pipe(process.stdout);
      return typechain;
    }),
  );
};

const buildStaticContracts = async () => {
  const contractGlobs = `${STATIC_CONTRACTS.map((c) => `${c}.json`).join(',')}`;

  return Promise.all(
    TYPECHAIN_PLUGINS.map((plugin) => {
      const typechain = execa('typechain', [
        '--target',
        plugin,
        '--out-dir',
        resolvePath(OUT_ROOT_DIR, plugin, 'static'),
        `${STATIC_DIR}/${contractGlobs}`,
      ]);

      if (typechain.stdout) typechain.stdout.pipe(process.stdout);
      return typechain;
    }),
  );
};

const buildLatestTokentContracts = async (inputDir: string) => {
  const contractGlobs = `{${TOKEN_CONTRACTS.map((c) => `${c}.json`).join(
    ',',
  )}}`;

  return Promise.all(
    TYPECHAIN_PLUGINS.map((plugin) => {
      const typechain = execa('typechain', [
        '--target',
        plugin,
        '--out-dir',
        resolvePath(OUT_ROOT_DIR, plugin, 'tokens'),
        `${inputDir}/${contractGlobs}`,
      ]);

      if (typechain.stdout) typechain.stdout.pipe(process.stdout);
      return typechain;
    }),
  );
};

const buildStaticTokenContracts = async () => {
  const contractGlobs = `{${TOKEN_STATIC_CONTRACTS.map((c) => `${c}.json`).join(
    ',',
  )}}`;

  return Promise.all(
    TYPECHAIN_PLUGINS.map((plugin) => {
      const typechain = execa('typechain', [
        '--target',
        plugin,
        '--out-dir',
        resolvePath(OUT_ROOT_DIR, plugin, 'tokens', 'static'),
        `${STATIC_DIR}/${contractGlobs}`,
      ]);

      if (typechain.stdout) typechain.stdout.pipe(process.stdout);
      return typechain;
    }),
  );
};

const buildEventsContracts = async () => {
  const contractGlobs = `{${EVENTS_CONTRACTS.map((c) => `${c}Events.json`).join(
    ',',
  )}}`;

  return Promise.all(
    TYPECHAIN_PLUGINS.map((plugin) => {
      const typechain = execa('typechain', [
        '--target',
        plugin,
        '--out-dir',
        resolvePath(OUT_ROOT_DIR, plugin, 'events'),
        `${EVENTS_DIR}/${contractGlobs}`,
      ]);

      if (typechain.stdout) typechain.stdout.pipe(process.stdout);
      return typechain;
    }),
  );
};

const buildTag = async (tag: string) => {
  const versionDir = resolvePath(VERSIONED_DIR, tag);

  console.info(`Building release tag ${tag}...`);

  await buildVersionedContracts(versionDir, tag);

  if (tag === LATEST_TAG) {
    await buildLatestContracts(versionDir);
    await buildLatestTokentContracts(versionDir);
    await buildEventsContracts();
  }
};

const buildStatic = async () => {
  await buildStaticContracts();
  await buildStaticTokenContracts();
};

const start = async () => {
  const { argv } = yargs(hideBin(process.argv)).options({
    tag: { alias: 't', type: 'string', default: 'all' },
  });
  const args = await argv;
  const { tag } = args;

  if (tag === 'all') {
    await rimraf(OUT_ROOT_DIR);
    await buildStatic();
    await Promise.all(RELEASES.map(buildTag));
  } else if (tag === 'static') {
    await buildStatic();
  } else {
    await buildTag(tag);
  }
};

start();
