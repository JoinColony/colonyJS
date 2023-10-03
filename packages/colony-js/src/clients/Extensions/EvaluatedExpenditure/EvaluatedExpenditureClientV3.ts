import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { EvaluatedExpenditure } from '../../../contracts/EvaluatedExpenditure/3/EvaluatedExpenditure.js';

import { EvaluatedExpenditure__factory as EvaluatedExpenditureFactory } from '../../../contracts/EvaluatedExpenditure/3/factories/EvaluatedExpenditure__factory.js';
import { ClientType } from '../../../constants.js';
import {
  addAugments,
  AugmentedEvaluatedExpenditure,
  ValidColony,
} from './augments/commonAugments.js';

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

  evaluatedExpenditureClient.clientType = ClientType.EvaluatedExpenditureClient;
  evaluatedExpenditureClient.clientVersion = 3;
  addAugments(evaluatedExpenditureClient, colonyClient);

  return evaluatedExpenditureClient;
}
