/*
 * Colony / Network Versioning
 */

export const LatestReleaseTag = 'elwss3';

/*
 * Core IColony versioning
 */
const CORE_COLONY_VERSIONS = [1, 2, 4, 5, 6, 7, 8, 9];
export type ColonyVersion = typeof CORE_COLONY_VERSIONS[number];

/*
 * One Transaction Payment Extension Versioning
 */
const EX_ONE_TX_PAYMENT_VERSIONS = [1, 2];
export type OneTxPaymentExtensionVersion =
  typeof EX_ONE_TX_PAYMENT_VERSIONS[number];

const OneTxPaymentExtensionVersionIncompatibilityMap: Record<
  OneTxPaymentExtensionVersion,
  Array<ColonyVersion>
> = {
  1: [],
  2: [],
};

const OneTxPaymentExtensionVersionCompatibilityMap: Record<
  OneTxPaymentExtensionVersion,
  Array<ColonyVersion>
> = getExtensionCompatibilityMap(
  OneTxPaymentExtensionVersionIncompatibilityMap,
);

/*
 * Coin Machine Extension Versioning
 */
const EX_COIN_MACHINE_VERSIONS = [1, 2, 3];
export type CoinMachineExtensionVersion =
  typeof EX_COIN_MACHINE_VERSIONS[number];

const CoinMachineExtensionVersionIncompatibilityMap: Record<
  CoinMachineExtensionVersion,
  Array<ColonyVersion>
> = {
  1: [],
  2: [],
  3: [],
};

const CoinMachineExtensionVersionCompatibilityMap: Record<
  CoinMachineExtensionVersion,
  Array<ColonyVersion>
> = getExtensionCompatibilityMap(CoinMachineExtensionVersionIncompatibilityMap);

/*
 * Voting Reputation Extension Versioning
 */
const EX_VOTING_REPUTATION_VERSIONS = [1, 2, 3];
export type VotingReputationExtensionVersion =
  typeof EX_VOTING_REPUTATION_VERSIONS[number];

const VotingReputationExtensionVersionIncompatibilityMap: Record<
  VotingReputationExtensionVersion,
  Array<ColonyVersion>
> = {
  1: [],
  2: [1, 2, 3, 4, 5, 6],
  3: [1, 2, 3, 4, 5, 6],
};

const VotingReputationExtensionVersionCompatibilityMap: Record<
  VotingReputationExtensionVersion,
  Array<ColonyVersion>
> = getExtensionCompatibilityMap(
  VotingReputationExtensionVersionIncompatibilityMap,
);

/*
 * Whitelist Extension Versioning
 */
const EX_WHITELIST_VERSIONS = [1];
export type WhitelistExtensionVersion = typeof EX_WHITELIST_VERSIONS[number];

const WhitelistExtensionVersionIncompatibilityMap: Record<
  WhitelistExtensionVersion,
  Array<ColonyVersion>
> = {
  1: [],
};

const WhitelistExtensionVersionCompatibilityMap: Record<
  WhitelistExtensionVersion,
  Array<ColonyVersion>
> = getExtensionCompatibilityMap(WhitelistExtensionVersionIncompatibilityMap);

/// Versioned core contract names
export enum Core {
  Colony = 'IColony',
}

/// Versioned extension contract names
export enum Extension {
  CoinMachine = 'CoinMachine',
  // FundingQueue = 'FundingQueue',
  OneTxPayment = 'OneTxPayment',
  VotingReputation = 'VotingReputation',
  Whitelist = 'Whitelist',
}

// Map versioned contracts to network release tags
export const releaseMap = {
  [Core.Colony]: {
    'glider-rc.1': 1,
    glider: 2,
    'auburn-glider': 3,
    'burgundy-glider': 4,
    lwss: 5,
    clwss: 6,
    dlwss: 7,
    elwss3: 8,
    DEV: 9,
  },
  [Extension.CoinMachine]: {
    clwss: 1,
    dlwss: 2,
    elwss2: 3,
    DEV: 3,
  },
  [Extension.OneTxPayment]: {
    clwss: 1,
    dlwss: 2,
    DEV: 3,
  },
  [Extension.VotingReputation]: {
    clwss: 1,
    dlwss: 2,
    elwss: 3,
    DEV: 3,
  },
  [Extension.Whitelist]: {
    elwss: 1,
    DEV: 1,
  },
};

function getExtensionCompatibilityMap(
  incompatibilityMap: Record<string, number[]>,
): Record<number, number[]> {
  const compatibilityMap: Record<number, number[]> = {};
  const extensionVersions = Object.keys(incompatibilityMap);
  extensionVersions.map((version) => {
    const currentCompatibleVersions = CORE_COLONY_VERSIONS.filter(
      (colonyVersion) => !incompatibilityMap[version].includes(colonyVersion),
    );
    compatibilityMap[parseInt(version, 10)] = currentCompatibleVersions;
    return null;
  });
  return compatibilityMap;
}

/*
 * Extensions Compatibility and Incompatibility Map
 * (Aggregates from the various extensions ones)
 */
export const extensionsIncompatibilityMap = {
  [Extension.OneTxPayment]: OneTxPaymentExtensionVersionIncompatibilityMap,
  [Extension.CoinMachine]: CoinMachineExtensionVersionIncompatibilityMap,
  [Extension.VotingReputation]:
    VotingReputationExtensionVersionIncompatibilityMap,
  [Extension.Whitelist]: WhitelistExtensionVersionIncompatibilityMap,
};

export const extensionsCompatibilityMap = {
  [Extension.OneTxPayment]: OneTxPaymentExtensionVersionCompatibilityMap,
  [Extension.CoinMachine]: CoinMachineExtensionVersionCompatibilityMap,
  [Extension.VotingReputation]:
    VotingReputationExtensionVersionCompatibilityMap,
  [Extension.Whitelist]: WhitelistExtensionVersionCompatibilityMap,
};
