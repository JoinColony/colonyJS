/* @flow */

import type {
  EventHandlers,
  ViewFunction,
  TxFunction,
  EstimateFn,
} from '@colony/colony-js-adapter';

export type ParamTypes = 'number' | 'string' | 'address' | 'boolean';

export type ParamTypePair = [string, ParamTypes];

export type ParamTypePairs = Array<ParamTypePair>;

export type ViewFunctionDef = {
  call: ViewFunction<*, *>,
  params?: ParamTypePairs,
  returnValues: ParamTypePairs,
};

export type TxFunctionDef = {
  estimate: EstimateFn<*>,
  eventHandlers?: EventHandlers,
  params: ParamTypePairs,
  send: TxFunction<*>,
  getArgs?: (*) => Array<*>,
};
