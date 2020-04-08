import { Signer } from 'ethers';
import { Provider } from 'ethers/providers';

import { IColonyFactory } from '../../../lib/contracts/2/IColonyFactory';
import { IColony } from '../../../lib/contracts/2/IColony';
import { ColonyVersion } from '../../../versions';
import { ExtendedIColonyNetwork } from '../ColonyNetworkClient';

import { addExtensions, ColonyExtensions } from './ColonyClientV1';

export interface ExtendedIColonyV2 extends IColony, ColonyExtensions {
  clientVersion: ColonyVersion.Glider;
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

  return colonyClient as ExtendedIColonyV2;
}
