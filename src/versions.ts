/*
 * Colony / Network Versioning
 */

/**
 * Available versions for colonies that could be deployed. When a new version for a colony needs to be supported, it should be added here. The versions are incremented integers.
// FIXME: put the actual number in the clients, not this release tag, then remove and use only the release map with actual numbers
 */
export enum ColonyVersion {
  /** Only deployed to Goerli, hence not present on mainnet deployments */
  GoerliGlider = 1, // glider-rc.1
  Glider = 2,
  AuburnGlider = 3,
  BurgundyGlider = 4,
  LightweightSpaceship = 5,
  CeruleanLightweightSpaceship = 6,
  DandelionLightweightSpaceship = 7,
  EbonyLightweightSpaceship = 8,
  Develop = 9,
}

export const LatestReleaseTag = 'elwss3';

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

const getExtensionCompatibilityMap = (
  incompatibilityMap: Record<string, number[]>,
  colonyVersions: typeof ColonyVersion,
): Record<number, number[]> => {
  const compatibilityMap: Record<number, number[]> = {};
  const allColonyVersions = Object.keys(colonyVersions)
    .map((version) => parseInt(version, 10))
    .filter((version) => !!version);
  const extensionVersions = Object.keys(incompatibilityMap);
  extensionVersions.map((version) => {
    const currentCompatibleVersions = allColonyVersions.filter(
      (colonyVersion) => !incompatibilityMap[version].includes(colonyVersion),
    );
    compatibilityMap[parseInt(version, 10)] = currentCompatibleVersions;
    return null;
  });
  return compatibilityMap;
};

// FIXME: remove these version enums
/*
 * One Transaction Payment Extension Versioning
 */
export enum OneTxPaymentExtensionVersion {
  CeruleanLightweightSpaceship = 1,
  DandelionLightweightSpaceship = 2,
}

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
  ColonyVersion,
);

/*
 * Coin Machine Extension Versioning
 */
export enum CoinMachineExtensionVersion {
  CeruleanLightweightSpaceship = 1,
  DandelionLightweightSpaceship = 2,
  EbonyLightweightSpaceship2 = 3,
}

const CoinMachineExtensionVersionIncompatibilityMap: Record<
  CoinMachineExtensionVersion,
  Array<ColonyVersion>
> = {
  [CoinMachineExtensionVersion.CeruleanLightweightSpaceship]: [],
  [CoinMachineExtensionVersion.DandelionLightweightSpaceship]: [],
  [CoinMachineExtensionVersion.EbonyLightweightSpaceship2]: [],
};

const CoinMachineExtensionVersionCompatibilityMap: Record<
  CoinMachineExtensionVersion,
  Array<ColonyVersion>
> = getExtensionCompatibilityMap(
  CoinMachineExtensionVersionIncompatibilityMap,
  ColonyVersion,
);

/*
 * Voting Reputation Extension Versioning
 */

export enum VotingReputationExtensionVersion {
  CeruleanLightweightSpaceship = 1,
  DandelionLightweightSpaceship = 2,
  EbonyLightweightSpaceship = 3,
}

const VotingReputationExtensionVersionIncompatibilityMap: Record<
  VotingReputationExtensionVersion,
  Array<ColonyVersion>
> = {
  [VotingReputationExtensionVersion.CeruleanLightweightSpaceship]: [],
  [VotingReputationExtensionVersion.DandelionLightweightSpaceship]: [
    ColonyVersion.GoerliGlider,
    ColonyVersion.Glider,
    ColonyVersion.AuburnGlider,
    ColonyVersion.BurgundyGlider,
    ColonyVersion.LightweightSpaceship,
    ColonyVersion.CeruleanLightweightSpaceship,
  ],
  [VotingReputationExtensionVersion.EbonyLightweightSpaceship]: [
    ColonyVersion.GoerliGlider,
    ColonyVersion.Glider,
    ColonyVersion.AuburnGlider,
    ColonyVersion.BurgundyGlider,
    ColonyVersion.LightweightSpaceship,
    ColonyVersion.CeruleanLightweightSpaceship,
  ],
};

const VotingReputationExtensionVersionCompatibilityMap: Record<
  VotingReputationExtensionVersion,
  Array<ColonyVersion>
> = getExtensionCompatibilityMap(
  VotingReputationExtensionVersionIncompatibilityMap,
  ColonyVersion,
);

/*
 * One Transaction Payment Extension Versioning
 */

export enum WhitelistExtensionVersion {
  EbonyLightweightSpaceship = 1,
}

export const CurrentWhitelistVersion = parseInt(
  WhitelistExtensionVersion[
    Object.keys(WhitelistExtensionVersion).slice(-1)[0] as unknown as number
  ],
  10,
);

const WhitelistExtensionVersionIncompatibilityMap: Record<
  WhitelistExtensionVersion,
  Array<ColonyVersion>
> = {
  [WhitelistExtensionVersion.EbonyLightweightSpaceship]: [],
};

const WhitelistExtensionVersionCompatibilityMap: Record<
  WhitelistExtensionVersion,
  Array<ColonyVersion>
> = getExtensionCompatibilityMap(
  WhitelistExtensionVersionIncompatibilityMap,
  ColonyVersion,
);

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
