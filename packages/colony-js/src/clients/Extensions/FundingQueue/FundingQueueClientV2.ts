import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';

import { FundingQueue__factory as FundingQueueFactory } from '../../../contracts/FundingQueue/2/factories/FundingQueue__factory.js';
import { ClientType } from '../../../constants.js';
import {
  addAugments,
  type UnknownFundingQueueClient,
  type ValidColony,
} from './augments/commonAugments.js';

export default function getFundingQueueClient(
  colonyClient: AugmentedIColony<ValidColony>,
  address: string,
) {
  const fundingQueueClient = FundingQueueFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as UnknownFundingQueueClient;

  fundingQueueClient.clientType = ClientType.FundingQueueClient;
  fundingQueueClient.clientVersion = 2;
  addAugments(fundingQueueClient, colonyClient);

  return fundingQueueClient;
}
