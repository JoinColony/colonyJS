/* @flow */

import type { Provider } from './Provider';

export interface Contract {
  address: string;
  constructor(address: string, abi: {}, provider: Provider): Contract;
  estimate: {
    [string]: (*) => Promise<any>,
  };
  functions: {
    [string]: (*) => Promise<any>,
  };
  events: {
    // e.g. onMyEventName
    [string]: (Function) => void,
  };
  connect: Provider => Contract;
}
