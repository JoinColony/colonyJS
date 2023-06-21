import type { CoinMachineVersion } from '@colony/core';

import {
  type CoinMachineEvents,
  CoinMachineEvents__factory as CoinMachineEventsFactory,
} from '@colony/events';

import { ClientType } from '../../../../constants.js';
import { AugmentedIColony } from '../../../Core/augments/commonAugments.js';
import { AnyCoinMachine } from '../contracts.js';

export type AugmentedCoinMachine<T extends AnyCoinMachine = AnyCoinMachine> =
  T & {
    clientType: ClientType.CoinMachineClient;
    clientVersion: CoinMachineVersion;
    /** An instance of the corresponding ColonyClient */
    colonyClient: AugmentedIColony;

    /**
     * The coinMachineEvents contract supports all events across all versions.
     * Isn't that amazing?
     * It's an ethers contract with only events to filter
     */
    coinMachineEvents: CoinMachineEvents;
  };

export const addAugments = <T extends AugmentedCoinMachine>(
  instance: T,
  colonyClient: AugmentedIColony,
): T => {
  /* eslint-disable no-param-reassign */
  instance.clientType = ClientType.CoinMachineClient;
  instance.colonyClient = colonyClient;

  instance.coinMachineEvents = CoinMachineEventsFactory.connect(
    instance.address,
    instance.signer || instance.provider,
  );

  return instance;
  /* eslint-enable no-param-reassign */
};
