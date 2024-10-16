import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { StakedExpenditure } from '../../../contracts/StakedExpenditure/7/index.js';

import { StakedExpenditure__factory as StakedExpenditureFactory } from '../../../contracts/StakedExpenditure/7/factories/StakedExpenditure__factory.js';
import {
  addAugments,
  type AugmentedStakedExpenditure,
  type ValidColony,
} from './augments/commonAugments.js';
import { ClientType } from '../../../constants.js';

export interface StakedExpenditureClientV7
  extends AugmentedStakedExpenditure<StakedExpenditure> {
  clientVersion: 7;
}

export default function getStakedExpenditureClient(
  colonyClient: AugmentedIColony<ValidColony>,
  address: string,
): StakedExpenditureClientV7 {
  const stakedExpenditureClient = StakedExpenditureFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as StakedExpenditureClientV7;

  stakedExpenditureClient.clientType = ClientType.StakedExpenditureClient;
  stakedExpenditureClient.clientVersion = 7;
  addAugments(stakedExpenditureClient, colonyClient);

  return stakedExpenditureClient;
}
