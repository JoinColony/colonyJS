/* eslint-env jest */
/* eslint no-underscore-dangle: 0 */

import { Contract } from 'ethers';
import EthersAdapter from '../EthersAdapter';

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
  const fakeProvider = {};

  const address = '0xdeadbeef';
  const abi = {
    foo: 'bar',
  };

  const mockLoader = {
    load: jest.fn().mockReturnValue(Promise.resolve({ address, abi })),
  };

  const adapter = new EthersAdapter({ loader: mockLoader, provider: fakeProvider });

  test('Adapter has a provider', () => {
    expect(adapter._provider).toBe(fakeProvider);
  });

  test('Adapter calls Contract with correct arguments', async () => {
    const contract = await adapter.getContract({ name: 'myContractName' });
    expect(contract).toEqual({ address });
    expect(Contract).toHaveBeenCalledWith(address, abi, adapter._provider);
  });
});
