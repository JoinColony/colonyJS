import { Signer } from 'ethers';
import { Provider } from 'ethers/providers';

import { IColonyFactory } from '../../../lib/contracts/4/IColonyFactory';
import { IColony } from '../../../lib/contracts/4/IColony';
import { ColonyVersion } from '../../../versions';
import { ExtendedIColonyNetwork } from '../ColonyNetworkClient';
import { addExtensions, ColonyExtensionsV4 } from './extensionsV4';

export interface ExtendedIColonyV4 extends IColony, ColonyExtensionsV4 {
  clientVersion: ColonyVersion.BurgundyGlider;
}

export default function getColonyClient(
  this: ExtendedIColonyNetwork,
  address: string,
  signerOrProvider: Signer | Provider,
): ExtendedIColonyV4 {
  const colonyClient = IColonyFactory.connect(
    address,
    signerOrProvider,
  ) as ExtendedIColonyV4;

  colonyClient.clientVersion = ColonyVersion.BurgundyGlider;
  addExtensions(colonyClient, this);

  return colonyClient as ExtendedIColonyV4;
}
