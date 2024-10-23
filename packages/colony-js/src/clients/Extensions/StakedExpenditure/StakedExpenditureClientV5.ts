import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { StakedExpenditure } from '../../../contracts/StakedExpenditure/5/index.js';

import { StakedExpenditure__factory as StakedExpenditureFactory } from '../../../contracts/StakedExpenditure/5/factories/StakedExpenditure__factory.js';
import {
  addAugments,
  type AugmentedStakedExpenditure,
  type ValidColony,
} from './augments/commonAugments.js';
import { ClientType } from '../../../constants.js';

export interface StakedExpenditureClientV5
  extends AugmentedStakedExpenditure<StakedExpenditure> {
  clientVersion: 5;
}

export default function getStakedExpenditureClient(
  colonyClient: AugmentedIColony<ValidColony>,
  address: string,
): StakedExpenditureClientV5 {
  const stakedExpenditureClient = StakedExpenditureFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as StakedExpenditureClientV5;

  stakedExpenditureClient.clientType = ClientType.StakedExpenditureClient;
  stakedExpenditureClient.clientVersion = 5;
  addAugments(stakedExpenditureClient, colonyClient);

  return stakedExpenditureClient;
}
