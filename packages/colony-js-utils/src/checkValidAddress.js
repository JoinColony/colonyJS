/* @flow */

import assert from 'assert';
import { isAddress } from 'web3-utils';
import isEmptyHexString from './isEmptyHexString';

/**
 * Pure function
 * Given an input, throw an error if it is not a valid address, or return
 * true if it is a valid address.
 */
export default function checkValidAddress(address: any): boolean {
  assert(typeof address === 'string' && isAddress(address), 'Invalid address');
  assert(!isEmptyHexString(address), 'Undefined address');
  return true;
}
