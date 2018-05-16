/* @flow */

import type { IContractLoader, Query } from '@colony/colony-js-contract-loader';

import type { Contract } from './Contract';
import type { EventHandlers } from './EventHandlers';
import type { Provider } from './Provider';
import type { Signature } from './Signature';
import type { Transaction } from './Transaction';
import type { TransactionReceipt } from './TransactionReceipt';
import type { Wallet } from './Wallet';

export interface Adapter {
  loader: IContractLoader;
  provider: Provider;
  wallet: Wallet;
  ecRecover(digest: Array<number>, signature: Signature): string;
  getContract(query: Query): Promise<Contract>;
  getContractDeployTransaction(
    query: Query,
    contractParams: Array<any>,
  ): Promise<Transaction>;
  getEventData({
    events: EventHandlers,
    timeoutMs: number,
    transactionHash: string,
  }): Promise<any>;
  getTransactionReceipt(transactionHash: string): Promise<TransactionReceipt>;
  signMessage(messageHash: string): Promise<Signature>;
}
