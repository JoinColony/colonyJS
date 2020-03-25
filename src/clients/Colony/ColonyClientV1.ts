import { Contract, Signer } from 'ethers';
import { Provider } from 'ethers/providers';

import { _abi } from '../../../lib/contracts/1/IColonyFactory';
import { IColony } from '../../../lib/contracts/1/IColony';
import { ColonyClient, ColonyVersions } from './ColonyClient';

class ColonyClientV1<C extends Contract = IColony> implements ColonyClient<C> {
  readonly address: string;

  contract?: C;

  version = ColonyVersions.GoerliGlider;

  constructor(address: string) {
    this.address = address;
  }

  connect(signerOrProvider: Signer | Provider): void {
    this.contract = new Contract(this.address, _abi, signerOrProvider) as C;
  }
}

export default ColonyClientV1;
