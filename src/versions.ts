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
export const releaseMap = {
  [ColonyVersion.GoerliGlider]: 'glider-rc.1',
  [ColonyVersion.Glider]: 'glider',
  [ColonyVersion.AuburnGlider]: 'auburn-glider',
  [ColonyVersion.BurgundyGlider]: 'burgundy-glider',
  [ColonyVersion.LightweightSpaceship]: 'lwss',
  [ColonyVersion.CeruleanLightweightSpaceship]: `clwss`,
};

/**
 * The newest colony version. This will be used when deploying new colonies */
export const CurrentVersion = ColonyVersion.CeruleanLightweightSpaceship;
