/* @flow */

// eslint-disable-next-line max-len
import type { Options as LoaderOptions } from '@colony/colony-js-contract-loader';
import type { IAdapter, IContract } from '@colony/colony-js-adapter';

import ViewFunction from './ViewFunction';
import TxFunction from './TxFunction';

import type { TxFunctionDef, ViewFunctionDef } from '../types';

type ViewFunctionDefs = {
  [name: string]: ViewFunctionDef,
};

type TxFunctionDefs = {
  [name: string]: TxFunctionDef,
};

export default class ContractClient<ContractInterface: IContract> {
  adapter: IAdapter<ContractInterface>;
  contract: ContractInterface;
  +viewFunctionDefs: ViewFunctionDefs;
  +txFunctionDefs: TxFunctionDefs;
  static get ViewFunction(): typeof ViewFunction {
    return ViewFunction;
  }
  static get TxFunction(): typeof TxFunction {
    return TxFunction;
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
    this._createViews();
    this._createFunctions();
  }
  // eslint-disable-next-line class-methods-use-this
  get viewFunctionDefs(): ViewFunctionDefs {
    return {};
  }
  // eslint-disable-next-line class-methods-use-this
  get txFunctionDefs(): TxFunctionDefs {
    return {};
  }
  createTxFunction<Params: {}, EventData: {}>(
    name: string,
    def: TxFunctionDef,
  ): void {
    const sender: TxFunction<
      Params,
      EventData,
      ContractClient<*>,
    > = this.constructor.TxFunction.create(this, def);
    Object.assign(this, { [name]: sender });
  }
  createViewFunction<Params: {}, EventData: {}>(
    name: string,
    def: ViewFunctionDef,
  ): void {
    const caller: ViewFunction<
      Params,
      EventData,
      ContractClient<*>,
    > = this.constructor.ViewFunction.create(this, def);
    Object.assign(this, { [name]: caller });
  }
  _createViews(): void {
    Object.entries(this.viewFunctionDefs).forEach(([name, def]) => {
      this.createViewFunction(name, def);
    });
  }
  _createFunctions(): void {
    Object.entries(this.txFunctionDefs).forEach(([name, def]) => {
      this.createTxFunction(name, def);
    });
  }
}
