import { ColonyVersion } from '../../../clients/Core/exports';
import {
  assertExhaustiveSwitch,
  createContractVersionArray,
} from '../../../utils';
import { AugmentedIColony } from '../../Core/augments/commonAugments';

import getReputationBootstrapperClientV1, {
  ReputationBootstrapperClientV1,
} from './ReputationBootstrapperClientV1';

const REPUTATION_BOOTSTRAPPER_VERSION_NEXT = 2;

/** @internal */
export const REPUTATION_BOOTSTRAPPER_VERSION_LATEST =
  REPUTATION_BOOTSTRAPPER_VERSION_NEXT - 1;

export { ReputationBootstrapperClientV1 } from './ReputationBootstrapperClientV1';

export type AnyReputationBootstrapperClient = ReputationBootstrapperClientV1;

/** @internal */
export const REPUTATION_BOOTSTRAPPER_VERSIONS = createContractVersionArray(
  REPUTATION_BOOTSTRAPPER_VERSION_NEXT,
);
/** @internal */
export type ReputationBootstrapperVersion =
  typeof REPUTATION_BOOTSTRAPPER_VERSIONS[number];

/** @internal */
export const reputationBootstrapperIncompatibilityMap: Record<
  ReputationBootstrapperVersion,
  Array<ColonyVersion>
> = {
  1: [],
};

/** @internal */
export const getReputationBootstrapperClient = (
  colonyClient: AugmentedIColony,
  address: string,
  version: ReputationBootstrapperVersion,
): AnyReputationBootstrapperClient => {
  switch (version) {
    case 1:
      return getReputationBootstrapperClientV1(colonyClient, address);
    default:
      return assertExhaustiveSwitch(
        version,
        'Could not find ReputationBootstrapper version',
      );
  }
};
