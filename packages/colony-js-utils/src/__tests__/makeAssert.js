/* eslint-env jest */

import assert from 'assert';

import makeAssert from '../makeAssert';

jest.mock('assert');

describe('makeAssert', () => {
  const message = 'message';
  const reason = 'reason';

  test('Assert true', () => {
    expect(makeAssert(message)(true, reason)).toBe(true);
  });

  test('Assert false', () => {
    assert.mockImplementationOnce((assertion, msg) => {
      throw new Error(msg);
    });
    expect(() => {
      makeAssert(message)(false, reason);
    }).toThrow(`${message}: ${reason}`);
  });

  test('Default message', () => {
    assert.mockImplementationOnce((assertion, msg) => {
      throw new Error(msg);
    });
    expect(() => {
      makeAssert()(false, reason);
    }).toThrowError(`Assertion failed: ${reason}`);
  });
});
