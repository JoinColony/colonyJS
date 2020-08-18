import { Signer } from 'ethers';
import { Provider } from 'ethers/providers';

import { IColonyFactory } from '../../contracts/5/IColonyFactory';
import { IColony } from '../../contracts/5/IColony';
import { ColonyVersion } from '../../constants';
import { ColonyNetworkClient } from '../ColonyNetworkClient';
import { ExtendedIColony } from './extensions/commonExtensions';
import { ColonyExtensionsV3 } from './extensions/extensionsV3';
import { ColonyExtensionsV4 } from './extensions/extensionsV4';
import {
  addExtensions,
  ColonyExtensionsV5,
  ExtendedEstimateV5,
} from './extensions/extensionsV5';

export interface ColonyClientV5
  extends ExtendedIColony<IColony>,
    ColonyExtensionsV3<IColony>,
    ColonyExtensionsV4<IColony>,
    ColonyExtensionsV5<IColony> {
  clientVersion: ColonyVersion.CeruleanLightweightSpaceship;
  estimate: ExtendedIColony<IColony>['estimate'] & ExtendedEstimateV5;
}

export default function getColonyClient(
  this: ColonyNetworkClient,
  address: string,
  signerOrProvider: Signer | Provider,
): ColonyClientV5 {
  const colonyClient = IColonyFactory.connect(
    address,
    signerOrProvider,
  ) as ColonyClientV5;

  colonyClient.clientVersion = ColonyVersion.CeruleanLightweightSpaceship;
  addExtensions(colonyClient, this);

  return colonyClient as ColonyClientV5;
}
