import type { StakedExpenditureVersion } from '@colony/core';

import { assertExhaustiveSwitch } from '@colony/core/utils';

import { AugmentedIColony } from '../../Core/augments/commonAugments';
import { ValidColony } from './augments/commonAugments';

import getStakedExpenditureClientV1, {
  StakedExpenditureClientV1,
} from './StakedExpenditureClientV1';
import getStakedExpenditureClientV2, {
  StakedExpenditureClientV2,
} from './StakedExpenditureClientV2';

export { StakedExpenditureClientV1 } from './StakedExpenditureClientV1';
export { StakedExpenditureClientV2 } from './StakedExpenditureClientV2';

export type AnyStakedExpenditureClient =
  | StakedExpenditureClientV1
  | StakedExpenditureClientV2;

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
    default:
      return assertExhaustiveSwitch(
        version,
        'Could not find StakedExpenditure version',
      );
  }
};
