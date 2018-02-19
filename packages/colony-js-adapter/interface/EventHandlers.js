export type EventHandler = (eventArgs: {}) => {};

export type EventHandlers = {
  [eventName: string]: EventHandler,
};
