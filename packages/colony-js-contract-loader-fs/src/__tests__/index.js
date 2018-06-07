/* eslint-env jest */
/* eslint no-underscore-dangle: 0 */

import createSandbox from 'jest-sandbox';
import FSLoader from '../loaders/FSLoader';

jest.mock('jsonfile', () => ({
  readFile: jest.fn((file, cb) =>
    cb(null, {
      address: '0x123',
      abi: [{ myData: 123 }],
    }),
  ),
}));

describe('ContractFsLoader', () => {
  const sandbox = createSandbox();
  const setupLoader = () => new FSLoader({ contractDir: '/tmp' });

  const requiredProps = {
    address: true,
    abi: true,
    bytecode: false,
  };

  beforeEach(() => {
    sandbox.clear();
  });

  test('Default implementation', async () => {
    const loader = setupLoader();

    const query = { contractName: 'MyCoolContract' };
    const { address, abi } = await loader.load(query, requiredProps);
    expect(address).toEqual('0x123');
    expect(abi).toEqual([{ myData: 123 }]);
  });

  test('Throws if contract name not given', async () => {
    const loader = setupLoader();
    const query = { contractAddress: '0xdeafbeef' };
    expect(loader.load(query, requiredProps)).rejects.toThrow();
  });
});
