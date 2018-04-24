/* @flow */

import BigNumber from 'bn.js';
import assert from 'browser-assert';

import type { ParamTypes, ParamTypePairs } from '../flowtypes';
import checkValidAddress from './checkValidAddress';

const unexpectedValue = value => {
  // XXX It's possible that the value isn't stringify-able
  let stringified = '';
  try {
    stringified = JSON.stringify(value);
  } catch (error) {
    stringified = '(unable to stringify)';
  }
  return `Unexpected value "${stringified}"`;
};

const parseReturnValue = (value: any, type: ParamTypes) => {
  switch (type) {
    case 'number':
      if (BigNumber.isBN(value)) return value.toNumber();
      assert(Number(value) === value, unexpectedValue(value));
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
  const values = Array.isArray(rawContractReturnValue)
    ? rawContractReturnValue
    : [rawContractReturnValue];

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
