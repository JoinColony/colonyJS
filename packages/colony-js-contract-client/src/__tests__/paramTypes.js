/* eslint-env jest */

import createSandbox from 'jest-sandbox';
import BigNumber from 'bn.js';

import bs58 from 'bs58';
import {
  isValidAddress,
  isBigNumber,
  isEmptyHexString,
} from '@colony/colony-js-utils';
import { isHex, utf8ToHex, hexToBytes } from 'web3-utils';

import {
  addParamType,
  validateValue,
  convertOutputValue,
  convertInputValue,
} from '../modules/paramTypes';

jest.mock('@colony/colony-js-utils', () => ({
  isBigNumber: jest.fn().mockReturnValue(true),
  isValidAddress: jest.fn().mockReturnValue(true),
  isEmptyHexString: jest.fn().mockReturnValue(true),
}));

jest.mock('bs58', () => ({
  encode: jest.fn().mockImplementation(value => value),
  decode: jest.fn().mockImplementation(value => value),
}));

jest.mock('web3-utils', () => ({
  isHex: jest.fn().mockReturnValue(true),
  utf8ToHex: jest.fn().mockImplementation(value => value),
  hexToBytes: jest.fn().mockImplementation(() => [101]),
}));

describe('Parameter types', () => {
  const sandbox = createSandbox();

  beforeEach(() => {
    sandbox.clear();
    isBigNumber.mockClear();
    isValidAddress.mockClear();
    isEmptyHexString.mockClear();
    isHex.mockClear();
    utf8ToHex.mockClear();
    hexToBytes.mockClear();
    bs58.encode.mockClear();
    bs58.decode.mockClear();
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

  test('BigNumbers are handled properly', () => {
    const bn = new BigNumber(1);

    // Validation
    expect(validateValue(bn, 'bigNumber')).toBe(true);
    expect(isBigNumber).toHaveBeenCalledWith(bn);
    isBigNumber.mockClear();

    // Cleaning
    expect(convertOutputValue(bn, 'bigNumber')).toBe(bn);
    expect(isBigNumber).toHaveBeenCalledWith(bn);

    isBigNumber.mockReturnValueOnce(false);
    expect(convertOutputValue(null, 'bigNumber')).toBe(null);

    // Conversion
    expect(convertInputValue(bn, 'bigNumber')).toBe(bn);
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
    expect(convertInputValue('0x123', 'string')).toBe('0x123');
    expect(isHex).toHaveBeenCalledWith('0x123');
    expect(utf8ToHex).not.toHaveBeenCalledWith();
    isHex.mockClear();
    utf8ToHex.mockClear();

    isHex.mockReturnValueOnce(false);
    utf8ToHex.mockReturnValueOnce('0x123');
    expect(convertInputValue('not a hex value', 'string')).toBe('0x123');
    expect(isHex).toHaveBeenCalledWith('not a hex value');
    expect(utf8ToHex).toHaveBeenCalledWith('not a hex value');
  });

  test('IPFS hashes are handled properly', () => {
    const hash = 'QmcNbGg6EVfFn2Z1QxWauR9XY9KhnEcyb5DUXCXHi8pwMJ';
    const bytes32Hash =
      '0xd082e403efc3a9b0d92f5a325274a2aaf823fefce13abae890cc140e2b84cb99';
    const bytes = [18, 32, 208]; // not a real example

    // Validation
    expect(validateValue(hash, 'ipfsHash')).toBe(true);
    expect(validateValue(hash.toLowerCase(), 'ipfsHash')).toBe(false);
    expect(validateValue(hash.slice(0, 32), 'ipfsHash')).toBe(false);
    expect(validateValue(`${hash}${hash}`, 'ipfsHash')).toBe(false);
    expect(validateValue(null, 'ipfsHash')).toBe(false);
    expect(validateValue(1, 'ipfsHash')).toBe(false);

    // Converting output values
    bs58.encode.mockReturnValueOnce(bytes32Hash);
    isHex.mockReturnValueOnce(true);
    hexToBytes.mockReturnValueOnce(bytes);
    isEmptyHexString.mockReturnValueOnce(false);
    expect(convertOutputValue(hash, 'ipfsHash')).toBe(bytes32Hash);
    expect(isHex).toHaveBeenCalledWith(hash);
    expect(isEmptyHexString).toHaveBeenCalledWith(hash);
    expect(hexToBytes).toHaveBeenCalledWith(`0x1220${hash.slice(2)}`);
    expect(bs58.encode).toHaveBeenCalledWith(bytes);

    // Empty hashes are cleaned:
    isHex.mockReturnValueOnce(true);
    isEmptyHexString.mockReturnValueOnce(true);
    expect(convertOutputValue('', 'ipfsHash')).toBe(null);

    isHex.mockClear();
    isEmptyHexString.mockClear();
    hexToBytes.mockClear();
    bs58.encode.mockClear();

    // Converting input values
    isHex.mockReturnValueOnce(true);
    bs58.decode.mockReturnValueOnce(bytes32Hash);
    expect(convertInputValue(hash, 'ipfsHash')).toBe(bytes32Hash);
    expect(bs58.decode).toHaveBeenCalledWith(hash);
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
