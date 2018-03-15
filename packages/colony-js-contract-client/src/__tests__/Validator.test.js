/* eslint-env jest */

import createSandbox from 'jest-sandbox';
import Validator from '../modules/Validator';

import { NON_EXISTENT_ADDRESS } from '../constants';

const VALID_ADDRESS = '0x0000000000000000000000000000000000000001';

describe('Validator', () => {
  const sandbox = createSandbox();

  beforeEach(() => sandbox.clear());

  test('checkValidAddress', () => {
    expect(() => Validator.checkValidAddress('not an address')).toThrowError(
      'Invalid address',
    );
    expect(() =>
      Validator.checkValidAddress(NON_EXISTENT_ADDRESS),
    ).toThrowError('Undefined address');
    expect(Validator.checkValidAddress(VALID_ADDRESS)).toBe(true);
  });

  test('checkValidAddress', () => {
    expect(() => Validator.checkValidAddress('not an address')).toThrowError(
      'Invalid address',
    );
    expect(() =>
      Validator.checkValidAddress(NON_EXISTENT_ADDRESS),
    ).toThrowError('Undefined address');
    expect(Validator.checkValidAddress(VALID_ADDRESS)).toBe(true);
  });

  test('validateMultisig', () => {
    expect(Validator.validateMultisig('not an object')).toBe(false);

    // Too few entries
    expect(
      Validator.validateMultisig({
        sigR: ['0x123'],
        sigS: ['0x123', '0x234'],
        sigV: ['0x123', '0x234'],
      }),
    ).toBe(false);

    // Too many entries
    expect(
      Validator.validateMultisig({
        sigR: ['0x123', '0x234', '0x456'],
        sigS: ['0x123', '0x234', '0x456'],
        sigV: ['0x123', '0x234', '0x456'],
      }),
    ).toBe(false);

    // Empty sigV
    expect(
      Validator.validateMultisig({
        sigR: ['0x123', '0x234'],
        sigS: ['0x123', '0x234'],
        sigV: [],
      }),
    ).toBe(false);

    // Missing sigV
    expect(
      Validator.validateMultisig({
        sigR: ['0x123', '0x234'],
        sigS: ['0x123', '0x234'],
      }),
    ).toBe(false);

    // Correct
    expect(
      Validator.validateMultisig({
        sigR: ['0x123', '0x234'],
        sigS: ['0x123', '0x234'],
        sigV: ['0x123', '0x234'],
      }),
    ).toBe(true);
  });

  test('getArgs', () => {
    class MyValidator extends Validator {
      static params = [['myAddress', 'address']];
    }
    sandbox.spyOn(MyValidator, 'parseParams');
    sandbox.spyOn(MyValidator, 'validate');
    const validParams = { myAddress: VALID_ADDRESS };

    const args = MyValidator.getArgs(validParams);

    expect(MyValidator.validate).toHaveBeenCalledWith(validParams);
    expect(MyValidator.parseParams).toHaveBeenCalledWith(validParams);
    expect(args[0]).toBe(VALID_ADDRESS);
    expect(args.length).toBe(1);
  });

  test('parseParams', () => {
    class MyValidator extends Validator {
      static params = [['myAddress', 'address'], ['myString', 'string']];
    }
    sandbox.spyOn(MyValidator, 'parseParamsValue');

    const validParams = { myAddress: VALID_ADDRESS, myString: 'abc' };

    const args = MyValidator.parseParams(validParams);

    expect(MyValidator.parseParamsValue).toHaveBeenCalledTimes(2);
    expect(args[0]).toBe(VALID_ADDRESS);
    expect(args[1]).toBe('0x616263'); // hex for utf8 'abc'
    expect(args.length).toBe(2);
  });
});
