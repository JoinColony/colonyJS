/* @flow */

import type { Event } from './Event';
import type { Provider } from './Provider';

export interface Contract {
  address: string;
  constructor(address: string, abi: {}, provider: Provider): Contract;
  estimate: *;
  functions: *;
  events: {
    // e.g. onMyEventName
    [string]: (Function) => void,
  };
  connect: Provider => Contract;
  addListener(
    eventName: string,
    transactionHash: string,
    callback: (event: Event) => void,
  ): void;
  removeListener(eventName: string, transactionHash: string): void;
}
