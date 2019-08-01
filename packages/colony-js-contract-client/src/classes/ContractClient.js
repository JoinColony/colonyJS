/* @flow */
/* eslint-disable import/no-cycle */

import flatMap from 'lodash.flatmap';

import type { Query } from '@colony/colony-js-contract-loader';
import type {
  IAdapter,
  IContract,
  Log,
  LogFilter,
  TransactionOptions,
  TransactionReceipt,
  TransactionRequest,
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

  // Mapping of event topics to ContractEvents
  eventSignatures = {};

  // Show additional logs
  verbose: ?boolean;

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

  constructor({ adapter, query, verbose }: ContractClientConstructorArgs) {
    this.adapter = adapter;
    this._query = Object.assign({}, this.constructor.defaultQuery, query);
    this.verbose = verbose;
  }

  get contract() {
    if (!this._contract)
      throw new Error('Contract not loaded; did you forget to call `.init()`?');
    return this._contract;
  }

  get network() {
    // eslint-disable-next-line no-underscore-dangle
    return this.adapter.loader._network || this._query.network;
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

  async callTransaction(transaction: TransactionRequest) {
    return this.adapter.callTransaction(transaction);
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
    return this.contract.sendTransaction(functionName, args, options);
  }

  /**
   * Get logs with filter, and return parsed event logs.
   */
  async getEvents(
    filter?: LogFilter & { eventNames?: Array<string> } = {},
  ): Promise<Array<Object>> {
    const logs = await this.getLogs(filter);
    return this.parseLogs(logs);
  }

  /**
   * Get logs from the contract with filter.
   *
   * The filter `topics` is an array, where each element is a string, array of
   * strings, or null. In each position, these represent a filter which matches
   * events including that single topic, one of any of the array of topics, or
   * any topic in that position respectively.
   *
   * - String: match only this topic in this position
   * - Array: match any of these topics in this position
   * - Null: match any topic in this position
   *
   * The returned logs will match these filters in each position. Trailing null
   * values will require a topic in that position (e.g. [null, null] will only
   * match logs with at least two topics).
   */
  async getLogs(
    filter?: LogFilter & { eventNames?: Array<string> } = {},
  ): Promise<Array<Object>> {
    const { eventNames = [], topics = [] } = filter;

    // Get topics for the given eventNames
    const extraTopics: Array<string> = flatMap(eventNames, eventName => {
      if (!this.events[eventName])
        throw new Error('Cannot get logs for unknown event');
      return this.events[eventName].interface.topics;
    });

    // Combine any existing topics with the extra ones
    if (!topics.length) {
      topics.push(extraTopics);
    } else if (Array.isArray(topics[0])) {
      topics[0].push(...extraTopics);
    } else {
      topics[0] = [topics[0], ...extraTopics];
    }

    // Fetch the logs and parse
    return this.adapter.provider.getLogs({
      ...filter,
      topics,
    });
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
          const eventName = eventNames
            // Filter out events not supported by the interface (e.g. from BYOT)
            .filter(name => !!events[name])
            .find(name =>
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

  parseLogs(logs: Log[]): Array<Object> {
    return logs
      .filter(({ topics: [topic] }) => this.eventSignatures[topic])
      .map(log => ({
        ...this.eventSignatures[log.topics[0]].parseLog(log),
        eventName: this.eventSignatures[log.topics[0]].eventName,
      }));
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

    // Allow initialising of clients where some events may be missing in the
    // ABI, due to changing of events on the contract and then log the error
    // as a warning if the client is initialized in verbose mode.
    try {
      const event = new ContractEvent({
        eventName,
        client: this,
        argsDef,
      });

      Object.assign(this.events, {
        [eventName]: event,
      });

      Object.assign(this.eventSignatures, {
        [event.interface.topics[0]]: event,
      });
    } catch (error) {
      if (this.verbose) {
        console.warn(`WARNING: ${error.message}`);
      }
    }
  }
}
