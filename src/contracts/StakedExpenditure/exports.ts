// Always add the next StakedExpenditure version here
import type { StakedExpenditure as StakedExpenditure1 } from './1';
import type { StakedExpenditure as StakedExpenditure2 } from './2';
import type { StakedExpenditure as StakedExpenditure3 } from './3';
import type { StakedExpenditure as StakedExpenditure4 } from './4';

// Always adjust to the latest factory
export { StakedExpenditure__factory as StakedExpenditureFactory } from './4/factories/StakedExpenditure__factory';

export type StakedExpenditureV1 = StakedExpenditure1;
export type StakedExpenditureV2 = StakedExpenditure2;
export type StakedExpenditureV3 = StakedExpenditure3;
export type StakedExpenditureV4 = StakedExpenditure4;

export type AnyStakedExpenditure =
  | StakedExpenditure1
  | StakedExpenditure2
  | StakedExpenditure3
  | StakedExpenditure4;
