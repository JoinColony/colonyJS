import { Contract, Signer } from 'ethers';
import { Provider } from 'ethers/providers';

import { _abi } from '../../../lib/contracts/2/IColonyFactory';
import { IColony } from '../../../lib/contracts/2/IColony';
import ColonyClientV1 from './ColonyClientV1';
import { ColonyClient, ColonyVersions } from './ColonyClient';

class ColonyClientV2<C extends Contract = IColony> extends ColonyClientV1<C>
  implements ColonyClient<C> {
  contract?: C;

  version = ColonyVersions.Glider;

  connect(signerOrProvider: Signer | Provider): void {
    this.contract = new Contract(this.address, _abi, signerOrProvider) as C;
  }
}

export default ColonyClientV2;
