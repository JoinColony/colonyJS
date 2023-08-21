import { StakedExpenditure__factory as StakedExpenditureFactory } from '../../../contracts/StakedExpenditure/4/factories/StakedExpenditure__factory';
import { StakedExpenditure } from '../../../contracts/StakedExpenditure/4';
import { AugmentedIColony } from '../../Core/augments/commonAugments';
import {
  addAugments,
  AugmentedStakedExpenditure,
  ValidColony,
} from './augments/commonAugments';

export interface StakedExpenditureClientV4
  extends AugmentedStakedExpenditure<StakedExpenditure> {
  clientVersion: 4;
}

export default function getStakedExpenditureClient(
  colonyClient: AugmentedIColony<ValidColony>,
  address: string,
): StakedExpenditureClientV4 {
  const evaluatedExpenditureClient = StakedExpenditureFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as StakedExpenditureClientV4;

  evaluatedExpenditureClient.clientVersion = 4;
  addAugments(evaluatedExpenditureClient, colonyClient);

  return evaluatedExpenditureClient;
}
