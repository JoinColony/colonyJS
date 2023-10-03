// Always add the next StakedExpenditure version here
import type { StakedExpenditure as StakedExpenditure1 } from '../../../contracts/StakedExpenditure/1/index.js';
import type { StakedExpenditure as StakedExpenditure2 } from '../../../contracts/StakedExpenditure/2/index.js';
import type { StakedExpenditure as StakedExpenditure3 } from '../../../contracts/StakedExpenditure/3/index.js';
import type { StakedExpenditure as StakedExpenditure4 } from '../../../contracts/StakedExpenditure/4/index.js';

// Always adjust to the latest factory
export { StakedExpenditure__factory as StakedExpenditureFactory } from '../../../contracts/StakedExpenditure/4/factories/StakedExpenditure__factory.js';

export type StakedExpenditureV1 = StakedExpenditure1;
export type StakedExpenditureV2 = StakedExpenditure2;
export type StakedExpenditureV3 = StakedExpenditure3;
export type StakedExpenditureV4 = StakedExpenditure4;

export type AnyStakedExpenditure =
  | StakedExpenditure1
  | StakedExpenditure2
  | StakedExpenditure3
  | StakedExpenditure4;
