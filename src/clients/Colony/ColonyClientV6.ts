import { Contract, Signer } from 'ethers';
import { Provider } from 'ethers/providers';

import { IColonyFactory as IColonyFactoryV3 } from '../../contracts/3/IColonyFactory';
import { IColonyFactory as IColonyFactoryV4 } from '../../contracts/4/IColonyFactory';
import { IColony__factory as IColonyFactoryV5 } from '../../contracts/5/factories/IColony__factory';
import { IColony__factory as IColonyFactoryV6 } from '../../contracts/6/factories/IColony__factory';
import { IColony } from '../../contracts/6/IColony';
import { ColonyNetworkClient } from '../ColonyNetworkClient';
import { ExtendedIColony } from './extensions/commonExtensions';
import { ColonyExtensionsV3 } from './extensions/extensionsV3';
import { ColonyExtensionsV4 } from './extensions/extensionsV4';
import { ColonyExtensionsV5 } from './extensions/extensionsV5';
import {
  addExtensions,
  ColonyExtensionsV6,
  ExtendedEstimateV6,
} from './extensions/extensionsV6';
import { getAllAbiEvents, getAbiFunctions } from '../../utils';
import { ColonyVersion } from '../../versions';

type ColonyExtensions = ExtendedIColony<IColony> &
  ColonyExtensionsV3<IColony> &
  ColonyExtensionsV4<IColony> &
  ColonyExtensionsV5<IColony> &
  ColonyExtensionsV6<IColony>;

export type ColonyClientV6 = ColonyExtensions & {
  clientVersion: ColonyVersion.CeruleanLightweightSpaceship;
  estimate: ExtendedIColony<IColony>['estimate'] & ExtendedEstimateV6;
};

export default function getColonyClient(
  this: ColonyNetworkClient,
  address: string,
  signerOrProvider: Signer | Provider,
): ColonyClientV6 {
  const abiFunctions = getAbiFunctions(
    IColonyFactoryV6,
    address,
    signerOrProvider,
  );
  /*
   * Get all events, including the ones from v3, as well as the current ones
   */
  const abiEvents = getAllAbiEvents(
    [IColonyFactoryV6, IColonyFactoryV5, IColonyFactoryV4, IColonyFactoryV3],
    address,
    signerOrProvider,
  );

  /*
   * For this to work we have to create our own instance of the contract, so
   * that we can pass in the merged abi events
   */
  const colonyClientV6 = (new Contract(
    address,
    [...abiFunctions, ...abiEvents],
    signerOrProvider,
  ) as unknown) as ColonyClientV6;

  colonyClientV6.clientVersion = ColonyVersion.CeruleanLightweightSpaceship;
  addExtensions(colonyClientV6, this);

  return colonyClientV6 as ColonyClientV6;
}
