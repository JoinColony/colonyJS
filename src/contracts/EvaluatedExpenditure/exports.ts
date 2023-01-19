// Always add the next EvaluatedExpenditure version here
import type { EvaluatedExpenditure as EvaluatedExpenditure1 } from './1';
import type { EvaluatedExpenditure as EvaluatedExpenditure2 } from './2';
import type { EvaluatedExpenditure as EvaluatedExpenditure3 } from './3';

// Always adjust to the latest factory
export { EvaluatedExpenditure__factory as EvaluatedExpenditureFactory } from './3/factories/EvaluatedExpenditure__factory';

export type EvaluatedExpenditureV1 = EvaluatedExpenditure1;
export type EvaluatedExpenditureV2 = EvaluatedExpenditure2;
export type EvaluatedExpenditureV3 = EvaluatedExpenditure3;

export type AnyEvaluatedExpenditure =
  | EvaluatedExpenditure1
  | EvaluatedExpenditure2
  | EvaluatedExpenditure3;
