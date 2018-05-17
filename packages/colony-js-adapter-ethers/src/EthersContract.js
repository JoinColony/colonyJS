/* @flow */

import ethers from 'ethers';

import type {
  Event,
  IContract,
  IWallet,
  TransactionOptions,
} from '@colony/colony-js-adapter';

import type { EventListenerCallback } from './flowtypes';

class EthersContract extends ethers.Contract implements IContract {
  // A map of contract event names to callbacks
  _listeners: Map<string, EventListenerCallback>;

  /**
   * EthersContract constructor
   * Extends `ethers.Contract` with event handling that allows us to
   * wait for event data and return it as the adapter interface specifies
   */
  constructor(address: string, abi: Array<any>, wallet: IWallet) {
    super(address, abi, wallet);
    this._listeners = new Map();
    this._initialiseEvents();
  }

  /**
   * Given a function name and an array of arguments, apply the arguments and
   * return the resulting value/s.
   */
  async callConstant(functionName: string, args: Array<any>) {
    const fn = this.functions[functionName];
    if (typeof fn !== 'function')
      throw new TypeError(`Function ${functionName} not found on contract`);
    return fn(...args);
  }

  /**
   * Given a function name and an array of arguments, apply the arguments and
   * return the resulting gas cost estimate as a BigNumber
   */
  async callEstimate(functionName: string, args: Array<any>) {
    const fn = this.estimate[functionName];
    if (typeof fn !== 'function')
      throw new TypeError(
        `Estimation function ${functionName} not found on contract`,
      );
    return fn(...args);
  }

  /**
   * Given a function name, an array of arguments and optional transaction
   * options, apply the arguments and return the sent transaction
   */
  async callTransaction(
    functionName: string,
    args: Array<any>,
    options: TransactionOptions,
  ) {
    const fn = this.functions[functionName];
    if (typeof fn !== 'function')
      throw new TypeError(`Function ${functionName} not found on contract`);
    return fn(...args, options);
  }

  /**
   * Given the name of an interface function, and an array of arguments
   * that will be accepted byt that function, get the data from the interface
   * by applying the arguments to it.
   */
  createTransactionData(name: string, args: Array<any>): string {
    const interfaceFn = this.interface.functions[name];
    if (typeof interfaceFn !== 'function')
      throw new TypeError(`Function ${name} not found on contract interface`);
    const { data } = interfaceFn(...args);
    return data;
  }

  addListener(eventName: string, transactionHash: string, callback: Function) {
    this._listeners.set(`${eventName}-${transactionHash}`, callback);
  }
  removeListener(eventName: string, transactionHash: string) {
    this._listeners.delete(`${eventName}-${transactionHash}`);
  }
  _initialiseEvents() {
    Object.getOwnPropertyNames(this.events).forEach(eventName => {
      const self = this;
      this.events[eventName] = function eventDispatcher() {
        self._dispatchEvent(this); // eslint-disable-line no-underscore-dangle
      };
    });
  }
  _dispatchEvent(event: Event) {
    const key = `${event.event}-${event.transactionHash}`;
    const callback = this._listeners.get(key);
    if (callback) {
      this.removeListener(event.event, event.transactionHash);
      callback(event);
    }
  }
}

export default EthersContract;
