import type { SignerOrProvider } from '@colony/core';

import type { ColonyNetworkClient } from '../ColonyNetworkClient.js';

import { IColony__factory as IColonyFactory } from '../../contracts/IColony/1/factories/IColony__factory.js';
import {
  addAugments,
  type UnknownIColonyClient,
} from './augments/commonAugments.js';
import { addAugmentsA as addAddDomainAugments } from './augments/AddDomain.js';
import { addAugmentsA as addMoveFundsBetweenPotsAugments } from './augments/MoveFundsBetweenPots.js';
import { addAugments as addSetPaymentDomainAugments } from './augments/SetPaymentDomain.js';

export default function getColonyClient(
  this: ColonyNetworkClient,
  address: string,
  signerOrProvider: SignerOrProvider,
) {
  const colonyClient = IColonyFactory.connect(
    address,
    signerOrProvider,
  ) as UnknownIColonyClient;

  colonyClient.clientVersion = 1;
  addAugments(colonyClient, this);
  addAddDomainAugments(colonyClient);
  addMoveFundsBetweenPotsAugments(colonyClient);
  addSetPaymentDomainAugments(colonyClient);

  return colonyClient;
}
