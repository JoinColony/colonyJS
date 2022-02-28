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
import { AugmentedIColony } from './augments/commonAugments';
import { ColonyAugmentsV3 } from './augments/augmentsV3';
import { ColonyAugmentsV4 } from './augments/augmentsV4';
import { ColonyAugmentsV5 } from './augments/augmentsV5';
import { ColonyAugmentsV6 } from './augments/augmentsV6';
import {
  addAugments,
  ColonyAugmentsV7,
  AugmentedEstimateV7,
} from './augments/augmentsV7';
import { getAllAbiEvents, getAbiFunctions } from '../../utils';

type ColonyAugments = Omit<
  AugmentedIColony<IColony>,
  'moveFundsBetweenPotsWithProofs'
> &
  ColonyAugmentsV3<PreviousIColony> &
  ColonyAugmentsV4<PreviousIColony> &
  ColonyAugmentsV5<PreviousIColony> &
  ColonyAugmentsV6<PreviousIColony> &
  ColonyAugmentsV7<IColony>;

export type ColonyClientV7 = ColonyAugments & {
  clientVersion: 7;
  estimate: AugmentedIColony<IColony>['estimate'] & AugmentedEstimateV7;
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
  addAugments(colonyClientV7, this);

  return colonyClientV7 as ColonyClientV7;
}
