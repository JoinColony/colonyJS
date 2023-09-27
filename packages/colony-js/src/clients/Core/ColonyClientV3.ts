import type { SignerOrProvider } from '@colony/core';

import type { ColonyNetworkClient } from '../ColonyNetworkClient.js';
import type { UnknownIColonyClient } from './augments/commonAugments.js';

import { IColony__factory as IColonyFactory } from '../../contracts/IColony/3/factories/IColony__factory.js';
import { addAugments } from './augments/augmentsV3.js';
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

  colonyClient.clientVersion = 3;
  addAugments(colonyClient, this);
  addAddDomainAugments(colonyClient);
  addMoveFundsBetweenPotsAugments(colonyClient);
  addSetPaymentDomainAugments(colonyClient);

  return colonyClient;
}
