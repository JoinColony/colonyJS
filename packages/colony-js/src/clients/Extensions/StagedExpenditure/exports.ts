import type { StagedExpenditureVersion } from '@colony/core';

import { assertExhaustiveSwitch } from '@colony/core/utils';

import { type AugmentedIColony } from '../../Core/augments/commonAugments.js';
import { type ValidColony } from './augments/commonAugments.js';

import getStagedExpenditureClientV1, {
  type StagedExpenditureClientV1,
} from './StagedExpenditureClientV1.js';
import getStagedExpenditureClientV2, {
  type StagedExpenditureClientV2,
} from './StagedExpenditureClientV2.js';
import getStagedExpenditureClientV3, {
  type StagedExpenditureClientV3,
} from './StagedExpenditureClientV3.js';
import getStagedExpenditureClientV4, {
  type StagedExpenditureClientV4,
} from './StagedExpenditureClientV4.js';

export type { StagedExpenditureClientV1 } from './StagedExpenditureClientV1.js';
export type { StagedExpenditureClientV2 } from './StagedExpenditureClientV2.js';
export type { StagedExpenditureClientV3 } from './StagedExpenditureClientV3.js';
export type { StagedExpenditureClientV4 } from './StagedExpenditureClientV4.js';

export type AnyStagedExpenditureClient =
  | StagedExpenditureClientV1
  | StagedExpenditureClientV2
  | StagedExpenditureClientV3
  | StagedExpenditureClientV4;

/** @internal */
export const getStagedExpenditureClient = (
  colonyClient: AugmentedIColony,
  address: string,
  version: StagedExpenditureVersion,
): AnyStagedExpenditureClient => {
  switch (version) {
    case 1:
      return getStagedExpenditureClientV1(
        colonyClient as AugmentedIColony<ValidColony>,
        address,
      );
    case 2:
      return getStagedExpenditureClientV2(
        colonyClient as AugmentedIColony<ValidColony>,
        address,
      );
    case 3:
      return getStagedExpenditureClientV3(
        colonyClient as AugmentedIColony<ValidColony>,
        address,
      );
    case 4:
      return getStagedExpenditureClientV4(
        colonyClient as AugmentedIColony<ValidColony>,
        address,
      );
    default:
      if (colonyClient.networkClient.disableVersionCheck) {
        return getStagedExpenditureClientV4(
          colonyClient as AugmentedIColony<ValidColony>,
          address,
        );
      }
      return assertExhaustiveSwitch(
        version,
        `Could not find StagedExpenditure version ${version}`,
      );
  }
};
