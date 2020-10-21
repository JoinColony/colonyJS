import { ColonyVersion } from '../src/constants';

// These are the corresponding git release tags for the deployed versions of the Colony Network
export const releaseMap = {
  [ColonyVersion.GoerliGlider]: 'glider-rc.1',
  [ColonyVersion.Glider]: 'glider',
  [ColonyVersion.AuburnGlider]: 'auburn-glider',
  [ColonyVersion.BurgundyGlider]: 'burgundy-glider',
  // @TODO replace with proper tag once released
  [ColonyVersion.CeruleanLightweightSpaceship]: '7ad9e366a8cc33987d09ff17d879848fc9c144c7',
};
