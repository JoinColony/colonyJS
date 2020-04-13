import { Signer } from 'ethers';
import { Provider } from 'ethers/providers';

import { IColonyFactory } from '../../../lib/contracts/1/IColonyFactory';
import { IColony } from '../../../lib/contracts/1/IColony';
import { ColonyVersion } from '../../../versions';
import { ExtendedIColonyNetwork } from '../ColonyNetworkClient';
import { ColonyExtensions, addExtensions } from './extensions/commonExtensions';
import {
  SetPaymentDomainExtensions,
  SetPaymentDomainEstimate,
  setPaymentDomainWithProofs,
  estimateSetPaymentDomainWithProofs,
} from './extensions/SetPaymentDomain';

export interface ExtendedIColonyV1
  extends IColony,
    ColonyExtensions,
    SetPaymentDomainExtensions {
  clientVersion: ColonyVersion.GoerliGlider;
  estimateWithProofs: ColonyExtensions['estimateWithProofs'] &
    SetPaymentDomainEstimate;
}

export default function getColonyClient(
  this: ExtendedIColonyNetwork,
  address: string,
  signerOrProvider: Signer | Provider,
): ExtendedIColonyV1 {
  const colonyClient = IColonyFactory.connect(
    address,
    signerOrProvider,
  ) as ExtendedIColonyV1;

  colonyClient.clientVersion = ColonyVersion.GoerliGlider;
  addExtensions(colonyClient, this);

  /* eslint-disable max-len */
  colonyClient.setPaymentDomainWithProofs = setPaymentDomainWithProofs.bind(
    colonyClient,
  );
  colonyClient.estimateWithProofs.setPaymentDomain = estimateSetPaymentDomainWithProofs.bind(
    colonyClient,
  );
  /* eslint-enable max-len */

  return colonyClient as ExtendedIColonyV1;
}
