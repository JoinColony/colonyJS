import type { SignerOrProvider } from '@colony/core';

import type { ColonyNetworkClient } from '../ColonyNetworkClient.js';
import type { UnknownIColonyClient } from './augments/commonAugments.js';

import { IColony__factory as IColonyFactory } from '../../contracts/IColony/6/factories/IColony__factory.js';
import { addAugments } from './augments/augmentsV5.js';
import { addAugmentsB as addAddDomainAugments } from './augments/AddDomain.js';
import { addAugmentsA as addMoveFundsBetweenPotsAugments } from './augments/MoveFundsBetweenPots.js';
import { addAugments as addSetExpenditureClaimDelayAugments } from './augments/SetExpenditureClaimDelay.js';
import { addAugments as addSetExpenditurePayoutModifierAugments } from './augments/SetExpenditurePayoutModifier.js';

export default function getColonyClient(
  this: ColonyNetworkClient,
  address: string,
  signerOrProvider: SignerOrProvider,
) {
  const colonyClient = IColonyFactory.connect(
    address,
    signerOrProvider,
  ) as UnknownIColonyClient;

  colonyClient.clientVersion = 6;
  addAugments(colonyClient, this);
  addAddDomainAugments(colonyClient);
  addMoveFundsBetweenPotsAugments(colonyClient);
  addSetExpenditurePayoutModifierAugments(colonyClient);
  addSetExpenditureClaimDelayAugments(colonyClient);

  return colonyClient;
}
