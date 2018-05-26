/* @flow */

import isPlainObject from 'lodash.isplainobject';

import type { ParamTypePairs } from '../flowtypes';

export const isBoolean = (value: any) => typeof value === 'boolean';

export const areParamPairsEmpty = (paramPairs: ParamTypePairs) =>
  paramPairs == null || (Array.isArray(paramPairs) && paramPairs.length === 0);

export const isInputEmpty = (input: any) =>
  input == null ||
  (isPlainObject(input) && Object.getOwnPropertyNames(input).length === 0);
