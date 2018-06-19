/* @flow */

import bs58 from 'bs58';
import BigNumber from 'bn.js';
import {
  isHex,
  isHexStrict,
  utf8ToHex,
  hexToBytes,
  hexToUtf8,
} from 'web3-utils';
import {
  isValidAddress,
  isBigNumber,
  isEmptyHexString,
} from '@colony/colony-js-utils';

import type { ParamTypes, ParamTypeDef } from '../flowtypes';
import { isBoolean } from './paramValidation';

const passThrough = value => value;

/**
 * A map of ParamTypes to ParamTypeDefs
 * For each ParamType (e.g. address), defines how a value should be validated
 * or converted for input/output.
 */
const PARAM_TYPE_MAP: {
  [type: ParamTypes]: ParamTypeDef,
} = {
  address: {
    validate: isValidAddress,
    convertOutput(value) {
      return isValidAddress(value) ? value : null;
    },
    convertInput: passThrough,
  },
  bigNumber: {
    validate: isBigNumber,
    convertOutput(value: any) {
      if (isBigNumber(value)) {
        return value;
      } else if (Number.isFinite(value)) {
        return new BigNumber(value);
      }
      return null;
    },
    convertInput: passThrough,
  },
  boolean: {
    validate: isBoolean,
    convertOutput(value) {
      return isBoolean(value) ? value : null;
    },
    convertInput: passThrough,
  },
  date: {
    validate(value: any) {
      return value instanceof Date && !!value.valueOf();
    },
    convertOutput(value: any) {
      const converted = parseInt(
        isBigNumber(value) ? value.toNumber() : value,
        10,
      );
      // Recreate the date by adding milliseconds to the timestamp
      return converted > 0 ? new Date(converted * 1000) : null;
    },
    convertInput(value: Date) {
      // Dates are stored as timestamps without milliseconds
      return parseInt(value.setMilliseconds(0) / 1000, 10);
    },
  },
  number: {
    validate(value: any) {
      return Boolean(Number.isFinite(value));
    },
    convertOutput(value: any) {
      const converted = isBigNumber(value) ? value.toNumber() : value;
      return Number.isFinite(converted) ? converted : null;
    },
    convertInput: passThrough,
  },
  string: {
    validate(value: any) {
      return typeof value === 'string';
    },
    convertOutput(value: any) {
      if (isHexStrict(value)) {
        return isEmptyHexString(value) ? null : hexToUtf8(value);
      }
      return typeof value === 'string' && value.length ? value : null;
    },
    convertInput(value: string) {
      // String values are converted to hex (if they aren't hex already)
      return isHex(value) ? value : utf8ToHex(value);
    },
  },
  ipfsHash: {
    validate(value: any) {
      return (
        typeof value === 'string' &&
        value.slice(0, 2) === 'Qm' &&
        value.length === 46
      );
    },
    convertOutput(value: any) {
      if (isHex(value) && !isEmptyHexString(value)) {
        const hex = `0x1220${value.slice(2)}`;
        const bytes = hexToBytes(hex);
        return bs58.encode(bytes);
      }
      return null;
    },
    convertInput(value: string) {
      return `0x${bs58
        .decode(value)
        .slice(2)
        .toString('hex')}`;
    },
  },
};

/**
 * Given the key of a ParamTypeDef (namely `validate`, `convertOutput` or
 * `convertInput`), a value and ParamType, pluck the appropriate function
 * from the type map and call it with the value.
 */
function typeMapFn(fnName: $Keys<ParamTypeDef>, value: any, type: ParamTypes) {
  const {
    [type]: { [fnName]: fn },
  } = PARAM_TYPE_MAP;
  return fn(value);
}

export function addParamType(type: string, def: ParamTypeDef): void {
  Object.assign(PARAM_TYPE_MAP, { [type]: def });
}

/**
 * Given a value and a ParamType, validate the value according to that type's
 * `validate` function
 */
export const validateValueType = typeMapFn.bind(this, 'validate');

/**
 * Given a value and a ParamType, convert the value according to that type's
 * `convertOutput` function
 */
export const convertOutputValue = typeMapFn.bind(this, 'convertOutput');

/**
 * Given a value and a ParamType, convert the value according to that type's
 * `convertInput` function
 */
export const convertInputValue = typeMapFn.bind(this, 'convertInput');
