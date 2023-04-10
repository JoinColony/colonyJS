// Always add the next StakedExpenditure version here
import type { StakedExpenditure as StakedExpenditure1 } from './1';
import type { StakedExpenditure as StakedExpenditure2 } from './2';

// Always adjust to the latest factory
export { StakedExpenditure__factory as StakedExpenditureFactory } from './2/factories/StakedExpenditure__factory';

export type StakedExpenditureV1 = StakedExpenditure1;
export type StakedExpenditureV2 = StakedExpenditure2;

export type AnyStakedExpenditure = StakedExpenditure1 | StakedExpenditure2;
