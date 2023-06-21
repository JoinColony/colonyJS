import { FundingQueue__factory as FundingQueueFactory } from '../../../contracts/FundingQueue/2/factories/FundingQueue__factory.js';
import { FundingQueue } from '../../../contracts/FundingQueue/2/FundingQueue.js';
import { AugmentedIColony } from '../../Core/augments/commonAugments.js';
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

  fundingQueueClient.clientVersion = 2;
  addAugments(fundingQueueClient, colonyClient);

  return fundingQueueClient;
}
