import { resolve as resolvePath, dirname } from 'path';
import { rimraf } from 'rimraf';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { runTypeChain, glob } from 'typechain';
import { latest as latestTag, releases, releaseMap } from '@colony/abis';

// Contracts needed in the core package
const CORE_CONTRACTS = ['MotionTarget'];

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

const ABI_DIR = dirname(require.resolve('@colony/abis'));
const VERSIONED_DIR = resolvePath(ABI_DIR, 'versions');
const CORE_DIR = resolvePath(ABI_DIR, 'core');
const EVENTS_DIR = resolvePath(ABI_DIR, 'events');

const EVENTS_CONTRACTS = [
  'ColonyExtension',
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
  const promises = VERSIONED_CONTRACTS.map(async (contractName) => {
    const availableVersions =
      releaseMap[contractName as keyof typeof releaseMap];
    if (releaseTag in availableVersions) {
      const outDir = resolvePath(
        outputDir,
        contractName,
        String(availableVersions[releaseTag as keyof typeof availableVersions]),
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
  return Promise.all(promises);
};

const buildLatestVersionedContracts = async (
  outputDir: string,
  plugin: string,
) => {
  const promises = VERSIONED_CONTRACTS.map(async (contractName) => {
    const availableVersions =
      releaseMap[contractName as keyof typeof releaseMap];
    const [tag, version] = Object.entries(availableVersions).reduce(
      (max, current) => (max[1] > current[1] ? max : current),
      ['_', 0],
    );

    const outDir = resolvePath(outputDir, contractName, String(version));
    const versionDir = resolvePath(VERSIONED_DIR, tag);
    const files = glob(CWD, [`${versionDir}/${contractName}.json`]);

    await runTypeChain({
      cwd: CWD,
      filesToProcess: files,
      allFiles: files,
      outDir,
      target: plugin,
    });
  });
  return Promise.all(promises);
};

const buildLatestContracts = async (outputDir: string, plugin: string) => {
  const inputDir = resolvePath(VERSIONED_DIR, latestTag);
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
    outDir: resolvePath(outputDir),
    target: plugin,
  });
};

const buildStaticTokenContracts = async (outputDir: string, plugin: string) => {
  const contractGlobs = `{${TOKEN_STATIC_CONTRACTS.map((c) => `${c}.json`).join(
    ',',
  )}}`;
  const files = glob(CWD, [`${CORE_DIR}/${contractGlobs}`]);

  return runTypeChain({
    cwd: CWD,
    filesToProcess: files,
    allFiles: files,
    outDir: resolvePath(outputDir, 'static'),
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
    outDir: resolvePath(outputDir),
    target: plugin,
  });
};
const buildCoreContracts = async (outputDir: string, plugin: string) => {
  const contractGlobs = `${CORE_CONTRACTS.map((c) => `${c}.json`).join(',')}`;
  const files = glob(CWD, [`${CORE_DIR}/${contractGlobs}`]);

  return runTypeChain({
    cwd: CWD,
    filesToProcess: files,
    allFiles: files,
    outDir: resolvePath(outputDir),
    target: plugin,
  });
};

const buildTag = async (tag: string, outputDir: string, plugin: string) => {
  const inputDir = resolvePath(VERSIONED_DIR, tag);
  await buildVersionedContracts(inputDir, tag, outputDir, plugin);

  if (tag === latestTag) {
    await buildLatestContracts(outputDir, plugin);
  }
};

const buildAllLatest = async (outputDir: string, plugin: string) => {
  await buildLatestVersionedContracts(outputDir, plugin);
  await buildLatestContracts(outputDir, plugin);
};

const buildTokenContracts = async (outputDir: string, plugin: string) => {
  const versionDir = resolvePath(VERSIONED_DIR, latestTag);
  await buildLatestTokentContracts(versionDir, outputDir, plugin);
  await buildStaticTokenContracts(outputDir, plugin);
};

const start = async () => {
  const { argv } = yargs(hideBin(process.argv))
    .command('core', 'Make core contracts')
    .command('colony', 'Make Colony contracts', {
      tag: {
        alias: 't',
        type: 'string',
        default: latestTag,
        describe: 'Colony Network release tag to build (e.g. glwss)',
        choices: [...releases, 'LATEST', 'ALL'],
      },
    })
    .command('tokens', 'Make token contracts')
    .command('events', 'Make events contracts')
    .demandCommand(1)
    .option('out', {
      alias: 'o',
      type: 'string',
      default: './dist',
      describe: 'Output directory (relative to cwd)',
    })
    .option('plugin', {
      alias: 'p',
      type: 'string',
      default: 'ethers-v5',
      choices: ['ethers-v5', 'ethers-v6'],
      describe: 'Typechain plugin to use',
    })
    .option('clean', {
      alias: 'c',
      type: 'boolean',
      default: true,
      describe: 'Remove output directory before writing to it',
    })
    .strict();

  const args = await argv;
  const { clean, out, plugin, tag, _ } = args;
  const [command] = _;

  const outputDir = resolvePath(process.cwd(), out);
  if (clean) {
    await rimraf(outputDir);
  }

  switch (command) {
    case 'core': {
      await buildCoreContracts(outputDir, plugin);
      break;
    }
    case 'colony': {
      if (tag === 'ALL') {
        await Promise.all(
          releases.map((release) => buildTag(release, outputDir, plugin)),
        );
      } else if (tag === 'LATEST') {
        await buildTag(latestTag, outputDir, plugin);
      } else {
        await buildAllLatest(outputDir, plugin);
      }
      break;
    }
    case 'tokens': {
      await buildTokenContracts(outputDir, plugin);
      break;
    }
    case 'events': {
      await buildEventsContracts(outputDir, plugin);
      break;
    }
    default:
  }
};

start();
