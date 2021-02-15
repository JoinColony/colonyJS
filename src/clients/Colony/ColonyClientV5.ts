import { Contract, Signer } from 'ethers';
import { Provider } from 'ethers/providers';

import { IColonyFactory as IColonyFactoryV3 } from '../../contracts/3/IColonyFactory';
import { IColonyFactory as IColonyFactoryV4 } from '../../contracts/4/IColonyFactory';
import { IColony__factory as IColonyFactoryV5 } from '../../contracts/5/factories/IColony__factory';
import { IColony } from '../../contracts/5/IColony';
import { ColonyNetworkClient } from '../ColonyNetworkClient';
import { ExtendedIColony } from './extensions/commonExtensions';
import { ColonyExtensionsV3 } from './extensions/extensionsV3';
import { ColonyExtensionsV4 } from './extensions/extensionsV4';
import {
  addExtensions,
  ColonyExtensionsV5,
  ExtendedEstimateV5,
} from './extensions/extensionsV5';
import { getAllAbiEvents, getAbiFunctions } from '../../utils';
import { ColonyVersion } from '../../constants';

/*
 * We overwrite the `addDomainWithProofs` interface in order to provide
 * function overloads for the V5 contract
 */
export interface ColonyClientV5
  extends Omit<ExtendedIColony<IColony>, 'addDomainWithProofs'>,
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
  const abiFunctions = getAbiFunctions(
    IColonyFactoryV5,
    address,
    signerOrProvider,
  );
  /*
   * Get all events, including the ones from v3 and v4, as well as the current ones
   */
  const abiEvents = getAllAbiEvents(
    [IColonyFactoryV5, IColonyFactoryV4, IColonyFactoryV3],
    address,
    signerOrProvider,
  );

  /*
   * For this to work we have to create our own instance of the contract, so
   * that we can pass in the merged abi events
   */
  const colonyClientV5 = (new Contract(
    address,
    [...abiFunctions, ...abiEvents],
    signerOrProvider,
  ) as unknown) as ColonyClientV5;

  colonyClientV5.clientVersion = ColonyVersion.CeruleanLightweightSpaceship;
  addExtensions(colonyClientV5, this);

  return (colonyClientV5 as unknown) as ColonyClientV5;
}
