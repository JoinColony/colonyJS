import type { ReputationBootstrapperVersion } from '@colony/core';

import { assertExhaustiveSwitch } from '@colony/core/utils';

import { type AugmentedIColony } from '../../Core/augments/commonAugments.js';

import getReputationBootstrapperClientV1, {
  type ReputationBootstrapperClientV1,
} from './ReputationBootstrapperClientV1.js';
import getReputationBootstrapperClientV2, {
  type ReputationBootstrapperClientV2,
} from './ReputationBootstrapperClientV2.js';
import getReputationBootstrapperClientV3, {
  type ReputationBootstrapperClientV3,
} from './ReputationBootstrapperClientV3.js';
import getReputationBootstrapperClientV4, {
  type ReputationBootstrapperClientV4,
} from './ReputationBootstrapperClientV4.js';
import getReputationBootstrapperClientV5, {
  type ReputationBootstrapperClientV5,
} from './ReputationBootstrapperClientV5.js';
import getReputationBootstrapperClientV6, {
  type ReputationBootstrapperClientV6,
} from './ReputationBootstrapperClientV6.js';

export type { ReputationBootstrapperClientV1 } from './ReputationBootstrapperClientV1.js';
export type { ReputationBootstrapperClientV2 } from './ReputationBootstrapperClientV2.js';
export type { ReputationBootstrapperClientV3 } from './ReputationBootstrapperClientV3.js';
export type { ReputationBootstrapperClientV4 } from './ReputationBootstrapperClientV4.js';
export type { ReputationBootstrapperClientV5 } from './ReputationBootstrapperClientV5.js';
export type { ReputationBootstrapperClientV6 } from './ReputationBootstrapperClientV6.js';

export type AnyReputationBootstrapperClient =
  | ReputationBootstrapperClientV1
  | ReputationBootstrapperClientV2
  | ReputationBootstrapperClientV3
  | ReputationBootstrapperClientV4
  | ReputationBootstrapperClientV5
  | ReputationBootstrapperClientV6;

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
    case 4:
      return getReputationBootstrapperClientV4(colonyClient, address);
    case 5:
      return getReputationBootstrapperClientV5(colonyClient, address);
    case 6:
      return getReputationBootstrapperClientV6(colonyClient, address);
    default:
      if (colonyClient.networkClient.disableVersionCheck) {
        return getReputationBootstrapperClientV6(colonyClient, address);
      }
      return assertExhaustiveSwitch(
        version,
        `Could not find ReputationBootstrapper version ${version}`,
      );
  }
};
