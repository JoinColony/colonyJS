import type { SignerOrProvider } from '@colony/core';

import { IColony__factory as IColonyFactory } from '../../contracts/IColony/4/factories/IColony__factory.js';
import { IColony } from '../../contracts/IColony/4/IColony.js';
import { ColonyNetworkClient } from '../ColonyNetworkClient.js';
import {
  AugmentedIColony,
  AugmentedEstimate,
} from './augments/commonAugments.js';
import { ColonyAugmentsV3 } from './augments/augmentsV3.js';
import {
  addAugments,
  ColonyAugmentsV4,
  AugmentedEstimateV4,
} from './augments/augmentsV4.js';
import {
  AddDomainAugmentsA,
  AddDomainEstimateGasA,
  addAugmentsA as addAddDomainAugments,
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

interface ColonyClientV4Estimate
  extends AugmentedEstimate<IColony>,
    AugmentedEstimateV4,
    AddDomainEstimateGasA,
    MoveFundsBetweenPotsEstimateGasA,
    SetExpenditureClaimDelayEstimateGas,
    SetExpenditurePayoutModifierEstimateGas {}

export interface ColonyClientV4
  extends AugmentedIColony<IColony>,
    ColonyAugmentsV3<IColony>,
    ColonyAugmentsV4<IColony>,
    AddDomainAugmentsA<IColony>,
    MoveFundsBetweenPotsAugmentsA<IColony>,
    SetExpenditureClaimDelayAugments<IColony>,
    SetExpenditurePayoutModifierAugments<IColony> {
  clientVersion: 4;
  estimateGas: ColonyClientV4Estimate;

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
): ColonyClientV4 {
  const colonyClient = IColonyFactory.connect(
    address,
    signerOrProvider,
  ) as ColonyClientV4;

  colonyClient.clientVersion = 4;
  addAugments(colonyClient, this);
  addAddDomainAugments(colonyClient);
  addMoveFundsBetweenPotsAugments(colonyClient);
  addSetExpenditurePayoutModifierAugments(colonyClient);
  addSetExpenditureClaimDelayAugments(colonyClient);

  return colonyClient as ColonyClientV4;
}
