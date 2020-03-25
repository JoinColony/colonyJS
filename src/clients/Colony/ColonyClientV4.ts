import { Contract, Signer } from 'ethers';
import { Provider } from 'ethers/providers';

import { _abi } from '../../../lib/contracts/4/IColonyFactory';
import { IColony } from '../../../lib/contracts/4/IColony';
import ColonyClientV3 from './ColonyClientV3';
import { ColonyClient, ColonyVersions } from './ColonyClient';

class ColonyClientV4<C extends Contract = IColony> extends ColonyClientV3<C>
  implements ColonyClient<C> {
  contract?: C;

  version = ColonyVersions.BurgundyGlider;

  connect(signerOrProvider: Signer | Provider): void {
    this.contract = new Contract(this.address, _abi, signerOrProvider) as C;
  }
}

export default ColonyClientV4;

/* IDEAS */
// contract: IColony;

// constructor() {
//   super();
//   this.contract = new IColony();
//   // Make `estimate` a class?
//   this.estimate = {
//     ...super.estimate,
//     addDomain,
//   };
// }

// // Other option
// estimateAddDomainWithProofs()
// // Instead of
// estimate.addDomainWithProofs()

// addDomainWithProofs(parentDomain: number) {
//   const [_childSkillIndex, _childDomainId] = this.getDomainProofs(
//     'addDomain',
//   );
//   return this.contract.addDomain(
//     _childSkillIndex,
//     _childSkillIndex,
//     parentDomain,
//   );
// }
// }

/* IDEAS */
// colonyClient.contract.getTask();
// colonyClient.addDomainWithProofs();

// if (
//   version === ColonyVersions.Glider ||
//   version === ColonyVersions.AuburnGlider ||
//   version === ColonyVersions.BurgundyGlider
// ) {
//   colonyClient.addDomain();
// }
