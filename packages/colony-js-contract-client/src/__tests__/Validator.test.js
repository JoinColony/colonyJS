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

  test('getArgs', () => {
    const myValidator = new Validator({ params: [['myAddress', 'address']] });
    sandbox.spyOn(myValidator, 'parseParams');
    sandbox.spyOn(myValidator, 'validate');
    const validParams = { myAddress: VALID_ADDRESS };

    const args = myValidator.getArgs(validParams);

    expect(myValidator.validate).toHaveBeenCalledWith(validParams);
    expect(myValidator.parseParams).toHaveBeenCalledWith(validParams);
    expect(args[0]).toBe(VALID_ADDRESS);
    expect(args.length).toBe(1);
  });

  test('parseParams', () => {
    const myValidator = new Validator({
      params: [['myAddress', 'address'], ['myString', 'string']],
    });
    sandbox.spyOn(myValidator.constructor, 'parseParamsValue');

    const validParams = { myAddress: VALID_ADDRESS, myString: 'abc' };

    const args = myValidator.parseParams(validParams);

    expect(myValidator.constructor.parseParamsValue).toHaveBeenCalledTimes(2);
    expect(args[0]).toBe(VALID_ADDRESS);
    expect(args[1]).toBe('0x616263'); // hex for utf8 'abc'
    expect(args.length).toBe(2);
  });
});
