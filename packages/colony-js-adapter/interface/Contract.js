/* @flow */

import type { Event } from './Event';
import type { Wallet } from './Wallet';

export interface Contract {
  address: string;
  constructor(address: string, abi: {}, wallet: Wallet): void;
  estimate: *;
  functions: *;
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
  removeListener(eventName: string, transactionHash: string): void;
  removeListeners(eventNames: Array<string>, transactionHash: string): void;
}
