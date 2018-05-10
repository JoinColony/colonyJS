/* @flow */

import { isHex } from 'web3-utils';
import { makeAssert } from '@colony/colony-js-utils';
import isPlainObject from 'lodash.isplainobject';

const assert = makeAssert('Invalid signature');

/**
 * Given input that should be a single signature, validate it and return true.
 */
export default function validateSignature(signature: any): boolean {
  assert(isPlainObject(signature), 'Signature must be an object');

  const { sigV, sigR, sigS } = signature;

  return (
    assert(Number(sigV) === sigV, 'v must be an integer') &&
    assert(isHex(sigR), 'r must be a hex string') &&
    assert(isHex(sigS), 's must be a hex string')
  );
}
