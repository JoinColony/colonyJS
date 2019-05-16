// @flow
import type { EventCallback } from '@colony/colony-js-adapter';

export default class MockEmittingContract {
  _listeners: Array<{
    eventName: string,
    callback: EventCallback,
    transactionHash?: string,
  }> = [];

  addListener(eventName: string, callback: EventCallback) {
    this._listeners.push({ eventName, callback });
  }

  removeListener(eventName: string, callback: EventCallback) {
    this._listeners = this._listeners.filter(
      listener =>
        listener.eventName !== eventName || listener.callback !== callback,
    );
  }

  _dispatchEvent(eventName: string, data: Object) {
    this._listeners
      .filter(listener => listener.eventName === eventName)
      .forEach(listener =>
        listener.callback({
          event: eventName,
          args: data,
        }),
      );
  }
}
