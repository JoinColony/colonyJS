import { FundingQueue__factory as FundingQueueFactory } from '../../../contracts/FundingQueue/5/factories/FundingQueue__factory';
import { FundingQueue } from '../../../contracts/FundingQueue/5/FundingQueue';
import { AugmentedIColony } from '../../Core/augments/commonAugments';
import { addAugments, AugmentedFundingQueue } from './augments/commonAugments';

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
