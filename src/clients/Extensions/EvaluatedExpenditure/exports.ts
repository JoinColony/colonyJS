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

const EVALUATED_EXPENDITURE_VERSION_NEXT = 3;

/** @internal */
export const EVALUATED_EXPENDITURE_VERSION_LATEST =
  EVALUATED_EXPENDITURE_VERSION_NEXT - 1;

export { EvaluatedExpenditureClientV1 } from './EvaluatedExpenditureClientV1';
export { EvaluatedExpenditureClientV2 } from './EvaluatedExpenditureClientV2';

export type AnyEvaluatedExpenditureClient =
  | EvaluatedExpenditureClientV1
  | EvaluatedExpenditureClientV2;

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
    default:
      return assertExhaustiveSwitch(
        version,
        'Could not find EvaluatedExpenditure version',
      );
  }
};
