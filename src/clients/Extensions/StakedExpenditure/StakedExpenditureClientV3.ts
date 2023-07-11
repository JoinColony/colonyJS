import { StakedExpenditure__factory as StakedExpenditureFactory } from '../../../contracts/StakedExpenditure/3/factories/StakedExpenditure__factory';
import { StakedExpenditure } from '../../../contracts/StakedExpenditure/3';
import { AugmentedIColony } from '../../Core/augments/commonAugments';
import {
  addAugments,
  AugmentedStakedExpenditure,
  ValidColony,
} from './augments/commonAugments';

export interface StakedExpenditureClientV3
  extends AugmentedStakedExpenditure<StakedExpenditure> {
  clientVersion: 3;
}

export default function getStakedExpenditureClient(
  colonyClient: AugmentedIColony<ValidColony>,
  address: string,
): StakedExpenditureClientV3 {
  const evaluatedExpenditureClient = StakedExpenditureFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as StakedExpenditureClientV3;

  evaluatedExpenditureClient.clientVersion = 3;
  addAugments(evaluatedExpenditureClient, colonyClient);

  return evaluatedExpenditureClient;
}
