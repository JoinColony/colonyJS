/* @flow */

import type { Query } from '@colony/colony-js-contract-loader';
import type {
  IAdapter,
  IContract,
  EventHandlers,
  TransactionOptions,
} from '@colony/colony-js-adapter';

import ContractMethod from './ContractMethod';
import ContractMethodCaller from './ContractMethodCaller';
import ContractMethodSender from './ContractMethodSender';

import type { ContractMethodDef } from '../flowtypes';

export default class ContractClient {
  // The adapter used to communicate with the blockchain
  adapter: IAdapter;

  // The contract interface (as provided by the adapter)
  contract: IContract;

  // Static getters used in lieu of named exports; this package only has
  // one export.
  static get Caller(): typeof ContractMethodCaller {
    return ContractMethodCaller;
  }
  static get Sender(): typeof ContractMethodSender {
    return ContractMethodSender;
  }

  /**
   * Create a new ContractClient based on an adapter and a contract loading
   * query; waits for the adapter to return the contract.
   */
  static async create(adapter: IAdapter, query: Query, options: Object) {
    const contract = await adapter.getContract(query);
    return new this({ adapter, contract, options });
  }

  /**
   * ContractClient constructor
   * Creates a private map of contract methods which are not necessarily
   * initialized as classes (as a performance optmisation).
   * The class is wrapped with a getter that memoizes the contract methods;
   * each one is seamlessly generated and saved the first time it is accessed.
   */
  constructor({
    adapter,
    contract,
    options = {},
  }: {
    adapter: IAdapter,
    contract: IContract,
    options: Object,
  }) {
    this.adapter = adapter;
    this.contract = contract;
    this.initializeContractMethods(options);
  }

  /**
   * Designed to be overridden in a derived class; called in the constructor.
   */
  // eslint-disable-next-line class-methods-use-this
  initializeContractMethods(
    options?: Object, // eslint-disable-line no-unused-vars
  ): void {}

  /**
   * Low-level method to call a named contract function with an array of
   * arguments that have been properly validated for that function.
   */
  async call(functionName: string, args: Array<any>) {
    return this.contract.callConstant(functionName, args);
  }

  /**
   * Low-level method to estimate the gas cost of sending a transaction to
   * call a contract function with an array of arguments that have been
   * properly validated for that function.
   */
  async estimate(functionName: string, args: Array<any>) {
    return this.contract.callEstimate(functionName, args);
  }

  /**
   * Low-level method to send a transaction to a named contract function
   * with an array of arguments that have been properly validated for that
   * function, and optional transaction options.
   */
  async send(
    functionName: string,
    args: Array<any>,
    options: TransactionOptions,
  ) {
    return this.contract.callTransaction(functionName, args, options);
  }

  async getEventData(params: {
    events: EventHandlers,
    timeoutMs: number,
    transactionHash: string,
  }) {
    return this.adapter.getEventData(params);
  }

  createTransactionData(functionName: string, args: Array<any>): string {
    return this.contract.createTransactionData(functionName, args);
  }

  createMethod(
    Method: typeof ContractMethod.constructor,
    name: string,
    def: ContractMethodDef<*>,
  ): void {
    if (Reflect.has(this, name))
      throw new Error(`A ContractMethod named "${name}" already exists`);

    Object.assign(this, {
      [name]: new Method({ functionName: name, client: this, ...def }),
    });
  }

  createCaller(name: string, def: Object): void {
    this.createMethod(this.constructor.Caller, name, def);
  }

  createSender(name: string, def: Object): void {
    this.createMethod(this.constructor.Sender, name, def);
  }
}
