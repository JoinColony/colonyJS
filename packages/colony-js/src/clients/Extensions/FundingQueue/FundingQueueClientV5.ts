import { FundingQueue__factory as FundingQueueFactory } from '../../../contracts/FundingQueue/5/factories/FundingQueue__factory.js';
import { FundingQueue } from '../../../contracts/FundingQueue/5/FundingQueue.js';
import { AugmentedIColony } from '../../Core/augments/commonAugments.js';
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

  fundingQueueClient.clientVersion = 5;
  addAugments(fundingQueueClient, colonyClient);

  return fundingQueueClient;
}
