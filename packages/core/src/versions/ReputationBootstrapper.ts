import type { ColonyVersion } from './IColony';

import { createContractVersionArray } from './utils.js';

const REPUTATION_BOOTSTRAPPER_VERSION_NEXT = 2;

/** @internal */
export const REPUTATION_BOOTSTRAPPER_VERSIONS = createContractVersionArray(
  REPUTATION_BOOTSTRAPPER_VERSION_NEXT,
);

export type ReputationBootstrapperVersion =
  (typeof REPUTATION_BOOTSTRAPPER_VERSIONS)[number];

/** @internal */
export const reputationBootstrapperIncompatibilityMap: Record<
  ReputationBootstrapperVersion,
  Array<ColonyVersion>
> = {
  1: [],
};

/** @internal */
export const REPUTATION_BOOTSTRAPPER_VERSION_LATEST =
  (REPUTATION_BOOTSTRAPPER_VERSION_NEXT - 1) as ReputationBootstrapperVersion;
