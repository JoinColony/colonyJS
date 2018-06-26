/* eslint-env jest */

import createSandbox from 'jest-sandbox';
import truffleTransform from '../transforms/truffleTransform';

describe('truffleTransform', () => {
  const sandbox = createSandbox();

  const artifact = {
    abi: ['abi item'],
    bytecode: 'bytecode',
    networks: {
      1: {
        address: 'address 1',
      },
      '2': {
        address: 'address 2',
      },
    },
  };

  beforeEach(() => {
    sandbox.clear();
  });

  test('With no Truffle artifact', async () => {
    expect(truffleTransform()).toEqual({
      abi: [],
    });
  });

  test('With latest network', async () => {
    expect(truffleTransform(artifact)).toEqual({
      abi: ['abi item'],
      address: 'address 2',
      bytecode: 'bytecode',
    });
  });

  test('With present specific network', async () => {
    expect(truffleTransform(artifact, { network: '1' })).toEqual({
      abi: ['abi item'],
      address: 'address 1',
      bytecode: 'bytecode',
    });
  });

  test('With absent specific network', async () => {
    expect(() => truffleTransform(artifact, { network: 3 })).toThrow(Error);
  });
});
