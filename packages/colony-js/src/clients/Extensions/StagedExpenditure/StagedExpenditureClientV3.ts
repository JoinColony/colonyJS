import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { StagedExpenditure } from '../../../contracts/StagedExpenditure/3/StagedExpenditure.js';

import { StagedExpenditure__factory as StagedExpenditureFactory } from '../../../contracts/StagedExpenditure/3/factories/StagedExpenditure__factory.js';
import { ClientType } from '../../../constants.js';
import {
  addAugments,
  type AugmentedStagedExpenditure,
  type ValidColony,
} from './augments/commonAugments.js';

export interface StagedExpenditureClientV3
  extends AugmentedStagedExpenditure<StagedExpenditure> {
  clientVersion: 3;
}

export default function getStagedExpenditureClient(
  colonyClient: AugmentedIColony<ValidColony>,
  address: string,
): StagedExpenditureClientV3 {
  const stagedExpenditureClient = StagedExpenditureFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as StagedExpenditureClientV3;

  stagedExpenditureClient.clientType = ClientType.StagedExpenditureClient;
  stagedExpenditureClient.clientVersion = 3;
  addAugments(stagedExpenditureClient, colonyClient);

  return stagedExpenditureClient;
}
