/* @flow */

import isPlainObject from 'lodash.isplainobject';

import type { Params } from '../flowtypes';

export const isBoolean = (value: any) => typeof value === 'boolean';

export const areParamPairsEmpty = (paramPairs: Params) =>
  paramPairs == null || (Array.isArray(paramPairs) && paramPairs.length === 0);

export const isInputEmpty = (input: any) =>
  input == null ||
  (isPlainObject(input) && Object.getOwnPropertyNames(input).length === 0);
