import { ColonyVersion } from '../src/constants';

// These are the corresponding git release tags for the deployed versions of the Colony Network
export const releaseMap = {
  [ColonyVersion.GoerliGlider]: 'glider-rc.1',
  [ColonyVersion.Glider]: 'glider',
  [ColonyVersion.AuburnGlider]: 'auburn-glider',
  [ColonyVersion.BurgundyGlider]: 'burgundy-glider',
  // @TODO replace with proper tag once released
  [ColonyVersion.CeruleanLightweightSpaceship]:
    'e475a5e61029e08f3fb85fa7a60ed22d548ad370',
};
