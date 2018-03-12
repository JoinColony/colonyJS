/* @flow */

import ethers from 'ethers';

import type { IContract, IWallet, Event } from '@colony/colony-js-adapter';

type EventListenerCallback = (event: Event) => void;

class EthersContract extends ethers.Contract implements IContract {
  _listeners: Map<string, EventListenerCallback>;
  constructor(address: string, abi: {}, wallet: IWallet) {
    super(address, abi, wallet);
    this._listeners = new Map();
    this._initialiseEvents();
  }
  _initialiseEvents() {
    Object.getOwnPropertyNames(this.events).forEach(eventName => {
      const self = this;
      this.events[eventName] = function eventDispatcher() {
        self.dispatchEvent(this);
      };
    });
  }
  dispatchEvent(event: Event) {
    const key = `${event.event}-${event.transactionHash}`;
    const callback = this._listeners.get(key);
    if (callback) {
      this.removeListener(event.event, event.transactionHash);
      callback(event);
    }
  }
  addListener(eventName: string, transactionHash: string, callback: Function) {
    this._listeners.set(`${eventName}-${transactionHash}`, callback);
  }
  removeListener(eventName: string, transactionHash: string) {
    this._listeners.delete(`${eventName}-${transactionHash}`);
  }
}

export default EthersContract;
