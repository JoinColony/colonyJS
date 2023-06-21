import type { SignerOrProvider } from '@colony/core';

import { IColony__factory as IColonyFactory } from '../../contracts/IColony/5/factories/IColony__factory.js';
import { IColony } from '../../contracts/IColony/5/IColony.js';
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
  MoveFundsBetweenPotsAugmentsA,
  MoveFundsBetweenPotsEstimateGasA,
  addAugmentsA as addMoveFundsBetweenPotsAugments,
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

interface ColonyClientV5Estimate
  extends AugmentedEstimate<IColony>,
    AugmentedEstimateV5,
    AddDomainEstimateGasB,
    MoveFundsBetweenPotsEstimateGasA,
    SetExpenditureClaimDelayEstimateGas,
    SetExpenditurePayoutModifierEstimateGas {}

export interface ColonyClientV5
  extends AugmentedIColony<IColony>,
    ColonyAugmentsV3<IColony>,
    ColonyAugmentsV4<IColony>,
    ColonyAugmentsV5<IColony>,
    AddDomainAugmentsB<IColony>,
    MoveFundsBetweenPotsAugmentsA<IColony>,
    SetExpenditureClaimDelayAugments<IColony>,
    SetExpenditurePayoutModifierAugments<IColony> {
  clientVersion: 5;

  // This is only to hide certain internal ethers.js properties from the docs
  /** @internal */
  callStatic: IColony['callStatic'];
  /** @internal */
  functions: IColony['functions'];
  /** @internal */
  populateTransaction: IColony['populateTransaction'];
  estimateGas: ColonyClientV5Estimate;
}

export default function getColonyClient(
  this: ColonyNetworkClient,
  address: string,
  signerOrProvider: SignerOrProvider,
): ColonyClientV5 {
  const colonyClient = IColonyFactory.connect(
    address,
    signerOrProvider,
  ) as ColonyClientV5;

  colonyClient.clientVersion = 5;
  addAugments(colonyClient, this);
  addAddDomainAugments(colonyClient);
  addMoveFundsBetweenPotsAugments(colonyClient);
  addSetExpenditurePayoutModifierAugments(colonyClient);
  addSetExpenditureClaimDelayAugments(colonyClient);

  return colonyClient as ColonyClientV5;
}
