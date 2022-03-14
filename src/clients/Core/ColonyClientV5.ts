import { Contract, Signer } from 'ethers';
import { Provider } from 'ethers/providers';

import { IColony__factory as IColonyFactoryV3 } from '../../contracts/IColony/3/factories/IColony__factory';
import { IColony__factory as IColonyFactoryV4 } from '../../contracts/IColony/4/factories/IColony__factory';
import { IColony__factory as IColonyFactoryV5 } from '../../contracts/IColony/5/factories/IColony__factory';
import { IColony } from '../../contracts/IColony/5/IColony';
import { ColonyNetworkClient } from '../ColonyNetworkClient';
import { AugmentedIColony } from './augments/commonAugments';
import { ColonyAugmentsV3 } from './augments/augmentsV3';
import { ColonyAugmentsV4 } from './augments/augmentsV4';
import {
  addAugments,
  ColonyAugmentsV5,
  AugmentedEstimateV5,
} from './augments/augmentsV5';
import { getAllAbiEvents, getAbiFunctions } from '../../utils';

type ColonyAugments = Omit<AugmentedIColony<IColony>, 'addDomainWithProofs'> &
  ColonyAugmentsV3<IColony> &
  ColonyAugmentsV4<IColony> &
  ColonyAugmentsV5<IColony>;

/*
 * We overwrite the `addDomainWithProofs` interface in order to provide
 * function overloads for the V5 contract
 */
export type ColonyClientV5 = ColonyAugments & {
  clientVersion: 5;
  estimate: AugmentedIColony<IColony>['estimate'] & AugmentedEstimateV5;
};

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
  const colonyClientV5 = new Contract(
    address,
    [...abiFunctions, ...abiEvents],
    signerOrProvider,
  ) as unknown as ColonyClientV5;

  colonyClientV5.clientVersion = 5;
  addAugments(colonyClientV5, this);

  return colonyClientV5 as ColonyClientV5;
}
