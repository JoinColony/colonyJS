import type { ReputationBootstrapperVersion } from '@colony/core';

import { assertExhaustiveSwitch } from '@colony/core/utils';

import { AugmentedIColony } from '../../Core/augments/commonAugments.js';

import getReputationBootstrapperClientV1, {
  ReputationBootstrapperClientV1,
} from './ReputationBootstrapperClientV1.js';
import getReputationBootstrapperClientV2, {
  ReputationBootstrapperClientV2,
} from './ReputationBootstrapperClientV2.js';
import getReputationBootstrapperClientV3, {
  ReputationBootstrapperClientV3,
} from './ReputationBootstrapperClientV3.js';

export { ReputationBootstrapperClientV1 } from './ReputationBootstrapperClientV1.js';
export { ReputationBootstrapperClientV2 } from './ReputationBootstrapperClientV2.js';
export { ReputationBootstrapperClientV3 } from './ReputationBootstrapperClientV3.js';

export type AnyReputationBootstrapperClient =
  | ReputationBootstrapperClientV1
  | ReputationBootstrapperClientV2
  | ReputationBootstrapperClientV3;

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
