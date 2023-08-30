import { StagedExpenditure__factory as StagedExpenditureFactory } from '../../../contracts/StagedExpenditure/1/factories/StagedExpenditure__factory';
import { StagedExpenditure } from '../../../contracts/StagedExpenditure/1';
import { AugmentedIColony } from '../../Core/augments/commonAugments';
import {
  addAugments,
  AugmentedStagedExpenditure,
  ValidColony,
} from './augments/commonAugments';

export interface StagedExpenditureClientV1
  extends AugmentedStagedExpenditure<StagedExpenditure> {
  clientVersion: 1;
}

export default function getStagedExpenditureClient(
  colonyClient: AugmentedIColony<ValidColony>,
  address: string,
): StagedExpenditureClientV1 {
  const evaluatedExpenditureClient = StagedExpenditureFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as StagedExpenditureClientV1;

  evaluatedExpenditureClient.clientVersion = 1;
  addAugments(evaluatedExpenditureClient, colonyClient);

  return evaluatedExpenditureClient;
}
