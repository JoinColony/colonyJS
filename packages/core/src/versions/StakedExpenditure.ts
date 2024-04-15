import type { ColonyVersion } from './IColony.js';

import { createContractVersionArray } from './utils.js';

const STAKED_EXPENDITURE_VERSION_NEXT = 7;

/** @internal */
export const STAKED_EXPENDITURE_VERSIONS = createContractVersionArray(
  STAKED_EXPENDITURE_VERSION_NEXT,
);

export type StakedExpenditureVersion =
  (typeof STAKED_EXPENDITURE_VERSIONS)[number];

/** @internal */
export const stakedExpenditureIncompatibilityMap: Record<
  StakedExpenditureVersion,
  Array<ColonyVersion>
> = {
  1: [1, 2, 3],
  2: [1, 2, 3],
  3: [1, 2, 3],
  4: [1, 2, 3],
  5: [1, 2, 3],
  6: [1, 2, 3],
};

/** @internal */
export const STAKED_EXPENDITURE_VERSION_LATEST =
  (STAKED_EXPENDITURE_VERSION_NEXT - 1) as StakedExpenditureVersion;
