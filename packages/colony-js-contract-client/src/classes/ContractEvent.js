// @flow
/* eslint-disable import/no-cycle */

import type {
  Event,
  EventArgs,
  EventCallback,
  Log,
} from '@colony/colony-js-adapter';
import { makeAssert } from '@colony/colony-js-utils';
import ContractClient from './ContractClient';
import { convertOutputValues } from '../modules/paramConversion';
import { validateParams } from '../modules/paramValidation';

import type { Params } from '../flowtypes';

type AssertionMethod = (assertion: boolean, reason: string) => any;
type TypedEventCallback<ParamTypes> = (args: ParamTypes) => void;

export default class ContractEvent<ParamTypes: Object> {
  // The event's name as defined in the contract.
  eventName: string;

  // The respective contract's ContractClient instance.
  client: ContractClient;

  // The type definitions of the event's arguments.
  argsDef: Params;

  // A store for the event handlers that got wrapped for type validation.
  _wrappedHandlers: Map<EventCallback, EventCallback>;

  // Throwing custom assertion messages.
  assertValid: AssertionMethod;

  constructor({
    eventName,
    client,
    argsDef,
  }: {
    eventName: string,
    client: ContractClient,
    argsDef: Params,
  }) {
    this.eventName = eventName;
    this.client = client;
    this.argsDef = argsDef;

    if (!this.interface)
      throw new Error(`No such event "${eventName}" on this contract`);

    this._wrappedHandlers = new Map();
    this.assertValid = makeAssert(`Validation failed for event ${eventName}`);
  }

  /**
   * In order to be able to parse and validate event parameters as expected,
   * we use this static method to wrap event handlers before executing them.
   */
  static wrapHandlerFunction(
    handlerFunction: TypedEventCallback<ParamTypes>,
    argsDef: Params,
    assertValid: AssertionMethod,
  ): EventCallback {
    return ({ args }: Event) => {
      const parsedArgs = this.parse(args, argsDef, assertValid);
      handlerFunction(parsedArgs);
    };
  }

  static parse(args: EventArgs, argsDef: Params, assertValid: AssertionMethod) {
    const parsedArgs = convertOutputValues(args, argsDef);
    validateParams(parsedArgs, argsDef, assertValid);
    return parsedArgs;
  }

  get interface() {
    return this.client.contract.interface.events[this.eventName];
  }

  /**
   * Given an array of logs, filter matching topics and parse event data from them.
   */
  parseLogs(logs: Log[]): Array<Object> {
    return logs
      .filter(({ topics: [topic] }) => this.interface.topics.includes(topic))
      .map(log => this.parseLog(log));
  }

  /**
   * Given a log, parse its event data.
   */
  parseLog({ topics, data }: Log): Object {
    if (!this.interface.topics.includes(topics[0]))
      throw new Error('Cannot parse unknown topic');
    return this.parse(this.interface.parse(topics, data));
  }

  parse(args: EventArgs) {
    return this.constructor.parse(args, this.argsDef, this.assertValid);
  }

  /**
   * Given the contract this instance has been instantiated on, `addListener`
   * adds a new event handler to the respective event that gets called once the
   * event has been emitted by the contract.
   */
  addListener(handlerFunction: TypedEventCallback<ParamTypes>) {
    if (this._wrappedHandlers.get(handlerFunction)) {
      return;
    }

    const wrappedHandlerFunction = this.constructor.wrapHandlerFunction(
      handlerFunction,
      this.argsDef,
      this.assertValid,
    );

    this.client.contract.addListener(this.eventName, wrappedHandlerFunction);
    this._wrappedHandlers.set(handlerFunction, wrappedHandlerFunction);
  }

  /**
   * If an event handler has been added for this event previously,
   * `removeListener` removes it.
   */
  removeListener(handlerFunction: TypedEventCallback<ParamTypes>) {
    const wrappedHandlerFunction = this._wrappedHandlers.get(handlerFunction);

    if (wrappedHandlerFunction) {
      this.client.contract.removeListener(
        this.eventName,
        wrappedHandlerFunction,
      );

      this._wrappedHandlers.delete(handlerFunction);
    }
  }
}
