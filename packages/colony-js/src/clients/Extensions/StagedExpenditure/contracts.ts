// Always add the next StagedExpenditure version here
import type { StagedExpenditure as StagedExpenditure1 } from '../../../contracts/StagedExpenditure/1/index.js';
import type { StagedExpenditure as StagedExpenditure2 } from '../../../contracts/StagedExpenditure/2/index.js';

// Always adjust to the latest factory
export { StagedExpenditure__factory as StagedExpenditureFactory } from '../../../contracts/StagedExpenditure/2/factories/StagedExpenditure__factory.js';

export type StagedExpenditureV1 = StagedExpenditure1;
export type StagedExpenditureV2 = StagedExpenditure2;

export type AnyStagedExpenditure = StagedExpenditure1 | StagedExpenditure2;
