import { Signer } from 'ethers';
import { Provider } from 'ethers/providers';

import { IColonyFactory } from '../../contracts/3/IColonyFactory';
import { IColony } from '../../contracts/3/IColony';
import { ColonyVersion } from '../../constants';
import { ColonyNetworkClient } from '../ColonyNetworkClient';
import { ExtendedIColony } from './extensions/commonExtensions';
import {
  addExtensions,
  ColonyExtensionsV3,
  ExtendedEstimateV3,
} from './extensions/extensionsV3';
import {
  SetPaymentDomainExtensions,
  SetPaymentDomainEstimate,
  setPaymentDomainWithProofs,
  estimateSetPaymentDomainWithProofs,
} from './extensions/SetPaymentDomain';

export interface ColonyClientV3
  extends ExtendedIColony<IColony>,
    ColonyExtensionsV3<IColony>,
    SetPaymentDomainExtensions<IColony> {
  clientVersion: ColonyVersion.AuburnGlider;
  estimate: ExtendedIColony<IColony>['estimate'] &
    SetPaymentDomainEstimate &
    ExtendedEstimateV3;
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

  colonyClient.clientVersion = ColonyVersion.AuburnGlider;
  addExtensions(colonyClient, this);

  /* eslint-disable max-len */
  colonyClient.setPaymentDomainWithProofs = setPaymentDomainWithProofs.bind(
    colonyClient,
  );
  colonyClient.estimate.setPaymentDomainWithProofs = estimateSetPaymentDomainWithProofs.bind(
    colonyClient,
  );
  /* eslint-enable max-len */

  return colonyClient as ColonyClientV3;
}
