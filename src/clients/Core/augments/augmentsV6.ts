import { IColony as IColonyV6 } from '../../../contracts/IColony/6/IColony';
import { ColonyNetworkClient } from '../../ColonyNetworkClient';
import { AugmentedIColony } from './commonAugments';
import { ColonyAugmentsV3 } from './augmentsV3';
import { ColonyAugmentsV4 } from './augmentsV4';
import {
  addAugments as addAugmentsV5,
  ColonyAugmentsV5,
  AugmentedEstimateV5,
} from './augmentsV5';

type ValidColony = IColonyV6;

type PreviousVersionsAugments = AugmentedIColony<ValidColony> &
  ColonyAugmentsV3<ValidColony> &
  ColonyAugmentsV4<ValidColony> &
  ColonyAugmentsV5<ValidColony>;

/*
 * Estimates
 */
export type AugmentedEstimateV6 = AugmentedEstimateV5;

/*
 * Extension Methods
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type ColonyAugmentsV6<T extends ValidColony> = PreviousVersionsAugments;

/*
 * Bindings
 */
export const addExtensions = (
  instance: AugmentedIColony<ValidColony>,
  networkClient: ColonyNetworkClient,
): ColonyAugmentsV6<ValidColony> => {
  // Add all extensions from v5, because these are also still valid
  const augmentedInstance = addAugmentsV5(
    instance,
    networkClient,
  ) as ColonyAugmentsV6<ValidColony>;
  return augmentedInstance;
};
