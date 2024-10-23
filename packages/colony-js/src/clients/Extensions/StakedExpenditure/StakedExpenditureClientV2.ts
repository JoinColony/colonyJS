import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { StakedExpenditure } from '../../../contracts/StakedExpenditure/2/StakedExpenditure.js';

import { StakedExpenditure__factory as StakedExpenditureFactory } from '../../../contracts/StakedExpenditure/2/factories/StakedExpenditure__factory.js';
import { ClientType } from '../../../constants.js';
import {
  addAugments,
  type AugmentedStakedExpenditure,
  type ValidColony,
} from './augments/commonAugments.js';

export interface StakedExpenditureClientV2
  extends AugmentedStakedExpenditure<StakedExpenditure> {
  clientVersion: 2;
}

export default function getStakedExpenditureClient(
  colonyClient: AugmentedIColony<ValidColony>,
  address: string,
): StakedExpenditureClientV2 {
  const stakedExpenditureClient = StakedExpenditureFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as StakedExpenditureClientV2;

  stakedExpenditureClient.clientType = ClientType.StakedExpenditureClient;
  stakedExpenditureClient.clientVersion = 2;
  addAugments(stakedExpenditureClient, colonyClient);

  return stakedExpenditureClient;
}
