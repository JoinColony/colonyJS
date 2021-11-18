import { Contract, Signer } from 'ethers';
import { Provider } from 'ethers/providers';

import { IColonyFactory as IColonyFactoryV3 } from '../../contracts/3/IColonyFactory';
import { IColonyFactory as IColonyFactoryV4 } from '../../contracts/4/IColonyFactory';
import { IColony__factory as IColonyFactoryV5 } from '../../contracts/5/factories/IColony__factory';
import { IColony__factory as IColonyFactoryV6 } from '../../contracts/colony/6/factories/IColony__factory';
import { IColony__factory as IColonyFactoryV7 } from '../../contracts/colony/7/factories/IColony__factory';
import { IColony__factory as IColonyFactoryV8 } from '../../contracts/colony/8/factories/IColony__factory';
import { IColony } from '../../contracts/colony/8/IColony';
import { IColony as IColonyV6 } from '../../contracts/colony/6/IColony';
import { IColony as PreviousIColony } from '../../contracts/colony/7/IColony';
import { ColonyNetworkClient } from '../ColonyNetworkClient';
import { ExtendedIColony } from './extensions/commonExtensions';
import { ColonyExtensionsV3 } from './extensions/extensionsV3';
import { ColonyExtensionsV4 } from './extensions/extensionsV4';
import { ColonyExtensionsV5 } from './extensions/extensionsV5';
import { ColonyExtensionsV6 } from './extensions/extensionsV6';
import { ColonyExtensionsV7 } from './extensions/extensionsV7';
import {
  addExtensions,
  ColonyExtensionsV8,
  ExtendedEstimateV8,
} from './extensions/extensionsV8';
import { getAllAbiEvents, getAbiFunctions } from '../../utils';
import { ColonyVersion } from '../../versions';

type ColonyExtensions = Omit<
  ExtendedIColony<IColony>,
  'moveFundsBetweenPotsWithProofs'
> &
  ColonyExtensionsV3<IColonyV6> &
  ColonyExtensionsV4<IColonyV6> &
  ColonyExtensionsV5<IColonyV6> &
  ColonyExtensionsV6<IColonyV6> &
  ColonyExtensionsV7<PreviousIColony> &
  ColonyExtensionsV8<IColony>;

export type ColonyClientV8 = ColonyExtensions & {
  clientVersion: ColonyVersion.EbonyLightweightSpaceship;
  estimate: ExtendedIColony<IColony>['estimate'] & ExtendedEstimateV8;
};

export default function getColonyClient(
  this: ColonyNetworkClient,
  address: string,
  signerOrProvider: Signer | Provider,
): ColonyClientV8 {
  const abiFunctions = getAbiFunctions(
    IColonyFactoryV8,
    address,
    signerOrProvider,
  );
  /*
   * Get all events, including the ones from v3, as well as the current ones
   */
  const abiEvents = getAllAbiEvents(
    [
      IColonyFactoryV8,
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
  const colonyClientV8 = (new Contract(
    address,
    [...abiFunctions, ...abiEvents],
    signerOrProvider,
  ) as unknown) as ColonyClientV8;

  colonyClientV8.clientVersion = ColonyVersion.EbonyLightweightSpaceship;
  addExtensions(colonyClientV8, this);

  return colonyClientV8 as ColonyClientV8;
}
