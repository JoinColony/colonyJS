/* @flow */

import { isAddress } from 'web3-utils';
import { NON_EXISTENT_ADDRESS } from './constants';

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
    address !== NON_EXISTENT_ADDRESS
  );
}
