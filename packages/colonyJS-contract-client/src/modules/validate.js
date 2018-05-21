/* @flow */

import BigNumber from 'bn.js';
import isPlainObject from 'lodash.isplainobject';
import { isValidAddress, makeAssert } from '../../../colonyJS-utils';

import type { ParamTypes, ParamTypePairs } from '../flowtypes';

const assert = makeAssert('Validation failed');

const TYPE_MAP = new Map([
  ['address', isValidAddress],
  ['string', value => typeof value === 'string'], // empty strings are allowed
  ['number', value => typeof value === 'number' || BigNumber.isBN(value)],
  ['boolean', value => typeof value === 'boolean'],
]);

export const validateParam = (
  key: string,
  type: ParamTypes,
  value: any,
): boolean => {
  assert(TYPE_MAP.has(type), `Parameter type "${type}" not defined`);

  const check = TYPE_MAP.get(type);
  return assert(
    check != null && check(value),
    `Parameter "${key}" expected a value of type "${type}"`,
  );
};

const isValidMethodParams = (paramPairs: any): boolean =>
  Array.isArray(paramPairs) &&
  paramPairs.every(
    param =>
      Array.isArray(param) &&
      param.length === 2 &&
      typeof param[0] === 'string',
  );

const isSameSize = (input: Object, paramPairs: ParamTypePairs) =>
  Object.getOwnPropertyNames(input).length === paramPairs.length;

const isParamsEmpty = paramPairs =>
  paramPairs == null || (Array.isArray(paramPairs) && paramPairs.length === 0);

const isInputEmpty = input =>
  input == null || (isPlainObject(input) && Object.keys(input).length === 0);

/**
 * Pure function
 * Given parameters (as an object with named parameters, but potentially any
 * kind of invalid input) and contract method parameters, validate each
 * parameter against the expected type, throwing errors or returning true.
 */
export default function validate(input: any, paramPairs: any): boolean {
  if (isParamsEmpty(paramPairs) && isInputEmpty(input)) return true;

  assert(isPlainObject(input), 'Expected parameters as an object');
  assert(
    isValidMethodParams(paramPairs),
    'Expected method parameters as an array of name/type tuples',
  );
  assert(
    isSameSize(input, paramPairs),
    'Mismatching parameters/method parameters sizes',
  );

  return paramPairs.every(([paramName, paramType]) =>
    validateParam(paramName, paramType, input[paramName]),
  );
}
