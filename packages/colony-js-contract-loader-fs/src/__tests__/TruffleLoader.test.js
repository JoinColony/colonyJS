/* eslint-env jest */
/* eslint no-underscore-dangle: 0 */

import createSandbox from 'jest-sandbox';
import { truffleTransform } from '@colony/colony-js-contract-loader';

import TruffleLoader from '../loaders/TruffleLoader';
import FSLoader from '../loaders/FSLoader';

describe('ContractFsLoader', () => {
  const sandbox = createSandbox();
  const setupLoader = () => new TruffleLoader({ contractDir: '/tmp' });

  beforeEach(() => {
    sandbox.clear();
  });

  test('Is an FSLoader', async () => {
    const loader = setupLoader();
    expect(loader instanceof FSLoader).toBe(true);
  });

  test('transform is truffleTransform', async () => {
    const loader = setupLoader();
    expect(loader._transform).toBe(truffleTransform);
  });

  test('Throws when no contructor args are given', () => {
    expect(() => {
      // eslint-disable-next-line no-new
      new TruffleLoader();
    }).toThrow();
  });
});
