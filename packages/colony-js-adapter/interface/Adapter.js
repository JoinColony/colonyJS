/* @flow */

import ContractLoader from '@colony/colony-js-contract-loader';
import type { Query } from '@colony/colony-js-contract-loader';
import type { Contract } from './Contract';
import type { Provider } from './Provider';
import type { Signature } from './Signature';
import type { Transaction } from './Transaction';
import type { TransactionReceipt } from './TransactionReceipt';
import type { Wallet } from './Wallet';

export interface Adapter {
  loader: ContractLoader;
  provider: Provider;
  wallet: Wallet;
  ecRecover(digest: Array<number>, signature: Signature): string;
  getContract(query: Query): Promise<Contract>;
  getContractDeployTransaction(
    query: Query,
    contractParams: Array<any>,
  ): Promise<Transaction>;
  waitForTransaction(
    transactionHash: string,
    timeoutMs?: number,
  ): Promise<Transaction>;
  getTransactionReceipt(
    transactionHash: string,
    timeoutMs?: number,
  ): Promise<TransactionReceipt>;
  signMessage(messageHash: string): Promise<Signature>;
}
