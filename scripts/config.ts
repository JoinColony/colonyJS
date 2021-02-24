import { ColonyVersion } from '../src/constants';

// These are the corresponding git release tags for the deployed versions of the Colony Network
export const releaseMap = {
  [ColonyVersion.GoerliGlider]: 'glider-rc.1',
  [ColonyVersion.Glider]: 'glider',
  [ColonyVersion.AuburnGlider]: 'auburn-glider',
  [ColonyVersion.BurgundyGlider]: 'burgundy-glider',
  [ColonyVersion.LightweightSpaceship]: 'lwss',
  [ColonyVersion.CeruleanLightweightSpaceship]: `5acb79d6e441a2ca14330b9419cbfdaa9c5b56f3`,
};
