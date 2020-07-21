import { Signer } from 'ethers';
import { Provider } from 'ethers/providers';

import { IColonyFactory } from '../../contracts/1/IColonyFactory';
import { IColony } from '../../contracts/1/IColony';
import { ColonyVersion } from '../../constants';
import { ColonyNetworkClient } from '../ColonyNetworkClient';
import { addExtensions, ExtendedIColony } from './extensions/commonExtensions';
import {
  SetPaymentDomainExtensions,
  SetPaymentDomainEstimate,
  setPaymentDomainWithProofs,
  estimateSetPaymentDomainWithProofs,
} from './extensions/SetPaymentDomain';

export interface ColonyClientV1
  extends ExtendedIColony<IColony>,
    SetPaymentDomainExtensions<IColony> {
  clientVersion: ColonyVersion.GoerliGlider;
  estimate: ExtendedIColony<IColony>['estimate'] & SetPaymentDomainEstimate;
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

  colonyClient.clientVersion = ColonyVersion.GoerliGlider;
  addExtensions(colonyClient, this);

  /* eslint-disable max-len */
  colonyClient.setPaymentDomainWithProofs = setPaymentDomainWithProofs.bind(
    colonyClient,
  );
  colonyClient.estimate.setPaymentDomain = estimateSetPaymentDomainWithProofs.bind(
    colonyClient,
  );
  /* eslint-enable max-len */

  return colonyClient as ColonyClientV1;
}
