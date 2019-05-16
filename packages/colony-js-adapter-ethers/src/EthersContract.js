/* @flow */

import ethers from 'ethers';

import type {
  Event,
  EventCallback,
  IContract,
  IWallet,
  TransactionOptions,
} from '@colony/colony-js-adapter';

class EthersContract extends ethers.Contract implements IContract {
  // A map of contract event names to callbacks
  _listeners: Array<{
    eventName: string,
    callback: EventCallback,
    transactionHash?: string,
  }>;

  /**
   * EthersContract constructor
   * Extends `ethers.Contract` with event handling that allows us to
   * wait for event data and return it as the adapter interface specifies
   */
  constructor(address: string, abi: Array<any>, wallet: IWallet) {
    super(address, abi, wallet);
    this._listeners = [];
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

  addListener(
    eventName: string,
    callback: EventCallback,
    transactionHash?: string,
  ) {
    this._listeners.push({
      eventName,
      callback,
      transactionHash,
    });
  }

  removeListener(
    eventName: string,
    callback: Function,
    transactionHash?: string,
  ) {
    const handlerIndex = this._listeners.findIndex(
      eventHandler =>
        eventName === eventHandler.eventName &&
        callback === eventHandler.callback &&
        (!transactionHash || transactionHash === eventHandler.transactionHash),
    );

    if (handlerIndex > -1) {
      this._listeners.splice(handlerIndex, 1);
    }
  }

  _initialiseEvents() {
    Object.getOwnPropertyNames(this.events).forEach(eventName => {
      const self = this;
      this.events[eventName] = function eventDispatcher() {
        // eslint-disable-next-line no-underscore-dangle
        self._dispatchEvent(this);
      };
    });
  }

  _dispatchEvent(event: Event) {
    const eventHandlers = this._listeners.filter(
      ({ eventName, transactionHash }) =>
        eventName === event.event &&
        (!transactionHash || transactionHash === event.transactionHash),
    );

    eventHandlers.forEach(eventHandler => {
      if (eventHandler.transactionHash) {
        this.removeListener(
          event.event,
          eventHandler.callback,
          event.transactionHash,
        );
      }

      eventHandler.callback(event);
    });
  }
}

export default EthersContract;
