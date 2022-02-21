import { Signer } from 'ethers';
import { Provider } from 'ethers/providers';

import { IColonyFactory } from '../../contracts/2/IColonyFactory';
import { IColony } from '../../contracts/2/IColony';
import { ColonyVersion } from '../../versions';
import { ColonyNetworkClient } from '../ColonyNetworkClient';
import { addExtensions, ExtendedIColony } from './extensions/commonExtensions';
import {
  SetPaymentDomainExtensions,
  SetPaymentDomainEstimate,
  setPaymentDomainWithProofs,
  estimateSetPaymentDomainWithProofs,
} from './extensions/SetPaymentDomain';

export interface ColonyClientV2
  extends ExtendedIColony<IColony>,
    SetPaymentDomainExtensions<IColony> {
  clientVersion: ColonyVersion.Glider;
  estimate: ExtendedIColony<IColony>['estimate'] & SetPaymentDomainEstimate;
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

  colonyClient.clientVersion = ColonyVersion.Glider;
  addExtensions(colonyClient, this);

  colonyClient.setPaymentDomainWithProofs =
    setPaymentDomainWithProofs.bind(colonyClient);
  colonyClient.estimateWithProofs.setPaymentDomain =
    estimateSetPaymentDomainWithProofs.bind(colonyClient);

  return colonyClient as ColonyClientV2;
}
