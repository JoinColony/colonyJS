/* @flow */

export type EventHandler = (...*) => {};

export type EventHandlers = {
  success?: {
    [eventName: string]: EventHandler,
  },
  error?: {
    [eventName: string]: EventHandler,
  },
};
