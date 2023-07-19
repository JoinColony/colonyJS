// Always add the next EvaluatedExpenditure version here
import type { EvaluatedExpenditure as EvaluatedExpenditure1 } from '../../../contracts/EvaluatedExpenditure/1/index.js';
import type { EvaluatedExpenditure as EvaluatedExpenditure2 } from '../../../contracts/EvaluatedExpenditure/2/index.js';
import type { EvaluatedExpenditure as EvaluatedExpenditure3 } from '../../../contracts/EvaluatedExpenditure/3/index.js';
import type { EvaluatedExpenditure as EvaluatedExpenditure4 } from '../../../contracts/EvaluatedExpenditure/4/index.js';

// Always adjust to the latest factory
export { EvaluatedExpenditure__factory as EvaluatedExpenditureFactory } from '../../../contracts/EvaluatedExpenditure/4/factories/EvaluatedExpenditure__factory.js';

export type EvaluatedExpenditureV1 = EvaluatedExpenditure1;
export type EvaluatedExpenditureV2 = EvaluatedExpenditure2;
export type EvaluatedExpenditureV3 = EvaluatedExpenditure3;
export type EvaluatedExpenditureV4 = EvaluatedExpenditure4;

export type AnyEvaluatedExpenditure =
  | EvaluatedExpenditure1
  | EvaluatedExpenditure2
  | EvaluatedExpenditure3
  | EvaluatedExpenditure4;
