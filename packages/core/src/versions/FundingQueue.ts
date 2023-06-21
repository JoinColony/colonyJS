import type { ColonyVersion } from './IColony';

import { createContractVersionArray } from './utils.js';

const FUNDING_QUEUE_VERSION_NEXT = 5;

/** @internal */
export const FUNDING_QUEUE_VERSIONS = createContractVersionArray(
  FUNDING_QUEUE_VERSION_NEXT,
);

export type FundingQueueVersion = (typeof FUNDING_QUEUE_VERSIONS)[number];

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
export const FUNDING_QUEUE_VERSION_LATEST = (FUNDING_QUEUE_VERSION_NEXT -
  1) as FundingQueueVersion;
