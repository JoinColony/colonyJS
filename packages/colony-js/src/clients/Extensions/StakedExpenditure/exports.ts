import type { StakedExpenditureVersion } from '@colony/core';

import { assertExhaustiveSwitch } from '@colony/core/utils';

import { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import { ValidColony } from './augments/commonAugments.js';

import getStakedExpenditureClientV1, {
  StakedExpenditureClientV1,
} from './StakedExpenditureClientV1.js';
import getStakedExpenditureClientV2, {
  StakedExpenditureClientV2,
} from './StakedExpenditureClientV2.js';
import getStakedExpenditureClientV3, {
  StakedExpenditureClientV3,
} from './StakedExpenditureClientV3.js';

export { StakedExpenditureClientV1 } from './StakedExpenditureClientV1.js';
export { StakedExpenditureClientV2 } from './StakedExpenditureClientV2.js';
export { StakedExpenditureClientV3 } from './StakedExpenditureClientV3.js';

export type AnyStakedExpenditureClient =
  | StakedExpenditureClientV1
  | StakedExpenditureClientV2
  | StakedExpenditureClientV3;

/** @internal */
export const getStakedExpenditureClient = (
  colonyClient: AugmentedIColony,
  address: string,
  version: StakedExpenditureVersion,
): AnyStakedExpenditureClient => {
  switch (version) {
    case 1:
      return getStakedExpenditureClientV1(
        colonyClient as AugmentedIColony<ValidColony>,
        address,
      );
    case 2:
      return getStakedExpenditureClientV2(
        colonyClient as AugmentedIColony<ValidColony>,
        address,
      );
    case 3:
      return getStakedExpenditureClientV3(
        colonyClient as AugmentedIColony<ValidColony>,
        address,
      );
    default:
      return assertExhaustiveSwitch(
        version,
        'Could not find StakedExpenditure version',
      );
  }
};
