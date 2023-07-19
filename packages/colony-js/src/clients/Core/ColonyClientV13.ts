import { SignerOrProvider } from '@colony/core';

import { IColony__factory as IColonyFactory } from '../../contracts/IColony/13/factories/IColony__factory.js';
import { IColony } from '../../contracts/IColony/13/IColony.js';
import { ColonyNetworkClient } from '../ColonyNetworkClient.js';
import {
  AugmentedIColony,
  AugmentedEstimate,
} from './augments/commonAugments.js';
import { ColonyAugmentsV3 } from './augments/augmentsV3.js';
import { ColonyAugmentsV4 } from './augments/augmentsV4.js';
import { ColonyAugmentsV5 } from './augments/augmentsV5.js';
import { ColonyAugmentsV6 } from './augments/augmentsV6.js';
import {
  addAugments,
  ColonyAugmentsV7,
  AugmentedEstimateV7,
} from './augments/augmentsV7.js';
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

interface ColonyClientV13Estimate
  extends AugmentedEstimate<IColony>,
    AugmentedEstimateV7,
    AddDomainEstimateGasB,
    MoveFundsBetweenPotsEstimateGasB {}

export interface ColonyClientV13
  extends AugmentedIColony<IColony>,
    ColonyAugmentsV3<IColony>,
    ColonyAugmentsV4<IColony>,
    ColonyAugmentsV5<IColony>,
    ColonyAugmentsV6<IColony>,
    ColonyAugmentsV7<IColony>,
    AddDomainAugmentsB<IColony>,
    MoveFundsBetweenPotsAugmentsB<IColony> {
  clientVersion: 13;
  estimateGas: ColonyClientV13Estimate;

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
): ColonyClientV13 {
  const colonyClient = IColonyFactory.connect(
    address,
    signerOrProvider,
  ) as ColonyClientV13;

  colonyClient.clientVersion = 13;
  addAugments(colonyClient, this);
  addAddDomainAugments(colonyClient);
  addMoveFundsBetweenPotsAugments(colonyClient);

  return colonyClient as ColonyClientV13;
}
