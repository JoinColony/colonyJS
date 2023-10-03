import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { FundingQueue } from '../../../contracts/FundingQueue/6/FundingQueue.js';

import { FundingQueue__factory as FundingQueueFactory } from '../../../contracts/FundingQueue/6/factories/FundingQueue__factory.js';
import { ClientType } from '../../../constants.js';
import {
  addAugments,
  AugmentedFundingQueue,
} from './augments/commonAugments.js';

export interface FundingQueueClientV6
  extends AugmentedFundingQueue<FundingQueue> {
  clientVersion: 6;
}

export default function getFundingQueueClient(
  colonyClient: AugmentedIColony,
  address: string,
): FundingQueueClientV6 {
  const fundingQueueClient = FundingQueueFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as FundingQueueClientV6;

  fundingQueueClient.clientType = ClientType.FundingQueueClient;
  fundingQueueClient.clientVersion = 6;
  addAugments(fundingQueueClient, colonyClient);

  return fundingQueueClient;
}
