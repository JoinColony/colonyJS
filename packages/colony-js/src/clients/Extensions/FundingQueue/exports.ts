import { ColonyVersion } from '../../../clients/Core/exports';
import {
  assertExhaustiveSwitch,
  createContractVersionArray,
} from '../../../utils';
import { AugmentedIColony } from '../../Core/augments/commonAugments';

import getFundingQueueClientV1, {
  FundingQueueClientV1,
} from './FundingQueueClientV1';
import getFundingQueueClientV2, {
  FundingQueueClientV2,
} from './FundingQueueClientV2';
import getFundingQueueClientV3, {
  FundingQueueClientV3,
} from './FundingQueueClientV3';
import getFundingQueueClientV4, {
  FundingQueueClientV4,
} from './FundingQueueClientV4';

const FUNDING_QUEUE_VERSION_NEXT = 5;

/** @internal */
export const FUNDING_QUEUE_VERSION_LATEST = FUNDING_QUEUE_VERSION_NEXT - 1;

export { FundingQueueClientV1 } from './FundingQueueClientV1';
export { FundingQueueClientV2 } from './FundingQueueClientV2';
export { FundingQueueClientV3 } from './FundingQueueClientV3';
export { FundingQueueClientV4 } from './FundingQueueClientV4';

export type AnyFundingQueueClient =
  | FundingQueueClientV1
  | FundingQueueClientV2
  | FundingQueueClientV3
  | FundingQueueClientV4;

/** @internal */
export const FUNDING_QUEUE_VERSIONS = createContractVersionArray(
  FUNDING_QUEUE_VERSION_NEXT,
);
/** @internal */
export type FundingQueueVersion = typeof FUNDING_QUEUE_VERSIONS[number];

/** @internal */
export const fundingQueueIncompatibilityMap: Record<
  FundingQueueVersion,
  Array<ColonyVersion>
> = {
  1: [],
  2: [],
  3: [],
  4: [],
};

/** @internal */
export const getFundingQueueClient = (
  colonyClient: AugmentedIColony,
  address: string,
  version: FundingQueueVersion,
): AnyFundingQueueClient => {
  switch (version) {
    case 1:
      return getFundingQueueClientV1(colonyClient, address);
    case 2:
      return getFundingQueueClientV2(colonyClient, address);
    case 3:
      return getFundingQueueClientV3(colonyClient, address);
    case 4:
      return getFundingQueueClientV4(colonyClient, address);
    default:
      return assertExhaustiveSwitch(
        version,
        'Could not find FundingQueue version',
      );
  }
};
