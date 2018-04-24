/* @flow */

import assert from 'browser-assert';
import BigNumber from 'bn.js';
import { isAddress } from 'web3-utils';

import type { ParamTypes, ParamTypePairs } from '../flowtypes';

const ERR = `Validation error`;

const validateParam = (key: string, type: ParamTypes, value: any): boolean => {
  const message = `${ERR}: Parameter ${key} expected a value of type ${type}`;
  switch (type) {
    case 'address':
      assert(isAddress(value), message);
      break;
    case 'string':
      assert(typeof value === 'string' && value.length > 0, message);
      break;
    case 'number':
      assert(typeof value === 'number' || BigNumber.isBN(value), message);
      break;
    case 'boolean':
      assert(typeof value === 'boolean', message);
      break;
    default:
      throw new TypeError(`Parameter type ${type} not defined`);
  }
  return true;
};

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
  params: any,
  methodParams: MethodParams,
): boolean {
  assert(
    params != null && typeof params === 'object',
    `${ERR}: Expected parameters as an object`,
  );

  return methodParams.every(([paramName, paramType]) =>
    validateParam(paramName, paramType, params[paramName]),
  );
}
