import type { SignerOrProvider } from '@colony/core';

import { IColony__factory as IColonyFactory } from '../../contracts/IColony/7/factories/IColony__factory.js';
import { IColony } from '../../contracts/IColony/7/IColony.js';
import { ColonyNetworkClient } from '../ColonyNetworkClient.js';
import {
  AugmentedIColony,
  AugmentedEstimate,
} from './augments/commonAugments.js';
import { ColonyAugmentsV3 } from './augments/augmentsV3.js';
import { ColonyAugmentsV4 } from './augments/augmentsV4.js';
import {
  addAugments,
  ColonyAugmentsV5,
  AugmentedEstimateV5,
} from './augments/augmentsV5.js';
import {
  AddDomainAugmentsB,
  AddDomainEstimateGasB,
  addAugmentsB as addAddDomainAugments,
} from './augments/AddDomain.js';
import {
  MoveFundsBetweenPotsAugmentsB,
  MoveFundsBetweenPotsEstimateGasB,
  addAugmentsB as addMoveFundsBetweenPotsAugments,
} from './augments/MoveFundsBetweenPots.js';
import {
  SetExpenditureClaimDelayAugments,
  SetExpenditureClaimDelayEstimateGas,
  addAugments as addSetExpenditureClaimDelayAugments,
} from './augments/SetExpenditureClaimDelay.js';
import {
  SetExpenditurePayoutModifierAugments,
  SetExpenditurePayoutModifierEstimateGas,
  addAugments as addSetExpenditurePayoutModifierAugments,
} from './augments/SetExpenditurePayoutModifier.js';

interface ColonyClientV7Estimate
  extends AugmentedEstimate<IColony>,
    AugmentedEstimateV5,
    AddDomainEstimateGasB,
    MoveFundsBetweenPotsEstimateGasB,
    SetExpenditureClaimDelayEstimateGas,
    SetExpenditurePayoutModifierEstimateGas {}

export interface ColonyClientV7
  extends AugmentedIColony<IColony>,
    ColonyAugmentsV3<IColony>,
    ColonyAugmentsV4<IColony>,
    ColonyAugmentsV5<IColony>,
    AddDomainAugmentsB<IColony>,
    MoveFundsBetweenPotsAugmentsB<IColony>,
    SetExpenditureClaimDelayAugments<IColony>,
    SetExpenditurePayoutModifierAugments<IColony> {
  clientVersion: 7;
  estimateGas: ColonyClientV7Estimate;

  // This is only to hide certain internal ethers.js properties from the docs
  /** @internal */
  callStatic: IColony['callStatic'];
  /** @internal */
  functions: IColony['functions'];
  /** @internal */
  populateTransaction: IColony['populateTransaction'];
}

export default function getColonyClient(
  this: ColonyNetworkClient,
  address: string,
  signerOrProvider: SignerOrProvider,
): ColonyClientV7 {
  const colonyClient = IColonyFactory.connect(
    address,
    signerOrProvider,
  ) as ColonyClientV7;

  colonyClient.clientVersion = 7;
  addAugments(colonyClient, this);
  addAddDomainAugments(colonyClient);
  addMoveFundsBetweenPotsAugments(colonyClient);
  addSetExpenditurePayoutModifierAugments(colonyClient);
  addSetExpenditureClaimDelayAugments(colonyClient);

  return colonyClient as ColonyClientV7;
}
