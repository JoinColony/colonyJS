import { ColonyVersion } from '../versions';

import getClientV1 from './clients/Colony/ColonyClientV1';

export const colonyClientFactories = {
  [ColonyVersion.GoerliGlider]: getClientV1,
  // [ColonyVersion.Glider]: ColonyClientV2,
  // [ColonyVersion.AuburnGlider]: ColonyClientV3,
  // [ColonyVersion.BurgundyGlider]: ColonyClientV4,
};
