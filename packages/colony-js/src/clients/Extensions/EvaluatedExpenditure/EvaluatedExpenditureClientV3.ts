import { EvaluatedExpenditure__factory as EvaluatedExpenditureFactory } from '../../../contracts/EvaluatedExpenditure/3/factories/EvaluatedExpenditure__factory';
import { EvaluatedExpenditure } from '../../../contracts/EvaluatedExpenditure/3/EvaluatedExpenditure';
import { AugmentedIColony } from '../../Core/augments/commonAugments';
import {
  addAugments,
  AugmentedEvaluatedExpenditure,
  ValidColony,
} from './augments/commonAugments';

export interface EvaluatedExpenditureClientV3
  extends AugmentedEvaluatedExpenditure<EvaluatedExpenditure> {
  clientVersion: 3;
}

export default function getEvaluatedExpenditureClient(
  colonyClient: AugmentedIColony<ValidColony>,
  address: string,
): EvaluatedExpenditureClientV3 {
  const evaluatedExpenditureClient = EvaluatedExpenditureFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as EvaluatedExpenditureClientV3;

  evaluatedExpenditureClient.clientVersion = 3;
  addAugments(evaluatedExpenditureClient, colonyClient);

  return evaluatedExpenditureClient;
}
