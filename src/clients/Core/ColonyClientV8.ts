import { Contract, Signer } from 'ethers';
import { Provider } from 'ethers/providers';

import { IColony__factory as IColonyFactoryV3 } from '../../contracts/IColony/3/factories/IColony__factory';
import { IColony__factory as IColonyFactoryV4 } from '../../contracts/IColony/4/factories/IColony__factory';
import { IColony__factory as IColonyFactoryV5 } from '../../contracts/IColony/5/factories/IColony__factory';
import { IColony__factory as IColonyFactoryV6 } from '../../contracts/IColony/6/factories/IColony__factory';
import { IColony__factory as IColonyFactoryV7 } from '../../contracts/IColony/7/factories/IColony__factory';
import { IColony__factory as IColonyFactoryV8 } from '../../contracts/IColony/8/factories/IColony__factory';
import { IColony } from '../../contracts/IColony/8/IColony';
import { IColony as IColonyV6 } from '../../contracts/IColony/6/IColony';
import { IColony as PreviousIColony } from '../../contracts/IColony/7/IColony';
import { ColonyNetworkClient } from '../ColonyNetworkClient';
import { AugmentedIColony } from './augments/commonAugments';
import { ColonyAugmentsV3 } from './augments/augmentsV3';
import { ColonyAugmentsV4 } from './augments/augmentsV4';
import { ColonyAugmentsV5 } from './augments/augmentsV5';
import { ColonyAugmentsV6 } from './augments/augmentsV6';
import { ColonyAugmentsV7 } from './augments/augmentsV7';
import {
  addAugments,
  ColonyAugmentsV8,
  AugmentedEstimateV8,
} from './augments/augmentsV8';
import { getAllAbiEvents, getAbiFunctions } from '../../utils';

type ColonyAugments = Omit<
  AugmentedIColony<IColony>,
  'moveFundsBetweenPotsWithProofs'
> &
  ColonyAugmentsV3<IColonyV6> &
  ColonyAugmentsV4<IColonyV6> &
  ColonyAugmentsV5<IColonyV6> &
  ColonyAugmentsV6<IColonyV6> &
  ColonyAugmentsV7<PreviousIColony> &
  ColonyAugmentsV8<IColony>;

export type ColonyClientV8 = ColonyAugments & {
  clientVersion: 8;
  estimate: AugmentedIColony<IColony>['estimate'] & AugmentedEstimateV8;
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
  const colonyClientV8 = new Contract(
    address,
    [...abiFunctions, ...abiEvents],
    signerOrProvider,
  ) as unknown as ColonyClientV8;

  colonyClientV8.clientVersion = 8;
  addAugments(colonyClientV8, this);

  return colonyClientV8 as ColonyClientV8;
}
