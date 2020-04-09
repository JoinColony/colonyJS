import { Signer } from 'ethers';
import { Provider } from 'ethers/providers';

import { IColonyFactory } from '../../../lib/contracts/2/IColonyFactory';
import { IColony } from '../../../lib/contracts/2/IColony';
import { ColonyVersion } from '../../../versions';
import { ExtendedIColonyNetwork } from '../ColonyNetworkClient';
import { addExtensions, ColonyExtensions } from './extensions';
import {
  SetPaymentDomainExtensions,
  SetPaymentDomainEstimate,
  setPaymentDomainWithProofs,
  estimateSetPaymentDomainWithProofs,
} from './SetPaymentDomain';

export interface ExtendedIColonyV2
  extends IColony,
    ColonyExtensions,
    SetPaymentDomainExtensions {
  clientVersion: ColonyVersion.Glider;
  estimateWithProofs: ColonyExtensions['estimateWithProofs'] &
    SetPaymentDomainEstimate;
}

export default function getColonyClient(
  this: ExtendedIColonyNetwork,
  address: string,
  signerOrProvider: Signer | Provider,
): ExtendedIColonyV2 {
  const colonyClient = IColonyFactory.connect(
    address,
    signerOrProvider,
  ) as ExtendedIColonyV2;

  colonyClient.clientVersion = ColonyVersion.Glider;
  addExtensions(colonyClient, this);

  /* eslint-disable max-len */
  colonyClient.setPaymentDomainWithProofs = setPaymentDomainWithProofs.bind(
    colonyClient,
  );
  colonyClient.estimateWithProofs.setPaymentDomain = estimateSetPaymentDomainWithProofs.bind(
    colonyClient,
  );
  /* eslint-enable max-len */

  return colonyClient as ExtendedIColonyV2;
}
