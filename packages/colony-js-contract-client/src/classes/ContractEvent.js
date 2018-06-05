// @flow
import type { Event, EventCallback } from '@colony/colony-js-adapter';
import ContractClient from '../classes/ContractClient';

import type { EventArgumentsDef } from '../flowtypes';

export type ContractEventProcessor = (handlerFunction: EventCallback) => void;

export default class ContractEvent {
  // The event's name as defined in the contract.
  eventName: string;

  // The respective contract's ContractClient instance.
  client: ContractClient;

  // The type definitions of the event's arguments.
  argsDef: EventArgumentsDef;

  // A store for the event handlers that got wrapped for type validation.
  _wrappedHandlers: Map<EventCallback, EventCallback>;

  constructor({
    eventName,
    client,
    argsDef,
  }: {
    eventName: string,
    client: ContractClient,
    argsDef: EventArgumentsDef,
  }) {
    this.eventName = eventName;
    this.client = client;
    this.argsDef = argsDef;

    this._wrappedHandlers = new Map();
  }

  static wrapHandlerFunction(handlerFunction: EventCallback): EventCallback {
    return ({ args }: Event) => {
      handlerFunction.call(null, args);
    };
  }

  addListener(handlerFunction: EventCallback) {
    if (this._wrappedHandlers.get(handlerFunction)) {
      return;
    }

    const wrappedHandlerFunction = this.constructor.wrapHandlerFunction(
      handlerFunction,
    );

    this.client.contract.addListener(this.eventName, wrappedHandlerFunction);
    this._wrappedHandlers.set(handlerFunction, wrappedHandlerFunction);
  }

  removeListener(handlerFunction: Function) {
    const wrappedHandlerFunction = this._wrappedHandlers.get(handlerFunction);

    if (wrappedHandlerFunction) {
      this.client.contract.removeListener(
        this.eventName,
        wrappedHandlerFunction,
      );
    }
  }
}
