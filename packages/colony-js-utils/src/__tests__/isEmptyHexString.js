/* eslint-env jest */

import isEmptyHexString from '../isEmptyHexString';

describe('isEmptyHexString', () => {
  test('Non string value should be evaluated as false', () => {
    expect(isEmptyHexString(1234567890)).toBe(false);
    expect(isEmptyHexString(null)).toBe(false);
  });

  test('Valid address should be evaluated as false', () => {
    const validAddress = '0x76d508fa65654654ffdb334a3023353587112e09';
    expect(isEmptyHexString(validAddress)).toBe(false);
  });

  test('Empty address should be evaluated as true', () => {
    const emptyAddressShort = '0x0';
    const emptyAddressFull = '0x0000000000000000000000000000000000000000';
    expect(isEmptyHexString(emptyAddressShort)).toBe(true);
    expect(isEmptyHexString(emptyAddressFull)).toBe(true);
  });
});
