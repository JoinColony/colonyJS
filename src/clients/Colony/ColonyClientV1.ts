import { Signer } from 'ethers';
import { Provider } from 'ethers/providers';

import { IColonyFactory } from '../../../lib/contracts/1/IColonyFactory';
import { IColony } from '../../../lib/contracts/1/IColony';
import { ColonyVersion } from '../../../versions';
import { ExtendedIColonyNetwork } from '../ColonyNetworkClient';
import { ColonyExtensions, addExtensions } from './extensions';

export interface ExtendedIColonyV1 extends IColony, ColonyExtensions {
  clientVersion: ColonyVersion.GoerliGlider;
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

  return colonyClient as ExtendedIColonyV1;
}
