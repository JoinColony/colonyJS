// Always add the next FundingQueue version here
import type { FundingQueue as FundingQueue1 } from '../../../contracts/FundingQueue/1/index.js';
import type { FundingQueue as FundingQueue2 } from '../../../contracts/FundingQueue/2/index.js';
import type { FundingQueue as FundingQueue3 } from '../../../contracts/FundingQueue/3/index.js';
import type { FundingQueue as FundingQueue4 } from '../../../contracts/FundingQueue/4/index.js';
import type { FundingQueue as FundingQueue5 } from '../../../contracts/FundingQueue/5/index.js';
import type { FundingQueue as FundingQueue6 } from '../../../contracts/FundingQueue/6/index.js';

// Always adjust to the latest factory
export { FundingQueue__factory as FundingQueueFactory } from '../../../contracts/FundingQueue/6/factories/FundingQueue__factory.js';

export type FundingQueueV1 = FundingQueue1;
export type FundingQueueV2 = FundingQueue2;
export type FundingQueueV3 = FundingQueue3;
export type FundingQueueV4 = FundingQueue4;
export type FundingQueueV5 = FundingQueue5;
export type FundingQueueV6 = FundingQueue6;

export type AnyFundingQueue =
  | FundingQueue2
  | FundingQueue3
  | FundingQueue4
  | FundingQueue5
  | FundingQueue6;
