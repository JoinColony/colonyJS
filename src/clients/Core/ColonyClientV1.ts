import { SignerOrProvider } from '../..';
import { IColony__factory as IColonyFactory } from '../../contracts/IColony/1/factories/IColony__factory';
import { IColony } from '../../contracts/IColony/1/IColony';
import { ColonyNetworkClient } from '../ColonyNetworkClient';
import {
  addAugments,
  AugmentedIColony,
  AugmentedEstimate,
} from './augments/commonAugments';
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

interface ColonyClientV1Estimate
  extends AugmentedEstimate<IColony>,
    AddDomainEstimateGasA,
    SetPaymentDomainEstimateGas,
    MoveFundsBetweenPotsEstimateGasA {}

export interface ColonyClientV1
  extends AugmentedIColony<IColony>,
    AddDomainAugmentsA<IColony>,
    SetPaymentDomainAugments<IColony>,
    MoveFundsBetweenPotsAugmentsA<IColony> {
  clientVersion: 1;
  estimateGas: ColonyClientV1Estimate;
}

export default function getColonyClient(
  this: ColonyNetworkClient,
  address: string,
  signerOrProvider: SignerOrProvider,
): ColonyClientV1 {
  const colonyClient = IColonyFactory.connect(
    address,
    signerOrProvider,
  ) as ColonyClientV1;

  colonyClient.clientVersion = 1;
  addAugments(colonyClient, this);
  addAddDomainAugments(colonyClient);
  addMoveFundsBetweenPotsAugments(colonyClient);
  addSetPaymentDomainAugments(colonyClient);

  return colonyClient as ColonyClientV1;
}