import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { EvaluatedExpenditure } from '../../../contracts/EvaluatedExpenditure/4/EvaluatedExpenditure.js';

import { EvaluatedExpenditure__factory as EvaluatedExpenditureFactory } from '../../../contracts/EvaluatedExpenditure/4/factories/EvaluatedExpenditure__factory.js';
import { ClientType } from '../../../constants.js';
import {
  addAugments,
  AugmentedEvaluatedExpenditure,
  ValidColony,
} from './augments/commonAugments.js';

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

  evaluatedExpenditureClient.clientType = ClientType.EvaluatedExpenditureClient;
  evaluatedExpenditureClient.clientVersion = 4;
  addAugments(evaluatedExpenditureClient, colonyClient);

  return evaluatedExpenditureClient;
}
