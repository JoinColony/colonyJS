import type { SignerOrProvider } from '@colony/core';

import { IColony__factory as IColonyFactory } from '../../contracts/IColony/2/factories/IColony__factory';
import { IColony } from '../../contracts/IColony/2/IColony';
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

interface ColonyClientV2Estimate
  extends AugmentedEstimate<IColony>,
    AddDomainEstimateGasA,
    SetPaymentDomainEstimateGas,
    MoveFundsBetweenPotsEstimateGasA {}

export interface ColonyClientV2
  extends AugmentedIColony<IColony>,
    AddDomainAugmentsA<IColony>,
    SetPaymentDomainAugments<IColony>,
    MoveFundsBetweenPotsAugmentsA<IColony> {
  clientVersion: 2;
  estimateGas: ColonyClientV2Estimate;

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
): ColonyClientV2 {
  const colonyClient = IColonyFactory.connect(
    address,
    signerOrProvider,
  ) as ColonyClientV2;

  colonyClient.clientVersion = 2;
  addAugments(colonyClient, this);
  addAddDomainAugments(colonyClient);
  addMoveFundsBetweenPotsAugments(colonyClient);
  addSetPaymentDomainAugments(colonyClient);

  return colonyClient as ColonyClientV2;
}
