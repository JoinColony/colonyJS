/* @flow */

import type BigNumber from 'bn.js';

import type { Block } from './Block';
import type { Transaction } from './Transaction';
import type { TransactionReceipt } from './TransactionReceipt';

export type LogFilter = {
  address?: string,
  fromBlock?: number,
  toBlock?: 'latest' | number,
  topics?: string[],
};

export type Log = { data: string, topics: string[] };

export interface Provider {
  name: string;
  chainId: string;
  estimateGas(transaction: Transaction): Promise<number>;
  getAddress(): string | Promise<string>;
  getBalance(addressOrName: string, blockTag?: string): Promise<BigNumber>;
  getBlock(blockHashOrBlockNumber: string | number): Promise<Block>;
  getBlockNumber(): Promise<number>;
  getGasPrice(): Promise<BigNumber>;
  getDeployTransaction(
    bytecode: string,
    abi: Array<{}>,
    ...params: any
  ): Transaction;
  getTransaction(transactionHash: string): Promise<Transaction>;
  getTransactionCount(
    addressOrName: string,
    blockTag?: string,
  ): Promise<number>;
  getTransactionReceipt(transactionHash: string): Promise<TransactionReceipt>;
  waitForTransaction(transactionHash: string): Promise<Transaction>;
  lookupAddress(address: string): Promise<string | null>;
  getLogs(logFilter: LogFilter): Promise<Log[]>;
  resolveName(ensName: string): Promise<string | null>;
}
