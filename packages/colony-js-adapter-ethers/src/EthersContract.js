import ethers from 'ethers';

import type { IContract, IProvider, Event } from '@colony/colony-js-adapter';

type EventListenerCallback = (event: Event) => *;

class EthersContract extends ethers.Contract implements IContract {
  _listeners: Map<string, EventListenerCallback>;
  // TODO probably not necessary; can't Map use objects or arrays for `===` equality?
  static listenerKey(eventName: string, transactionHash: string): string {
    return `${eventName}-${transactionHash}`;
  }
  constructor(address: string, abi: {}, provider: IProvider) {
    super(address, abi, provider);
    this._listeners = new Map();
    this._initialiseEvents();
  }
  _initialiseEvents(): Map<string, [string, Function]> {
    Object.getOwnPropertyNames(this.events).forEach(eventName => {
      this.events[eventName] = event => {
        this._dispatchEvent(event);
      };
    });
  }
  _dispatchEvent(event: Event): void {
    const key = this.constructor.listenerKey(
      event.event,
      event.transactionHash,
    );
    const callback = this._listeners.get(key);
    if (callback) {
      this.removeListener(event.event, event.transactionHash);
      callback(event);
    }
  }
  addListener(
    eventName: string,
    transactionHash: string,
    callback: EventListenerCallback,
  ): void {
    this._listeners.set(
      this.constructor.listenerKey(eventName, transactionHash),
      callback,
    );
  }
  removeListener(eventName: string, transactionHash: string): void {
    const key = this.constructor.listenerKey(eventName, transactionHash);
    this._listeners.delete(key);
  }
}

export default EthersContract;
