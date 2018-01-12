/* eslint-env jest */

import { Contract } from 'ethers';
import Adapter from '../';

jest.mock(
  'ethers',
  () => ({
    Contract: jest.fn(() => ({
      address: '0xdeadbeef',
    })),
    Interface: jest.fn(),
  }),
  { virtual: true }
);

describe('ethers.js adapter', () => {
  const fakeSigner = {};
  const adapter = new Adapter(fakeSigner);

  test('Adapter has a signer', () => {
    // eslint-disable-next-line no-underscore-dangle
    expect(adapter._signer).toBe(fakeSigner);
  });

  test('Adapter calls Contract with correct arguments', () => {
    const address = '0xdeadbeef';
    const abi = {
      foo: 'bar',
    };
    const contract = adapter.getContract(address, abi);
    expect(contract).toEqual({
      address: '0xdeadbeef',
    });
    // eslint-disable-next-line no-underscore-dangle
    expect(Contract).toHaveBeenCalledWith(address, abi, adapter._signer);
  });
});
