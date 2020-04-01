import { ColonyVersions } from '../versions';

import getClientV1 from './clients/Colony/ColonyClientV1';

export const colonyClientFactories = {
  [ColonyVersions.GoerliGlider]: getClientV1,
  // [ColonyVersions.Glider]: ColonyClientV2,
  // [ColonyVersions.AuburnGlider]: ColonyClientV3,
  // [ColonyVersions.BurgundyGlider]: ColonyClientV4,
};
