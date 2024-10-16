import type { ReputationBootstrapperVersion } from '@colony/core';

import {
  type ReputationBootstrapperEvents,
  ReputationBootstrapperEvents__factory as ReputationBootstrapperEventsFactory,
} from '@colony/events';

import { ClientType } from '../../../../constants.js';
import { type AugmentedIColony } from '../../../Core/augments/commonAugments.js';
import { type AnyReputationBootstrapper } from '../contracts.js';
import { type AnyIColony } from '../../../Core/contracts.js';

export type ValidColony = AnyIColony;

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
  // eslint-disable-next-line max-len
  reputationBootstrapperEvents: ReputationBootstrapperEvents.ReputationBootstrapperEvents;
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

export type UnknownReputationBootstrapperClient =
  AugmentedReputationBootstrapper<any>;
