/* eslint-env jest */

import createSandbox from 'jest-sandbox';
import BigNumber from 'bn.js';

import { isValidAddress, isBigNumber } from '@colony/colony-js-utils';
import { isHex, utf8ToHex } from 'web3-utils';

import {
  addParamType,
  validateValue,
  convertOutputValue,
  convertInputValue,
} from '../modules/paramTypes';

jest.mock('@colony/colony-js-utils', () => ({
  isBigNumber: jest.fn().mockReturnValue(true),
  isValidAddress: jest.fn().mockReturnValue(true),
}));

jest.mock('web3-utils', () => ({
  isHex: jest.fn().mockReturnValue(true),
  utf8ToHex: jest.fn().mockImplementation(value => value),
}));

describe('Parameter types', () => {
  const sandbox = createSandbox();

  beforeEach(() => {
    sandbox.clear();
    isBigNumber.mockClear();
    isValidAddress.mockClear();
    isHex.mockClear();
    utf8ToHex.mockClear();
  });

  test('Addresses are handled properly', () => {
    // Validation
    expect(validateValue('0x123', 'address')).toBe(true);
    expect(isValidAddress).toHaveBeenCalledWith('0x123');
    isValidAddress.mockClear();

    // Converting output values
    expect(convertOutputValue('0x123', 'address')).toBe('0x123');
    expect(isValidAddress).toHaveBeenCalledWith('0x123');

    isValidAddress.mockReturnValueOnce(false);
    expect(convertOutputValue(null, 'address')).toBe(null);

    // Converting input values
    expect(convertInputValue('0x123', 'address')).toBe('0x123');
  });

  test('Booleans are handled properly', () => {
    // Validation
    expect(validateValue(false, 'boolean')).toBe(true);
    expect(validateValue(true, 'boolean')).toBe(true);
    expect(validateValue(null, 'boolean')).toBe(false);
    expect(validateValue(1, 'boolean')).toBe(false);

    // Converting output values
    expect(convertOutputValue(true, 'boolean')).toBe(true);
    expect(convertOutputValue(false, 'boolean')).toBe(false);
    expect(convertOutputValue(1, 'boolean')).toBe(null);
    expect(convertOutputValue(null, 'boolean')).toBe(null);

    // Converting input values
    expect(convertInputValue(true, 'boolean')).toBe(true);
    expect(convertInputValue(false, 'boolean')).toBe(false);
  });

  test('Numbers are handled properly', () => {
    // Validation
    expect(validateValue(1, 'number')).toBe(true);
    expect(validateValue(0, 'number')).toBe(true);
    expect(validateValue(null, 'number')).toBe(false);

    // Converting output values
    isBigNumber.mockReturnValueOnce(false);
    expect(convertOutputValue(1, 'number')).toBe(1);
    expect(isBigNumber).toHaveBeenCalledWith(1);
    isBigNumber.mockClear();

    const bn = new BigNumber(1);
    isBigNumber.mockReturnValueOnce(true);
    expect(convertOutputValue(bn, 'number')).toBe(1);
    expect(isBigNumber).toHaveBeenCalledWith(bn);

    isBigNumber.mockReturnValueOnce(false);
    expect(convertOutputValue(null, 'number')).toBe(null);

    // Converting input values
    expect(convertInputValue(1, 'number')).toBe(1);
    expect(convertInputValue(0, 'number')).toBe(0);
  });

  test('Strings are handled properly', () => {
    // Validation
    expect(validateValue('a', 'string')).toBe(true);
    expect(validateValue('', 'string')).toBe(true);
    expect(validateValue(null, 'string')).toBe(false);
    expect(validateValue(1, 'string')).toBe(false);

    // Converting output values
    expect(convertOutputValue('a', 'string')).toBe('a');

    // empty strings are cleaned:
    expect(convertOutputValue('', 'string')).toBe(null);

    expect(convertOutputValue(1, 'string')).toBe(null);
    expect(convertOutputValue(null, 'string')).toBe(null);

    // Converting input values
    isHex.mockReturnValueOnce(true);
    expect(convertInputValue('a', 'string')).toBe('a');
    expect(isHex).toHaveBeenCalledWith('a');
    expect(utf8ToHex).toHaveBeenCalledWith('a');
    isHex.mockClear();
    utf8ToHex.mockClear();

    isHex.mockReturnValueOnce(false);
    expect(convertInputValue('a', 'string')).toBe('a');
    expect(isHex).toHaveBeenCalledWith('a');
    expect(utf8ToHex).not.toHaveBeenCalled();
  });

  test('Adding param types', () => {
    const customType = 'custom type';

    // Without the type defined, expect an error
    expect(() => {
      validateValue(1, customType);
    }).toThrow();

    const def = {
      validate: sandbox.fn(),
      convertInput: sandbox.fn(),
      convertOutput: sandbox.fn(),
    };
    addParamType(customType, def);

    // With the type defined, validate/convert should be called
    validateValue(1, customType);
    convertInputValue(1, customType);
    convertOutputValue(1, customType);
    expect(def.validate).toHaveBeenCalledWith(1);
    expect(def.convertInput).toHaveBeenCalledWith(1);
    expect(def.convertOutput).toHaveBeenCalledWith(1);
  });
});
