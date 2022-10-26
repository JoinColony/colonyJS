import { StakedExpenditure__factory as StakedExpenditureFactory } from '../../../contracts/StakedExpenditure/1/factories/StakedExpenditure__factory';
import { StakedExpenditure } from '../../../contracts/StakedExpenditure/1';
import { AugmentedIColony } from '../../Core/augments/commonAugments';
import {
  addAugments,
  AugmentedStakedExpenditure,
  ValidColony,
} from './augments/commonAugments';

export interface StakedExpenditureClientV1
  extends AugmentedStakedExpenditure<StakedExpenditure> {
  clientVersion: 1;
}

export default function getStakedExpenditureClient(
  colonyClient: AugmentedIColony<ValidColony>,
  address: string,
): StakedExpenditureClientV1 {
  const evaluatedExpenditureClient = StakedExpenditureFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as StakedExpenditureClientV1;

  evaluatedExpenditureClient.clientVersion = 1;
  addAugments(evaluatedExpenditureClient, colonyClient);

  return evaluatedExpenditureClient;
}
