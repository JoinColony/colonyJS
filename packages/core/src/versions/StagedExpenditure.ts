import type { ColonyVersion } from './IColony.js';

import { createContractVersionArray } from './utils.js';

const STAGED_EXPENDITURE_VERSION_NEXT = 4;

/** @internal */
export const STAGED_EXPENDITURE_VERSIONS = createContractVersionArray(
  STAGED_EXPENDITURE_VERSION_NEXT,
);

export type StagedExpenditureVersion =
  (typeof STAGED_EXPENDITURE_VERSIONS)[number];

/** @internal */
export const stagedExpenditureIncompatibilityMap: Record<
  StagedExpenditureVersion,
  Array<ColonyVersion>
> = {
  1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
  2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
  3: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
};

/** @internal */
export const STAGED_EXPENDITURE_VERSION_LATEST =
  (STAGED_EXPENDITURE_VERSION_NEXT - 1) as StagedExpenditureVersion;
