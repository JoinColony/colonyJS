import { Contract, Signer } from 'ethers';
import { Provider } from 'ethers/providers';

import { IColony__factory as IColonyFactoryV3 } from '../../contracts/IColony/3/factories/IColony__factory';
import { IColony__factory as IColonyFactoryV4 } from '../../contracts/IColony/4/factories/IColony__factory';
import { IColony } from '../../contracts/IColony/4/IColony';
import { ColonyNetworkClient } from '../ColonyNetworkClient';
import { AugmentedIColony } from './augments/commonAugments';
import { ColonyAugmentsV3 } from './augments/augmentsV3';
import {
  addAugments,
  ColonyAugmentsV4,
  AugmentedEstimateV4,
} from './augments/augmentsV4';
import { getAllAbiEvents, getAbiFunctions } from '../../utils';

export interface ColonyClientV4
  extends AugmentedIColony<IColony>,
    ColonyAugmentsV3<IColony>,
    ColonyAugmentsV4<IColony> {
  clientVersion: 4;
  estimate: AugmentedIColony<IColony>['estimate'] & AugmentedEstimateV4;
}

export default function getColonyClient(
  this: ColonyNetworkClient,
  address: string,
  signerOrProvider: Signer | Provider,
): ColonyClientV4 {
  const abiFunctions = getAbiFunctions(
    IColonyFactoryV4,
    address,
    signerOrProvider,
  );
  /*
   * Get all events, including the ones from v3 and v4, as well as the current ones
   */
  const abiEvents = getAllAbiEvents(
    [IColonyFactoryV4, IColonyFactoryV3],
    address,
    signerOrProvider,
  );

  /*
   * For this to work we have to create our own instance of the contract, so
   * that we can pass in the merged abi events
   */
  const colonyClientV4 = new Contract(
    address,
    [...abiFunctions, ...abiEvents],
    signerOrProvider,
  ) as unknown as ColonyClientV4;

  colonyClientV4.clientVersion = 4;
  addAugments(colonyClientV4, this);

  return colonyClientV4 as ColonyClientV4;
}
