/* @flow */

import type { Contract } from './Contract';

type Handler = (...*) => {};

export type EventHandler = {
  contract: Contract,
  handler: Handler,
};

export type EventHandlers = {
  [eventName: string]: EventHandler,
};
