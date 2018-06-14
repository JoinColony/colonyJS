// @flow
import type { EventCallback } from '@colony/colony-js-adapter';

export default class MockEmittingContract {
  _listeners = [];

  addListener(name: string, callback: EventCallback) {
    this._listeners.push({ name, callback });
  }

  removeListener(name: string, callback: EventCallback) {
    this._listeners = this._listeners.filter(
      listener => listener.name !== name || listener.callback !== callback,
    );
  }

  _dispatchEvent(name: string, data: Object) {
    this._listeners
      .filter(listener => listener.name === name)
      .forEach(listener =>
        listener.callback({
          event: name,
          args: data,
        }),
      );
  }
}
