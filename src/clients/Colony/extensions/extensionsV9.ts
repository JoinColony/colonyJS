import { IColony as IColonyV6 } from '../../../contracts/colony/6/IColony';
import { IColony as IColonyV7 } from '../../../contracts/colony/7/IColony';
import { IColony as PreviousIColony } from '../../../contracts/colony/8/IColony';
import { IColony as IColonyV9 } from '../../../contracts/colony/9/IColony';
import { ColonyNetworkClient } from '../../ColonyNetworkClient';
import { ExtendedIColony } from './commonExtensions';
import { ColonyExtensionsV3 } from './extensionsV3';
import { ColonyExtensionsV4 } from './extensionsV4';
import { ColonyExtensionsV5 } from './extensionsV5';
import { ColonyExtensionsV6 } from './extensionsV6';
import { ColonyExtensionsV7 } from './extensionsV7';
import {
  addExtensions as addExtensionsV8,
  ColonyExtensionsV8,
  ExtendedEstimateV8,
} from './extensionsV8';

type ValidColony = IColonyV9;

type PreviousVersionsExtensions = ExtendedIColony<ValidColony> &
  ColonyExtensionsV3<IColonyV6> &
  ColonyExtensionsV4<IColonyV6> &
  ColonyExtensionsV5<IColonyV6> &
  ColonyExtensionsV6<IColonyV6> &
  ColonyExtensionsV7<IColonyV7> &
  ColonyExtensionsV8<PreviousIColony>;

/*
 * Estimates
 */
export type ExtendedEstimateV9 = ExtendedEstimateV8;

/*
 * Extension Methods
 */
export type ColonyExtensionsV9<
  T extends ValidColony
> = {} & PreviousVersionsExtensions;

/*
 * Bindings
 */
export const addExtensions = (
  instance: ExtendedIColony<ValidColony>,
  networkClient: ColonyNetworkClient,
): ColonyExtensionsV9<ValidColony> => {
  // Add all extensions from v7, because these are also still valid
  const extendedInstance = addExtensionsV8(
    instance as PreviousVersionsExtensions,
    networkClient,
  ) as ColonyExtensionsV9<ValidColony>;
  return extendedInstance;
};