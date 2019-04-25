/* @flow */

import { BN } from 'web3-utils';

import type { Web3EventLog, Web3Receipt } from './types';
import type { ColonyJSOptions } from './index';

export const formatName = (name: string, options: ColonyJSOptions) =>
  options.trimUnderscores ? name.replace(/^_/, '') : name;

export const decorateReturnValue = (
  name: string,
  value: any,
  options: ColonyJSOptions,
) => {
  if (BN.isBN(value)) {
    if (options.convertBNsToStrings) {
      return BN.toString();
    }
    return options.convertIdsToNumbers && name.match(/Id$/)
      ? value.toFixed(0)
      : value;
  }
  return value;
};

export const decorateEvent = (
  { returnValues, ...event }: Web3EventLog,
  options: ColonyJSOptions,
) => ({
  ...event,
  returnValues: Object.keys(returnValues).reduce(
    (decoratedValues, name) => ({
      ...decoratedValues,
      [formatName(name, options)]: decorateReturnValue(
        name,
        returnValues[name],
        options,
      ),
    }),
    {},
  ),
});

export const decorateReceipt = (
  { events = {}, ...receipt }: Web3Receipt,
  options: ColonyJSOptions,
) => ({
  ...receipt,
  events: Object.keys(events).reduce(
    (decoratedEvents, eventName) => ({
      ...decoratedEvents,
      [eventName]: decorateEvent(events[eventName], options),
    }),
    {},
  ),
});

export const decorateConstantCallReturn = (
  name: string,
  options: ColonyJSOptions,
  ...values: any
) =>
  name
    ? values.map(value => decorateReturnValue(name, value, options))
    : values;
