import { ColonyVersion } from '../../../clients/Core/exports';
import {
  assertExhaustiveSwitch,
  createContractVersionArray,
} from '../../../utils';
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
import getEvaluatedExpenditureClientV4, {
  EvaluatedExpenditureClientV4,
} from './EvaluatedExpenditureClientV4';

const EVALUATED_EXPENDITURE_VERSION_NEXT = 5;

/** @internal */
export const EVALUATED_EXPENDITURE_VERSION_LATEST =
  EVALUATED_EXPENDITURE_VERSION_NEXT - 1;

export { EvaluatedExpenditureClientV1 } from './EvaluatedExpenditureClientV1';
export { EvaluatedExpenditureClientV2 } from './EvaluatedExpenditureClientV2';
export { EvaluatedExpenditureClientV3 } from './EvaluatedExpenditureClientV3';
export { EvaluatedExpenditureClientV4 } from './EvaluatedExpenditureClientV4';

export type AnyEvaluatedExpenditureClient =
  | EvaluatedExpenditureClientV1
  | EvaluatedExpenditureClientV2
  | EvaluatedExpenditureClientV3
  | EvaluatedExpenditureClientV4;

/** @internal */
export const EVALUATED_EXPENDITURE_VERSIONS = createContractVersionArray(
  EVALUATED_EXPENDITURE_VERSION_NEXT,
);
/** @internal */
export type EvaluatedExpenditureVersion =
  typeof EVALUATED_EXPENDITURE_VERSIONS[number];

/** @internal */
export const evaluatedExpenditureIncompatibilityMap: Record<
  EvaluatedExpenditureVersion,
  Array<ColonyVersion>
> = {
  1: [1, 2, 3],
  2: [1, 2, 3],
  3: [1, 2, 3],
  4: [1, 2, 3],
};

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
    case 4:
      return getEvaluatedExpenditureClientV4(
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
