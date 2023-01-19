import { FundingQueue__factory as FundingQueueFactory } from '../../../contracts/FundingQueue/4/factories/FundingQueue__factory';
import { FundingQueue } from '../../../contracts/FundingQueue/4/FundingQueue';
import { AugmentedIColony } from '../../Core/augments/commonAugments';
import { addAugments, AugmentedFundingQueue } from './augments/commonAugments';

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

  fundingQueueClient.clientVersion = 4;
  addAugments(fundingQueueClient, colonyClient);

  return fundingQueueClient;
}
