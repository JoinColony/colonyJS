/* @flow */

import utils from '@colony/colony-js-utils';

// eslint-disable-next-line max-len
import type { Options as LoaderOptions } from '@colony/colony-js-contract-loader';
import type { IAdapter, IContract } from '@colony/colony-js-adapter';
import { DEFAULT_TIMEOUT } from '../constants';

export default class ContractClient<ContractInterface: IContract> {
  adapter: IAdapter<ContractInterface>;
  contract: ContractInterface;
  static async create(
    adapter: IAdapter<ContractInterface>,
    contractName: string,
    loaderOptions: LoaderOptions,
    // eslint-disable-next-line no-unused-vars
    ...args: *
  ): Promise<*> {
    // XXX Derived classes inherit static methods from their parent, so we need to loosely type the return
    // (see https://github.com/facebook/flow/issues/1393)
    const contract = await adapter.getContract(contractName, loaderOptions);
    return new this(adapter, contract);
  }
  constructor(
    adapter: IAdapter<ContractInterface>,
    contract: ContractInterface,
  ) {
    this.adapter = adapter;
    this.contract = contract;
  }
  // eslint-disable-next-line class-methods-use-this
  async call(
    fn: (
      ...args?: *
    ) => Promise<
      // XXX the results of functions implementing `call` have the following tuple arities:
      | [*]
      | [*, *]
      | [*, *, *]
      | [*, *, *, *]
      | [*, *, *, *, *]
      | [*, *, *, *, *, *, *, *, *],
    >,
    { timeoutMs = DEFAULT_TIMEOUT }: { timeoutMs: number } = {},
    ...args: *
  ): Promise<Array<*>> {
    return utils.raceAgainstTimeout(fn(...args), timeoutMs);
  }
}
