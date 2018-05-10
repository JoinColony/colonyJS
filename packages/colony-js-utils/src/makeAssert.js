/* @flow */

import assert from 'browser-assert';

/**
 * Given a message string (e.g. 'Validation failed'), return an assert function
 * which includes that message, and returns true if the assertion does not
 * throw an error.
 */
export default function makeAssert(message: string = 'Assertion failed') {
  return (assertion: boolean, reason: string) => {
    assert(assertion, `${message}: ${reason}`);
    return true;
  };
}
