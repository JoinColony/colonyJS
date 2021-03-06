import { getExtensionCompatibilityMap } from './utils';

enum Extension {
  OneTxPayment = 'OneTxPayment',
  CoinMachine = 'CoinMachine',
  VotingReputation = 'VotingReputation',
}

/*
 * Colony / Network Versioning
 */

/**
 * Available versions for colonies that could be deployed. When a new version for a colony needs to be supported, it should be added here. The versions are incremented integers.
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
}

// These are the corresponding git release tags for the deployed versions of the Colony Network
const colonyReleaseMap = {
  [ColonyVersion.GoerliGlider]: 'glider-rc.1',
  [ColonyVersion.Glider]: 'glider',
  [ColonyVersion.AuburnGlider]: 'auburn-glider',
  [ColonyVersion.BurgundyGlider]: 'burgundy-glider',
  [ColonyVersion.LightweightSpaceship]: 'lwss',
  [ColonyVersion.CeruleanLightweightSpaceship]: `clwss`,
  [ColonyVersion.DandelionLightweightSpaceship]: `dlwss`,
};

/**
 * The newest colony version. This will be used when deploying new colonies */
export const CurrentColonyVersion = parseInt(
  ColonyVersion[(Object.keys(ColonyVersion).slice(-1)[0] as unknown) as number],
  10,
);
/*
 * kept for legacy purposes
 */
export const CurrentVersion = CurrentColonyVersion;

/*
 * One Transaction Payment Extension Versioning
 */

export enum OneTxPaymentExtensionVersion {
  CeruleanLightweightSpaceship = 1,
  DandelionLightweightSpaceship = 2,
}

const oneTxPaymentReleaseMap = {
  [OneTxPaymentExtensionVersion.CeruleanLightweightSpaceship]: `clwss`,
  [OneTxPaymentExtensionVersion.DandelionLightweightSpaceship]: `dlwss`,
};

export const CurrentOneTxPaymentVersion = parseInt(
  OneTxPaymentExtensionVersion[
    (Object.keys(OneTxPaymentExtensionVersion).slice(
      -1,
    )[0] as unknown) as number
  ],
  10,
);

const OneTxPaymentExtensionVersionIncompatibilityMap: Record<
  OneTxPaymentExtensionVersion,
  Array<ColonyVersion>
> = {
  [OneTxPaymentExtensionVersion.CeruleanLightweightSpaceship]: [],
  [OneTxPaymentExtensionVersion.DandelionLightweightSpaceship]: [],
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
}

const coinMachineReleaseMap = {
  [CoinMachineExtensionVersion.CeruleanLightweightSpaceship]: `clwss`,
  [CoinMachineExtensionVersion.DandelionLightweightSpaceship]: `dlwss`,
};

export const CurrentCoinMachineVersion = parseInt(
  CoinMachineExtensionVersion[
    (Object.keys(CoinMachineExtensionVersion).slice(-1)[0] as unknown) as number
  ],
  10,
);

const CoinMachineExtensionVersionIncompatibilityMap: Record<
  CoinMachineExtensionVersion,
  Array<ColonyVersion>
> = {
  [CoinMachineExtensionVersion.CeruleanLightweightSpaceship]: [],
  [CoinMachineExtensionVersion.DandelionLightweightSpaceship]: [],
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
}

const votingReputationReleaseMap = {
  [VotingReputationExtensionVersion.CeruleanLightweightSpaceship]: `clwss`,
  [VotingReputationExtensionVersion.DandelionLightweightSpaceship]: `dlwss`,
};

export const CurrentVotingReputationVersion = parseInt(
  VotingReputationExtensionVersion[
    (Object.keys(VotingReputationExtensionVersion).slice(
      -1,
    )[0] as unknown) as number
  ],
  10,
);

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
};

const VotingReputationExtensionVersionCompatibilityMap: Record<
  VotingReputationExtensionVersion,
  Array<ColonyVersion>
> = getExtensionCompatibilityMap(
  VotingReputationExtensionVersionIncompatibilityMap,
  ColonyVersion,
);

/*
 * Extensions Compatibility and Incompatibility Map
 * (Aggregates from the various extensions ones)
 */
export const extensionsIncompatibilityMap = {
  [Extension.OneTxPayment]: OneTxPaymentExtensionVersionIncompatibilityMap,
  [Extension.CoinMachine]: CoinMachineExtensionVersionIncompatibilityMap,
  // eslint-disable-next-line max-len
  [Extension.VotingReputation]: VotingReputationExtensionVersionIncompatibilityMap,
};

export const extensionsCompatibilityMap = {
  [Extension.OneTxPayment]: OneTxPaymentExtensionVersionCompatibilityMap,
  [Extension.CoinMachine]: CoinMachineExtensionVersionCompatibilityMap,
  // eslint-disable-next-line max-len
  [Extension.VotingReputation]: VotingReputationExtensionVersionCompatibilityMap,
};

/*
 * Release Map
 */
export const releaseMap = {
  /*
   * kept for legacy purposes
   */
  ...colonyReleaseMap,
  colony: {
    ...colonyReleaseMap,
  },
  extension: {
    oneTxPayment: { ...oneTxPaymentReleaseMap },
    coinMachine: { ...coinMachineReleaseMap },
    votingReputation: { ...votingReputationReleaseMap },
  },
};
