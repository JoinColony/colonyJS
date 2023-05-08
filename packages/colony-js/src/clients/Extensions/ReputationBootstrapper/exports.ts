import type { ReputationBootstrapperVersion } from '@colony/core';

import { assertExhaustiveSwitch } from '@colony/core/utils';

import { AugmentedIColony } from '../../Core/augments/commonAugments';

import getReputationBootstrapperClientV1, {
  ReputationBootstrapperClientV1,
} from './ReputationBootstrapperClientV1';

export { ReputationBootstrapperClientV1 } from './ReputationBootstrapperClientV1';

export type AnyReputationBootstrapperClient = ReputationBootstrapperClientV1;

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
