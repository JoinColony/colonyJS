import { IColony as IColonyV5 } from '../../../contracts/5/IColony';
import { CoinMachineClient } from '../../CoinMachineClient';
import { ColonyNetworkClient } from '../../ColonyNetworkClient';
import { ExtendedIColony } from './commonExtensions';
import { ColonyExtensionsV3 } from './extensionsV3';
import {
  addExtensions as addExtensionsV4,
  ColonyExtensionsV4,
  ExtendedEstimateV4,
} from './extensionsV4';

type ValidColony = IColonyV5;

export type ExtendedEstimateV5 = ExtendedEstimateV4;

export type ColonyExtensionsV5<T extends ValidColony> = {
  coinMachineClient?: CoinMachineClient;
  estimate: T['estimate'] & ExtendedEstimateV5;
};

export const addExtensions = (
  instance: ExtendedIColony<ValidColony>,
  networkClient: ColonyNetworkClient,
): ExtendedIColony<ValidColony> &
  ColonyExtensionsV3<ValidColony> &
  ColonyExtensionsV4<ValidColony> &
  ColonyExtensionsV5<ValidColony> => {
  // Add all extensions from v4, because these are also still valid
  const extendedInstance = addExtensionsV4(
    instance,
    networkClient,
  ) as ExtendedIColony<ValidColony> &
    ColonyExtensionsV3<ValidColony> &
    ColonyExtensionsV4<ValidColony> &
    ColonyExtensionsV5<ValidColony>;

  extendedInstance.coinMachineClient = undefined;

  return extendedInstance;
};
