import { StakedExpenditure__factory as StakedExpenditureFactory } from '../../../contracts/StakedExpenditure/2/factories/StakedExpenditure__factory.js';
import { StakedExpenditure } from '../../../contracts/StakedExpenditure/2/StakedExpenditure.js';
import { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import {
  addAugments,
  AugmentedStakedExpenditure,
  ValidColony,
} from './augments/commonAugments.js';

export interface StakedExpenditureClientV2
  extends AugmentedStakedExpenditure<StakedExpenditure> {
  clientVersion: 2;
}

export default function getStakedExpenditureClient(
  colonyClient: AugmentedIColony<ValidColony>,
  address: string,
): StakedExpenditureClientV2 {
  const evaluatedExpenditureClient = StakedExpenditureFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as StakedExpenditureClientV2;

  evaluatedExpenditureClient.clientVersion = 2;
  addAugments(evaluatedExpenditureClient, colonyClient);

  return evaluatedExpenditureClient;
}
