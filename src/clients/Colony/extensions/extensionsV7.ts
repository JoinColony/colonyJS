import { IColony as IColonyV7 } from '../../../contracts/colony/7/IColony';
import { ColonyNetworkClient } from '../../ColonyNetworkClient';
import { ExtendedIColony } from './commonExtensions';
import { ColonyExtensionsV3 } from './extensionsV3';
import { ColonyExtensionsV4 } from './extensionsV4';
import { ColonyExtensionsV5 } from './extensionsV5';
import {
  addExtensions as addExtensionsV6,
  ColonyExtensionsV6,
  ExtendedEstimateV6,
} from './extensionsV6';

type ValidColony = IColonyV7;

type PreviousVersionsExtensions = ExtendedIColony<ValidColony> &
  ColonyExtensionsV3<ValidColony> &
  ColonyExtensionsV4<ValidColony> &
  ColonyExtensionsV5<ValidColony> &
  ColonyExtensionsV6<ValidColony>;

/*
 * Estimates
 */
export type ExtendedEstimateV7 = ExtendedEstimateV6;

/*
 * Extension Methods
 */
export type ColonyExtensionsV7<
  T extends ValidColony
> = {} & PreviousVersionsExtensions;

/*
 * Bindings
 */
export const addExtensions = (
  instance: ExtendedIColony<ValidColony>,
  networkClient: ColonyNetworkClient,
): ColonyExtensionsV7<ValidColony> => {
  // Add all extensions from v6, because these are also still valid
  const extendedInstance = addExtensionsV6(
    instance,
    networkClient,
  ) as ColonyExtensionsV7<ValidColony>;
  return extendedInstance;
};
