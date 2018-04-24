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

export default class ContractClient<ContractInterface: IContract> {
  // The adapter used to communicate with the blockchain
  adapter: IAdapter<ContractInterface>;

  // The contract interface (as provided by the adapter)
  contract: ContractInterface;

  // A map of the method name to either the method class instance or a function
  // that yields the method.
  _methods: Map<string, *>;

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
   * @param adapter - Blockchain adapter
   * @param query - Contract loading query
   * @param options - Optional options for the constructor
   * @returns {Promise<ContractClient>}
   */
  static async create(
    adapter: IAdapter<ContractInterface>,
    query: Query,
    options: Object,
  ) {
    const contract = await adapter.getContract(query);
    return new this({ adapter, contract, options });
  }

  /**
   * ContractClient constructor
   * Creates a private map of contract methods which are not necessarily
   * initialized as classes (as a performance optmisation).
   * The class is wrapped with a getter that memoizes the contract methods;
   * each one is seamlessly generated and saved the first time it is accessed.
   *
   * @param adapter - Blockchain adapter
   * @param contract - Loaded contract provided by the adapter
   * @param options - optional options for initializing contract methods
   * @returns {ContractClient}
   */
  constructor({
    adapter,
    contract,
    options = {},
  }: {
    adapter: IAdapter<ContractInterface>,
    contract: ContractInterface,
    options: Object,
  }) {
    this.adapter = adapter;
    this.contract = contract;
    this._methods = new Map();
    this.initializeContractMethods(options);

    // Wrap this class with a Proxy to memoize new ContractMethods from their
    // definitions, so we don't need to construct so many and keep them in
    // memory from the start.
    return new Proxy(this, {
      get(target: ContractClient<ContractInterface>, name) {
        // Simplest case first
        // $FlowFixMe https://github.com/facebook/flow/issues/3435
        if (Reflect.has(target, name)) return target[name];

        // Return a method (with memoization), or fall back to the target again;
        // the latter will probably be undefined, but it's more expected to
        // return that rather than explicitly returning undefined here.
        return (
          // eslint-disable-next-line no-underscore-dangle
          target._memoizeMethod(name) ||
          // $FlowFixMe https://github.com/facebook/flow/issues/3435
          target[name]
        );
      },
    });
  }

  /**
   * Designed to be overridden in a derived class; called in the constructor.
   * @param options
   * @returns {Map<any, any>}
   */
  // eslint-disable-next-line class-methods-use-this
  initializeContractMethods(
    options?: Object, // eslint-disable-line no-unused-vars
  ): void {}

  /**
   * Low-level method to call a named contract function with an array of
   * arguments that have been properly validated for that function.
   * @param functionName - Name of the "constant" function on the contract
   * @param args - Array of arguments validated for the contract function
   * @returns {Promise<{}>} - The formatted response as an object
   */
  async call(functionName: string, args: Array<any>) {
    return this.contract.callConstant(functionName, args);
  }

  /**
   * Low-level method to estimate the gas cost of sending a transaction to
   * call a contract function with an array of arguments that have been
   * properly validated for that function.
   * @param functionName - Name of the function on the contract
   * @param args - Array of arguments validated for the contract function
   * @returns {Promise<BigNumber>} - The gas cost estimate as a BigNumber
   */
  async estimate(functionName: string, args: Array<any>) {
    return this.contract.callEstimate(functionName, args);
  }

  /**
   * Low-level method to send a transaction to a named contract function
   * with an array of arguments that have been properly validated for that
   * function, and optional transaction options.
   * @param functionName - Name of the function on the contract with an array
   * @param args - Array of arguments validated for the contract function
   * @param options - Transaction options
   * @returns {Promise<Transaction>} - The sent transaction
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

  _makeMethod(
    Method: typeof ContractMethod,
    name: string,
    def: ContractMethodDef<*>,
  ): void {
    if (this._methods.get(name))
      throw new TypeError(`A ContractMethod named "${name}" already exists`);

    this._methods.set(
      name,
      () =>
        new Method({
          client: this,
          functionName: name,
          ...def,
        }),
    );
  }
  _makeCaller(name: string, def: Object): void {
    this._makeMethod(this.constructor.Caller, name, def);
  }
  _makeSender(name: string, def: Object): void {
    this._makeMethod(this.constructor.Sender, name, def);
  }
  _memoizeMethod(name: string) {
    const methodOrDef = this._methods.get(name);
    // Create the method and overwrite the definition
    if (typeof methodOrDef === 'function') {
      const method = methodOrDef();
      this._methods.set(name, method);
      return method;
    }
    return methodOrDef;
  }
}
