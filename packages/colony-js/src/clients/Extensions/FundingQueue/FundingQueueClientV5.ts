import type { FundingQueue } from '../../../contracts/FundingQueue/5/FundingQueue.js';
import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';

import { FundingQueue__factory as FundingQueueFactory } from '../../../contracts/FundingQueue/5/factories/FundingQueue__factory.js';
import { ClientType } from '../../../constants.js';
import {
  addAugments,
  AugmentedFundingQueue,
} from './augments/commonAugments.js';

export interface FundingQueueClientV5
  extends AugmentedFundingQueue<FundingQueue> {
  clientVersion: 5;
}

export default function getFundingQueueClient(
  colonyClient: AugmentedIColony,
  address: string,
): FundingQueueClientV5 {
  const fundingQueueClient = FundingQueueFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as FundingQueueClientV5;

  fundingQueueClient.clientType = ClientType.FundingQueueClient;
  fundingQueueClient.clientVersion = 5;
  addAugments(fundingQueueClient, colonyClient);

  return fundingQueueClient;
}
