import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { FundingQueue } from '../../../contracts/FundingQueue/4/FundingQueue.js';

import { FundingQueue__factory as FundingQueueFactory } from '../../../contracts/FundingQueue/4/factories/FundingQueue__factory.js';
import { ClientType } from '../../../constants.js';
import {
  addAugments,
  AugmentedFundingQueue,
} from './augments/commonAugments.js';

export interface FundingQueueClientV4
  extends AugmentedFundingQueue<FundingQueue> {
  clientVersion: 4;
}

export default function getFundingQueueClient(
  colonyClient: AugmentedIColony,
  address: string,
): FundingQueueClientV4 {
  const fundingQueueClient = FundingQueueFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as FundingQueueClientV4;

  fundingQueueClient.clientType = ClientType.FundingQueueClient;
  fundingQueueClient.clientVersion = 4;
  addAugments(fundingQueueClient, colonyClient);

  return fundingQueueClient;
}
