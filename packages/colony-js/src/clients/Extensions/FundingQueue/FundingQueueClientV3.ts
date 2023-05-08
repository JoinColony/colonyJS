import { FundingQueue__factory as FundingQueueFactory } from '../../../contracts/FundingQueue/3/factories/FundingQueue__factory';
import { FundingQueue } from '../../../contracts/FundingQueue/3/FundingQueue';
import { AugmentedIColony } from '../../Core/augments/commonAugments';
import { addAugments, AugmentedFundingQueue } from './augments/commonAugments';

export interface FundingQueueClientV3
  extends AugmentedFundingQueue<FundingQueue> {
  clientVersion: 3;
}

export default function getFundingQueueClient(
  colonyClient: AugmentedIColony,
  address: string,
): FundingQueueClientV3 {
  const fundingQueueClient = FundingQueueFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as FundingQueueClientV3;

  fundingQueueClient.clientVersion = 3;
  addAugments(fundingQueueClient, colonyClient);

  return fundingQueueClient;
}
