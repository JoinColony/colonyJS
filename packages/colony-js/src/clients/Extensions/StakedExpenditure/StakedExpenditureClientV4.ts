import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { StakedExpenditure } from '../../../contracts/StakedExpenditure/4/index.js';

import { StakedExpenditure__factory as StakedExpenditureFactory } from '../../../contracts/StakedExpenditure/4/factories/StakedExpenditure__factory.js';
import {
  addAugments,
  AugmentedStakedExpenditure,
  ValidColony,
} from './augments/commonAugments.js';
import { ClientType } from '../../../constants.js';

export interface StakedExpenditureClientV4
  extends AugmentedStakedExpenditure<StakedExpenditure> {
  clientVersion: 4;
}

export default function getStakedExpenditureClient(
  colonyClient: AugmentedIColony<ValidColony>,
  address: string,
): StakedExpenditureClientV4 {
  const stakedExpenditureClient = StakedExpenditureFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as StakedExpenditureClientV4;

  stakedExpenditureClient.clientType = ClientType.StakedExpenditureClient;
  stakedExpenditureClient.clientVersion = 4;
  addAugments(stakedExpenditureClient, colonyClient);

  return stakedExpenditureClient;
}
