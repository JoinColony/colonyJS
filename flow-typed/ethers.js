/* @flow */

// Very simple type definitions for ethers

declare module 'ethers' {
  declare class Contract {
    estimate: { [string]: Function };
    functions: { [string]: Function };
    constructor(address: string, abi: Object, signer: Object): Contract;
  }

  declare module.exports: {
    Contract: typeof Contract,
  };
}
