import type BigNumber from '../../../flow-typed/bignumber';

export interface Provider {
  getAddress(): string | Promise<string>;
  estimateGas: (transaction: any) => Promise<BigNumber>;
  sendTransaction: (transaction: any) => Promise<any>;
  sign: (transaction: any) => string | Promise<string>;
}
