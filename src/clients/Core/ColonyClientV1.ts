import { Signer } from 'ethers';
import { Provider } from 'ethers/providers';

import { IColony__factory as IColonyFactory } from '../../contracts/IColony/1/factories/IColony__factory';
import { IColony } from '../../contracts/IColony/1/IColony';
import { ColonyNetworkClient } from '../ColonyNetworkClient';
import { addAugments, AugmentedIColony } from './augments/commonAugments';
import {
  SetPaymentDomainAugments,
  SetPaymentDomainEstimate,
  setPaymentDomainWithProofs,
  estimateSetPaymentDomainWithProofs,
} from './augments/SetPaymentDomain';

export interface ColonyClientV1
  extends AugmentedIColony<IColony>,
    SetPaymentDomainAugments<IColony> {
  clientVersion: 1;
  estimate: AugmentedIColony<IColony>['estimate'] & SetPaymentDomainEstimate;
}

export default function getColonyClient(
  this: ColonyNetworkClient,
  address: string,
  signerOrProvider: Signer | Provider,
): ColonyClientV1 {
  const colonyClient = IColonyFactory.connect(
    address,
    signerOrProvider,
  ) as ColonyClientV1;

  colonyClient.clientVersion = 1;
  addAugments(colonyClient, this);

  colonyClient.setPaymentDomainWithProofs =
    setPaymentDomainWithProofs.bind(colonyClient);
  colonyClient.estimate.setPaymentDomainWithProofs =
    estimateSetPaymentDomainWithProofs.bind(colonyClient);

  return colonyClient as ColonyClientV1;
}
