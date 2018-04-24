/* @flow */

import { isAddress } from 'web3-utils';
import { NON_EXISTENT_ADDRESS } from '../constants';

/**
 * Pure function
 * Given an input, throw an error if it is not a valid address, or return
 * true if it is a valid address.
 *
 * @param address
 * @returns {boolean}
 */
export default function checkValidAddress(address: any): boolean {
  if (typeof address !== 'string' || !isAddress(address))
    throw new Error('Invalid address');
  if (address === NON_EXISTENT_ADDRESS) throw new Error('Undefined address');
  return true;
}
