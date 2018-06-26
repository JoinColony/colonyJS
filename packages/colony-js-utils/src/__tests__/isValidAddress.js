/* eslint-env jest */

import { isAddress } from 'web3-utils';

import isValidAddress from '../isValidAddress';
import isEmptyHexString from '../isEmptyHexString';

jest.mock('web3-utils');
jest.mock('../isEmptyHexString');

describe('isValidAddress', () => {
  test('Non string value', () => {
    expect(isValidAddress(1234567890)).toBe(false);
    expect(isAddress).not.toHaveBeenCalled();
    expect(isEmptyHexString).not.toHaveBeenCalled();
  });

  test('Valid address', () => {
    isAddress.mockReturnValueOnce(true);
    isEmptyHexString.mockReturnValueOnce(false);

    const validAddress = 'valid address';

    expect(isValidAddress(validAddress)).toBe(true);
    expect(isAddress).toHaveBeenCalledWith(validAddress);
    expect(isEmptyHexString).toHaveBeenCalledWith(validAddress);
  });
});
