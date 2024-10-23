import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { FundingQueue } from '../../../contracts/FundingQueue/8/FundingQueue.js';

import { FundingQueue__factory as FundingQueueFactory } from '../../../contracts/FundingQueue/8/factories/FundingQueue__factory.js';
import { ClientType } from '../../../constants.js';
import {
  addAugments,
  type AugmentedFundingQueue,
  type ValidColony,
} from './augments/commonAugments.js';

export interface FundingQueueClientV8
  extends AugmentedFundingQueue<FundingQueue> {
  clientVersion: 8;
}

export default function getFundingQueueClient(
  colonyClient: AugmentedIColony<ValidColony>,
  address: string,
): FundingQueueClientV8 {
  const fundingQueueClient = FundingQueueFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as FundingQueueClientV8;

  fundingQueueClient.clientType = ClientType.FundingQueueClient;
  fundingQueueClient.clientVersion = 8;
  addAugments(fundingQueueClient, colonyClient);

  return fundingQueueClient;
}
