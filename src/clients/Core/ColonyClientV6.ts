import { IColony__factory as IColonyFactory } from '../../contracts/IColony/6/factories/IColony__factory';
import { IColony } from '../../contracts/IColony/6/IColony';
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
  MoveFundsBetweenPotsAugmentsA,
  MoveFundsBetweenPotsEstimateGasA,
  addAugmentsA as addMoveFundsBetweenPotsAugments,
} from './augments/MoveFundsBetweenPots';
import {
  SetExpenditureClaimDelayAugments,
  SetExpenditureClaimDelayEstimateGas,
  addAugments as addSetExpenditureClaimDelayAugments,
} from './augments/SetExpenditureClaimDelay';
import {
  SetExpenditurePayoutModifierAugments,
  SetExpenditurePayoutModifierEstimateGas,
  addAugments as addSetExpenditurePayoutModifierAugments,
} from './augments/SetExpenditurePayoutModifier';
import { SignerOrProvider } from '../../types';

interface ColonyClientV6Estimate
  extends AugmentedEstimate<IColony>,
    AugmentedEstimateV5,
    AddDomainEstimateGasB,
    MoveFundsBetweenPotsEstimateGasA,
    SetExpenditureClaimDelayEstimateGas,
    SetExpenditurePayoutModifierEstimateGas {}

export interface ColonyClientV6
  extends AugmentedIColony<IColony>,
    ColonyAugmentsV3<IColony>,
    ColonyAugmentsV4<IColony>,
    ColonyAugmentsV5<IColony>,
    AddDomainAugmentsB<IColony>,
    MoveFundsBetweenPotsAugmentsA<IColony>,
    SetExpenditureClaimDelayAugments<IColony>,
    SetExpenditurePayoutModifierAugments<IColony> {
  clientVersion: 6;
  estimateGas: ColonyClientV6Estimate;
}

export default function getColonyClient(
  this: ColonyNetworkClient,
  address: string,
  signerOrProvider: SignerOrProvider,
): ColonyClientV6 {
  const colonyClient = IColonyFactory.connect(
    address,
    signerOrProvider,
  ) as ColonyClientV6;

  colonyClient.clientVersion = 6;
  addAugments(colonyClient, this);
  addAddDomainAugments(colonyClient);
  addMoveFundsBetweenPotsAugments(colonyClient);
  addSetExpenditurePayoutModifierAugments(colonyClient);
  addSetExpenditureClaimDelayAugments(colonyClient);

  return colonyClient as ColonyClientV6;
}
