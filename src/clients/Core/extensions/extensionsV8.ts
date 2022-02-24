import { IColony as IColonyV6 } from '../../../contracts/IColony/6/IColony';
import { IColony as PreviousIColony } from '../../../contracts/IColony/7/IColony';
import { IColony as IColonyV8 } from '../../../contracts/IColony/8/IColony';
import { ColonyNetworkClient } from '../../ColonyNetworkClient';
import { ExtendedIColony } from './commonExtensions';
import { ColonyExtensionsV3 } from './extensionsV3';
import { ColonyExtensionsV4 } from './extensionsV4';
import { ColonyExtensionsV5 } from './extensionsV5';
import { ColonyExtensionsV6 } from './extensionsV6';
import {
  addExtensions as addExtensionsV7,
  ColonyExtensionsV7,
  ExtendedEstimateV7,
} from './extensionsV7';

type ValidColony = IColonyV8;

type PreviousVersionsExtensions = ExtendedIColony<ValidColony> &
  ColonyExtensionsV3<IColonyV6> &
  ColonyExtensionsV4<IColonyV6> &
  ColonyExtensionsV5<IColonyV6> &
  ColonyExtensionsV6<IColonyV6> &
  ColonyExtensionsV7<PreviousIColony>;

/*
 * Estimates
 */
export type ExtendedEstimateV8 = ExtendedEstimateV7;

/*
 * Extension Methods
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type ColonyExtensionsV8<T extends ValidColony> =
  PreviousVersionsExtensions;

/*
 * Bindings
 */
export const addExtensions = (
  instance: ExtendedIColony<ValidColony>,
  networkClient: ColonyNetworkClient,
): ColonyExtensionsV8<ValidColony> => {
  // Add all extensions from v7, because these are also still valid
  const extendedInstance = addExtensionsV7(
    instance as PreviousVersionsExtensions,
    networkClient,
  ) as ColonyExtensionsV8<ValidColony>;
  return extendedInstance;
};
