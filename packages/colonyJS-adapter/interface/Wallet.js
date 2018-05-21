/* @flow */

import type BigNumber from 'bn.js';

import type { Encryption } from './Encryption';
import type { Transaction, SignedTransaction } from './Transaction';
import type { Provider as IProvider } from './Provider';
import type { TransactionOptions } from './TransactionOptions';
import type { TransactionReceipt } from './TransactionReceipt';

export interface Wallet {
  address: string;
  privateKey: string;
  provider: IProvider;
  encrypt(
    password: string,
    options?: Encryption,
    progressCallback?: (progress: number) => *,
  ): string;
  estimateGas(transaction: Transaction): Promise<BigNumber>;
  getAddress(): string;
  getBalance(blockTag?: string): Promise<BigNumber>;
  getTransactionCount(blockTag?: string): Promise<number>;
  parseTransaction(hexStringOrArrayish: string): Transaction;
  send(
    addressOrName: string,
    amountWei: string,
    options?: TransactionOptions,
  ): Promise<TransactionReceipt>;
  sendTransaction(
    transaction: Transaction,
    options?: TransactionOptions,
  ): Promise<TransactionReceipt>;
  sign(transaction: Transaction): SignedTransaction;
  signMessage(message: string): string;
  verifyMessage(message: string, signature: string): string;
}
