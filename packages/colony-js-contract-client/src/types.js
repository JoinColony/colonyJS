/* @flow */

import type {
  EventHandlers,
  CallFn,
  SendFn,
  EstimateFn,
} from '@colony/colony-js-adapter';

export type ParamTypes =
  | 'number'
  | 'string'
  | 'address'
  | 'boolean'
  | 'multisig';

export type ParamTypePair = [string, ParamTypes];

export type ParamTypePairs = Array<ParamTypePair>;

export type CallerDef = {
  call: CallFn<*, *>,
  params?: ParamTypePairs,
  returnValues: ParamTypePairs,
};

export type SenderDef = {
  estimate: EstimateFn<*>,
  eventHandlers?: EventHandlers,
  params: ParamTypePairs,
  send: SendFn<*>,
  getArgs?: (*) => Array<*>,
};
