/* @flow */

import type {
  Options as LoaderOptions,
  IContractLoader,
} from '@colony/colony-js-contract-loader';

import type { Contract } from './Contract';
import type { EventHandlers } from './EventHandlers';
import type { Provider } from './Provider';
import type { Transaction } from './Transaction';
import type { TransactionReceipt } from './TransactionReceipt';
import type { Wallet } from './Wallet';

export interface Adapter<ContractInterface: Contract> {
  loader: IContractLoader;
  provider: Provider;
  wallet: Wallet;
  getContract(
    contractName: string,
    loaderOptions?: LoaderOptions,
  ): Promise<ContractInterface>;
  getContractDeployTransaction(
    contractName: string,
    contractParams: Array<any>,
  ): Promise<Transaction>;
  getEventData({
    contract: ContractInterface,
    events: EventHandlers,
    timeoutMs: number,
    transactionHash: string,
  }): Promise<*>;
  getTransactionReceipt(transactionHash: string): Promise<TransactionReceipt>;
}
