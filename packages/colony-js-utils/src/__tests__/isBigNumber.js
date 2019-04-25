/* eslint-env jest */

import BigNumber from 'bn.js';

import isBigNumber from '../isBigNumber';

jest.mock('bn.js');

describe('isBigNumber', () => {
  test('Null value', () => {
    BigNumber.isBN.mockReturnValueOnce(false);

    expect(isBigNumber(null)).toBe(false);
    expect(BigNumber.isBN).toHaveBeenCalledWith(null);
  });

  test('Ethers wrapped', () => {
    BigNumber.isBN.mockReturnValueOnce(false).mockReturnValueOnce(true);

    const bn = 'big number';
    const wrappedBN = {
      _bn: bn,
    };

    expect(isBigNumber(wrappedBN)).toBe(true);
    expect(BigNumber.isBN).toHaveBeenCalledWith(wrappedBN);
    expect(BigNumber.isBN).toHaveBeenCalledWith(bn);
  });
});
