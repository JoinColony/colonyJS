import { Signer } from 'ethers';
import { Provider } from 'ethers/providers';

import { IColony__factory as IColonyFactory } from '../../contracts/IColony/2/factories/IColony__factory';
import { IColony } from '../../contracts/IColony/2/IColony';
import { ColonyNetworkClient } from '../ColonyNetworkClient';
import { addAugments, AugmentedIColony } from './augments/commonAugments';
import {
  SetPaymentDomainAugments,
  SetPaymentDomainEstimate,
  setPaymentDomainWithProofs,
  estimateSetPaymentDomainWithProofs,
} from './augments/SetPaymentDomain';

export interface ColonyClientV2
  extends AugmentedIColony<IColony>,
    SetPaymentDomainAugments<IColony> {
  clientVersion: 2;
  estimate: AugmentedIColony<IColony>['estimate'] & SetPaymentDomainEstimate;
}

export default function getColonyClient(
  this: ColonyNetworkClient,
  address: string,
  signerOrProvider: Signer | Provider,
): ColonyClientV2 {
  const colonyClient = IColonyFactory.connect(
    address,
    signerOrProvider,
  ) as ColonyClientV2;

  colonyClient.clientVersion = 2;
  addAugments(colonyClient, this);

  colonyClient.setPaymentDomainWithProofs =
    setPaymentDomainWithProofs.bind(colonyClient);
  colonyClient.estimateWithProofs.setPaymentDomain =
    estimateSetPaymentDomainWithProofs.bind(colonyClient);

  return colonyClient as ColonyClientV2;
}
