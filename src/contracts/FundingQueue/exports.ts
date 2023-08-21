// Always add the next FundingQueue version here
import type { FundingQueue as FundingQueue1 } from './1';
import type { FundingQueue as FundingQueue2 } from './2';
import type { FundingQueue as FundingQueue3 } from './3';
import type { FundingQueue as FundingQueue4 } from './4';
import type { FundingQueue as FundingQueue5 } from './5';
import type { FundingQueue as FundingQueue6 } from './6';

// Always adjust to the latest factory
export { FundingQueue__factory as FundingQueueFactory } from './6/factories/FundingQueue__factory';

export type FundingQueueV1 = FundingQueue1;
export type FundingQueueV2 = FundingQueue2;
export type FundingQueueV3 = FundingQueue3;
export type FundingQueueV4 = FundingQueue4;
export type FundingQueueV5 = FundingQueue5;
export type FundingQueueV6 = FundingQueue6;

export type AnyFundingQueue =
  | FundingQueue1
  | FundingQueue2
  | FundingQueue3
  | FundingQueue4
  | FundingQueue5
  | FundingQueue6;
