import { EvaluatedExpenditure__factory as EvaluatedExpenditureFactory } from '../../../contracts/EvaluatedExpenditure/2/factories/EvaluatedExpenditure__factory';
import { EvaluatedExpenditure } from '../../../contracts/EvaluatedExpenditure/2/EvaluatedExpenditure';
import { AugmentedIColony } from '../../Core/augments/commonAugments';
import {
  addAugments,
  AugmentedEvaluatedExpenditure,
  ValidColony,
} from './augments/commonAugments';

export interface EvaluatedExpenditureClientV2
  extends AugmentedEvaluatedExpenditure<EvaluatedExpenditure> {
  clientVersion: 2;
}

export default function getEvaluatedExpenditureClient(
  colonyClient: AugmentedIColony<ValidColony>,
  address: string,
): EvaluatedExpenditureClientV2 {
  const evaluatedExpenditureClient = EvaluatedExpenditureFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as EvaluatedExpenditureClientV2;

  evaluatedExpenditureClient.clientVersion = 2;
  addAugments(evaluatedExpenditureClient, colonyClient);

  return evaluatedExpenditureClient;
}
