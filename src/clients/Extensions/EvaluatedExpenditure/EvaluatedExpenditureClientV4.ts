import { EvaluatedExpenditure__factory as EvaluatedExpenditureFactory } from '../../../contracts/EvaluatedExpenditure/4/factories/EvaluatedExpenditure__factory';
import { EvaluatedExpenditure } from '../../../contracts/EvaluatedExpenditure/4/EvaluatedExpenditure';
import { AugmentedIColony } from '../../Core/augments/commonAugments';
import {
  addAugments,
  AugmentedEvaluatedExpenditure,
  ValidColony,
} from './augments/commonAugments';

export interface EvaluatedExpenditureClientV4
  extends AugmentedEvaluatedExpenditure<EvaluatedExpenditure> {
  clientVersion: 4;
}

export default function getEvaluatedExpenditureClient(
  colonyClient: AugmentedIColony<ValidColony>,
  address: string,
): EvaluatedExpenditureClientV4 {
  const evaluatedExpenditureClient = EvaluatedExpenditureFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as EvaluatedExpenditureClientV4;

  evaluatedExpenditureClient.clientVersion = 4;
  addAugments(evaluatedExpenditureClient, colonyClient);

  return evaluatedExpenditureClient;
}
