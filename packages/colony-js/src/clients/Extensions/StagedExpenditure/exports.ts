import type { StagedExpenditureVersion } from '@colony/core';

import { assertExhaustiveSwitch } from '@colony/core/utils';

import { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import { ValidColony } from './augments/commonAugments.js';

import getStagedExpenditureClientV1, {
  StagedExpenditureClientV1,
} from './StagedExpenditureClientV1.js';
import getStagedExpenditureClientV2, {
  StagedExpenditureClientV2,
} from './StagedExpenditureClientV2.js';

export { StagedExpenditureClientV1 } from './StagedExpenditureClientV1.js';
export { StagedExpenditureClientV2 } from './StagedExpenditureClientV2.js';

export type AnyStagedExpenditureClient =
  | StagedExpenditureClientV1
  | StagedExpenditureClientV2;

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
    default:
      return assertExhaustiveSwitch(
        version,
        'Could not find StagedExpenditure version',
      );
  }
};
