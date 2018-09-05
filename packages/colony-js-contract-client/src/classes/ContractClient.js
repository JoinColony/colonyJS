/* @flow */

import type { Query } from '@colony/colony-js-contract-loader';
import type {
  IAdapter,
  IContract,
  TransactionOptions,
  TransactionReceipt,
} from '@colony/colony-js-adapter';

import ContractEvent from './ContractEvent';
import ContractMethod from './ContractMethod';
import ContractMethodCaller from './ContractMethodCaller';
import ContractMethodSender from './ContractMethodSender';
import ContractMethodMultisigSender from './ContractMethodMultisigSender';

import type {
  ContractMethodDef,
  ContractClientConstructorArgs,
  Params,
} from '../flowtypes';

export default class ContractClient {
  // The adapter used to communicate with the blockchain
  adapter: IAdapter;

  // The contract interface (as provided by the adapter)
  _contract: IContract;

  // The contract loading query the class was constructed with
  _query: Query;

  // The contract event subscription methods
  events = {};

  // Static getters used in lieu of named exports; this package only has
  // one export.
  static get Caller(): typeof ContractMethodCaller {
    return ContractMethodCaller;
  }
  static get Sender(): typeof ContractMethodSender {
    return ContractMethodSender;
  }
  static get MultisigSender(): typeof ContractMethodMultisigSender {
    return ContractMethodMultisigSender;
  }
  static get Event(): typeof ContractEvent {
    return ContractEvent;
  }

  static get defaultQuery(): Query {
    // eslint-disable-next-line no-console
    console.warn(
      'No query defined; defaultQuery is designed to be ' +
        'defined in a derived class',
    );
    return {};
  }

  constructor({ adapter, query }: ContractClientConstructorArgs) {
    this.adapter = adapter;
    this._query = Object.assign({}, this.constructor.defaultQuery, query);
  }

  get contract() {
    if (!this._contract)
      throw new Error('Contract not loaded; did you forget to call `.init()`?');
    return this._contract;
  }

  async init() {
    if (this._contract) throw new Error('ContractClient already initialized');

    this._contract = await this.adapter.getContract(this._query);
    this.initializeContractMethods();
    return this;
  }

  /**
   * Designed to be overridden in a derived class; called in the constructor.
   */
  // eslint-disable-next-line class-methods-use-this
  initializeContractMethods(): void {}

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

  /**
   * Given a transaction receipt, decode the event logs with the contract
   * interface, then use the corresponding ContractEvents to collect event data.
   */
  getReceiptEventData({ logs = [] }: TransactionReceipt) {
    const { events } = this.contract.interface;
    const eventNames = Object.keys(events);
    return (
      logs
        // Find matching event info by the topic
        .map(log => {
          const eventName = eventNames.find(name =>
            // The first topic should be the hashed event signature
            log.topics.includes(events[name].topics[0]),
          );
          return eventName ? { ...log, eventInfo: events[eventName] } : null;
        })
        // Filter out logs we couldn't find on the interface as events
        .filter(Boolean)
        // Parse the event data and add it to a resulting object
        .reduce((acc, { eventInfo, topics, data }) => {
          const args = eventInfo.parse(topics, data);

          const event = this.events[eventInfo.name];
          if (!event) throw new Error(`Event ${eventInfo.name} not found`);

          // Add the event data both at the top level and under the event name
          const eventData = event.parse(args);
          return Object.assign(acc, {
            ...eventData,
            [eventInfo.name]: eventData,
          });
        }, {})
    );
  }

  createTransactionData(functionName: string, args: Array<any>): string {
    return this.contract.createTransactionData(functionName, args);
  }

  addMethod(
    Method: typeof ContractMethod.constructor,
    name: string,
    def: ContractMethodDef<*>,
  ): void {
    if (Reflect.has(this, name))
      throw new Error(`A ContractMethod named "${name}" already exists`);

    Object.assign(this, {
      [name]: new Method({ name, functionName: name, client: this, ...def }),
    });
  }

  addCaller(name: string, def: Object): void {
    this.addMethod(this.constructor.Caller, name, def);
  }

  addSender(name: string, def: Object): void {
    this.addMethod(this.constructor.Sender, name, def);
  }

  addMultisigSender(name: string, def: Object): void {
    this.addMethod(this.constructor.MultisigSender, name, def);
  }

  /**
   * Add event subscription functionality for a particular event of this
   * contract to the given ContractClient instance.
   */
  addEvent(eventName: string, argsDef: Params): void {
    if (Reflect.has(this.events, eventName)) {
      throw new Error(`An event named "${eventName}" already exists`);
    }

    Object.assign(this.events, {
      [eventName]: new ContractEvent({
        eventName,
        client: this,
        argsDef,
      }),
    });
  }
}
