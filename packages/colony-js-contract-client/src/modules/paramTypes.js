/* @flow */
/* eslint-disable import/no-cycle */

import bs58 from 'bs58';
import BigNumber from 'bn.js';
import {
  isHexStrict,
  hexToBytes,
  hexToUtf8,
  toHex,
  utf8ToHex,
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
  '[address]': {
    validate(value: any) {
      if (!Array.isArray(value)) return false;
      return value.every(element => isValidAddress(element));
    },
    convertOutput(value) {
      if (!Array.isArray(value)) return [];
      return value.map(element => (isValidAddress(element) ? element : null));
    },
    convertInput: passThrough,
  },
  '[bigNumber]': {
    validate(value: any) {
      if (!Array.isArray(value)) return false;
      return value.every(element => isBigNumber(element));
    },
    convertOutput(value) {
      if (!Array.isArray(value)) return [];
      return value.map(element => (isBigNumber(element) ? element : null));
    },
    convertInput: passThrough,
  },
  '[number]': {
    validate(value: any) {
      if (!Array.isArray(value)) return false;
      return value.every(element => Number.isFinite(element));
    },
    convertOutput(value) {
      if (!Array.isArray(value)) return [];
      return value.map(element => {
        // convert BN (ethers or bn.js)
        const number = isBigNumber(element) ? element.toNumber() : element;
        return Number.isFinite(number) ? number : null;
      });
    },
    convertInput: passThrough,
  },
  address: {
    validate: isValidAddress,
    convertOutput(value) {
      return isValidAddress(value) ? value : null;
    },
    convertInput: passThrough,
  },
  // Either a valid address, or an empty address
  anyAddress: {
    validate(value: any) {
      return isValidAddress(value) || isEmptyHexString(value);
    },
    convertInput(value: string) {
      // Expand `0x0` to a full-length address
      return value.padEnd(42, '0');
    },
    convertOutput(value: any) {
      // Expand `0x0` to a full-length address (for a valid address)
      return isValidAddress(value) || isEmptyHexString(value)
        ? value.padEnd(42, '0')
        : null;
    },
  },
  bigNumber: {
    validate: isBigNumber,
    convertOutput(value: any) {
      if (isBigNumber(value)) {
        return value;
      }
      if (Number.isFinite(value)) {
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
  bytes32String: {
    validate(value: any) {
      // Must be a string and will fit into bytes32
      return typeof value === 'string' && utf8ToHex(value).length <= 66;
    },
    convertOutput(value) {
      // Will be returned as a hex string, we want the UTF-8 string
      return hexToUtf8(value);
    },
    convertInput(value) {
      // Adapter expects a 32 byte hex string, convert from UTF-8 and pad
      const converted = utf8ToHex(value);
      return `0x${converted.slice(2).padStart(64, '0')}`;
    },
  },
  date: {
    validate(value: any) {
      // XXX This allows dates initialised without a value (or with `0` value)
      return value instanceof Date;
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
  hexString: {
    validate(value: any) {
      return isHexStrict(value);
    },
    convertOutput(value: any) {
      return toHex(value);
    },
    convertInput: passThrough,
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
        if (isEmptyHexString(value)) return null;
        try {
          return hexToUtf8(value);
        } catch (error) {
          // ignore error: not a UTF8-encoded value
        }
      }
      return typeof value === 'string' && value.length ? value : null;
    },
    convertInput: passThrough,
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
      if (isHexStrict(value) && !isEmptyHexString(value)) {
        const hex = `0x1220${value.slice(2)}`;
        const bytes = hexToBytes(hex);
        return bs58.encode(Buffer.from(bytes));
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
