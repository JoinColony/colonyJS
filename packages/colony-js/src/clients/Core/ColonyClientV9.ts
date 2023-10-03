import type { SignerOrProvider } from '@colony/core';

import type { ColonyNetworkClient } from '../ColonyNetworkClient.js';
import type { UnknownIColonyClient } from './augments/commonAugments.js';

import { IColony__factory as IColonyFactory } from '../../contracts/IColony/9/factories/IColony__factory.js';
import { addAugments } from './augments/augmentsV6.js';
import { addAugmentsB as addAddDomainAugments } from './augments/AddDomain.js';
import { addAugmentsB as addMoveFundsBetweenPotsAugments } from './augments/MoveFundsBetweenPots.js';

export default function getColonyClient(
  this: ColonyNetworkClient,
  address: string,
  signerOrProvider: SignerOrProvider,
) {
  const colonyClient = IColonyFactory.connect(
    address,
    signerOrProvider,
  ) as UnknownIColonyClient;

  colonyClient.clientVersion = 9;
  addAugments(colonyClient, this);
  addAddDomainAugments(colonyClient);
  addMoveFundsBetweenPotsAugments(colonyClient);

  return colonyClient;
}
