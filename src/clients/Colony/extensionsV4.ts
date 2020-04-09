import { IColony } from '../../../lib/contracts/4/IColony';
import { ExtendedIColonyNetwork } from '../ColonyNetworkClient';
import {
  addExtensions as addExtensionsV3,
  ColonyExtensionsV3,
  ExtendedEstimatesV3,
  ExtensionRequiredIColonyV3,
} from './extensionsV3';

type ExtendedEstimatesV4 = ExtendedEstimatesV3;

export interface ColonyExtensionsV4 extends ColonyExtensionsV3 {
  estimateWithProofs: ExtendedEstimatesV4;
}

type ExtensionRequiredIColonyV4 = ExtensionRequiredIColonyV3 &
  // FIXME: I think we can solve this by not picking the whole etimate object but just the parts of it we need!
  Pick<IColony, 'estimate'>;

export const addExtensions = <
  T extends ColonyExtensionsV4 & ExtensionRequiredIColonyV4
>(
  instance: T,
  networkClient: ExtendedIColonyNetwork,
): void => {
  // FIXME: We can not apply the V3 extensions to the v4 instance here because the estimate object differs
  addExtensionsV3(instance, networkClient);
};
