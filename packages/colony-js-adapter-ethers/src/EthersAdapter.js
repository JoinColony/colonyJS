/* @flow */

import ethers from 'ethers';
import { raceAgainstTimeout } from '@colony/colony-js-utils';
import type {
  IContract,
  IAdapter,
  IProvider,
  IWallet,
  Event,
  EventHandler,
  EventHandlers,
  Transaction,
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
  loader: IContractLoader;
  provider: IProvider;
  wallet: IWallet;
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
  constructor({ loader, provider, wallet }: ConstructorArgs) {
    this.loader = loader;
    this.provider = provider;
    this.wallet = wallet;
  }
  async getContract(
    contractName: string,
    loaderOptions?: LoaderOptions,
  ): Promise<IContract> {
    const { address, abi } = await this.loader.load(
      contractName,
      loaderOptions,
    );

    if (typeof address !== 'string')
      throw new Error('Unable to parse contract address');

    return new EthersContract(address, abi, this.wallet);
  }
  async getContractDeployTransaction(
    contractName: string,
    contractParams: Array<any>,
    loaderOptions?: LoaderOptions,
  ): Promise<Transaction> {
    const { abi, bytecode } = await this.loader.load(
      contractName,
      loaderOptions,
    );
    return ethers.Contract.getDeployTransaction(
      bytecode,
      abi,
      ...contractParams,
    );
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
    return this.provider.getTransactionReceipt(transactionHash);
  }
}
