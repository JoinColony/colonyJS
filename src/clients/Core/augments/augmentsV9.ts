import { IColony as IColonyV6 } from '../../../contracts/IColony/6/IColony';
import { IColony as IColonyV7 } from '../../../contracts/IColony/7/IColony';
import { IColony as PreviousIColony } from '../../../contracts/IColony/8/IColony';
import { IColony as IColonyV9 } from '../../../contracts/IColony/9/IColony';
import { ColonyNetworkClient } from '../../ColonyNetworkClient';
import { AugmentedIColony } from './commonAugments';
import { ColonyAugmentsV3 } from './augmentsV3';
import { ColonyAugmentsV4 } from './augmentsV4';
import { ColonyAugmentsV5 } from './augmentsV5';
import { ColonyAugmentsV6 } from './augmentsV6';
import { ColonyAugmentsV7 } from './augmentsV7';
import {
  addAugments as addAugmentsV8,
  ColonyAugmentsV8,
  AugmentedEstimateV8,
} from './augmentsV8';

type ValidColony = IColonyV9;

type PreviousVersionsAugments = AugmentedIColony<ValidColony> &
  ColonyAugmentsV3<IColonyV6> &
  ColonyAugmentsV4<IColonyV6> &
  ColonyAugmentsV5<IColonyV6> &
  ColonyAugmentsV6<IColonyV6> &
  ColonyAugmentsV7<IColonyV7> &
  ColonyAugmentsV8<PreviousIColony>;

/*
 * Estimates
 */
export type AugmentedEstimateV9 = AugmentedEstimateV8;

/*
 * Extension Methods
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type ColonyAugmentsV9<T extends ValidColony> = PreviousVersionsAugments;

/*
 * Bindings
 */
export const addAugments = (
  instance: AugmentedIColony<ValidColony>,
  networkClient: ColonyNetworkClient,
): ColonyAugmentsV9<ValidColony> => {
  // Add all augments from v8, because these are also still valid
  const augmentedInstance = addAugmentsV8(
    instance as PreviousVersionsAugments,
    networkClient,
  ) as ColonyAugmentsV9<ValidColony>;
  return augmentedInstance;
};
