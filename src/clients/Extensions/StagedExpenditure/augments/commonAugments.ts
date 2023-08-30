import { AugmentedIColony } from '../../../Core/augments/commonAugments';
import { StagedExpenditureVersion } from '../exports';
import { AnyStagedExpenditure } from '../../../../contracts/StagedExpenditure/exports';
import { ClientType } from '../../../../constants';
import {
  StagedExpenditureEvents,
  StagedExpenditureEvents__factory as StagedExpenditureEventsFactory,
} from '../../../../contracts/events';
import { IColonyV14 } from '../../../../contracts/IColony/exports';

export type ValidColony = IColonyV14;

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
