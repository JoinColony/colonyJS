import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { StagedExpenditure } from '../../../contracts/StagedExpenditure/1/StagedExpenditure.js';

import { StagedExpenditure__factory as StagedExpenditureFactory } from '../../../contracts/StagedExpenditure/1/factories/StagedExpenditure__factory.js';
import { ClientType } from '../../../constants.js';
import {
  addAugments,
  AugmentedStagedExpenditure,
  ValidColony,
} from './augments/commonAugments.js';

export interface StagedExpenditureClientV1
  extends AugmentedStagedExpenditure<StagedExpenditure> {
  clientVersion: 1;
}

export default function getStagedExpenditureClient(
  colonyClient: AugmentedIColony<ValidColony>,
  address: string,
): StagedExpenditureClientV1 {
  const stagedExpenditureClient = StagedExpenditureFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as StagedExpenditureClientV1;

  stagedExpenditureClient.clientType = ClientType.StagedExpenditureClient;
  stagedExpenditureClient.clientVersion = 1;
  addAugments(stagedExpenditureClient, colonyClient);

  return stagedExpenditureClient;
}
