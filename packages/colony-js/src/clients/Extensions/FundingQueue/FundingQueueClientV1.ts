import { FundingQueue__factory as FundingQueueFactory } from '../../../contracts/FundingQueue/1/factories/FundingQueue__factory';
import { FundingQueue } from '../../../contracts/FundingQueue/1/FundingQueue';
import { AugmentedIColony } from '../../Core/augments/commonAugments';
import { addAugments, AugmentedFundingQueue } from './augments/commonAugments';

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
