/* @flow */

// Very simple type definitions for ethers

// eslint-disable-next-line no-unused-vars
import type Big from './npm/big.js_v3.x.x';

declare module 'ethers' {
  declare class Provider {
    getAddress(): string | Promise<string>;
    estimateGas: (transaction: any) => Promise<Big>;
    sendTransaction: (transaction: any) => Promise<any>;
    sign: (transaction: any) => string | Promise<string>;
  }

  declare class Contract {
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

  declare module.exports: {
    Contract: typeof Contract,
    Provider: typeof Provider,
  };
}
