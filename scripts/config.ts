import { ColonyVersion } from '../src/constants';

// These are the corresponding git release tags for the deployed versions of the Colony Network
export const releaseMap = {
  [ColonyVersion.GoerliGlider]: 'glider-rc.1',
  [ColonyVersion.Glider]: 'glider',
  [ColonyVersion.AuburnGlider]: 'auburn-glider',
  [ColonyVersion.BurgundyGlider]: 'burgundy-glider',
};
