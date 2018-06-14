/* eslint-env jest */
/* eslint-disable no-underscore-dangle,no-console */

import createSandbox from 'jest-sandbox';
import ContractClient from '../classes/ContractClient';
import ContractEvent from '../classes/ContractEvent';
import MockEmittingContract from '../mocks/MockEmittingContract';

import {
  outputValues,
  parsedOutputValues,
  valuesSpec,
} from '../mocks/mockValues';

describe('ContractEvent', () => {
  const sandbox = createSandbox();
  let contract;
  let adapter;
  let client;

  const eventName = 'AwesomeEvent';
  const simpleArgsDef = [['foo', 'number'], ['bar', 'string']];

  beforeEach(async done => {
    sandbox.clear();

    contract = new MockEmittingContract();
    adapter = { getContract: sandbox.fn(() => contract) };
    client = new ContractClient({ adapter });
    await client.init();

    done();
  });

  test('Event caller adding, calling and removal', () => {
    const handlerA = sandbox.fn();
    const handlerB = sandbox.fn();

    const argsA = { foo: 1, bar: 'baz' };
    const argsB = { foo: 2, bar: 'zab' };

    const event = new ContractEvent({
      client,
      eventName,
      argsDef: simpleArgsDef,
    });

    // Add Handlers
    event.addListener(handlerA);
    event.addListener(handlerA);
    event.addListener(handlerB);

    contract._dispatchEvent(eventName, argsA);

    expect(handlerA).toHaveBeenCalledTimes(1);
    expect(handlerA).toHaveBeenCalledWith(argsA);
    expect(handlerB).toHaveBeenCalledTimes(1);
    expect(handlerB).toHaveBeenCalledWith(argsA);

    // Remove some handlers
    event.removeListener(handlerB);

    contract._dispatchEvent(eventName, argsB);

    expect(handlerA).toHaveBeenCalledTimes(2);
    expect(handlerA).toHaveBeenCalledWith(argsB);
    expect(handlerB).toHaveBeenCalledTimes(1);

    // Remove all handlers
    event.removeListener(handlerA);

    expect(handlerA).toHaveBeenCalledTimes(2);
    expect(handlerB).toHaveBeenCalledTimes(1);

    expect(event._wrappedHandlers.size).toEqual(0);
  });

  test('Event parameters validation', () => {
    const handler = sandbox.fn();

    const event = new ContractEvent({
      client,
      eventName,
      argsDef: simpleArgsDef,
    });

    const invalidArgs = [
      // Wrong type
      {
        foo: 1,
        bar: 0,
      },

      // Missing field
      {
        foo: 0,
      },
    ];

    event.addListener(handler);

    invalidArgs.forEach(args =>
      expect(() => contract._dispatchEvent(eventName, args)).toThrowError(),
    );

    expect(handler).toHaveBeenCalledTimes(0);
  });

  test('Event parameters parsing', () => {
    const handler = sandbox.fn();

    const event = new ContractEvent({
      client,
      eventName,
      argsDef: valuesSpec,
    });

    event.addListener(handler);

    // Parsing string to number
    contract._dispatchEvent(eventName, outputValues);

    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler).toHaveBeenCalledWith(parsedOutputValues);
  });
});
