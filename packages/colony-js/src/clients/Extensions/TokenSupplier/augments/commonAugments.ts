import type { TokenSupplierVersion } from '@colony/core';

import {
  type TokenSupplierEvents,
  TokenSupplierEvents__factory as TokenSupplierEventsFactory,
} from '@colony/events/types';

import { ClientType } from '../../../../constants.js';
import { AugmentedIColony } from '../../../Core/augments/commonAugments.js';
import { AnyTokenSupplier } from '../contracts.js';

export type AugmentedTokenSupplier<
  T extends AnyTokenSupplier = AnyTokenSupplier,
> = T & {
  clientType: ClientType.TokenSupplierClient;
  clientVersion: TokenSupplierVersion;
  /** An instance of the corresponding ColonyClient */
  colonyClient: AugmentedIColony;

  /**
   * The tokenSupplierEvents contract supports all events across all versions.
   * Isn't that amazing?
   * It's an ethers contract with only events to filter
   */
  tokenSupplierEvents: TokenSupplierEvents;
};

export const addAugments = <T extends AugmentedTokenSupplier>(
  instance: T,
  colonyClient: AugmentedIColony,
): T => {
  /* eslint-disable no-param-reassign */
  instance.clientType = ClientType.TokenSupplierClient;
  instance.colonyClient = colonyClient;

  instance.tokenSupplierEvents = TokenSupplierEventsFactory.connect(
    instance.address,
    instance.signer || instance.provider,
  );

  return instance;
  /* eslint-enable no-param-reassign */
};

export type UnkonwnTokenSupplierClient = AugmentedTokenSupplier<any>;
