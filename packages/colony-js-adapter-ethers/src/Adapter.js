/* @flow */

import { Contract } from 'ethers';
import type { IAdapter } from '@colony/colony-js-adapter';

class Adapter implements IAdapter {
  _signer: Object;
  constructor(signer: Object): void {
    this._signer = signer;
  }
  getContract(address: string, abi: Object): Contract {
    return new Contract(address, abi, this._signer);
  }
}

export default Adapter;
