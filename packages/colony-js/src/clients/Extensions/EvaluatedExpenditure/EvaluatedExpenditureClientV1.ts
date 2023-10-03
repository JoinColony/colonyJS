import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { EvaluatedExpenditure } from '../../../contracts/EvaluatedExpenditure/1/EvaluatedExpenditure.js';

import { EvaluatedExpenditure__factory as EvaluatedExpenditureFactory } from '../../../contracts/EvaluatedExpenditure/1/factories/EvaluatedExpenditure__factory.js';
import { ClientType } from '../../../constants.js';
import {
  addAugments,
  AugmentedEvaluatedExpenditure,
  ValidColony,
} from './augments/commonAugments.js';

export interface EvaluatedExpenditureClientV1
  extends AugmentedEvaluatedExpenditure<EvaluatedExpenditure> {
  clientVersion: 1;
}

export default function getEvaluatedExpenditureClient(
  colonyClient: AugmentedIColony<ValidColony>,
  address: string,
): EvaluatedExpenditureClientV1 {
  const evaluatedExpenditureClient = EvaluatedExpenditureFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as EvaluatedExpenditureClientV1;

  evaluatedExpenditureClient.clientType = ClientType.EvaluatedExpenditureClient;
  evaluatedExpenditureClient.clientVersion = 1;
  addAugments(evaluatedExpenditureClient, colonyClient);

  return evaluatedExpenditureClient;
}
