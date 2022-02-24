import { Contract, Signer } from 'ethers';
import { Provider } from 'ethers/providers';

import { IColony__factory as IColonyFactoryV3 } from '../../contracts/IColony/3/factories/IColony__factory';
import { IColony__factory as IColonyFactoryV4 } from '../../contracts/IColony/4/factories/IColony__factory';
import { IColony__factory as IColonyFactoryV5 } from '../../contracts/IColony/5/factories/IColony__factory';
import { IColony__factory as IColonyFactoryV6 } from '../../contracts/IColony/6/factories/IColony__factory';
import { IColony__factory as IColonyFactoryV7 } from '../../contracts/IColony/7/factories/IColony__factory';
import { IColony } from '../../contracts/IColony/7/IColony';
import { IColony as PreviousIColony } from '../../contracts/IColony/6/IColony';
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

type ColonyExtensions = Omit<
  ExtendedIColony<IColony>,
  'moveFundsBetweenPotsWithProofs'
> &
  ColonyExtensionsV3<PreviousIColony> &
  ColonyExtensionsV4<PreviousIColony> &
  ColonyExtensionsV5<PreviousIColony> &
  ColonyExtensionsV6<PreviousIColony> &
  ColonyExtensionsV7<IColony>;

export type ColonyClientV7 = ColonyExtensions & {
  clientVersion: 7;
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
  const colonyClientV7 = new Contract(
    address,
    [...abiFunctions, ...abiEvents],
    signerOrProvider,
  ) as unknown as ColonyClientV7;

  colonyClientV7.clientVersion = 7;
  addExtensions(colonyClientV7, this);

  return colonyClientV7 as ColonyClientV7;
}
