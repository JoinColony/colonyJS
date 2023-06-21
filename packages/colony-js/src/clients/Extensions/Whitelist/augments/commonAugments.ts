import type { WhitelistVersion } from '@colony/core';

import {
  type WhitelistEvents,
  WhitelistEvents__factory as WhitelistEventsFactory,
} from '@colony/events';

import { ClientType } from '../../../../constants.js';
import { AugmentedIColony } from '../../../Core/augments/commonAugments.js';
import { AnyWhitelist } from '../contracts.js';

export type AugmentedWhitelist<T extends AnyWhitelist = AnyWhitelist> = T & {
  clientType: ClientType.WhitelistClient;
  clientVersion: WhitelistVersion;
  /** An instance of the corresponding ColonyClient */
  colonyClient: AugmentedIColony;

  /**
   * The whitelistEvents contract supports all events across all versions.
   * Isn't that amazing?
   * It's an ethers contract with only events to filter
   */
  whitelistEvents: WhitelistEvents;
};

export const addAugments = <T extends AugmentedWhitelist>(
  instance: T,
  colonyClient: AugmentedIColony,
): T => {
  /* eslint-disable no-param-reassign */
  instance.clientType = ClientType.WhitelistClient;
  instance.colonyClient = colonyClient;

  instance.whitelistEvents = WhitelistEventsFactory.connect(
    instance.address,
    instance.signer || instance.provider,
  );

  return instance;
  /* eslint-enable no-param-reassign */
};
