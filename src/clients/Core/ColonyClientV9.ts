import { Contract, Signer } from 'ethers';
import { Provider } from 'ethers/providers';

import { IColony__factory as IColonyFactoryV3 } from '../../contracts/IColony/3/factories/IColony__factory';
import { IColony__factory as IColonyFactoryV4 } from '../../contracts/IColony/4/factories/IColony__factory';
import { IColony__factory as IColonyFactoryV5 } from '../../contracts/IColony/5/factories/IColony__factory';
import { IColony__factory as IColonyFactoryV6 } from '../../contracts/IColony/6/factories/IColony__factory';
import { IColony__factory as IColonyFactoryV7 } from '../../contracts/IColony/7/factories/IColony__factory';
import { IColony__factory as IColonyFactoryV8 } from '../../contracts/IColony/8/factories/IColony__factory';
import { IColony__factory as IColonyFactoryV9 } from '../../contracts/IColony/9/factories/IColony__factory';
import { IColony } from '../../contracts/IColony/9/IColony';
import { IColony as IColonyV6 } from '../../contracts/IColony/6/IColony';
import { IColony as IColonyV7 } from '../../contracts/IColony/7/IColony';
import { IColony as PreviousIColony } from '../../contracts/IColony/8/IColony';
import { ColonyNetworkClient } from '../ColonyNetworkClient';
import { AugmentedIColony } from './augments/commonAugments';
import { ColonyAugmentsV3 } from './augments/augmentsV3';
import { ColonyAugmentsV4 } from './augments/augmentsV4';
import { ColonyAugmentsV5 } from './augments/augmentsV5';
import { ColonyAugmentsV6 } from './augments/augmentsV6';
import { ColonyAugmentsV7 } from './augments/augmentsV7';
import { ColonyAugmentsV8 } from './augments/augmentsV8';
import {
  addAugments,
  ColonyAugmentsV9,
  AugmentedEstimateV9,
} from './augments/augmentsV9';
import { getAllAbiEvents, getAbiFunctions } from '../../utils';

type ColonyAugments = Omit<
  AugmentedIColony<IColony>,
  'moveFundsBetweenPotsWithProofs'
> &
  ColonyAugmentsV3<IColonyV6> &
  ColonyAugmentsV4<IColonyV6> &
  ColonyAugmentsV5<IColonyV6> &
  ColonyAugmentsV6<IColonyV6> &
  ColonyAugmentsV7<IColonyV7> &
  ColonyAugmentsV8<PreviousIColony> &
  ColonyAugmentsV9<IColony>;

export type ColonyClientV9 = ColonyAugments & {
  clientVersion: 9;
  estimate: AugmentedIColony<IColony>['estimate'] & AugmentedEstimateV9;
};

export default function getColonyClient(
  this: ColonyNetworkClient,
  address: string,
  signerOrProvider: Signer | Provider,
): ColonyClientV9 {
  const abiFunctions = getAbiFunctions(
    IColonyFactoryV9,
    address,
    signerOrProvider,
  );
  /*
   * Get all events, including the ones from v3, as well as the current ones
   */
  const abiEvents = getAllAbiEvents(
    [
      IColonyFactoryV9,
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
  const colonyClientV9 = new Contract(
    address,
    [...abiFunctions, ...abiEvents],
    signerOrProvider,
  ) as unknown as ColonyClientV9;

  colonyClientV9.clientVersion = 9;
  addAugments(colonyClientV9, this);

  return colonyClientV9 as ColonyClientV9;
}
