import { IColony as IColonyV6 } from '../../../contracts/colony/6/IColony';
import { IColony as IColonyV7 } from '../../../contracts/colony/7/IColony';
import { IColony as IColonyV8 } from '../../../contracts/colony/8/IColony';
import { IColony as IColonyV9 } from '../../../contracts/colony/9/IColony';
import { IColony as IColonyV10 } from '../../../contracts/colony/10/IColony';
import { IColony as IColonyV11 } from '../../../contracts/colony/11/IColony';
import { IColony as PreviousIColony } from '../../../contracts/colony/12/IColony';
import { IColony as IColonyV13 } from '../../../contracts/colony/13/IColony';
import { ColonyNetworkClient } from '../../ColonyNetworkClient';
import { ExtendedIColony } from './commonExtensions';
import { ColonyExtensionsV3 } from './extensionsV3';
import { ColonyExtensionsV4 } from './extensionsV4';
import { ColonyExtensionsV5 } from './extensionsV5';
import { ColonyExtensionsV6 } from './extensionsV6';
import { ColonyExtensionsV7 } from './extensionsV7';
import { ColonyExtensionsV8 } from './extensionsV8';
import { ColonyExtensionsV9 } from './extensionsV9';
import { ColonyExtensionsV10 } from './extensionsV10';
import { ColonyExtensionsV11 } from './extensionsV11';
import {
  addExtensions as addExtensionsV12,
  ColonyExtensionsV12,
  ExtendedEstimateV12,
} from './extensionsV12';

type ValidColony = IColonyV13;

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
type PreviousVersionsExtensions = ExtendedIColony<ValidColony> &
  ColonyExtensionsV3<IColonyV6> &
  ColonyExtensionsV4<IColonyV6> &
  ColonyExtensionsV5<IColonyV6> &
  ColonyExtensionsV6<IColonyV6> &
  ColonyExtensionsV7<IColonyV7> &
  ColonyExtensionsV8<IColonyV8> &
  ColonyExtensionsV9<IColonyV9> &
  ColonyExtensionsV10<IColonyV10> &
  ColonyExtensionsV11<IColonyV11> &
  ColonyExtensionsV12<PreviousIColony>;

/*
 * Estimates
 */
export type ExtendedEstimateV13 = ExtendedEstimateV12;

/*
 * Extension Methods
 */
export type ColonyExtensionsV13<
  T extends ValidColony
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
> = {} & PreviousVersionsExtensions;

/*
 * Bindings
 */
export const addExtensions = (
  instance: ExtendedIColony<ValidColony>,
  networkClient: ColonyNetworkClient,
): ColonyExtensionsV12<ValidColony> => {
  // Add all extensions from v7, because these are also still valid
  const extendedInstance = addExtensionsV12(
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    instance as PreviousVersionsExtensions,
    networkClient,
  ) as ColonyExtensionsV13<ValidColony>;
  return extendedInstance;
};
