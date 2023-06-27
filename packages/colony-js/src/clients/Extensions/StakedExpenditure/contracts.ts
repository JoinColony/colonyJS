// Always add the next StakedExpenditure version here
import type { StakedExpenditure as StakedExpenditure1 } from '../../../contracts/StakedExpenditure/1/index.js';
import type { StakedExpenditure as StakedExpenditure2 } from '../../../contracts/StakedExpenditure/2/index.js';

// Always adjust to the latest factory
export { StakedExpenditure__factory as StakedExpenditureFactory } from '../../../contracts/StakedExpenditure/2/factories/StakedExpenditure__factory.js';

export type StakedExpenditureV1 = StakedExpenditure1;
export type StakedExpenditureV2 = StakedExpenditure2;

export type AnyStakedExpenditure = StakedExpenditure1 | StakedExpenditure2;
