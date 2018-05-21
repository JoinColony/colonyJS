/* @flow */

import type BigNumber from 'bn.js';

import type { Event } from './Event';
import type { Transaction } from './Transaction';
import type { TransactionOptions } from './TransactionOptions';
import type { Wallet } from './Wallet';

export interface Contract {
  address: string;
  constructor(address: string, abi: Array<any>, wallet: Wallet): void;
  events: {
    // e.g. onMyEventName
    [string]: (Function) => void,
  };
  connect: Wallet => Contract;
  addListener(
    eventName: string,
    transactionHash: string,
    callback: (event: Event) => void,
  ): void;
  callConstant(functionName: string, args: Array<any>): Promise<any>;
  callEstimate(functionName: string, args: Array<any>): Promise<BigNumber>;
  callTransaction(
    functionName: string,
    args: Array<any>,
    options: TransactionOptions,
  ): Promise<Transaction>;
  createTransactionData(functionName: string, args: Array<any>): string;
  removeListener(eventName: string, transactionHash: string): void;
}
