/* @flow */

// eslint-disable-next-line max-len
import type { Options as LoaderOptions } from '@colony/colony-js-contract-loader';
import type { IAdapter, IContract } from '@colony/colony-js-adapter';

import Caller from './Caller';
import Sender from './Sender';

import type { SenderDef, CallerDef } from '../types';

type CallerDefs = {
  [name: string]: CallerDef,
};

type SenderDefs = {
  [name: string]: SenderDef,
};

export default class ContractClient<ContractInterface: IContract> {
  adapter: IAdapter<ContractInterface>;
  contract: ContractInterface;
  +callerDefs: CallerDefs;
  +senderDefs: SenderDefs;
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
    options = {},
  }: {
    adapter: IAdapter<ContractInterface>,
    contract: ContractInterface,
    options?: *,
  }) {
    this.adapter = adapter;
    this.contract = contract;
    this._createCallers();
    this._createSenders(options);
  }
  // eslint-disable-next-line class-methods-use-this
  getCallerDefs(): CallerDefs {
    return {};
  }
  // eslint-disable-next-line class-methods-use-this,no-unused-vars
  getSenderDefs(options?: *): SenderDefs {
    return {};
  }
  createSender<Params: {}, EventData: {}>(name: string, def: SenderDef): void {
    const sender: Sender<
      Params,
      EventData,
      ContractClient<*>,
    > = this.constructor.Sender.create(this, def);
    Object.assign(this, { [name]: sender });
  }
  createCaller<Params: {}, EventData: {}>(name: string, def: CallerDef): void {
    const caller: Caller<
      Params,
      EventData,
      ContractClient<*>,
    > = this.constructor.Caller.create(this, def);
    Object.assign(this, { [name]: caller });
  }
  _createCallers(): void {
    Object.entries(this.getCallerDefs()).forEach(([name, def]) => {
      this.createCaller(name, def);
    });
  }
  _createSenders(options?: *): void {
    Object.entries(this.getSenderDefs(options)).forEach(([name, def]) => {
      this.createSender(name, def);
    });
  }
}
