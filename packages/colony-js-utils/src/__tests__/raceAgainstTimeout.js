/* eslint-env jest */
/* eslint no-underscore-dangle: 0 */
import createSandbox from 'jest-sandbox';

import raceAgainstTimeout from '../raceAgainstTimeout';

describe('raceAgainstTimeout', () => {
  // const sandbox = createSandbox();

  // beforeEach(() => sandbox.clear());

  // jest.useFakeTimers();

  test('Promise resolves before timeout', async () => {
    jest.useRealTimers();
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve('result');
      }, 3000);
    });
    // jest.runAllTimers();
    await expect(raceAgainstTimeout(promise, 1000)).rejects.toEqual(
      new Error('test'),
    );
    // const result = await raceAgainstTimeout(promise, 0);
    // expect(result).toBe('result');
  });

  test('Timeout ends before promise resolves', async () => {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve('result');
      }, 1000);
    });
    jest.runAllTimers();
    const result = await raceAgainstTimeout(promise, 1000);
    expect(result).toBe('result');
  });
});
