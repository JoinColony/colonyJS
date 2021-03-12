import { Extension } from '../src/clients/Extensions/colonyContractExtensions';

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
}

// These are the corresponding git release tags for the deployed versions of the Colony Network
const colonyReleaseMap = {
  [ColonyVersion.GoerliGlider]: 'glider-rc.1',
  [ColonyVersion.Glider]: 'glider',
  [ColonyVersion.AuburnGlider]: 'auburn-glider',
  [ColonyVersion.BurgundyGlider]: 'burgundy-glider',
  [ColonyVersion.LightweightSpaceship]: 'lwss',
  [ColonyVersion.CeruleanLightweightSpaceship]: `clwss`,
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
}

const oneTxPaymentReleaseMap = {
  [OneTxPaymentExtensionVersion.CeruleanLightweightSpaceship]: `clwss`,
};

export const CurrentOneTxPaymentVersion = parseInt(
  OneTxPaymentExtensionVersion[
    (Object.keys(OneTxPaymentExtensionVersion).slice(
      -1,
    )[0] as unknown) as number
  ],
  10,
);

/*
 * Coin Machine Extension Versioning
 */

export enum CoinMachineExtensionVersion {
  CeruleanLightweightSpaceship = 1,
}

const coinMachineReleaseMap = {
  [OneTxPaymentExtensionVersion.CeruleanLightweightSpaceship]: `clwss`,
};

export const CurrentCoinMachineVersion = parseInt(
  CoinMachineExtensionVersion[
    (Object.keys(CoinMachineExtensionVersion).slice(-1)[0] as unknown) as number
  ],
  10,
);

/*
 * Voting Reputation Extension Versioning
 */

export enum VotingReputationExtensionVersion {
  CeruleanLightweightSpaceship = 1,
}

const votingReputationReleaseMap = {
  [OneTxPaymentExtensionVersion.CeruleanLightweightSpaceship]: `clwss`,
};

export const CurrentVotingReputationVersion = parseInt(
  VotingReputationExtensionVersion[
    (Object.keys(VotingReputationExtensionVersion).slice(
      -1,
    )[0] as unknown) as number
  ],
  10,
);

export const CurrentExtensionsVersions = {
  [Extension.OneTxPayment]: CurrentOneTxPaymentVersion,
  [Extension.CoinMachine]: CurrentCoinMachineVersion,
  [Extension.VotingReputation]: CurrentVotingReputationVersion,
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
    votinReputation: { ...votingReputationReleaseMap },
  },
};
