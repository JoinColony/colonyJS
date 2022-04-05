import { AugmentedIColony } from '../../../Core/augments/commonAugments';

import { WhitelistVersion } from '../exports';
import { AnyWhitelist } from '../../../../contracts/Whitelist/exports';
import { ClientType } from '../../../../types';
import {
  WhitelistEvents,
  WhitelistEvents__factory as WhitelistEventsFactory,
} from '../../../../contracts';

export type AugmentedWhitelst<T extends AnyWhitelist = AnyWhitelist> = T & {
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

export const addAugments = <T extends AugmentedWhitelst>(
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
