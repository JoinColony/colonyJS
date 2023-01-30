import { AugmentedIColony } from '../../../Core/augments/commonAugments';

import { FundingQueueVersion } from '../exports';
import { AnyFundingQueue } from '../../../../contracts/FundingQueue/exports';
import { ClientType } from '../../../../constants';
import {
  FundingQueueEvents,
  FundingQueueEvents__factory as FundingQueueEventsFactory,
} from '../../../../contracts';

export type AugmentedFundingQueue<T extends AnyFundingQueue = AnyFundingQueue> =
  T & {
    clientType: ClientType.FundingQueueClient;
    clientVersion: FundingQueueVersion;
    /** An instance of the corresponding ColonyClient */
    colonyClient: AugmentedIColony;

    /**
     * The whitelistEvents contract supports all events across all versions.
     * Isn't that amazing?
     * It's an ethers contract with only events to filter
     */
    whitelistEvents: FundingQueueEvents;
  };

export const addAugments = <T extends AugmentedFundingQueue>(
  instance: T,
  colonyClient: AugmentedIColony,
): T => {
  /* eslint-disable no-param-reassign */
  instance.clientType = ClientType.FundingQueueClient;
  instance.colonyClient = colonyClient;

  instance.whitelistEvents = FundingQueueEventsFactory.connect(
    instance.address,
    instance.signer || instance.provider,
  );

  return instance;
  /* eslint-enable no-param-reassign */
};
