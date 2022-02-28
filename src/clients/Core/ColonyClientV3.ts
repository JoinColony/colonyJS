import { Signer } from 'ethers';
import { Provider } from 'ethers/providers';

import { IColony__factory as IColonyFactory } from '../../contracts/IColony/3/factories/IColony__factory';
import { IColony } from '../../contracts/IColony/3/IColony';
import { ColonyNetworkClient } from '../ColonyNetworkClient';
import { AugmentedIColony } from './augments/commonAugments';
import {
  addAugments,
  ColonyAugmentsV3,
  AugmentedEstimateV3,
} from './augments/augmentsV3';
import {
  SetPaymentDomainAugments,
  SetPaymentDomainEstimate,
  setPaymentDomainWithProofs,
  estimateSetPaymentDomainWithProofs,
} from './augments/SetPaymentDomain';

export interface ColonyClientV3
  extends AugmentedIColony<IColony>,
    ColonyAugmentsV3<IColony>,
    SetPaymentDomainAugments<IColony> {
  clientVersion: 3;
  estimate: AugmentedIColony<IColony>['estimate'] &
    SetPaymentDomainEstimate &
    AugmentedEstimateV3;
}

export default function getColonyClient(
  this: ColonyNetworkClient,
  address: string,
  signerOrProvider: Signer | Provider,
): ColonyClientV3 {
  const colonyClient = IColonyFactory.connect(
    address,
    signerOrProvider,
  ) as ColonyClientV3;

  colonyClient.clientVersion = 3;
  addAugments(colonyClient, this);

  colonyClient.setPaymentDomainWithProofs =
    setPaymentDomainWithProofs.bind(colonyClient);
  colonyClient.estimate.setPaymentDomainWithProofs =
    estimateSetPaymentDomainWithProofs.bind(colonyClient);

  return colonyClient as ColonyClientV3;
}
