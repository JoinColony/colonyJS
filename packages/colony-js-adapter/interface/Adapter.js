/* @flow */

import type {
  Options as LoaderOptions,
  IContractLoader,
} from '@colony/colony-js-contract-loader';

import type { Contract } from './Contract';
import type { EventHandlers } from './EventHandlers';
import type { Provider } from './Provider';
import type { MinedTransaction } from './Transaction';
import type { TransactionReceipt } from './TransactionReceipt';

export interface Adapter<ContractInterface: Contract> {
  _loader: IContractLoader;
  _provider: Provider;
  getContract(
    contractName: string,
    loaderOptions?: LoaderOptions,
  ): Promise<ContractInterface>;
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
