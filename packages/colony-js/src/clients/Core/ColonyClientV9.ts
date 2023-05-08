import type { SignerOrProvider } from '@colony/core';

import { IColony__factory as IColonyFactory } from '../../contracts/IColony/9/factories/IColony__factory';
import { IColony } from '../../contracts/IColony/9/IColony';
import { ColonyNetworkClient } from '../ColonyNetworkClient';
import { AugmentedIColony, AugmentedEstimate } from './augments/commonAugments';
import { ColonyAugmentsV3 } from './augments/augmentsV3';
import { ColonyAugmentsV4 } from './augments/augmentsV4';
import { ColonyAugmentsV5 } from './augments/augmentsV5';
import {
  addAugments,
  ColonyAugmentsV6,
  AugmentedEstimateV6,
} from './augments/augmentsV6';
import {
  AddDomainAugmentsB,
  AddDomainEstimateGasB,
  addAugmentsB as addAddDomainAugments,
} from './augments/AddDomain';
import {
  MoveFundsBetweenPotsAugmentsB,
  MoveFundsBetweenPotsEstimateGasB,
  addAugmentsB as addMoveFundsBetweenPotsAugments,
} from './augments/MoveFundsBetweenPots';

interface ColonyClientV9Estimate
  extends AugmentedEstimate<IColony>,
    AugmentedEstimateV6,
    AddDomainEstimateGasB,
    MoveFundsBetweenPotsEstimateGasB {}

export interface ColonyClientV9
  extends AugmentedIColony<IColony>,
    ColonyAugmentsV3<IColony>,
    ColonyAugmentsV4<IColony>,
    ColonyAugmentsV5<IColony>,
    ColonyAugmentsV6<IColony>,
    AddDomainAugmentsB<IColony>,
    MoveFundsBetweenPotsAugmentsB<IColony> {
  clientVersion: 9;
  estimateGas: ColonyClientV9Estimate;

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
): ColonyClientV9 {
  const colonyClient = IColonyFactory.connect(
    address,
    signerOrProvider,
  ) as ColonyClientV9;

  colonyClient.clientVersion = 9;
  addAugments(colonyClient, this);
  addAddDomainAugments(colonyClient);
  addMoveFundsBetweenPotsAugments(colonyClient);

  return colonyClient as ColonyClientV9;
}
