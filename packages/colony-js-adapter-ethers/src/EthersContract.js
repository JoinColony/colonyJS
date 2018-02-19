import ethers from 'ethers';

import type { IContract, IProvider, Event } from '@colony/colony-js-adapter';

type EventListenerCallback = (event: Event) => void;

class EthersContract extends ethers.Contract implements IContract {
  _listeners: Map<string, EventListenerCallback>;
  constructor(address: string, abi: {}, provider: IProvider) {
    super(address, abi, provider);
    this._listeners = new Map();
    this._initialiseEvents();
  }
  _initialiseEvents(): Map<string, [string, Function]> {
    Object.getOwnPropertyNames(this.events).forEach(eventName => {
      const self = this;
      this[`on${eventName.toLowerCase()}`] = function eventDispatcher() {
        self.dispatchEvent(this);
      };
    });
  }
  dispatchEvent(event: Event): void {
    const key = `${event.event}-${event.transactionHash}`;
    const callback = this._listeners.get(key);
    if (callback) {
      this.removeListener(event.event, event.transactionHash);
      callback(event);
    }
  }
  addListener(eventName, transactionHash, callback) {
    this._listeners.set(`${eventName}-${transactionHash}`, callback);
  }
  removeListener(eventName, transactionHash) {
    this._listeners.delete(`${eventName}-${transactionHash}`);
  }
}

export default EthersContract;
