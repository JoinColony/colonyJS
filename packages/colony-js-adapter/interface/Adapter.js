/* @flow */

import type { Contract } from './Contract';

export interface Adapter {
  _signer: Object;
  getContract(address: string, abi: Object): Contract;
}
