import { resolve as resolvePath, dirname } from 'path';
import { rimraf } from 'rimraf';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { runTypeChain, glob } from 'typechain';
import {
  latest as latestTag,
  releases,
  releaseMap,
} from '@colony/abis/versions';

// Contracts needed in the core package
const CORE_CONTRACTS = ['MotionTarget', 'Versioned'];

// Upgradable contract names that will be generated
const VERSIONED_CONTRACTS = [
  'IColony',
  'CoinMachine',
  'EvaluatedExpenditure',
  'FundingQueue',
  'IVotingReputation',
  'OneTxPayment',
  'ReputationBootstrapper',
  'StagedExpenditure',
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

const ABI_DIR = dirname(require.resolve('@colony/abis/versions'));
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

const TYPECHAIN_CONFIG_FLAGS = {
  alwaysGenerateOverloads: true,
  discriminateTypes: false,
  node16Modules: true,
  environment: undefined,
};

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
        flags: TYPECHAIN_CONFIG_FLAGS,
      });
    }
  });
  return Promise.all(promises);
};

const buildLatestVersionedContracts = async (
  outputDir: string,
  plugin: string,
  includeNext: boolean,
) => {
  const promises = VERSIONED_CONTRACTS.map(async (contractName) => {
    const availableVersions =
      releaseMap[contractName as keyof typeof releaseMap];
    const [tag, version] = Object.entries(availableVersions)
      .filter(([t]) => {
        if (includeNext) {
          return true;
        }
        return t !== 'next';
      })
      .reduce(
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
      flags: TYPECHAIN_CONFIG_FLAGS,
    });
  });
  return Promise.all(promises);
};

const buildLatestContracts = async (
  outputDir: string,
  plugin: string,
  latest: string,
) => {
  const inputDir = resolvePath(VERSIONED_DIR, latest);

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
    flags: TYPECHAIN_CONFIG_FLAGS,
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
    flags: TYPECHAIN_CONFIG_FLAGS,
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
    flags: TYPECHAIN_CONFIG_FLAGS,
  });
};

const buildEventsContracts = async (
  outputDir: string,
  plugin: string,
  includeNext: boolean,
) => {
  const contractGlobs = `{${EVENTS_CONTRACTS.map((c) => `${c}Events.json`).join(
    ',',
  )}}`;
  const dir = includeNext ? resolvePath(EVENTS_DIR, 'next') : EVENTS_DIR;
  const files = glob(CWD, [`${dir}/${contractGlobs}`]);

  return runTypeChain({
    cwd: CWD,
    filesToProcess: files,
    allFiles: files,
    outDir: resolvePath(outputDir),
    target: plugin,
    flags: TYPECHAIN_CONFIG_FLAGS,
  });
};
const buildCoreContracts = async (outputDir: string, plugin: string) => {
  const contractGlobs = `{${CORE_CONTRACTS.map((c) => `${c}.json`).join(',')}}`;
  const files = glob(CWD, [`${CORE_DIR}/${contractGlobs}`]);

  return runTypeChain({
    cwd: CWD,
    filesToProcess: files,
    allFiles: files,
    outDir: resolvePath(outputDir),
    target: plugin,
    flags: TYPECHAIN_CONFIG_FLAGS,
  });
};

const buildTag = async (tag: string, outputDir: string, plugin: string) => {
  const inputDir = resolvePath(VERSIONED_DIR, tag);
  await buildVersionedContracts(inputDir, tag, outputDir, plugin);
};

const buildAllLatest = async (
  outputDir: string,
  plugin: string,
  latest: string,
  includeNext: boolean,
) => {
  await buildLatestVersionedContracts(outputDir, plugin, includeNext);
  await buildLatestContracts(outputDir, plugin, latest);
};

const buildTokenContracts = async (
  outputDir: string,
  plugin: string,
  latest: string,
) => {
  const versionDir = resolvePath(VERSIONED_DIR, latest);
  await buildLatestTokentContracts(versionDir, outputDir, plugin);
  await buildStaticTokenContracts(outputDir, plugin);
};

const start = async () => {
  const { argv } = yargs(hideBin(process.argv))
    .command('core', 'Make core contracts')
    .command('colony', 'Make Colony contracts', {
      tag: {
        alias: 't',
        array: true,
        // 0 is all releases
        default: 0,
        describe: `Colony Network release tag(s) to build (e.g. glwss), separated by spaces, or a number determining to build the latest X tags`,
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
    .option('include-next', {
      alias: 'n',
      type: 'boolean',
      default: false,
      describe: 'Include the next release tag (development version)',
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
  const { clean, includeNext, out, plugin, tag, _ } = args;
  const [command] = _;

  const allReleases = includeNext ? [...releases, 'next'] : releases;
  const latest = includeNext ? 'next' : latestTag;

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
      const argTag = tag as (number | string)[];
      const tags =
        typeof argTag[0] == 'number'
          ? allReleases.slice(-argTag[0])
          : (argTag as string[]);
      await Promise.all(
        tags.map(async (releaseTag) => {
          if (releaseTag === latest) {
            await buildAllLatest(outputDir, plugin, latest, includeNext);
          } else {
            await buildTag(releaseTag, outputDir, plugin);
          }
        }),
      );
      break;
    }
    case 'tokens': {
      await buildTokenContracts(outputDir, plugin, latest);
      break;
    }
    case 'events': {
      await buildEventsContracts(outputDir, plugin, includeNext);
      break;
    }
    default:
  }
};

start();
