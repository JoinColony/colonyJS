import type { SignerOrProvider } from '@colony/core';

import { IColony__factory as IColonyFactory } from '../../contracts/IColony/3/factories/IColony__factory.js';
import { IColony } from '../../contracts/IColony/3/IColony.js';
import { ColonyNetworkClient } from '../ColonyNetworkClient.js';
import {
  AugmentedIColony,
  AugmentedEstimate,
} from './augments/commonAugments.js';
import {
  addAugments,
  ColonyAugmentsV3,
  AugmentedEstimateV3,
} from './augments/augmentsV3.js';
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
  SetPaymentDomainAugments,
  SetPaymentDomainEstimateGas,
  addAugments as addSetPaymentDomainAugments,
} from './augments/SetPaymentDomain.js';

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
