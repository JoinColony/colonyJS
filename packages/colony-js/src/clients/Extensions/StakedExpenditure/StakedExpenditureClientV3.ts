import { StakedExpenditure__factory as StakedExpenditureFactory } from '../../../contracts/StakedExpenditure/3/factories/StakedExpenditure__factory.js';
import { StakedExpenditure } from '../../../contracts/StakedExpenditure/3/index.js';
import { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import {
  addAugments,
  AugmentedStakedExpenditure,
  ValidColony,
} from './augments/commonAugments.js';

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
