/* @flow */

import { Contract } from 'ethers';

class Adapter {
  _signer: Object;
  constructor(signer: Object) {
    this._signer = signer;
  }
  getContract(address: string, abi: Object): Contract {
    return new Contract(address, abi, this._signer);
  }
}

export default Adapter;
