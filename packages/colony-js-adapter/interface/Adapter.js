/* @flow */

import type { Query, IContractLoader } from '@colony/colony-js-contract-loader';

import type { Contract } from './Contract';
import type { Event } from './Event';
import type { Provider } from './Provider';
import type { MinedTransaction } from './Transaction';
import type { TransactionReceipt } from './TransactionReceipt';

export interface Adapter<LoaderOptions> {
  _loader: IContractLoader<LoaderOptions>;
  _provider: Provider;
  getContract(query: Query, options?: LoaderOptions): Promise<Contract>;
  getEventPromises({
    contract: Contract,
    events: Array<string>,
    timeoutMs: number,
    transactionHash: string,
  }): Array<Promise<Event>>;
  getTransactionReceipt(transactionHash: string): Promise<TransactionReceipt>;
  waitForTransaction(
    transactionHash: string,
    timeoutMs?: number,
  ): Promise<MinedTransaction>;
}
