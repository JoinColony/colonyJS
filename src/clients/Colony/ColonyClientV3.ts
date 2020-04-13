import { Signer } from 'ethers';
import { Provider } from 'ethers/providers';

import { IColonyFactory } from '../../../lib/contracts/3/IColonyFactory';
import { IColony } from '../../../lib/contracts/3/IColony';
import { ColonyVersion } from '../../../versions';
import { ExtendedIColonyNetwork } from '../ColonyNetworkClient';
import { addExtensions, ColonyExtensionsV3 } from './extensions/extensionsV3';
import {
  SetPaymentDomainExtensions,
  SetPaymentDomainEstimate,
  setPaymentDomainWithProofs,
  estimateSetPaymentDomainWithProofs,
} from './extensions/SetPaymentDomain';

export interface ExtendedIColonyV3
  extends IColony,
    ColonyExtensionsV3,
    SetPaymentDomainExtensions {
  clientVersion: ColonyVersion.AuburnGlider;
  estimateWithProofs: ColonyExtensionsV3['estimateWithProofs'] &
    SetPaymentDomainEstimate;
}

export default function getColonyClient(
  this: ExtendedIColonyNetwork,
  address: string,
  signerOrProvider: Signer | Provider,
): ExtendedIColonyV3 {
  const colonyClient = IColonyFactory.connect(
    address,
    signerOrProvider,
  ) as ExtendedIColonyV3;

  colonyClient.clientVersion = ColonyVersion.AuburnGlider;
  addExtensions(colonyClient, this);

  /* eslint-disable max-len */
  colonyClient.setPaymentDomainWithProofs = setPaymentDomainWithProofs.bind(
    colonyClient,
  );
  colonyClient.estimateWithProofs.setPaymentDomain = estimateSetPaymentDomainWithProofs.bind(
    colonyClient,
  );
  /* eslint-enable max-len */

  return colonyClient as ExtendedIColonyV3;
}
