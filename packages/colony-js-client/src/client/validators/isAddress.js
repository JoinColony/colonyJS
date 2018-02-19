/* @flow */

import { isAddress as web3isAddress } from 'web3-utils';
import ValidationError from './ValidationError';

export default function isAddress(address: string): boolean {
  if (typeof address !== 'string') {
    throw new ValidationError(
      `Address ${(address.toString && address.toString()) ||
        `[type ${typeof address}]`} is not a valid string`,
    );
  }
  if (!web3isAddress(address)) {
    throw new ValidationError(`Address ${address} is not a valid address`);
  }
  return true;
}
