"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const rimraf_1 = require("rimraf");
const execa_1 = __importDefault(require("execa"));
const yargs_1 = __importDefault(require("yargs"));
const helpers_1 = require("yargs/helpers");
const core_1 = require("@colony/core");
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
const ABI_DIR = (0, path_1.resolve)((0, path_1.dirname)(require.resolve('@colony/abis/package.json')), 'dist');
const VERSIONED_DIR = (0, path_1.resolve)(ABI_DIR, 'versions');
const STATIC_DIR = (0, path_1.resolve)(ABI_DIR, 'static');
const EVENTS_DIR = (0, path_1.resolve)(ABI_DIR, 'events');
const EVENTS_CONTRACTS = [
    ...TOKEN_CONTRACTS,
    ...VERSIONED_CONTRACTS,
    ...UPGRADABLE_CONTRACTS,
];
const buildVersionedContracts = (inputDir, releaseTag, outputDir, plugin) => __awaiter(void 0, void 0, void 0, function* () {
    const promisesVersioned = VERSIONED_CONTRACTS.map((contractName) => __awaiter(void 0, void 0, void 0, function* () {
        const availableVersions = core_1.RELEASE_MAP[contractName];
        if (releaseTag in availableVersions) {
            const outDir = (0, path_1.resolve)(outputDir, plugin, contractName, 
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            String(availableVersions[releaseTag]));
            const typechain = (0, execa_1.default)('typechain', [
                '--target',
                plugin,
                '--out-dir',
                outDir,
                `${inputDir}/${contractName}.json`,
            ]);
            if (typechain.stdout)
                typechain.stdout.pipe(process.stdout);
            yield typechain;
        }
    }));
    return Promise.all(promisesVersioned);
});
const buildLatestContracts = (inputDir, outputDir, plugin) => __awaiter(void 0, void 0, void 0, function* () {
    const contractGlobs = `{${[...UPGRADABLE_CONTRACTS, ...UNVERSIONED_CONTRACTS]
        .map((c) => `${c}.json`)
        .join(',')}}`;
    const typechain = (0, execa_1.default)('typechain', [
        '--target',
        plugin,
        '--out-dir',
        outputDir,
        `${inputDir}/${contractGlobs}`,
    ]);
    if (typechain.stdout)
        typechain.stdout.pipe(process.stdout);
    return typechain;
});
const buildStaticContracts = (outputDir, plugin) => __awaiter(void 0, void 0, void 0, function* () {
    const contractGlobs = `${STATIC_CONTRACTS.map((c) => `${c}.json`).join(',')}`;
    const typechain = (0, execa_1.default)('typechain', [
        '--target',
        plugin,
        '--out-dir',
        (0, path_1.resolve)(outputDir, 'static'),
        `${STATIC_DIR}/${contractGlobs}`,
    ]);
    if (typechain.stdout)
        typechain.stdout.pipe(process.stdout);
    return typechain;
});
const buildLatestTokentContracts = (inputDir, outputDir, plugin) => __awaiter(void 0, void 0, void 0, function* () {
    const contractGlobs = `{${TOKEN_CONTRACTS.map((c) => `${c}.json`).join(',')}}`;
    const typechain = (0, execa_1.default)('typechain', [
        '--target',
        plugin,
        '--out-dir',
        (0, path_1.resolve)(outputDir, 'tokens'),
        `${inputDir}/${contractGlobs}`,
    ]);
    if (typechain.stdout)
        typechain.stdout.pipe(process.stdout);
    return typechain;
});
const buildStaticTokenContracts = (outputDir, plugin) => __awaiter(void 0, void 0, void 0, function* () {
    const contractGlobs = `{${TOKEN_STATIC_CONTRACTS.map((c) => `${c}.json`).join(',')}}`;
    const typechain = (0, execa_1.default)('typechain', [
        '--target',
        plugin,
        '--out-dir',
        (0, path_1.resolve)(outputDir, 'tokens', 'static'),
        `${STATIC_DIR}/${contractGlobs}`,
    ]);
    if (typechain.stdout)
        typechain.stdout.pipe(process.stdout);
    return typechain;
});
const buildEventsContracts = (outputDir, plugin) => __awaiter(void 0, void 0, void 0, function* () {
    const contractGlobs = `{${EVENTS_CONTRACTS.map((c) => `${c}Events.json`).join(',')}}`;
    const typechain = (0, execa_1.default)('typechain', [
        '--target',
        plugin,
        '--out-dir',
        (0, path_1.resolve)(outputDir, 'events'),
        `${EVENTS_DIR}/${contractGlobs}`,
    ]);
    if (typechain.stdout)
        typechain.stdout.pipe(process.stdout);
    return typechain;
});
const buildTag = (tag, outputDir, plugin) => __awaiter(void 0, void 0, void 0, function* () {
    const versionDir = (0, path_1.resolve)(VERSIONED_DIR, tag);
    console.info(`Building release tag ${tag} for ${plugin}...`);
    yield buildVersionedContracts(versionDir, tag, outputDir, plugin);
    if (tag === core_1.LATEST_TAG) {
        yield buildLatestContracts(versionDir, outputDir, plugin);
        yield buildLatestTokentContracts(versionDir, outputDir, plugin);
        yield buildEventsContracts(outputDir, plugin);
    }
});
const buildStatic = (outputDir, plugin) => __awaiter(void 0, void 0, void 0, function* () {
    yield buildStaticContracts(outputDir, plugin);
    yield buildStaticTokenContracts(outputDir, plugin);
});
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    const { argv } = (0, yargs_1.default)((0, helpers_1.hideBin)(process.argv)).options({
        tag: { alias: 't', type: 'string', default: core_1.LATEST_TAG },
        out: { alias: 'o', type: 'string', default: './dist' },
        plugin: {
            alias: 'p',
            type: 'string',
            default: 'ethers-v5',
            choices: ['ethers-v5', 'ethers-v6'],
        },
        clean: { alias: 'c', type: 'boolean', default: true },
    });
    const args = yield argv;
    const { clean, out, plugin, tag } = args;
    const outputDir = (0, path_1.resolve)(process.cwd(), out);
    if (clean) {
        yield (0, rimraf_1.rimraf)(outputDir);
    }
    if (tag === 'ALL') {
        yield buildStatic(outputDir, plugin);
        yield Promise.all(core_1.RELEASES.map((release) => buildTag(release, outputDir, plugin)));
    }
    else {
        yield buildStatic(outputDir, plugin);
        yield buildTag(tag, outputDir, plugin);
    }
});
start();
