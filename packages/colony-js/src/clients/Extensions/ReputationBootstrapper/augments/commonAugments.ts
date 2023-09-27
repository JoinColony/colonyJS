import type { ReputationBootstrapperVersion } from '@colony/core';

import {
  type ReputationBootstrapperEvents,
  ReputationBootstrapperEvents__factory as ReputationBootstrapperEventsFactory,
} from '@colony/events/types';

import { ClientType } from '../../../../constants.js';
import { AugmentedIColony } from '../../../Core/augments/commonAugments.js';
import { AnyReputationBootstrapper } from '../contracts.js';

export type AugmentedReputationBootstrapper<
  T extends AnyReputationBootstrapper = AnyReputationBootstrapper,
> = T & {
  clientType: ClientType.ReputationBootstrapperClient;
  clientVersion: ReputationBootstrapperVersion;
  /** An instance of the corresponding ColonyClient */
  colonyClient: AugmentedIColony;

  /**
   * The ReputationBootstrapperEvents contract supports all events across all versions.
   * Isn't that amazing?
   * It's an ethers contract with only events to filter
   */
  reputationBootstrapperEvents: ReputationBootstrapperEvents;
};

export const addAugments = <T extends AugmentedReputationBootstrapper>(
  instance: T,
  colonyClient: AugmentedIColony,
): T => {
  /* eslint-disable no-param-reassign */
  instance.clientType = ClientType.ReputationBootstrapperClient;
  instance.colonyClient = colonyClient;

  instance.reputationBootstrapperEvents =
    ReputationBootstrapperEventsFactory.connect(
      instance.address,
      instance.signer || instance.provider,
    );

  return instance;
  /* eslint-enable no-param-reassign */
};

export type UnkonwnReputationBootstrapperClient =
  AugmentedReputationBootstrapper<any>;
