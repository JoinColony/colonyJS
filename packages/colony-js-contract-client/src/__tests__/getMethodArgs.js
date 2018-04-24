/* eslint-env jest */

import createSandbox from 'jest-sandbox';

import getMethodArgs from '../modules/getMethodArgs';

describe('getMethodArgs', () => {
  const sandbox = createSandbox();
  const address = '0x06012c8cf97BEaD5deAe237070F9587f8E7A266d';

  beforeEach(() => sandbox.clear());

  test('getMethodArgs', () => {
    console.warn = sandbox.fn();

    // No args
    expect(getMethodArgs()).toEqual([]);
    expect(getMethodArgs(null, [])).toEqual([]);

    // Params given, but no method params to map to
    expect(getMethodArgs({ myParam: 123 })).toEqual([]);
    expect(console.warn).toHaveBeenCalledTimes(1);
    expect(console.warn).toHaveBeenCalledWith(
      // eslint-disable-next-line max-len
      'Warning: getMethodArgs called with parameters for a method that does not accept parameters',
    );

    // Invalid params
    const expectValidationError = params => {
      expect(() => {
        getMethodArgs(params, [['id', 'number']]);
      }).toThrowError('Validation error');
    };
    [undefined, null, {}, [], { name: 'not id' }].forEach(
      expectValidationError,
    );

    // Valid, with params and method params
    expect(getMethodArgs({ id: 23 }, [['id', 'number']])).toEqual([23]);

    // Valid, with multiple params
    expect(
      getMethodArgs({ id: 1, name: 'Bitalik Vuterin', address }, [
        ['name', 'string'],
        ['address', 'address'],
        ['id', 'number'],
      ]),
    ).toEqual(['0x426974616c696b205675746572696e', address, 1]);
  });
});
