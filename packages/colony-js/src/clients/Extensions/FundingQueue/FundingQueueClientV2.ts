import type { FundingQueue } from '../../../contracts/FundingQueue/2/FundingQueue.js';
import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';

import { FundingQueue__factory as FundingQueueFactory } from '../../../contracts/FundingQueue/2/factories/FundingQueue__factory.js';
import { ClientType } from '../../../constants.js';
import {
  addAugments,
  AugmentedFundingQueue,
} from './augments/commonAugments.js';

export interface FundingQueueClientV2
  extends AugmentedFundingQueue<FundingQueue> {
  clientVersion: 2;
}

export default function getFundingQueueClient(
  colonyClient: AugmentedIColony,
  address: string,
): FundingQueueClientV2 {
  const fundingQueueClient = FundingQueueFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as FundingQueueClientV2;

  fundingQueueClient.clientType = ClientType.FundingQueueClient;
  fundingQueueClient.clientVersion = 2;
  addAugments(fundingQueueClient, colonyClient);

  return fundingQueueClient;
}
