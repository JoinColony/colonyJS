import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { FundingQueue } from '../../../contracts/FundingQueue/3/FundingQueue.js';

import { FundingQueue__factory as FundingQueueFactory } from '../../../contracts/FundingQueue/3/factories/FundingQueue__factory.js';
import { ClientType } from '../../../constants.js';
import {
  addAugments,
  AugmentedFundingQueue,
  ValidColony,
} from './augments/commonAugments.js';

export interface FundingQueueClientV3
  extends AugmentedFundingQueue<FundingQueue> {
  clientVersion: 3;
}

export default function getFundingQueueClient(
  colonyClient: AugmentedIColony<ValidColony>,
  address: string,
): FundingQueueClientV3 {
  const fundingQueueClient = FundingQueueFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as FundingQueueClientV3;

  fundingQueueClient.clientType = ClientType.FundingQueueClient;
  fundingQueueClient.clientVersion = 3;
  addAugments(fundingQueueClient, colonyClient);

  return fundingQueueClient;
}
