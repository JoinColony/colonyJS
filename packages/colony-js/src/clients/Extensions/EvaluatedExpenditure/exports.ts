import type { EvaluatedExpenditureVersion } from '@colony/core';

import { assertExhaustiveSwitch } from '@colony/core/utils';

import { AugmentedIColony } from '../../Core/augments/commonAugments';
import { ValidColony } from './augments/commonAugments';

import getEvaluatedExpenditureClientV1, {
  EvaluatedExpenditureClientV1,
} from './EvaluatedExpenditureClientV1';
import getEvaluatedExpenditureClientV2, {
  EvaluatedExpenditureClientV2,
} from './EvaluatedExpenditureClientV2';
import getEvaluatedExpenditureClientV3, {
  EvaluatedExpenditureClientV3,
} from './EvaluatedExpenditureClientV3';

export { EvaluatedExpenditureClientV1 } from './EvaluatedExpenditureClientV1';
export { EvaluatedExpenditureClientV2 } from './EvaluatedExpenditureClientV2';
export { EvaluatedExpenditureClientV3 } from './EvaluatedExpenditureClientV3';

export type AnyEvaluatedExpenditureClient =
  | EvaluatedExpenditureClientV1
  | EvaluatedExpenditureClientV2
  | EvaluatedExpenditureClientV3;

/** @internal */
export const getEvaluatedExpenditureClient = (
  colonyClient: AugmentedIColony,
  address: string,
  version: EvaluatedExpenditureVersion,
): AnyEvaluatedExpenditureClient => {
  switch (version) {
    case 1:
      return getEvaluatedExpenditureClientV1(
        colonyClient as AugmentedIColony<ValidColony>,
        address,
      );
    case 2:
      return getEvaluatedExpenditureClientV2(
        colonyClient as AugmentedIColony<ValidColony>,
        address,
      );
    case 3:
      return getEvaluatedExpenditureClientV3(
        colonyClient as AugmentedIColony<ValidColony>,
        address,
      );
    default:
      return assertExhaustiveSwitch(
        version,
        'Could not find EvaluatedExpenditure version',
      );
  }
};
