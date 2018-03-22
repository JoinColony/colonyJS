/* @flow */

import type {
  Options as LoaderOptions,
  IContractLoader,
} from '@colony/colony-js-contract-loader';

import type { Contract } from './Contract';
import type { EventHandlers } from './EventHandlers';
import type { Provider } from './Provider';
import type { Wallet } from './Wallet';
import type { MinedTransaction } from './Transaction';
import type { TransactionReceipt } from './TransactionReceipt';

export interface Adapter<ContractInterface: Contract> {
  loader: IContractLoader;
  provider: Provider;
  wallet: Wallet;
  getContract(
    contractName: string,
    loaderOptions?: LoaderOptions,
  ): Promise<ContractInterface>;
  getContractDeployData(
    contractName: string,
    contractParams: Array<any>,
  ): Promise<string>;
  getEventData({
    contract: ContractInterface,
    events: EventHandlers,
    timeoutMs: number,
    transactionHash: string,
  }): Promise<*>;
  getTransactionReceipt(transactionHash: string): Promise<TransactionReceipt>;
  waitForTransaction(
    transactionHash: string,
    timeoutMs?: number,
  ): Promise<MinedTransaction>;
}
