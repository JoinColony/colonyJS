/* @flow */

import assert from 'browser-assert';
import BigNumber from 'bn.js';
import isPlainObject from 'lodash.isplainobject';

import checkValidAddress from './checkValidAddress';
import type { ParamTypes, ParamTypePairs } from '../flowtypes';

const ERR = 'Validation error';

const TYPE_MAP = new Map([
  ['address', checkValidAddress],
  ['string', value => typeof value === 'string'], // empty strings are allowed
  ['number', value => typeof value === 'number' || BigNumber.isBN(value)],
  ['boolean', value => typeof value === 'boolean'],
]);

export const validateParam = (
  key: string,
  type: ParamTypes,
  value: any,
): boolean => {
  // eslint-disable-next-line max-len
  const message = `${ERR}: Parameter "${key}" expected a value of type "${type}"`;
  const check = TYPE_MAP.get(type);
  if (check) {
    assert(check(value), message);
    return true;
  }
  throw new Error(`${ERR}: Parameter type "${type}" not defined`);
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
 *
 * @param input - The input to call the contract method with, as an object with
 * named properties
 * @param paramPairs - Name/parameter type pairs that the contract method
 * should accept
 * @returns {boolean} True if the parameters are all valid
 */
export default function validate(input: any, paramPairs: any): boolean {
  if (isParamsEmpty(paramPairs) && isInputEmpty(input)) return true;

  assert(isPlainObject(input), `${ERR}: Expected parameters as an object`);
  assert(
    isValidMethodParams(paramPairs),
    `${ERR}: Expected method parameters as an array of name/type tuples`,
  );
  assert(
    isSameSize(input, paramPairs),
    `${ERR}: Mismatching parameters/method parameters sizes`,
  );

  return paramPairs.every(([paramName, paramType]) =>
    validateParam(paramName, paramType, input[paramName]),
  );
}
