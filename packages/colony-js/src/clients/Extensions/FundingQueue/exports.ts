import type { FundingQueueVersion } from '@colony/core';

import { assertExhaustiveSwitch } from '@colony/core/utils';

import { AugmentedIColony } from '../../Core/augments/commonAugments.js';

import getFundingQueueClientV1 from './FundingQueueClientV1.js';
import getFundingQueueClientV2, {
  FundingQueueClientV2,
} from './FundingQueueClientV2.js';
import getFundingQueueClientV3, {
  FundingQueueClientV3,
} from './FundingQueueClientV3.js';
import getFundingQueueClientV4, {
  FundingQueueClientV4,
} from './FundingQueueClientV4.js';
import getFundingQueueClientV5, {
  FundingQueueClientV5,
} from './FundingQueueClientV5.js';
import getFundingQueueClientV6, {
  FundingQueueClientV6,
} from './FundingQueueClientV6.js';

export { FundingQueueClientV2 } from './FundingQueueClientV2.js';
export { FundingQueueClientV3 } from './FundingQueueClientV3.js';
export { FundingQueueClientV4 } from './FundingQueueClientV4.js';
export { FundingQueueClientV5 } from './FundingQueueClientV5.js';
export { FundingQueueClientV6 } from './FundingQueueClientV6.js';

export type AnyFundingQueueClient =
  | FundingQueueClientV2
  | FundingQueueClientV3
  | FundingQueueClientV4
  | FundingQueueClientV5
  | FundingQueueClientV6;

/** @internal */
export const getFundingQueueClient = (
  colonyClient: AugmentedIColony,
  address: string,
  version: FundingQueueVersion,
): AnyFundingQueueClient => {
  switch (version) {
    case 1:
      return getFundingQueueClientV1(
        colonyClient,
        address,
      ) as FundingQueueClientV2;
    case 2:
      return getFundingQueueClientV2(colonyClient, address);
    case 3:
      return getFundingQueueClientV3(colonyClient, address);
    case 4:
      return getFundingQueueClientV4(colonyClient, address);
    case 5:
      return getFundingQueueClientV5(colonyClient, address);
    case 6:
      return getFundingQueueClientV6(colonyClient, address);
    default:
      return assertExhaustiveSwitch(
        version,
        'Could not find FundingQueue version',
      );
  }
};
