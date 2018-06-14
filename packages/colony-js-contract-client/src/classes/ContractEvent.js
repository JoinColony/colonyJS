// @flow
import type { Event, EventCallback } from '@colony/colony-js-adapter';
import { makeAssert } from '@colony/colony-js-utils';
import ContractClient from '../classes/ContractClient';
import { convertOutputValues } from '../modules/paramConversion';
import { validateParams } from '../modules/paramValidation';

import type { Params, EventParams } from '../flowtypes';

type TypedEventCallback<ParamTypes> = (args: ParamTypes) => void;

const normalizeEventParams = (spec: EventParams): Params =>
  spec.map(([parameterName, parameterType]) => [
    parameterName,
    parameterType,
    undefined,
  ]);

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
  assertValid: (...*) => any;

  constructor({
    eventName,
    client,
    argsDef,
  }: {
    eventName: string,
    client: ContractClient,
    argsDef: EventParams,
  }) {
    this.eventName = eventName;
    this.client = client;
    this.argsDef = normalizeEventParams(argsDef);

    this._wrappedHandlers = new Map();
    this.assertValid = makeAssert(`Validation failed for event ${eventName}`);
  }

  /**
   * In order to be able to parse and validate event parameters as expected,
   * we use this static method to wrap event handlers before executing them.
   */
  wrapHandlerFunction(
    handlerFunction: TypedEventCallback<ParamTypes>,
  ): EventCallback {
    return ({ args }: Event) => {
      const parsedArgs = convertOutputValues(args, this.argsDef);
      validateParams(parsedArgs, this.argsDef, this.assertValid);

      handlerFunction(parsedArgs);
    };
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

    const wrappedHandlerFunction = this.wrapHandlerFunction(handlerFunction);

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
