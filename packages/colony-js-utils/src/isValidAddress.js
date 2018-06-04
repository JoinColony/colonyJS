/* @flow */

import { isAddress } from 'web3-utils';
import isEmptyHexString from './isEmptyHexString';

/**
 * Given an input, return true if it is a valid address.
 *
 * @param address
 * @returns {boolean}
 */
export default function isValidAddress(address: any): boolean {
  return (
    typeof address === 'string' &&
    isAddress(address) &&
    !isEmptyHexString(address)
  );
}
