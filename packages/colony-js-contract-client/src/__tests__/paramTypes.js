/* eslint-env jest */

import createSandbox from 'jest-sandbox';
import BigNumber from 'bn.js';

import {
  addParamType,
  validateValueType,
  convertOutputValue,
  convertInputValue,
} from '../modules/paramTypes';

describe('Parameter types', () => {
  const sandbox = createSandbox();

  beforeEach(() => {
    sandbox.clear();
  });

  const validAddress = '0x7da82c7ab4771ff031b66538d2fb9b0b047f6cf9';

  test('Addresses are handled properly', () => {
    // Validation
    expect(validateValueType(validAddress, 'address')).toBe(true);

    // Converting output values
    expect(convertOutputValue(validAddress, 'address')).toBe(validAddress);

    expect(convertOutputValue(null, 'address')).toBe(null);

    // Converting input values
    expect(convertInputValue(validAddress, 'address')).toBe(validAddress);
  });

  test('Token addresses are handled properly', () => {
    const etherShort = '0x0';
    const etherFull = '0x0000000000000000000000000000000000000000';

    // Validation
    expect(validateValueType(validAddress, 'tokenAddress')).toBe(true);
    expect(validateValueType(etherShort, 'tokenAddress')).toBe(true);
    expect(validateValueType(etherFull, 'tokenAddress')).toBe(true);

    // Converting output values
    expect(convertOutputValue(validAddress, 'tokenAddress')).toBe(validAddress);
    expect(convertOutputValue(etherShort, 'tokenAddress')).toBe(etherFull);
    expect(convertOutputValue(etherFull, 'tokenAddress')).toBe(etherFull);

    expect(convertOutputValue(null, 'tokenAddress')).toBe(null);

    // Converting input values
    expect(convertInputValue(validAddress, 'tokenAddress')).toBe(validAddress);
    expect(convertInputValue(etherShort, 'tokenAddress')).toBe(etherFull);
    expect(convertInputValue(etherFull, 'tokenAddress')).toBe(etherFull);
  });

  test('BigNumbers are handled properly', () => {
    const bn = new BigNumber(1);

    // Validation
    expect(validateValueType(bn, 'bigNumber')).toBe(true);

    // Cleaning
    expect(convertOutputValue(bn, 'bigNumber')).toBe(bn);

    expect(convertOutputValue(null, 'bigNumber')).toBe(null);

    // Conversion
    expect(convertInputValue(bn, 'bigNumber')).toBe(bn);
  });

  test('Booleans are handled properly', () => {
    // Validation
    expect(validateValueType(false, 'boolean')).toBe(true);
    expect(validateValueType(true, 'boolean')).toBe(true);
    expect(validateValueType(null, 'boolean')).toBe(false);
    expect(validateValueType(1, 'boolean')).toBe(false);

    // Converting output values
    expect(convertOutputValue(true, 'boolean')).toBe(true);
    expect(convertOutputValue(false, 'boolean')).toBe(false);
    expect(convertOutputValue(1, 'boolean')).toBe(null);
    expect(convertOutputValue(null, 'boolean')).toBe(null);

    // Converting input values
    expect(convertInputValue(true, 'boolean')).toBe(true);
    expect(convertInputValue(false, 'boolean')).toBe(false);
  });

  test('Bytes32 strings are handled properly', () => {
    const string = 'a string';
    const longString = 'this is a very long string which will fail validation';
    const hexString =
      '0x0000000000000000000000000000000000000000000000006120737472696e67';
    const emptyBytes =
      '0x0000000000000000000000000000000000000000000000000000000000000000';

    // Validation
    expect(validateValueType(string, 'bytes32String')).toBe(true);
    expect(validateValueType(true, 'bytes32String')).toBe(false);
    expect(validateValueType(false, 'bytes32String')).toBe(false);
    expect(validateValueType(null, 'bytes32String')).toBe(false);
    expect(validateValueType(1, 'bytes32String')).toBe(false);
    expect(validateValueType(longString, 'bytes32String')).toBe(false);

    // Converting output values
    expect(convertOutputValue(emptyBytes, 'bytes32String')).toBe('');
    expect(convertOutputValue(hexString, 'bytes32String')).toBe(string);

    // Converting input values
    expect(convertInputValue('', 'bytes32String')).toBe(emptyBytes);
    expect(convertInputValue(string, 'bytes32String')).toBe(hexString);
  });

  test('Numbers are handled properly', () => {
    // Validation
    expect(validateValueType(1, 'number')).toBe(true);
    expect(validateValueType(0, 'number')).toBe(true);
    expect(validateValueType(null, 'number')).toBe(false);

    // Converting output values
    expect(convertOutputValue(1, 'number')).toBe(1);

    const bn = new BigNumber(1);
    expect(convertOutputValue(bn, 'number')).toBe(1);

    expect(convertOutputValue(null, 'number')).toBe(null);

    // Converting input values
    expect(convertInputValue(1, 'number')).toBe(1);
    expect(convertInputValue(0, 'number')).toBe(0);
  });

  test('Dates are handled properly', () => {
    const date = new Date(2018, 10, 13, 6, 30, 2, 137);
    const timeWithMs = new Date(2018, 10, 13, 6, 30, 2, 137).setMilliseconds(0);
    const timeWithoutMs = parseInt(timeWithMs / 1000, 10);

    // Sanity check
    expect(String(timeWithMs).length).toBe(13);
    expect(String(timeWithoutMs).length).toBe(10);

    // Validation
    expect(validateValueType(date, 'date')).toBe(true);
    expect(validateValueType(new Date(0), 'date')).toBe(true);
    expect(validateValueType(0, 'date')).toBe(false);
    expect(validateValueType(null, 'date')).toBe(false);

    // Converting output values
    const bnDate = new BigNumber(timeWithoutMs);
    const outputFromBn = convertOutputValue(bnDate, 'date');
    expect(outputFromBn).toBeInstanceOf(Date);
    expect(outputFromBn.getTime()).toEqual(timeWithMs);

    const outputFromNumber = convertOutputValue(timeWithoutMs, 'date');
    expect(outputFromNumber).toBeInstanceOf(Date);
    expect(outputFromNumber.getTime()).toEqual(timeWithMs);

    expect(convertOutputValue(0, 'date')).toEqual(null);

    // Converting input values
    expect(convertInputValue(date, 'date')).toBe(timeWithoutMs);
  });

  test('Strings are handled properly', () => {
    // Validation
    expect(validateValueType('a', 'string')).toBe(true);
    expect(validateValueType('', 'string')).toBe(true);
    expect(validateValueType(null, 'string')).toBe(false);
    expect(validateValueType(1, 'string')).toBe(false);

    // Converting output values
    expect(convertOutputValue('a', 'string')).toBe('a');
    expect(convertOutputValue('0x434f4c4e59', 'string')).toBe('COLNY');
    expect(convertOutputValue('0x00', 'string')).toBe(null);
    const invalidUtf8 = '0x712387612873682176387216312';
    expect(convertOutputValue(invalidUtf8, 'string')).toBe(invalidUtf8);

    // empty strings are cleaned:
    expect(convertOutputValue('', 'string')).toBe(null);

    expect(convertOutputValue(1, 'string')).toBe(null);
    expect(convertOutputValue(null, 'string')).toBe(null);

    // Converting input values
    expect(convertInputValue(validAddress, 'string')).toBe(validAddress);
    expect(convertInputValue('not a hex value', 'string')).toBe(
      'not a hex value',
    );
  });

  test('Hex strings are handled properly', () => {
    // Validation
    expect(validateValueType('0x1', 'hexString')).toBe(true);
    expect(validateValueType('a', 'hexString')).toBe(false);
    expect(validateValueType(1, 'hexString')).toBe(false);

    // Converting output values
    expect(convertOutputValue(5, 'hexString')).toBe('0x5');
    expect(convertOutputValue('foo', 'hexString')).toBe('0x666f6f');
    expect(convertOutputValue('0xdeadbeef', 'hexString')).toBe('0xdeadbeef');

    expect(convertOutputValue(null, 'hexString')).toBe(null);

    // Converting input values
    expect(convertInputValue('0xdeadbeef', 'hexString')).toBe('0xdeadbeef');
  });

  test('IPFS hashes are handled properly', () => {
    const hash = 'QmcNbGg6EVfFn2Z1QxWauR9XY9KhnEcyb5DUXCXHi8pwMJ';
    const bytes32Hash =
      '0xd082e403efc3a9b0d92f5a325274a2aaf823fefce13abae890cc140e2b84cb99';

    // Validation
    expect(validateValueType(hash, 'ipfsHash')).toBe(true);
    expect(validateValueType(hash.toLowerCase(), 'ipfsHash')).toBe(false);
    expect(validateValueType(hash.slice(0, 32), 'ipfsHash')).toBe(false);
    expect(validateValueType(`${hash}${hash}`, 'ipfsHash')).toBe(false);
    expect(validateValueType(null, 'ipfsHash')).toBe(false);
    expect(validateValueType(1, 'ipfsHash')).toBe(false);

    // Converting output values
    expect(convertOutputValue(bytes32Hash, 'ipfsHash')).toBe(hash);

    // Empty hashes are cleaned:
    expect(convertOutputValue('', 'ipfsHash')).toBe(null);

    // Converting input values
    expect(convertInputValue(hash, 'ipfsHash')).toBe(bytes32Hash);
  });

  test('Adding param types', () => {
    const customType = 'custom type';

    // Without the type defined, expect an error
    expect(() => {
      validateValueType(1, customType);
    }).toThrow();

    const def = {
      validate: sandbox.fn(),
      convertInput: sandbox.fn(),
      convertOutput: sandbox.fn(),
    };
    addParamType(customType, def);

    // With the type defined, validate/convert should be called
    validateValueType(1, customType);
    convertInputValue(1, customType);
    convertOutputValue(1, customType);
  });
});
