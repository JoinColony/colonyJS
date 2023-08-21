import { ColonyVersion } from '../../../clients/Core/exports';
import {
  assertExhaustiveSwitch,
  createContractVersionArray,
} from '../../../utils';
import { AugmentedIColony } from '../../Core/augments/commonAugments';

import getReputationBootstrapperClientV1, {
  ReputationBootstrapperClientV1,
} from './ReputationBootstrapperClientV1';
import getReputationBootstrapperClientV2, {
  ReputationBootstrapperClientV2,
} from './ReputationBootstrapperClientV2';
import getReputationBootstrapperClientV3, {
  ReputationBootstrapperClientV3,
} from './ReputationBootstrapperClientV3';

const REPUTATION_BOOTSTRAPPER_VERSION_NEXT = 4;

/** @internal */
export const REPUTATION_BOOTSTRAPPER_VERSION_LATEST =
  REPUTATION_BOOTSTRAPPER_VERSION_NEXT - 1;

export { ReputationBootstrapperClientV1 } from './ReputationBootstrapperClientV1';
export { ReputationBootstrapperClientV2 } from './ReputationBootstrapperClientV2';
export { ReputationBootstrapperClientV3 } from './ReputationBootstrapperClientV3';

export type AnyReputationBootstrapperClient =
  | ReputationBootstrapperClientV1
  | ReputationBootstrapperClientV2
  | ReputationBootstrapperClientV3;

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
  2: [],
  3: [],
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
    case 2:
      return getReputationBootstrapperClientV2(colonyClient, address);
    case 3:
      return getReputationBootstrapperClientV3(colonyClient, address);
    default:
      return assertExhaustiveSwitch(
        version,
        'Could not find ReputationBootstrapper version',
      );
  }
};
