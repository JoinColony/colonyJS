/* @flow */

import type {
  EventHandlers,
  CallFn,
  SendFn,
  EstimateFn,
} from '@colony/colony-js-adapter';

export type ParamTypes = 'number' | 'string' | 'address' | 'boolean';

export type ParamTypePair = [string, ParamTypes];

export type ParamTypePairs = Array<ParamTypePair>;

export type CallerDef = {
  callFn: CallFn<*, *>,
  params: ParamTypePairs,
  returnValues: ParamTypePairs,
};

export type SenderDef = {
  estimateFn: EstimateFn<*>,
  eventHandlers?: EventHandlers,
  params: ParamTypePairs,
  sendFn: SendFn<*>,
  getArgs?: (*) => Array<*>,
};
