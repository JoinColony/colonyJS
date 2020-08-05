import { Signer } from 'ethers';
import { Provider } from 'ethers/providers';

import { IColonyFactory } from '../../contracts/4/IColonyFactory';
import { IColony } from '../../contracts/4/IColony';
import { ColonyVersion } from '../../constants';
import { ColonyNetworkClient } from '../ColonyNetworkClient';
import { ExtendedIColony } from './extensions/commonExtensions';
import { ColonyExtensionsV3 } from './extensions/extensionsV3';
import {
  addExtensions,
  ColonyExtensionsV4,
  ExtendedEstimateV4,
} from './extensions/extensionsV4';

export interface ColonyClientV4
  extends ExtendedIColony<IColony>,
    ColonyExtensionsV3<IColony>,
    ColonyExtensionsV4<IColony> {
  clientVersion: ColonyVersion.BurgundyGlider;
  estimate: ExtendedIColony<IColony>['estimate'] & ExtendedEstimateV4;
}

export default function getColonyClient(
  this: ColonyNetworkClient,
  address: string,
  signerOrProvider: Signer | Provider,
): ColonyClientV4 {
  const colonyClient = IColonyFactory.connect(
    address,
    signerOrProvider,
  ) as ColonyClientV4;

  colonyClient.clientVersion = ColonyVersion.BurgundyGlider;
  addExtensions(colonyClient, this);

  return colonyClient as ColonyClientV4;
}
