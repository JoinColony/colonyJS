import type { SignerOrProvider } from '@colony/core';

import { IColony__factory as IColonyFactory } from '../../contracts/IColony/8/factories/IColony__factory.js';
import { IColony } from '../../contracts/IColony/8/IColony.js';
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
