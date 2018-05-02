/* @flow */

import BigNumber from 'bn.js';
import assert from 'browser-assert';

import type { ParamTypes, ParamTypePairs } from '../flowtypes';
import checkValidAddress from './checkValidAddress';

const parseReturnValue = (value: any, type: ParamTypes) => {
  switch (type) {
    case 'number':
      if (
        BigNumber.isBN(value) ||
        // XXX Some libraries (cough *ethers* cough) wrap BigNumbers in a way
        // that breaks `isBN`; this is a workaround for that issue:
        // eslint-disable-next-line no-underscore-dangle
        (typeof value === 'object' && value._bn && BigNumber.isBN(value._bn))
      )
        return value.toNumber();
      assert(Number(value) === value, `Unexpected value "${value}"`);
      return value;
    case 'address':
      checkValidAddress(value);
      return value;
    default:
      return value;
  }
};

/**
 * Pure function
 * Given the return value from a contract function (without any additional
 * processing) and a mapping of return values and how they should be parsed,
 * process the contract value and return the parsed values as an object.
 * @param rawContractReturnValue
 * @param returnValues
 * @returns {Object}
 */
export default function getMethodReturnValue<ReturnValue: {}>(
  rawContractReturnValue: any,
  returnValues: ParamTypePairs,
): ReturnValue {
  // It may be a single value or an array; treat it as an array
  const values = [].concat(rawContractReturnValue);

  if (returnValues && returnValues.length) {
    const returnValue = {};
    returnValues.forEach(([name, type], index) => {
      try {
        returnValue[name] = parseReturnValue(values[index], type);
      } catch (error) {
        throw new Error(
          `Invalid return for value "${name}" of type "${type}": ${
            error.message
          }` || error,
        );
      }
    });
    // $FlowFixMe Object literal incompatible with ReturnValue; perhaps try $ObjMap?
    return returnValue;
  }
  return rawContractReturnValue;
}
