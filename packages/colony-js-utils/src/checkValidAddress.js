/* @flow */

import assert from 'browser-assert';
import { isAddress } from 'web3-utils';
import { NON_EXISTENT_ADDRESS } from './constants';

/**
 * Pure function
 * Given an input, throw an error if it is not a valid address, or return
 * true if it is a valid address.
 */
export default function checkValidAddress(address: any): boolean {
  assert(typeof address === 'string' && isAddress(address), 'Invalid address');
  assert(address !== NON_EXISTENT_ADDRESS, 'Undefined address');
  return true;
}
