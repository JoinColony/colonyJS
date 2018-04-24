/* eslint-env jest */

import checkValidAddress from '../modules/checkValidAddress';
import { NON_EXISTENT_ADDRESS } from '../constants';

describe('checkValidAddress', () => {
  const realAddress = '0x06012c8cf97BEaD5deAe237070F9587f8E7A266d';
  const tooShort = '0x06012c8cf97BEaD5deAe237070F9587f8E7A2';
  const tooLong =
    // eslint-disable-next-line max-len
    '0x06012c8cf97BEaD5deAe237070F9587f8E7A266d06012c8cf97BEaD5deAe237070F9587f8E7A266d';

  test('Non existent address', () => {
    expect(() => {
      checkValidAddress(NON_EXISTENT_ADDRESS);
    }).toThrowError('Undefined address');
  });

  test('Invalid addresses', () => {
    [
      0,
      1,
      undefined,
      null,
      {},
      [],
      [realAddress],
      '',
      'abc',
      tooShort,
      tooLong,
    ].forEach(input =>
      expect(() => {
        checkValidAddress(input);
      }).toThrowError('Invalid address'),
    );
  });

  test('Valid address', () => {
    expect(checkValidAddress(realAddress)).toBe(true);
  });
});
