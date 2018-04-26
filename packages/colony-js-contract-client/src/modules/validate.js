/* @flow */

import assert from 'browser-assert';
import BigNumber from 'bn.js';
import isPlainObject from 'lodash.isplainobject';

import checkValidAddress from './checkValidAddress';
import type { ParamTypes, ParamTypePairs } from '../flowtypes';

const ERR = `Validation error`;

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
  throw new TypeError(`${ERR}: Parameter type "${type}" not defined`);
};

const isValidMethodParams = (methodParams: any): boolean =>
  Array.isArray(methodParams) &&
  methodParams.every(
    param =>
      Array.isArray(param) &&
      param.length === 2 &&
      typeof param[0] === 'string',
  );

const areParamsOfEqualSize = (params: Object, methodParams: ParamTypePairs) =>
  Object.getOwnPropertyNames(params).length === methodParams.length;

/**
 * Pure function
 * Given parameters (as an object with named parameters, but potentially any
 * kind of invalid input) and contract method parameters, validate each
 * parameter against the expected type, throwing errors or returning true.
 *
 * @param params The params to call the contract method with, as an object with
 * named properties
 * @param methodParams Name/parameter type pairs that the contract method
 * should accept
 * @returns {boolean} True if the parameters are all valid
 */
export default function validate<MethodParams: ParamTypePairs>(
  params: any | Object,
  methodParams: any | MethodParams,
): boolean {
  if (params === undefined && methodParams === undefined) return true;
  assert(isPlainObject(params), `${ERR}: Expected parameters as an object`);
  assert(
    isValidMethodParams(methodParams),
    `${ERR}: Expected method parameters as an array of name/type tuples`,
  );
  assert(
    areParamsOfEqualSize(params, methodParams),
    `${ERR}: Mismatching parameters/method parameters sizes`,
  );

  return methodParams.every(([paramName, paramType]) =>
    validateParam(paramName, paramType, params[paramName]),
  );
}
