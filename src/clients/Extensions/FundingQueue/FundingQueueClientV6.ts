import { FundingQueue__factory as FundingQueueFactory } from '../../../contracts/FundingQueue/6/factories/FundingQueue__factory';
import { FundingQueue } from '../../../contracts/FundingQueue/6/FundingQueue';
import { AugmentedIColony } from '../../Core/augments/commonAugments';
import { addAugments, AugmentedFundingQueue } from './augments/commonAugments';

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

  fundingQueueClient.clientVersion = 6;
  addAugments(fundingQueueClient, colonyClient);

  return fundingQueueClient;
}
