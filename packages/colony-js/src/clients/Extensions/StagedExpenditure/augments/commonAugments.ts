import { type StagedExpenditureVersion } from '@colony/core';
import {
  type StagedExpenditureEvents,
  StagedExpenditureEvents__factory as StagedExpenditureEventsFactory,
} from '@colony/events/types';

import { ClientType } from '../../../../constants.js';
import { AugmentedIColony } from '../../../Core/augments/commonAugments.js';
import { IColonyV14 } from '../../../Core/contracts.js';
import { AnyStagedExpenditure } from '../contracts.js';

export type ValidColony = IColonyV14;

export type AugmentedEstimate<
  T extends AnyStagedExpenditure = AnyStagedExpenditure,
> = T['estimateGas'];

export type AugmentedStagedExpenditure<
  T extends AnyStagedExpenditure = AnyStagedExpenditure,
> = T & {
  clientType: ClientType.StagedExpenditureClient;
  clientVersion: StagedExpenditureVersion;
  /** An instance of the corresponding ColonyClient */
  colonyClient: AugmentedIColony<ValidColony>;

  /**
   * The stagedExpenditureEvents contract supports all events across all versions.
   * Isn't that amazing?
   * It's an ethers contract with only events to filter
   */
  stagedExpenditureEvents: StagedExpenditureEvents;

  estimateGas: T['estimateGas'] & AugmentedEstimate;
};

export const addAugments = <T extends AugmentedStagedExpenditure>(
  instance: T,
  colonyClient: AugmentedIColony<ValidColony>,
): T => {
  /* eslint-disable no-param-reassign */
  instance.clientType = ClientType.StagedExpenditureClient;
  instance.colonyClient = colonyClient;

  instance.stagedExpenditureEvents = StagedExpenditureEventsFactory.connect(
    instance.address,
    instance.signer || instance.provider,
  );

  return instance;
  /* eslint-enable no-param-reassign */
};

export type UnkonwnStagedExpenditureClient = AugmentedStagedExpenditure<any>;
