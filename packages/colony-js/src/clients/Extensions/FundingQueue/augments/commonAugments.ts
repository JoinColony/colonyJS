import type { FundingQueueVersion } from '@colony/core';

import {
  type FundingQueueEvents,
  FundingQueueEvents__factory as FundingQueueEventsFactory,
} from '@colony/events/types';

import { ClientType } from '../../../../constants.js';
import { AugmentedIColony } from '../../../Core/augments/commonAugments.js';

import { AnyFundingQueue } from '../contracts.js';

export type AugmentedFundingQueue<T extends AnyFundingQueue = AnyFundingQueue> =
  T & {
    clientType: ClientType.FundingQueueClient;
    clientVersion: FundingQueueVersion;
    /** An instance of the corresponding ColonyClient */
    colonyClient: AugmentedIColony;

    /**
     * The fundingQueueEvents contract supports all events across all versions.
     * Isn't that amazing?
     * It's an ethers contract with only events to filter
     */
    fundingQueueEvents: FundingQueueEvents;
  };

export const addAugments = <T extends AugmentedFundingQueue>(
  instance: T,
  colonyClient: AugmentedIColony,
): T => {
  /* eslint-disable no-param-reassign */
  instance.clientType = ClientType.FundingQueueClient;
  instance.colonyClient = colonyClient;

  instance.fundingQueueEvents = FundingQueueEventsFactory.connect(
    instance.address,
    instance.signer || instance.provider,
  );

  return instance;
  /* eslint-enable no-param-reassign */
};

export type UnkonwnFundingQueueClient = AugmentedFundingQueue<any>;
