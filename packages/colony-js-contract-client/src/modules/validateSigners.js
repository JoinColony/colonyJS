/* @flow */

import { isValidAddress, makeAssert } from '@colony/colony-js-utils';

import validateSignature from './validateSignature';

const assert = makeAssert('Invalid signers');

/**
 * Given input that should be signers, validate them and return true.
 */
export default function validateSigners(signers: any): boolean {
  assert(
    signers instanceof Map,
    'Signers must be a Map of addresses and signatures',
  );

  // Every signer should have a valid address and signature
  return [...signers.entries()].every(
    ([address, signature]) =>
      assert(isValidAddress(address), `"${address}" is not a valid address`) &&
      validateSignature(signature),
  );
}
