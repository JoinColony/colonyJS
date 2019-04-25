/* eslint-env jest */
import createSandbox from 'jest-sandbox';

import raceAgainstTimeout from '../raceAgainstTimeout';

describe('raceAgainstTimeout', () => {
  const sandbox = createSandbox();

  beforeEach(() => sandbox.clear());

  test('Timeout ends before promise resolves', async () => {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve('result');
      }, 3000);
    });
    const timeoutCallback = sandbox.fn();
    await expect(
      raceAgainstTimeout(promise, 1000, timeoutCallback),
    ).rejects.toEqual(new Error('Timeout after 1000 ms'));
    expect(timeoutCallback).toHaveBeenCalled();
  });

  test('Promise resolves before timeout', async () => {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve('result');
      }, 1000);
    });
    const result = await raceAgainstTimeout(promise, 1000);
    expect(result).toBe('result');
  });
});
