/* @flow */

export type EventHandler = (...*) => {};

export type EventHandlers = {
  [eventName: string]: EventHandler,
};
