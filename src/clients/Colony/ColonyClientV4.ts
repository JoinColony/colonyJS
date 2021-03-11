import { Contract, Signer } from 'ethers';
import { Provider } from 'ethers/providers';

import { IColonyFactory as IColonyFactoryV3 } from '../../contracts/3/IColonyFactory';
import { IColonyFactory as IColonyFactoryV4 } from '../../contracts/4/IColonyFactory';
import { IColony } from '../../contracts/4/IColony';
import { ColonyNetworkClient } from '../ColonyNetworkClient';
import { ExtendedIColony } from './extensions/commonExtensions';
import { ColonyExtensionsV3 } from './extensions/extensionsV3';
import {
  addExtensions,
  ColonyExtensionsV4,
  ExtendedEstimateV4,
} from './extensions/extensionsV4';
import { getAllAbiEvents, getAbiFunctions } from '../../utils';
import { ColonyVersion } from '../../versions';

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
  const abiFunctions = getAbiFunctions(
    IColonyFactoryV4,
    address,
    signerOrProvider,
  );
  /*
   * Get all events, including the ones from v3 and v4, as well as the current ones
   */
  const abiEvents = getAllAbiEvents(
    [IColonyFactoryV4, IColonyFactoryV3],
    address,
    signerOrProvider,
  );

  /*
   * For this to work we have to create our own instance of the contract, so
   * that we can pass in the merged abi events
   */
  const colonyClientV4 = (new Contract(
    address,
    [...abiFunctions, ...abiEvents],
    signerOrProvider,
  ) as unknown) as ColonyClientV4;

  colonyClientV4.clientVersion = ColonyVersion.BurgundyGlider;
  addExtensions(colonyClientV4, this);

  return colonyClientV4 as ColonyClientV4;
}
