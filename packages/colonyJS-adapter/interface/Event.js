/* @flow */

import type { Block } from './Block';
import type { Transaction } from './Transaction';
import type { TransactionReceipt } from './TransactionReceipt';

export interface Event {
  blockNumber: number;
  blockHash: string;
  transactionIndex: number;
  address: string; // contract address
  data: string;
  topics: Array<string>; // topic hashes
  transactionHash: string;
  logIndex: number;
  args: {
    [paramIndexOrName: number | string]: *,
    length: number,
  };
  event: string; // 'MyEvent'
  eventSignature: string; // 'MyEvent(uint8)'
  getBlock(): Promise<Block>;
  getTransaction(): Promise<Transaction>;
  getTransactionReceipt(): Promise<TransactionReceipt>;
}
