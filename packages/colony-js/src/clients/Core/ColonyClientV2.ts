import type { SignerOrProvider } from '@colony/core';

import type { ColonyNetworkClient } from '../ColonyNetworkClient.js';

import { IColony__factory as IColonyFactory } from '../../contracts/IColony/2/factories/IColony__factory.js';
import {
  type UnknownIColonyClient,
  addAugments,
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

  colonyClient.clientVersion = 2;
  addAugments(colonyClient as UnknownIColonyClient, this);
  addAddDomainAugments(colonyClient);
  addMoveFundsBetweenPotsAugments(colonyClient);
  addSetPaymentDomainAugments(colonyClient);

  return colonyClient;
}
