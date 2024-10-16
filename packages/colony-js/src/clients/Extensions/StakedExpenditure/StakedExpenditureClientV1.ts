import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';

import { StakedExpenditure__factory as StakedExpenditureFactory } from '../../../contracts/StakedExpenditure/1/factories/StakedExpenditure__factory.js';
import { ClientType } from '../../../constants.js';
import {
  addAugments,
  type UnknownStakedExpenditureClient,
  type ValidColony,
} from './augments/commonAugments.js';

export default function getStakedExpenditureClient(
  colonyClient: AugmentedIColony<ValidColony>,
  address: string,
) {
  const stakedExpenditureClient = StakedExpenditureFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as UnknownStakedExpenditureClient;

  stakedExpenditureClient.clientType = ClientType.StakedExpenditureClient;
  stakedExpenditureClient.clientVersion = 1;
  addAugments(stakedExpenditureClient, colonyClient);

  return stakedExpenditureClient;
}
