import { Contract, Signer } from 'ethers';
import { Provider } from 'ethers/providers';

import { _abi } from '../../../lib/contracts/3/IColonyFactory';
import { IColony } from '../../../lib/contracts/3/IColony';
import ColonyClientV2 from './ColonyClientV2';
import { ColonyClient, ColonyVersions } from './ColonyClient';

class ColonyClientV3<C extends Contract = IColony> extends ColonyClientV2<C>
  implements ColonyClient<C> {
  contract?: C;

  version = ColonyVersions.AuburnGlider;

  connect(signerOrProvider: Signer | Provider): void {
    this.contract = new Contract(this.address, _abi, signerOrProvider) as C;
  }
}

export default ColonyClientV3;
