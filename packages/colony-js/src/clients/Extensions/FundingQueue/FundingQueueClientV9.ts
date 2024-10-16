import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { FundingQueue } from '../../../contracts/FundingQueue/9/FundingQueue.js';

import { FundingQueue__factory as FundingQueueFactory } from '../../../contracts/FundingQueue/9/factories/FundingQueue__factory.js';
import { ClientType } from '../../../constants.js';
import {
  addAugments,
  type AugmentedFundingQueue,
  type ValidColony,
} from './augments/commonAugments.js';

export interface FundingQueueClientV9
  extends AugmentedFundingQueue<FundingQueue> {
  clientVersion: 9;
}

export default function getFundingQueueClient(
  colonyClient: AugmentedIColony<ValidColony>,
  address: string,
): FundingQueueClientV9 {
  const fundingQueueClient = FundingQueueFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as FundingQueueClientV9;

  fundingQueueClient.clientType = ClientType.FundingQueueClient;
  fundingQueueClient.clientVersion = 9;
  addAugments(fundingQueueClient, colonyClient);

  return fundingQueueClient;
}
