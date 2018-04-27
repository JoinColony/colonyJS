/* eslint-env jest */

import BigNumber from 'bn.js';
import createSandbox from 'jest-sandbox';

import getMethodReturnValue from '../modules/getMethodReturnValue';

describe('getMethodReturnValues', () => {
  const sandbox = createSandbox();
  const address = '0x06012c8cf97BEaD5deAe237070F9587f8E7A266d';

  beforeEach(() => sandbox.clear());

  test('getMethodReturnValues', () => {
    // Raw values (with no returnValues mapping) are passed through
    expect(getMethodReturnValue()).toBeUndefined();
    expect(getMethodReturnValue(null)).toBe(null);
    expect(getMethodReturnValue(123)).toBe(123);
    expect(getMethodReturnValue([123, 'abc'])).toEqual([123, 'abc']);

    // With mapping
    const returnValues = [['id', 'number'], ['address', 'address']];

    // Invalid return values
    expect(() => {
      getMethodReturnValue(undefined, returnValues);
    }).toThrowError(
      // eslint-disable-next-line max-len
      'Invalid return for value "id" of type "number": Unexpected value "undefined"',
    );
    expect(() => {
      getMethodReturnValue([100, 'not an address'], returnValues);
    }).toThrowError(
      // eslint-disable-next-line max-len
      'Invalid return for value "address" of type "address": Invalid address',
    );

    // Valid return values
    expect(getMethodReturnValue([100, address], returnValues)).toEqual({
      id: 100,
      address,
    });

    // With a BigBumber
    expect(getMethodReturnValue(new BigNumber(1), [['id', 'number']])).toEqual({
      id: 1,
    });
  });
});
