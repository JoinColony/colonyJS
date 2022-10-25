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
  const whitelistClient = EvaluatedExpenditureFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as EvaluatedExpenditureClientV2;

  whitelistClient.clientVersion = 2;
  addAugments(whitelistClient, colonyClient);

  return whitelistClient;
}
