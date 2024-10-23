import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { StakedExpenditure } from '../../../contracts/StakedExpenditure/6/index.js';

import { StakedExpenditure__factory as StakedExpenditureFactory } from '../../../contracts/StakedExpenditure/6/factories/StakedExpenditure__factory.js';
import {
  addAugments,
  type AugmentedStakedExpenditure,
  type ValidColony,
} from './augments/commonAugments.js';
import { ClientType } from '../../../constants.js';

export interface StakedExpenditureClientV6
  extends AugmentedStakedExpenditure<StakedExpenditure> {
  clientVersion: 6;
}

export default function getStakedExpenditureClient(
  colonyClient: AugmentedIColony<ValidColony>,
  address: string,
): StakedExpenditureClientV6 {
  const stakedExpenditureClient = StakedExpenditureFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as StakedExpenditureClientV6;

  stakedExpenditureClient.clientType = ClientType.StakedExpenditureClient;
  stakedExpenditureClient.clientVersion = 6;
  addAugments(stakedExpenditureClient, colonyClient);

  return stakedExpenditureClient;
}
