/* @flow */

import { raceAgainstTimeout } from '@colony/colony-js-utils';
import type {
  IContract,
  IAdapter,
  IProvider,
  IWallet,
  Event,
  EventHandler,
  EventHandlers,
} from '@colony/colony-js-adapter';
import type {
  IContractLoader,
  Options as LoaderOptions,
} from '@colony/colony-js-contract-loader';

import EthersContract from './EthersContract';

type ConstructorArgs = {
  loader: IContractLoader,
  provider: IProvider,
  wallet: IWallet,
};

export default class EthersAdapter implements IAdapter<*> {
  _loader: IContractLoader;
  _provider: IProvider;
  _wallet: IWallet;
  constructor({ loader, provider, wallet }: ConstructorArgs) {
    this._loader = loader;
    this._provider = provider;
    this._wallet = wallet;
  }
  async getContract(
    contractName: string,
    loaderOptions?: LoaderOptions,
  ): Promise<IContract> {
    const { address, abi } = await this._loader.load(
      contractName,
      loaderOptions,
    );
    return new EthersContract(address, abi, this._wallet);
  }
  static getEventPromises({
    events,
    timeoutMs,
    transactionHash,
  }: {
    events: { [eventName: string]: EventHandler },
    timeoutMs: number,
    transactionHash: string,
  }): Array<Promise<*>> {
    const mapEventToPromise = eventName => {
      let contract;
      let handler;
      return raceAgainstTimeout(
        new Promise(resolve => {
          ({ contract, handler } = events[eventName]);
          contract.addListener(eventName, transactionHash, ({ args }: Event) =>
            resolve(handler(args)),
          );
        }),
        timeoutMs,
        () => contract.removeListener(eventName, transactionHash),
      );
    };
    return Object.getOwnPropertyNames(events).map(mapEventToPromise);
  }

  // XXX this isn't a static method because we can't define it as such
  // in the Interface thanks to Flow
  // eslint-disable-next-line class-methods-use-this
  async getEventData({
    events: { success = {}, error = {} },
    transactionHash,
    timeoutMs,
  }: {
    events: EventHandlers,
    timeoutMs: number,
    transactionHash: string,
  }): Promise<{}> {
    const successPromises = this.constructor.getEventPromises({
      events: success,
      timeoutMs,
      transactionHash,
    });
    const errorPromises = this.constructor.getEventPromises({
      events: error,
      timeoutMs,
      transactionHash,
    });
    try {
      // Wait for all success events to resolve, or reject on any error event
      return Object.assign(
        {},
        ...(await Promise.race([
          Promise.all(successPromises),
          ...errorPromises,
        ])),
      );
    } finally {
      Object.entries({ ...success, ...error }).forEach(
        ([eventName, { contract }]) => {
          contract.removeListener(eventName, transactionHash);
        },
      );
    }
  }
  async getTransactionReceipt(transactionHash: string) {
    return this._provider.getTransactionReceipt(transactionHash);
  }
  async waitForTransaction(transactionHash: string, timeoutMs?: number) {
    return this._provider.waitForTransaction(transactionHash, timeoutMs);
  }
}
