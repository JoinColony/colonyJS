import { IColony__factory as IColonyFactory } from '../../contracts/IColony/8/factories/IColony__factory';
import { IColony } from '../../contracts/IColony/8/IColony';
import { ColonyNetworkClient } from '../ColonyNetworkClient';
import { AugmentedIColony, AugmentedEstimate } from './augments/commonAugments';
import { ColonyAugmentsV3 } from './augments/augmentsV3';
import { ColonyAugmentsV4 } from './augments/augmentsV4';
import {
  addAugments,
  ColonyAugmentsV5,
  AugmentedEstimateV5,
} from './augments/augmentsV5';
import {
  AddDomainAugmentsB,
  AddDomainEstimateGasB,
  addAugmentsB as addAddDomainAugments,
} from './augments/AddDomain';
import {
  MoveFundsBetweenPotsAugmentsB,
  MoveFundsBetweenPotsEstimateGasB,
  addAugmentsB as addMoveFundsBetweenPotsAugments,
} from './augments/MoveFundsBetweenPots';
import { SignerOrProvider } from '../../types';

interface ColonyClientV8Estimate
  extends AugmentedEstimate<IColony>,
    AugmentedEstimateV5,
    AddDomainEstimateGasB,
    MoveFundsBetweenPotsEstimateGasB {}

export interface ColonyClientV8
  extends AugmentedIColony<IColony>,
    ColonyAugmentsV3<IColony>,
    ColonyAugmentsV4<IColony>,
    ColonyAugmentsV5<IColony>,
    AddDomainAugmentsB<IColony>,
    MoveFundsBetweenPotsAugmentsB<IColony> {
  clientVersion: 8;
  estimateGas: ColonyClientV8Estimate;
}

export default function getColonyClient(
  this: ColonyNetworkClient,
  address: string,
  signerOrProvider: SignerOrProvider,
): ColonyClientV8 {
  const colonyClient = IColonyFactory.connect(
    address,
    signerOrProvider,
  ) as ColonyClientV8;

  colonyClient.clientVersion = 8;
  addAugments(colonyClient, this);
  addAddDomainAugments(colonyClient);
  addMoveFundsBetweenPotsAugments(colonyClient);

  return colonyClient as ColonyClientV8;
}
