import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { EvaluatedExpenditure } from '../../../contracts/EvaluatedExpenditure/5/EvaluatedExpenditure.js';

import { EvaluatedExpenditure__factory as EvaluatedExpenditureFactory } from '../../../contracts/EvaluatedExpenditure/5/factories/EvaluatedExpenditure__factory.js';
import { ClientType } from '../../../constants.js';
import {
  addAugments,
  AugmentedEvaluatedExpenditure,
  ValidColony,
} from './augments/commonAugments.js';

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

  evaluatedExpenditureClient.clientType = ClientType.EvaluatedExpenditureClient;
  evaluatedExpenditureClient.clientVersion = 5;
  addAugments(evaluatedExpenditureClient, colonyClient);

  return evaluatedExpenditureClient;
}
