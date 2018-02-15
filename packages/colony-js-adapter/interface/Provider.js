/* @flow */

// import type BigNumber from '../../../flow-typed/bignumber';

export interface Provider {
  getAddress(): string | Promise<string>;
  estimateGas: (transaction: any) => Promise<any>;
  sendTransaction: (transaction: any) => Promise<any>;
  sign: (transaction: any) => string | Promise<string>;
}
