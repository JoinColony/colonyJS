import type { ColonyVersion } from './IColony.js';

import { createContractVersionArray } from './utils.js';

const STREAMING_PAYMENTS_VERSION_NEXT = 3;

/** @internal */
export const STREAMING_PAYMENTS_VERSIONS = createContractVersionArray(
  STREAMING_PAYMENTS_VERSION_NEXT,
);
/** @internal */
export type StreamingPaymentsVersion =
  (typeof STREAMING_PAYMENTS_VERSIONS)[number];

/** @internal */
export const streamingPaymentsIncompatibilityMap: Record<
  StreamingPaymentsVersion,
  Array<ColonyVersion>
> = {
  1: [1, 2, 3],
  2: [1, 2, 3],
};

/** @internal */
export const STREAMING_PAYMENTS_VERSION_LATEST =
  (STREAMING_PAYMENTS_VERSION_NEXT - 1) as StreamingPaymentsVersion;
