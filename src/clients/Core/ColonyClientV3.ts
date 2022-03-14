import { IColony__factory as IColonyFactory } from '../../contracts/IColony/3/factories/IColony__factory';
import { IColony } from '../../contracts/IColony/3/IColony';
import { ColonyNetworkClient } from '../ColonyNetworkClient';
import { SignerOrProvider } from '../../types';
import { AugmentedIColony, AugmentedEstimate } from './augments/commonAugments';
import {
  addAugments,
  ColonyAugmentsV3,
  AugmentedEstimateV3,
} from './augments/augmentsV3';
import {
  AddDomainAugmentsA,
  AddDomainEstimateGasA,
  addAugmentsA as addAddDomainAugments,
} from './augments/AddDomain';
import {
  MoveFundsBetweenPotsAugmentsA,
  MoveFundsBetweenPotsEstimateGasA,
  addAugmentsA as addMoveFundsBetweenPotsAugments,
} from './augments/MoveFundsBetweenPots';
import {
  SetPaymentDomainAugments,
  SetPaymentDomainEstimateGas,
  addAugments as addSetPaymentDomainAugments,
} from './augments/SetPaymentDomain';

interface ColonyClientV3Estimate
  extends AugmentedEstimate<IColony>,
    AugmentedEstimateV3,
    AddDomainEstimateGasA,
    SetPaymentDomainEstimateGas,
    MoveFundsBetweenPotsEstimateGasA {}

export interface ColonyClientV3
  extends AugmentedIColony<IColony>,
    ColonyAugmentsV3<IColony>,
    AddDomainAugmentsA<IColony>,
    SetPaymentDomainAugments<IColony>,
    MoveFundsBetweenPotsAugmentsA<IColony> {
  clientVersion: 3;
  estimateGas: ColonyClientV3Estimate;
}

export default function getColonyClient(
  this: ColonyNetworkClient,
  address: string,
  signerOrProvider: SignerOrProvider,
): ColonyClientV3 {
  const colonyClient = IColonyFactory.connect(
    address,
    signerOrProvider,
  ) as ColonyClientV3;

  colonyClient.clientVersion = 3;
  addAugments(colonyClient, this);
  addAddDomainAugments(colonyClient);
  addMoveFundsBetweenPotsAugments(colonyClient);
  addSetPaymentDomainAugments(colonyClient);

  return colonyClient as ColonyClientV3;
}
