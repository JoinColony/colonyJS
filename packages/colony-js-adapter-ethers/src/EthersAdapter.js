/* @flow */

import utils from '@colony/colony-js-utils';
import type {
  IContract,
  IAdapter,
  IProvider,
  IWallet,
  Event,
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
  // eslint-disable-next-line class-methods-use-this
  async getEventData({
    contract,
    events,
    timeoutMs,
    transactionHash,
  }: {
    contract: IContract,
    events: EventHandlers,
    timeoutMs: number,
    transactionHash: string,
  }): Promise<{}> {
    return Object.assign(
      {},
      ...(await Promise.all(
        Object.getOwnPropertyNames(events).map(eventName =>
          utils.raceAgainstTimeout(
            new Promise(resolve =>
              contract.addListener(
                eventName,
                transactionHash,
                ({ args }: Event) => resolve(events[eventName](args)),
              ),
            ),
            timeoutMs,
            () => contract.removeListener(eventName, transactionHash),
          ),
        ),
      )),
    );
  }
  async getTransactionReceipt(transactionHash: string) {
    return this._provider.getTransactionReceipt(transactionHash);
  }
  async waitForTransaction(transactionHash: string, timeoutMs?: number) {
    return this._provider.waitForTransaction(transactionHash, timeoutMs);
  }
}
