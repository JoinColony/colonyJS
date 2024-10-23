import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { StakedExpenditure } from '../../../contracts/StakedExpenditure/3/index.js';

import { StakedExpenditure__factory as StakedExpenditureFactory } from '../../../contracts/StakedExpenditure/3/factories/StakedExpenditure__factory.js';
import {
  addAugments,
  type AugmentedStakedExpenditure,
  type ValidColony,
} from './augments/commonAugments.js';
import { ClientType } from '../../../constants.js';

export interface StakedExpenditureClientV3
  extends AugmentedStakedExpenditure<StakedExpenditure> {
  clientVersion: 3;
}

export default function getStakedExpenditureClient(
  colonyClient: AugmentedIColony<ValidColony>,
  address: string,
): StakedExpenditureClientV3 {
  const stakedExpenditureClient = StakedExpenditureFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as StakedExpenditureClientV3;

  stakedExpenditureClient.clientType = ClientType.StakedExpenditureClient;
  stakedExpenditureClient.clientVersion = 3;
  addAugments(stakedExpenditureClient, colonyClient);

  return stakedExpenditureClient;
}
