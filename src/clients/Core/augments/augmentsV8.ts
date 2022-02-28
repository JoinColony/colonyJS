import { IColony as IColonyV6 } from '../../../contracts/IColony/6/IColony';
import { IColony as PreviousIColony } from '../../../contracts/IColony/7/IColony';
import { IColony as IColonyV8 } from '../../../contracts/IColony/8/IColony';
import { ColonyNetworkClient } from '../../ColonyNetworkClient';
import { AugmentedIColony } from './commonAugments';
import { ColonyAugmentsV3 } from './augmentsV3';
import { ColonyAugmentsV4 } from './augmentsV4';
import { ColonyAugmentsV5 } from './augmentsV5';
import { ColonyAugmentsV6 } from './augmentsV6';
import {
  addAugments as addAugmentsV7,
  ColonyAugmentsV7,
  AugmentedEstimateV7,
} from './augmentsV7';

type ValidColony = IColonyV8;

type PreviousVersionsAugments = AugmentedIColony<ValidColony> &
  ColonyAugmentsV3<IColonyV6> &
  ColonyAugmentsV4<IColonyV6> &
  ColonyAugmentsV5<IColonyV6> &
  ColonyAugmentsV6<IColonyV6> &
  ColonyAugmentsV7<PreviousIColony>;

/*
 * Estimates
 */
export type AugmentedEstimateV8 = AugmentedEstimateV7;

/*
 * Extension Methods
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type ColonyAugmentsV8<T extends ValidColony> = PreviousVersionsAugments;

/*
 * Bindings
 */
export const addAugments = (
  instance: AugmentedIColony<ValidColony>,
  networkClient: ColonyNetworkClient,
): ColonyAugmentsV8<ValidColony> => {
  // Add all extensions from v7, because these are also still valid
  const augmentedInstance = addAugmentsV7(
    instance as PreviousVersionsAugments,
    networkClient,
  ) as ColonyAugmentsV8<ValidColony>;
  return augmentedInstance;
};
