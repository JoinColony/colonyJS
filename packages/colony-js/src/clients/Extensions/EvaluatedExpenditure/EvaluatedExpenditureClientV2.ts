import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { EvaluatedExpenditure } from '../../../contracts/EvaluatedExpenditure/2/EvaluatedExpenditure.js';

import { EvaluatedExpenditure__factory as EvaluatedExpenditureFactory } from '../../../contracts/EvaluatedExpenditure/2/factories/EvaluatedExpenditure__factory.js';
import { ClientType } from '../../../constants.js';
import {
  addAugments,
  AugmentedEvaluatedExpenditure,
  ValidColony,
} from './augments/commonAugments.js';

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

  evaluatedExpenditureClient.clientType = ClientType.EvaluatedExpenditureClient;
  evaluatedExpenditureClient.clientVersion = 2;
  addAugments(evaluatedExpenditureClient, colonyClient);

  return evaluatedExpenditureClient;
}
