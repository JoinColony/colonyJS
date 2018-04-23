/* @flow */

import BigNumber from 'bn.js';

import type { ParamTypes, ParamTypePairs } from '../flowtypes';
import checkValidAddress from './checkValidAddress';

const parseReturnValue = (value: any, type: ParamTypes) => {
  switch (type) {
    case 'number':
      return BigNumber.isBN(value) ? value.toNumber() : value;
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
  const values = Array.isArray(rawContractReturnValue)
    ? rawContractReturnValue
    : [rawContractReturnValue];

  if (returnValues.length) {
    const parsedValues = returnValues.map(([name, type], index) => {
      try {
        return {
          [name]: parseReturnValue(values[index], type),
        };
      } catch (error) {
        throw new Error(
          `Invalid return for ${name} of type ${type}:\n${error.message ||
            error}`,
        );
      }
    });
    // $FlowFixMe Object literal incompatible with ReturnValue; perhaps try $ObjMap?
    return Object.assign({}, ...parsedValues);
  }
  return rawContractReturnValue;
}
