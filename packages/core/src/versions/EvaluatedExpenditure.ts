import type { ColonyVersion } from './IColony';

import { createContractVersionArray } from './utils';

const EVALUATED_EXPENDITURE_VERSION_NEXT = 4;

/** @internal */
export const EVALUATED_EXPENDITURE_VERSIONS = createContractVersionArray(
  EVALUATED_EXPENDITURE_VERSION_NEXT,
);

export type EvaluatedExpenditureVersion =
  (typeof EVALUATED_EXPENDITURE_VERSIONS)[number];

/** @internal */
export const evaluatedExpenditureIncompatibilityMap: Record<
  EvaluatedExpenditureVersion,
  Array<ColonyVersion>
> = {
  1: [1, 2, 3],
  2: [1, 2, 3],
  3: [1, 2, 3],
};

/** @internal */
export const EVALUATED_EXPENDITURE_VERSION_LATEST =
  (EVALUATED_EXPENDITURE_VERSION_NEXT - 1) as EvaluatedExpenditureVersion;
