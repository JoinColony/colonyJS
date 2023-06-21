import { FundingQueue__factory as FundingQueueFactory } from '../../../contracts/FundingQueue/1/factories/FundingQueue__factory.js';
import { FundingQueue } from '../../../contracts/FundingQueue/1/FundingQueue.js';
import { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import {
  addAugments,
  AugmentedFundingQueue,
} from './augments/commonAugments.js';

export interface FundingQueueClientV1
  extends AugmentedFundingQueue<FundingQueue> {
  clientVersion: 1;
}

export default function getFundingQueueClient(
  colonyClient: AugmentedIColony,
  address: string,
): FundingQueueClientV1 {
  const fundingQueueClient = FundingQueueFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as FundingQueueClientV1;

  fundingQueueClient.clientVersion = 1;
  addAugments(fundingQueueClient, colonyClient);

  return fundingQueueClient;
}
