import type { SignerOrProvider } from '@colony/core';

import { IColony__factory as IColonyFactory } from '../../contracts/IColony/12/factories/IColony__factory.js';
import { type IColony } from '../../contracts/IColony/12/IColony.js';
import { type ColonyNetworkClient } from '../ColonyNetworkClient.js';
import {
  type AugmentedIColony,
  type AugmentedEstimate,
} from './augments/commonAugments.js';
import { type ColonyAugmentsV3 } from './augments/augmentsV3.js';
import { type ColonyAugmentsV4 } from './augments/augmentsV4.js';
import { type ColonyAugmentsV5 } from './augments/augmentsV5.js';
import { type ColonyAugmentsV6 } from './augments/augmentsV6.js';
import {
  addAugments,
  type ColonyAugmentsV7,
  type AugmentedEstimateV7,
} from './augments/augmentsV7.js';
import {
  type AddDomainAugmentsB,
  type AddDomainEstimateGasB,
  addAugmentsB as addAddDomainAugments,
} from './augments/AddDomain.js';
import {
  type MoveFundsBetweenPotsAugmentsB,
  type MoveFundsBetweenPotsEstimateGasB,
  addAugmentsB as addMoveFundsBetweenPotsAugments,
} from './augments/MoveFundsBetweenPots.js';

interface ColonyClientV12Estimate
  extends AugmentedEstimate<IColony>,
    AugmentedEstimateV7,
    AddDomainEstimateGasB,
    MoveFundsBetweenPotsEstimateGasB {}

export interface ColonyClientV12
  extends AugmentedIColony<IColony>,
    ColonyAugmentsV3<IColony>,
    ColonyAugmentsV4<IColony>,
    ColonyAugmentsV5<IColony>,
    ColonyAugmentsV6<IColony>,
    ColonyAugmentsV7<IColony>,
    AddDomainAugmentsB<IColony>,
    MoveFundsBetweenPotsAugmentsB<IColony> {
  clientVersion: 12;
  estimateGas: ColonyClientV12Estimate;

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
): ColonyClientV12 {
  const colonyClient = IColonyFactory.connect(
    address,
    signerOrProvider,
  ) as ColonyClientV12;

  colonyClient.clientVersion = 12;
  addAugments(colonyClient, this);
  addAddDomainAugments(colonyClient);
  addMoveFundsBetweenPotsAugments(colonyClient);

  return colonyClient as ColonyClientV12;
}
