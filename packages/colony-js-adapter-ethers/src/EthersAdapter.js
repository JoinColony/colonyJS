/* @flow */

import ethers from 'ethers';
import type { IContract, IAdapter, IProvider } from '@colony/colony-js-adapter';
import type {
  IContractLoader,
  Query,
  Options,
} from '@colony/colony-js-contract-loader';

type ConstructorArgs = {
  loader: IContractLoader,
  provider: IProvider,
};

export default class EthersAdapter implements IAdapter {
  _loader: IContractLoader;
  _provider: IProvider;

  constructor({ loader, provider }: ConstructorArgs) {
    this._loader = loader;
    this._provider = provider;
  }
  _createContract(address: string, abi: Object): IContract {
    // The Contract interface is currently based on the ethers implementation,
    // so no other transformation is necessary.
    return new ethers.Contract(address, abi, this._provider);
  }
  async getContract(query: Query, options?: Options): Promise<IContract> {
    const { address, abi } = await this._loader.load(query, options);
    return this._createContract(address, abi);
  }
}
