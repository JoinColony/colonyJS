import { resolve as resolvePath, dirname } from 'path';
import { rimraf } from 'rimraf';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { runTypeChain, glob } from 'typechain';
import { LATEST_TAG, RELEASES, RELEASE_MAP } from '@colony/core';

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

const ABI_DIR = resolvePath(
  dirname(require.resolve('@colony/abis/package.json')),
  'dist',
);
const VERSIONED_DIR = resolvePath(ABI_DIR, 'versions');
const STATIC_DIR = resolvePath(ABI_DIR, 'static');
const EVENTS_DIR = resolvePath(ABI_DIR, 'events');

const EVENTS_CONTRACTS = [
  ...TOKEN_CONTRACTS,
  ...VERSIONED_CONTRACTS,
  ...UPGRADABLE_CONTRACTS,
];

const CWD = process.cwd();

const buildVersionedContracts = async (
  inputDir: string,
  releaseTag: string,
  outputDir: string,
  plugin: string,
): Promise<void[]> => {
  const promisesVersioned = VERSIONED_CONTRACTS.map(async (contractName) => {
    const availableVersions =
      RELEASE_MAP[contractName as keyof typeof RELEASE_MAP];
    if (releaseTag in availableVersions) {
      const outDir = resolvePath(
        outputDir,
        contractName,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        String(availableVersions[releaseTag]),
      );
      const files = glob(CWD, [`${inputDir}/${contractName}.json`]);

      await runTypeChain({
        cwd: CWD,
        filesToProcess: files,
        allFiles: files,
        outDir,
        target: plugin,
      });
    }
  });
  return Promise.all(promisesVersioned);
};

const buildLatestContracts = async (
  inputDir: string,
  outputDir: string,
  plugin: string,
) => {
  const contractGlobs = `{${[...UPGRADABLE_CONTRACTS, ...UNVERSIONED_CONTRACTS]
    .map((c) => `${c}.json`)
    .join(',')}}`;
  const files = glob(CWD, [`${inputDir}/${contractGlobs}`]);

  return runTypeChain({
    cwd: CWD,
    filesToProcess: files,
    allFiles: files,
    outDir: outputDir,
    target: plugin,
  });
};

const buildStaticContracts = async (outputDir: string, plugin: string) => {
  const contractGlobs = `${STATIC_CONTRACTS.map((c) => `${c}.json`).join(',')}`;
  const files = glob(CWD, [`${STATIC_DIR}/${contractGlobs}`]);

  return runTypeChain({
    cwd: CWD,
    filesToProcess: files,
    allFiles: files,
    outDir: resolvePath(outputDir, 'static'),
    target: plugin,
  });
};

const buildLatestTokentContracts = async (
  inputDir: string,
  outputDir: string,
  plugin: string,
) => {
  const contractGlobs = `{${TOKEN_CONTRACTS.map((c) => `${c}.json`).join(
    ',',
  )}}`;
  const files = glob(CWD, [`${inputDir}/${contractGlobs}`]);

  return runTypeChain({
    cwd: CWD,
    filesToProcess: files,
    allFiles: files,
    outDir: resolvePath(outputDir, 'tokens'),
    target: plugin,
  });
};

const buildStaticTokenContracts = async (outputDir: string, plugin: string) => {
  const contractGlobs = `{${TOKEN_STATIC_CONTRACTS.map((c) => `${c}.json`).join(
    ',',
  )}}`;
  const files = glob(CWD, [`${STATIC_DIR}/${contractGlobs}`]);

  return runTypeChain({
    cwd: CWD,
    filesToProcess: files,
    allFiles: files,
    outDir: resolvePath(outputDir, 'tokens', 'static'),
    target: plugin,
  });
};

const buildEventsContracts = async (outputDir: string, plugin: string) => {
  const contractGlobs = `{${EVENTS_CONTRACTS.map((c) => `${c}Events.json`).join(
    ',',
  )}}`;
  const files = glob(CWD, [`${EVENTS_DIR}/${contractGlobs}`]);

  return runTypeChain({
    cwd: CWD,
    filesToProcess: files,
    allFiles: files,
    outDir: resolvePath(outputDir, 'events'),
    target: plugin,
  });
};

const buildTag = async (tag: string, outputDir: string, plugin: string) => {
  const versionDir = resolvePath(VERSIONED_DIR, tag);

  console.info(`Building release tag ${tag} for ${plugin}...`);

  await buildVersionedContracts(versionDir, tag, outputDir, plugin);

  if (tag === LATEST_TAG) {
    await buildLatestContracts(versionDir, outputDir, plugin);
    await buildLatestTokentContracts(versionDir, outputDir, plugin);
    await buildEventsContracts(outputDir, plugin);
  }
};

const buildStatic = async (outputDir: string, plugin: string) => {
  await buildStaticContracts(outputDir, plugin);
  await buildStaticTokenContracts(outputDir, plugin);
};

const start = async () => {
  const { argv } = yargs(hideBin(process.argv)).options({
    tag: { alias: 't', type: 'string', default: LATEST_TAG },
    out: { alias: 'o', type: 'string', default: './dist' },
    plugin: {
      alias: 'p',
      type: 'string',
      default: 'ethers-v5',
      choices: ['ethers-v5', 'ethers-v6'],
    },
    clean: { alias: 'c', type: 'boolean', default: true },
  });
  const args = await argv;
  const { clean, out, plugin, tag } = args;

  const outputDir = resolvePath(process.cwd(), out);
  if (clean) {
    await rimraf(outputDir);
  }

  if (tag === 'ALL') {
    await buildStatic(outputDir, plugin);
    await Promise.all(
      RELEASES.map((release) => buildTag(release, outputDir, plugin)),
    );
  } else {
    await buildStatic(outputDir, plugin);
    await buildTag(tag, outputDir, plugin);
  }
};

start();
