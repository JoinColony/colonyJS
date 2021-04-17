import { Contract, Signer } from 'ethers';
import { Provider } from 'ethers/providers';

import { IColonyFactory as IColonyFactoryV3 } from '../../contracts/3/IColonyFactory';
import { IColonyFactory as IColonyFactoryV4 } from '../../contracts/4/IColonyFactory';
import { IColony__factory as IColonyFactoryV5 } from '../../contracts/5/factories/IColony__factory';
import { IColony__factory as IColonyFactoryV6 } from '../../contracts/colony/6/factories/IColony__factory';
import { IColony__factory as IColonyFactoryV7 } from '../../contracts/colony/7/factories/IColony__factory';
import { IColony } from '../../contracts/colony/7/IColony';
import { ColonyNetworkClient } from '../ColonyNetworkClient';
import { ExtendedIColony } from './extensions/commonExtensions';
import { ColonyExtensionsV3 } from './extensions/extensionsV3';
import { ColonyExtensionsV4 } from './extensions/extensionsV4';
import { ColonyExtensionsV5 } from './extensions/extensionsV5';
import { ColonyExtensionsV6 } from './extensions/extensionsV6';
import {
  addExtensions,
  ColonyExtensionsV7,
  ExtendedEstimateV7,
} from './extensions/extensionsV7';
import { getAllAbiEvents, getAbiFunctions } from '../../utils';
import { ColonyVersion } from '../../versions';

type ColonyExtensions = ExtendedIColony<IColony> &
  ColonyExtensionsV3<IColony> &
  ColonyExtensionsV4<IColony> &
  ColonyExtensionsV5<IColony> &
  ColonyExtensionsV6<IColony> &
  ColonyExtensionsV7<IColony>;

export type ColonyClientV7 = ColonyExtensions & {
  clientVersion: ColonyVersion.CeruleanLightweightSpaceship;
  estimate: ExtendedIColony<IColony>['estimate'] & ExtendedEstimateV7;
};

export default function getColonyClient(
  this: ColonyNetworkClient,
  address: string,
  signerOrProvider: Signer | Provider,
): ColonyClientV7 {
  const abiFunctions = getAbiFunctions(
    IColonyFactoryV7,
    address,
    signerOrProvider,
  );
  /*
   * Get all events, including the ones from v3, as well as the current ones
   */
  const abiEvents = getAllAbiEvents(
    [
      IColonyFactoryV7,
      IColonyFactoryV6,
      IColonyFactoryV5,
      IColonyFactoryV4,
      IColonyFactoryV3,
    ],
    address,
    signerOrProvider,
  );

  /*
   * For this to work we have to create our own instance of the contract, so
   * that we can pass in the merged abi events
   */
  const colonyClientV7 = (new Contract(
    address,
    [...abiFunctions, ...abiEvents],
    signerOrProvider,
  ) as unknown) as ColonyClientV7;

  colonyClientV7.clientVersion = ColonyVersion.CeruleanLightweightSpaceship;
  addExtensions(colonyClientV7, this);

  return colonyClientV7 as ColonyClientV7;
}
