import type { EvaluatedExpenditureVersion } from '@colony/core';

import { assertExhaustiveSwitch } from '@colony/core/utils';

import { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import { ValidColony } from './augments/commonAugments.js';

import getEvaluatedExpenditureClientV1, {
  EvaluatedExpenditureClientV1,
} from './EvaluatedExpenditureClientV1.js';
import getEvaluatedExpenditureClientV2, {
  EvaluatedExpenditureClientV2,
} from './EvaluatedExpenditureClientV2.js';
import getEvaluatedExpenditureClientV3, {
  EvaluatedExpenditureClientV3,
} from './EvaluatedExpenditureClientV3.js';

export { EvaluatedExpenditureClientV1 } from './EvaluatedExpenditureClientV1.js';
export { EvaluatedExpenditureClientV2 } from './EvaluatedExpenditureClientV2.js';
export { EvaluatedExpenditureClientV3 } from './EvaluatedExpenditureClientV3.js';

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
