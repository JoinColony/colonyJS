/* @flow */

import utils from '@colony/colony-js-utils';
import type { IContract, IAdapter, IProvider } from '@colony/colony-js-adapter';
import type { IContractLoader, Query } from '@colony/colony-js-contract-loader';

import EthersContract from './EthersContract';

type Options = {};

type ConstructorArgs = {
  loader: IContractLoader<Options>,
  provider: IProvider,
};

export default class EthersAdapter implements IAdapter<Options> {
  _loader: IContractLoader<Options>;
  _provider: IProvider;
  constructor({ loader, provider }: ConstructorArgs) {
    this._loader = loader;
    this._provider = provider;
  }
  async getContract(query: Query, options?: Options): Promise<IContract> {
    const { address, abi } = await this._loader.load(query, options);
    return new EthersContract(address, abi, this._provider);
  }
  // eslint-disable-next-line class-methods-use-this
  getEventPromises({
    contract,
    events,
    timeoutMs,
    transactionHash,
  }: {
    contract: IContract,
    events: Array<string>,
    timeoutMs: number,
    transactionHash: string,
  }) {
    return events.map(eventName =>
      utils.raceAgainstTimeout(
        new Promise(resolve => {
          contract.addListener(eventName, transactionHash, event => {
            resolve(event);
          });
        }),
        timeoutMs,
        () => {
          contract.removeListener(eventName, transactionHash);
        },
      ),
    );
  }
  async getTransactionReceipt(transactionHash: string) {
    return this._provider.getTransactionReceipt(transactionHash);
  }
  async waitForTransaction(transactionHash: string, timeoutMs?: number) {
    return this._provider.waitForTransaction(transactionHash, timeoutMs);
  }
}
