import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { StagedExpenditure } from '../../../contracts/StagedExpenditure/2/StagedExpenditure.js';

import { StagedExpenditure__factory as StagedExpenditureFactory } from '../../../contracts/StagedExpenditure/2/factories/StagedExpenditure__factory.js';
import { ClientType } from '../../../constants.js';
import {
  addAugments,
  type AugmentedStagedExpenditure,
  type ValidColony,
} from './augments/commonAugments.js';

export interface StagedExpenditureClientV2
  extends AugmentedStagedExpenditure<StagedExpenditure> {
  clientVersion: 2;
}

export default function getStagedExpenditureClient(
  colonyClient: AugmentedIColony<ValidColony>,
  address: string,
): StagedExpenditureClientV2 {
  const stagedExpenditureClient = StagedExpenditureFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as StagedExpenditureClientV2;

  stagedExpenditureClient.clientType = ClientType.StagedExpenditureClient;
  stagedExpenditureClient.clientVersion = 2;
  addAugments(stagedExpenditureClient, colonyClient);

  return stagedExpenditureClient;
}
