import { Contract, Signer } from 'ethers';
import { Provider } from 'ethers/providers';

import { IColony__factory as IColonyFactoryV3 } from '../../contracts/IColony/3/factories/IColony__factory';
import { IColony__factory as IColonyFactoryV4 } from '../../contracts/IColony/4/factories/IColony__factory';
import { IColony__factory as IColonyFactoryV5 } from '../../contracts/IColony/5/factories/IColony__factory';
import { IColony__factory as IColonyFactoryV6 } from '../../contracts/IColony/6/factories/IColony__factory';
import { IColony } from '../../contracts/IColony/6/IColony';
import { ColonyNetworkClient } from '../ColonyNetworkClient';
import { AugmentedIColony } from './augments/commonAugments';
import { ColonyAugmentsV3 } from './augments/augmentsV3';
import { ColonyAugmentsV4 } from './augments/augmentsV4';
import { ColonyAugmentsV5 } from './augments/augmentsV5';
import {
  addExtensions,
  ColonyAugmentsV6,
  AugmentedEstimateV6,
} from './augments/augmentsV6';
import { getAllAbiEvents, getAbiFunctions } from '../../utils';

type ColonyAugments = AugmentedIColony<IColony> &
  ColonyAugmentsV3<IColony> &
  ColonyAugmentsV4<IColony> &
  ColonyAugmentsV5<IColony> &
  ColonyAugmentsV6<IColony>;

export type ColonyClientV6 = ColonyAugments & {
  clientVersion: 6;
  estimate: AugmentedIColony<IColony>['estimate'] & AugmentedEstimateV6;
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
  const colonyClientV6 = new Contract(
    address,
    [...abiFunctions, ...abiEvents],
    signerOrProvider,
  ) as unknown as ColonyClientV6;

  colonyClientV6.clientVersion = 6;
  addExtensions(colonyClientV6, this);

  return colonyClientV6 as ColonyClientV6;
}
