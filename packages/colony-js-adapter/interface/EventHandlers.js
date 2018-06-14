/* @flow */

import type { Contract } from './Contract';

export type EventCallback = (...*) => void;

export type EventHandler = {
  contract: Contract,
  handler: EventCallback,
};

export type EventHandlers = {
  [eventName: string]: EventHandler,
};
