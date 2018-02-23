/* @flow */

// eslint-disable-next-line max-len
import type { Options as LoaderOptions } from '@colony/colony-js-contract-loader';
import type { IAdapter, IContract } from '@colony/colony-js-adapter';

import Caller from './Caller';
import Sender from './Sender';

export default class ContractClient<ContractInterface: IContract> {
  adapter: IAdapter<ContractInterface>;
  contract: ContractInterface;
  static get Caller(): typeof Caller {
    return Caller;
  }
  static get Sender(): typeof Sender {
    return Sender;
  }
  static async create(
    adapter: IAdapter<ContractInterface>,
    contractName: string,
    loaderOptions: LoaderOptions,
    // eslint-disable-next-line no-unused-vars
    lastArg: *,
  ): Promise<*> {
    // XXX Derived classes inherit static methods from their parent, so we need to loosely type the return
    // (see https://github.com/facebook/flow/issues/1393)
    const contract = await adapter.getContract(contractName, loaderOptions);
    return new this({ adapter, contract });
  }
  constructor({
    adapter,
    contract,
  }: {
    adapter: IAdapter<ContractInterface>,
    contract: ContractInterface,
  }) {
    this.adapter = adapter;
    this.contract = contract;
  }
}
