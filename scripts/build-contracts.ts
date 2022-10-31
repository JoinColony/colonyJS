import { resolve as resolvePath } from 'path';
import { readdirSync, readFileSync, statSync, writeFileSync } from 'fs';
import { promisify } from 'util';
import rimraf from 'rimraf';
import execa from 'execa';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import _ from 'lodash';

import { Core, Extension } from '../src';

// Map versioned contracts to network release tags
const RELEASE_MAP = {
  [Core.IColony]: {
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
    latest: 11,
  },
  [Extension.CoinMachine]: {
    clwss: 1,
    dlwss: 2,
    elwss2: 3,
    elwss3: 4,
    flwss: 5,
    glwss: 6,
    latest: 7,
  },
  [Extension.EvaluatedExpenditure]: {
    elwss: 1,
    flwss: 2,
    latest: 3,
  },
  [Extension.IVotingReputation]: {
    flwss3: 6,
    glwss: 7,
    latest: 8,
  },
  [Extension.OneTxPayment]: {
    clwss: 1,
    dlwss: 2,
    flwss: 3,
    latest: 4,
  },
  [Extension.StakedExpenditure]: {
    glwss: 1,
    latest: 2,
  },
  [Extension.StreamingPayments]: {
    glwss: 1,
    latest: 2,
  },
  [Extension.TokenSupplier]: {
    lwss: 1,
    dlwss: 2,
    flwss: 3,
    latest: 4,
  },
  [Extension.VotingReputation]: {
    clwss: 1,
    dlwss: 2,
    elwss: 3,
    flwss: 4,
    flwss2: 5,
  },
  [Extension.Whitelist]: {
    elwss: 1,
    flwss: 2,
    latest: 3,
  },
};

// Upgradable contract names that will be generated
const VERSIONED_CONTRACTS = [
  Core.IColony,
  Extension.CoinMachine,
  Extension.EvaluatedExpenditure,
  Extension.IVotingReputation,
  Extension.OneTxPayment,
  Extension.StakedExpenditure,
  Extension.StreamingPayments,
  Extension.TokenSupplier,
  Extension.VotingReputation,
  Extension.Whitelist,
];

const UPGRADABLE_CONTRACTS = ['IColonyNetwork'];

// Names of non-upgradable contracts that will be generated
const UNVERSIONED_CONTRACTS = [
  // Auxiliary contracts
  'ColonyExtension',
  'IBasicMetaTransaction',
  'MotionTarget',
  'TokenLocking',
  // Tokens contracts
  'MetaTxToken',
  'TokenERC20',
  'TokenERC721',
  'TokenSAI',
];

const FIXED_DIR = resolvePath(__dirname, '../src/abis/__fixed__');
const DYNAMIC_DIR = resolvePath(__dirname, '../src/abis/__dynamic__');
const OUT_ROOT_DIR = resolvePath(__dirname, '../src/contracts');

const EVENTS_CONTRACTS = [...VERSIONED_CONTRACTS, ...UPGRADABLE_CONTRACTS];

const EVENT_CONTRACT_NAMES = EVENTS_CONTRACTS.map(
  (contractName) => `${contractName}Events`,
);

const rm = promisify(rimraf);

// Simplified event ABI node
type Event = {
  inputs: { name: string; type: string }[];
  name: string;
  type: 'event';
};

const stringifyInputTypes = (event: Event) =>
  JSON.stringify(event.inputs.map(({ name, type }) => [name, type]));

// Some newer versions of the compiler add extra stuff that prevents a deep equal comparison
const eventsAreEqual = (eventA: Event, eventB: Event) =>
  eventA.name === eventB.name &&
  stringifyInputTypes(eventA) === stringifyInputTypes(eventB);

// This builds artificial ABIs that contain all events across all versions of a versioned contract. Exact duplicates are discarded
const buildEventsAbis = async (inputDir: string) => {
  const eventsAbis: Record<string, Event[]> = {};
  readdirSync(inputDir).forEach((tag: string) => {
    EVENTS_CONTRACTS.forEach((contractName) => {
      const file = `${resolvePath(inputDir, tag, contractName)}.json`;
      try {
        statSync(file);
        const { abi } = JSON.parse(readFileSync(file).toString());
        const contract = String(contractName);
        if (!eventsAbis[contract]) {
          eventsAbis[contract] = [];
        }
        eventsAbis[contract] = _.uniqWith(
          eventsAbis[contract].concat(
            abi.filter(({ type }: { type: string }) => type === 'event'),
          ),
          eventsAreEqual,
        );
      } catch {
        // ignore
      }
    });
  });
  Object.entries(eventsAbis).forEach(([contractName, events]) => {
    const abi = {
      contractName,
      abi: events,
    };
    writeFileSync(
      resolvePath(DYNAMIC_DIR, `${contractName}Events.json`),
      JSON.stringify(abi),
    );
  });
};

const buildVersionedContracts = async (
  releaseTag: string,
  inputDir: string,
): Promise<void[]> => {
  const promises = VERSIONED_CONTRACTS.map(async (contractName) => {
    const availableContracts = RELEASE_MAP[contractName];
    const versionTag = releaseTag === 'develop' ? 'latest' : releaseTag;
    if (versionTag in availableContracts) {
      const outDir = resolvePath(
        OUT_ROOT_DIR,
        contractName,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        String(availableContracts[versionTag]),
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
  return Promise.all(promises);
};

const buildUnversionedContracts = async (inputDir: string) => {
  const contractGlobs = `{${[
    ...UNVERSIONED_CONTRACTS,
    ...UPGRADABLE_CONTRACTS,
    ...EVENT_CONTRACT_NAMES,
  ]
    .map((c) => `${c}.json`)
    .join(',')}}`;
  const typechain = execa('typechain', [
    '--target',
    'ethers-v5',
    '--out-dir',
    OUT_ROOT_DIR,
    `{${inputDir},${FIXED_DIR},${DYNAMIC_DIR}}/${contractGlobs}`,
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

  const inputTag = tag === 'develop' ? 'latest' : tag;
  const abiDir = resolvePath(__dirname, `../src/abis`);
  const inputDir = resolvePath(abiDir, inputTag);

  console.info(`Building release tag ${tag}...`);

  await buildVersionedContracts(tag, inputDir);

  if (tag === 'develop') {
    buildEventsAbis(abiDir);
    await buildUnversionedContracts(inputDir);
  }
};

build();
