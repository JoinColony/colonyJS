import { getExtensionCompatibilityMap } from './utils';

enum Extension {
  OneTxPayment = 'OneTxPayment',
  CoinMachine = 'CoinMachine',
  VotingReputation = 'VotingReputation',
  Whitelist = 'Whitelist',
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
  EbonyLightweightSpaceship = 8,
  FuchsiaLightweightSpaceship = 9,
  GreenLightweightSpaceship = 10,
  GreenLightweightSpaceshipTwo = 11,
  GreenLightweightSpaceshipThree = 12,
  GreenLightweightSpaceshipFour = 13,
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
  [ColonyVersion.EbonyLightweightSpaceship]: `elwss`,
  [ColonyVersion.FuchsiaLightweightSpaceship]: `flwss`,
  [ColonyVersion.GreenLightweightSpaceship]: `glwss`,
  [ColonyVersion.GreenLightweightSpaceshipTwo]: `glwss2`,
  [ColonyVersion.GreenLightweightSpaceshipThree]: `glwss3`,
  [ColonyVersion.GreenLightweightSpaceshipFour]: `glwss4`,
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
  FuchsiaLightweightSpaceship = 3,
  GreenLightweightSpaceshipTwo = 4,
  GreenLightweightSpaceshipFour = 5,
}

const oneTxPaymentReleaseMap = {
  [OneTxPaymentExtensionVersion.CeruleanLightweightSpaceship]: `clwss`,
  [OneTxPaymentExtensionVersion.DandelionLightweightSpaceship]: `dlwss`,
  [OneTxPaymentExtensionVersion.FuchsiaLightweightSpaceship]: `flwss`,
  [OneTxPaymentExtensionVersion.GreenLightweightSpaceshipTwo]: `glwss2`,
  [OneTxPaymentExtensionVersion.GreenLightweightSpaceshipFour]: `glwss4`,
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
  [OneTxPaymentExtensionVersion.FuchsiaLightweightSpaceship]: [],
  [OneTxPaymentExtensionVersion.GreenLightweightSpaceshipTwo]: [],
  [OneTxPaymentExtensionVersion.GreenLightweightSpaceshipFour]: [],
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
  EbonyLightweightSpaceshipTwo = 3,
  EbonyLightweightSpaceshipThree = 4,
  FuchsiaLightweightSpaceship = 5,
  GreenLightweightSpaceshipTwo = 6,
  GreenLightweightSpaceshipFour = 7,
}

const coinMachineReleaseMap = {
  [CoinMachineExtensionVersion.CeruleanLightweightSpaceship]: `clwss`,
  [CoinMachineExtensionVersion.DandelionLightweightSpaceship]: `dlwss`,
  [CoinMachineExtensionVersion.EbonyLightweightSpaceshipTwo]: `elwss2`,
  [CoinMachineExtensionVersion.EbonyLightweightSpaceshipThree]: `elwss3`,
  [CoinMachineExtensionVersion.FuchsiaLightweightSpaceship]: `flwss`,
  [CoinMachineExtensionVersion.GreenLightweightSpaceshipTwo]: `glwss2`,
  [CoinMachineExtensionVersion.GreenLightweightSpaceshipFour]: `glwss4`,
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
  [CoinMachineExtensionVersion.EbonyLightweightSpaceshipTwo]: [],
  [CoinMachineExtensionVersion.EbonyLightweightSpaceshipThree]: [],
  [CoinMachineExtensionVersion.FuchsiaLightweightSpaceship]: [],
  [CoinMachineExtensionVersion.GreenLightweightSpaceshipTwo]: [],
  [CoinMachineExtensionVersion.GreenLightweightSpaceshipFour]: [],
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
  FuchsiaLightweightSpaceship = 4,
  FuchsiaLightweightSpaceshipTwo = 5,
  FuchsiaLightweightSpaceshipThree = 6,
  GreenLightweightSpaceship = 7,
  GreenLightweightSpaceshipTwo = 8,
  GreenLightweightSpaceshipFour = 9,
}

const votingReputationReleaseMap = {
  [VotingReputationExtensionVersion.CeruleanLightweightSpaceship]: `clwss`,
  [VotingReputationExtensionVersion.DandelionLightweightSpaceship]: `dlwss`,
  [VotingReputationExtensionVersion.EbonyLightweightSpaceship]: `elwss`,
  [VotingReputationExtensionVersion.FuchsiaLightweightSpaceship]: `flwss`,
  [VotingReputationExtensionVersion.FuchsiaLightweightSpaceshipTwo]: `flwss2`,
  [VotingReputationExtensionVersion.FuchsiaLightweightSpaceshipThree]: `flwss3`,
  [VotingReputationExtensionVersion.GreenLightweightSpaceship]: 'glwss',
  [VotingReputationExtensionVersion.GreenLightweightSpaceshipTwo]: 'glwss2',
  [VotingReputationExtensionVersion.GreenLightweightSpaceshipFour]: 'glwss3',
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
  [VotingReputationExtensionVersion.EbonyLightweightSpaceship]: [
    ColonyVersion.GoerliGlider,
    ColonyVersion.Glider,
    ColonyVersion.AuburnGlider,
    ColonyVersion.BurgundyGlider,
    ColonyVersion.LightweightSpaceship,
    ColonyVersion.CeruleanLightweightSpaceship,
  ],
  [VotingReputationExtensionVersion.FuchsiaLightweightSpaceship]: [
    ColonyVersion.GoerliGlider,
    ColonyVersion.Glider,
    ColonyVersion.AuburnGlider,
    ColonyVersion.BurgundyGlider,
    ColonyVersion.LightweightSpaceship,
    ColonyVersion.CeruleanLightweightSpaceship,
  ],
  [VotingReputationExtensionVersion.FuchsiaLightweightSpaceshipTwo]: [
    ColonyVersion.GoerliGlider,
    ColonyVersion.Glider,
    ColonyVersion.AuburnGlider,
    ColonyVersion.BurgundyGlider,
    ColonyVersion.LightweightSpaceship,
    ColonyVersion.CeruleanLightweightSpaceship,
  ],
  [VotingReputationExtensionVersion.FuchsiaLightweightSpaceshipThree]: [
    ColonyVersion.GoerliGlider,
    ColonyVersion.Glider,
    ColonyVersion.AuburnGlider,
    ColonyVersion.BurgundyGlider,
    ColonyVersion.LightweightSpaceship,
    ColonyVersion.CeruleanLightweightSpaceship,
  ],
  [VotingReputationExtensionVersion.GreenLightweightSpaceship]: [
    ColonyVersion.GoerliGlider,
    ColonyVersion.Glider,
    ColonyVersion.AuburnGlider,
    ColonyVersion.BurgundyGlider,
    ColonyVersion.LightweightSpaceship,
    ColonyVersion.CeruleanLightweightSpaceship,
  ],
  [VotingReputationExtensionVersion.GreenLightweightSpaceshipTwo]: [
    ColonyVersion.GoerliGlider,
    ColonyVersion.Glider,
    ColonyVersion.AuburnGlider,
    ColonyVersion.BurgundyGlider,
    ColonyVersion.LightweightSpaceship,
    ColonyVersion.CeruleanLightweightSpaceship,
  ],
  [VotingReputationExtensionVersion.GreenLightweightSpaceshipFour]: [
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
  FuchsiaLightweightSpaceship = 2,
  GreenLightweightSpaceshipTwo = 3,
  GreenLightweightSpaceshipFour = 4,
}

const whitelistReleaseMap = {
  [WhitelistExtensionVersion.EbonyLightweightSpaceship]: `elwss`,
  [WhitelistExtensionVersion.FuchsiaLightweightSpaceship]: `flwss`,
  [WhitelistExtensionVersion.GreenLightweightSpaceshipTwo]: `glwss2`,
  [WhitelistExtensionVersion.GreenLightweightSpaceshipFour]: `glwss4`,
};

export const CurrentWhitelistVersion = parseInt(
  WhitelistExtensionVersion[
    (Object.keys(WhitelistExtensionVersion).slice(-1)[0] as unknown) as number
  ],
  10,
);

const WhitelistExtensionVersionIncompatibilityMap: Record<
  WhitelistExtensionVersion,
  Array<ColonyVersion>
> = {
  [WhitelistExtensionVersion.EbonyLightweightSpaceship]: [],
  [WhitelistExtensionVersion.FuchsiaLightweightSpaceship]: [],
  [WhitelistExtensionVersion.GreenLightweightSpaceshipTwo]: [],
  [WhitelistExtensionVersion.GreenLightweightSpaceshipFour]: [],
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
  // eslint-disable-next-line max-len
  [Extension.VotingReputation]: VotingReputationExtensionVersionIncompatibilityMap,
  [Extension.Whitelist]: WhitelistExtensionVersionIncompatibilityMap,
};

export const extensionsCompatibilityMap = {
  [Extension.OneTxPayment]: OneTxPaymentExtensionVersionCompatibilityMap,
  [Extension.CoinMachine]: CoinMachineExtensionVersionCompatibilityMap,
  // eslint-disable-next-line max-len
  [Extension.VotingReputation]: VotingReputationExtensionVersionCompatibilityMap,
  [Extension.Whitelist]: WhitelistExtensionVersionCompatibilityMap,
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
    whitelist: { ...whitelistReleaseMap },
  },
};
