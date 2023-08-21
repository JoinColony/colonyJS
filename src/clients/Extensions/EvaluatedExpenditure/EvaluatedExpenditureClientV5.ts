import { EvaluatedExpenditure__factory as EvaluatedExpenditureFactory } from '../../../contracts/EvaluatedExpenditure/5/factories/EvaluatedExpenditure__factory';
import { EvaluatedExpenditure } from '../../../contracts/EvaluatedExpenditure/5/EvaluatedExpenditure';
import { AugmentedIColony } from '../../Core/augments/commonAugments';
import {
  addAugments,
  AugmentedEvaluatedExpenditure,
  ValidColony,
} from './augments/commonAugments';

export interface EvaluatedExpenditureClientV5
  extends AugmentedEvaluatedExpenditure<EvaluatedExpenditure> {
  clientVersion: 5;
}

export default function getEvaluatedExpenditureClient(
  colonyClient: AugmentedIColony<ValidColony>,
  address: string,
): EvaluatedExpenditureClientV5 {
  const evaluatedExpenditureClient = EvaluatedExpenditureFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as EvaluatedExpenditureClientV5;

  evaluatedExpenditureClient.clientVersion = 5;
  addAugments(evaluatedExpenditureClient, colonyClient);

  return evaluatedExpenditureClient;
}
