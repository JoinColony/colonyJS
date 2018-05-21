/* eslint-env jest */

import createSandbox from 'jest-sandbox';

import getMethodArgs from '../modules/getMethodArgs';

describe('getMethodArgs', () => {
  const sandbox = createSandbox();
  const address = '0x06012c8cf97BEaD5deAe237070F9587f8E7A266d';

  beforeEach(() => sandbox.clear());

  test('Validates with no arguments', () => {
    expect(getMethodArgs()).toEqual([]);
    expect(getMethodArgs(null, [])).toEqual([]);
  });

  test('Warning when no method parameters are given', () => {
    /* eslint-disable no-console */
    sandbox.spyOn(console, 'warn').mockImplementation(() => {});

    // Params given, but no method params to map to
    expect(getMethodArgs({ myParam: 123 })).toEqual([]);
    expect(console.warn).toHaveBeenCalledTimes(1);
    expect(console.warn).toHaveBeenCalledWith(
      // eslint-disable-next-line max-len
      'Warning: getMethodArgs called with parameters for a method that does not accept parameters',
    );
    /* eslint-enable no-console */
  });

  test('Valid arguments are mapped correctly', () => {
    // Params and method params
    expect(getMethodArgs({ id: 23 }, [['id', 'number']])).toEqual([23]);

    // Multiple params
    expect(
      getMethodArgs({ id: 1, name: 'Bitalik Vuterin', address }, [
        ['name', 'string'],
        ['address', 'address'],
        ['id', 'number'],
      ]),
    ).toEqual(['0x426974616c696b205675746572696e', address, 1]);
  });
});
