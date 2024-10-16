import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { StagedExpenditure } from '../../../contracts/StagedExpenditure/4/StagedExpenditure.js';

import { StagedExpenditure__factory as StagedExpenditureFactory } from '../../../contracts/StagedExpenditure/4/factories/StagedExpenditure__factory.js';
import { ClientType } from '../../../constants.js';
import {
  addAugments,
  type AugmentedStagedExpenditure,
  type ValidColony,
} from './augments/commonAugments.js';

export interface StagedExpenditureClientV4
  extends AugmentedStagedExpenditure<StagedExpenditure> {
  clientVersion: 4;
}

export default function getStagedExpenditureClient(
  colonyClient: AugmentedIColony<ValidColony>,
  address: string,
): StagedExpenditureClientV4 {
  const stagedExpenditureClient = StagedExpenditureFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as StagedExpenditureClientV4;

  stagedExpenditureClient.clientType = ClientType.StagedExpenditureClient;
  stagedExpenditureClient.clientVersion = 4;
  addAugments(stagedExpenditureClient, colonyClient);

  return stagedExpenditureClient;
}
