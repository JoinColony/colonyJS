import type { SignerOrProvider } from '@colony/core';

import { IColony__factory as IColonyFactory } from '../../contracts/IColony/1/factories/IColony__factory.js';
import { IColony } from '../../contracts/IColony/1/IColony.js';
import { ColonyNetworkClient } from '../ColonyNetworkClient.js';
import {
  addAugments,
  AugmentedIColony,
  AugmentedEstimate,
} from './augments/commonAugments.js';
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
