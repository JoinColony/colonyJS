/* eslint-env jest */
/* eslint no-underscore-dangle: 0 */

import createSandbox from 'jest-sandbox';
import jsonfile from 'jsonfile';

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
  const setupLoader = ({ transform } = {}) =>
    new FSLoader({ contractDir: '/tmp', transform });

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

  test('Throws when no contructor args are given', () => {
    expect(() => {
      // eslint-disable-next-line no-new
      new FSLoader();
    }).toThrow();
  });

  test('Throws if contract name not given', async () => {
    const loader = setupLoader();
    const query = { contractAddress: '0xdeafbeef' };
    expect(loader._load(query, requiredProps)).rejects.toThrow();
  });

  test('Throws if json file cannot be read', async () => {
    jsonfile.readFile.mockImplementationOnce((file, callback) =>
      callback(new Error('Boom!')),
    );
    const loader = setupLoader();
    const query = { contractName: '0xdeafbeef' };
    expect(loader._load(query, requiredProps)).rejects.toThrow(/Boom/);
  });

  test('Throws when transform function malfunctions', async () => {
    const loader = setupLoader({
      transform: () => {
        throw new Error('BoomTransform');
      },
    });
    const query = { contractName: '0xdeafbeef' };
    expect(loader._load(query, requiredProps)).rejects.toThrow(/BoomTransform/);
  });

  test('Throws with no query given whatsoever', async () => {
    const loader = setupLoader();
    expect(loader._load(undefined, requiredProps)).rejects.toThrow();
  });
});
