import { ColonyVersions } from '../versions';

// These are the corresponding git release tags for the deployed versions of the Colony Network
export const releaseMap = {
  [ColonyVersions.GoerliGlider]: 'glider-rc.1',
  [ColonyVersions.Glider]: 'glider',
  [ColonyVersions.AuburnGlider]: 'auburn-glider',
  // @TODO change the following to the correct burgundy-glider version once released
  [ColonyVersions.BurgundyGlider]: 'develop',
};
