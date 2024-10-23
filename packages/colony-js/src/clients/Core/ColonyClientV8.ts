import type { SignerOrProvider } from '@colony/core';

import { IColony__factory as IColonyFactory } from '../../contracts/IColony/8/factories/IColony__factory.js';
import { type ColonyNetworkClient } from '../ColonyNetworkClient.js';
import { type UnknownIColonyClient } from './augments/commonAugments.js';
import { addAugments } from './augments/augmentsV5.js';
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

  colonyClient.clientVersion = 8;
  addAugments(colonyClient, this);
  addAddDomainAugments(colonyClient);
  addMoveFundsBetweenPotsAugments(colonyClient);

  return colonyClient;
}
