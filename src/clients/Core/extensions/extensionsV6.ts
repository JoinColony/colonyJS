import { IColony as IColonyV6 } from '../../../contracts/IColony/6/IColony';
import { ColonyNetworkClient } from '../../ColonyNetworkClient';
import { ExtendedIColony } from './commonExtensions';
import { ColonyExtensionsV3 } from './extensionsV3';
import { ColonyExtensionsV4 } from './extensionsV4';
import {
  addExtensions as addExtensionsV5,
  ColonyExtensionsV5,
  ExtendedEstimateV5,
} from './extensionsV5';

type ValidColony = IColonyV6;

type PreviousVersionsExtensions = ExtendedIColony<ValidColony> &
  ColonyExtensionsV3<ValidColony> &
  ColonyExtensionsV4<ValidColony> &
  ColonyExtensionsV5<ValidColony>;

/*
 * Estimates
 */
export type ExtendedEstimateV6 = ExtendedEstimateV5;

/*
 * Extension Methods
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type ColonyExtensionsV6<T extends ValidColony> =
  PreviousVersionsExtensions;

/*
 * Bindings
 */
export const addExtensions = (
  instance: ExtendedIColony<ValidColony>,
  networkClient: ColonyNetworkClient,
): ColonyExtensionsV6<ValidColony> => {
  // Add all extensions from v5, because these are also still valid
  const extendedInstance = addExtensionsV5(
    instance,
    networkClient,
  ) as ColonyExtensionsV6<ValidColony>;
  return extendedInstance;
};
