/* eslint-env jest */

import { isValidAddress } from '@colony/colony-js-utils';

import validateSigners from '../modules/validateSigners';
import validateSignature from '../modules/validateSignature';

jest.mock('@colony/colony-js-utils', () => {
  const assert = require('browser-assert'); // eslint-disable-line
  return {
    isValidAddress: jest.fn().mockReturnValue(true),
    makeAssert: jest.fn().mockReturnValue((...args) => {
      assert(...args);
      return true;
    }),
  };
});

jest.mock('../modules/validateSignature', () =>
  jest.fn().mockReturnValue(true),
);

describe('validateSigners', () => {
  test('Input type is validated', () => {
    [undefined, null, [], {}, new Set()].forEach(input => {
      expect(() => validateSigners(input)).toThrowError(
        'Signers must be a Map of addresses and signatures',
      );
    });
  });

  test('Input contents are validated', () => {
    const address1 = '0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B';
    const address2 = '0x281055afc982d96fab65b3a49cac8b878184cb16';
    const signers = new Map([
      [address1, 'signature 1'],
      [address2, 'signature 2'],
    ]);

    expect(validateSigners(signers)).toBe(true);
    expect(isValidAddress).toHaveBeenCalledTimes(2);
    expect(isValidAddress).toHaveBeenLastCalledWith(address2);
    expect(validateSignature).toHaveBeenCalledTimes(2);
    expect(validateSignature).toHaveBeenLastCalledWith('signature 2');
  });
});
