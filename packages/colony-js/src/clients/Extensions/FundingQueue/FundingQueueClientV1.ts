import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';

import { FundingQueue__factory as FundingQueueFactory } from '../../../contracts/FundingQueue/1/factories/FundingQueue__factory.js';
import { ClientType } from '../../../constants.js';
import {
  type UnkonwnFundingQueueClient,
  addAugments,
} from './augments/commonAugments.js';

export default function getFundingQueueClient(
  colonyClient: AugmentedIColony,
  address: string,
) {
  const fundingQueueClient = FundingQueueFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as UnkonwnFundingQueueClient;

  fundingQueueClient.clientType = ClientType.FundingQueueClient;
  fundingQueueClient.clientVersion = 1;
  addAugments(fundingQueueClient, colonyClient);

  return fundingQueueClient;
}
