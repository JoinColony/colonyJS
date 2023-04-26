import type { ColonyVersion } from './IColony';

import { createContractVersionArray } from './utils';

const STAKED_EXPENDITURE_VERSION_NEXT = 3;

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
};

/** @internal */
export const STAKED_EXPENDITURE_VERSION_LATEST =
  (STAKED_EXPENDITURE_VERSION_NEXT - 1) as StakedExpenditureVersion;
