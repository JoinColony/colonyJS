/* @flow */

import type BigNumber from 'bn.js';

import type { Event } from './Event';
import type { Provider } from './Provider';
import type { Transaction } from './Transaction';

export type TransactionOptions = {
  gasLimit?: number,
  gasPrice?: number,
  nonce?: number,
  value?: BigNumber,
};

export type ContractFn<T> = (...T) => Promise<Transaction>;
export type ContractEstimateFn = (...*) => Promise<BigNumber>;

export interface Contract {
  address: string;
  constructor(address: string, abi: {}, provider: Provider): Contract;
  estimate: {
    [string]: Function,
  };
  functions: {
    [string]: Function,
  };
  events: {
    // e.g. onMyEventName
    [string]: (Function) => void,
  };
  connect: Provider => Contract;
  addListener(
    eventName: string,
    transactionHash: string,
    callback: (event: Event) => *,
  ): void;
  removeListener(eventName: string, transactionHash: string): void;
}
