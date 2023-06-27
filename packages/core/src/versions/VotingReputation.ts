import type { ColonyVersion } from './IColony.js';

import { createContractVersionArray } from './utils.js';

const VOTING_REPUTATION_VERSION_NEXT = 9;

/** @internal */
export const VOTING_REPUTATION_VERSIONS = createContractVersionArray(
  VOTING_REPUTATION_VERSION_NEXT,
);

export type VotingReputationVersion =
  (typeof VOTING_REPUTATION_VERSIONS)[number];

/** @internal */
export const votingReputationIncompatibilityMap: Record<
  VotingReputationVersion,
  Array<ColonyVersion>
> = {
  1: [],
  2: [1, 2, 3, 4, 5, 6],
  3: [1, 2, 3, 4, 5, 6],
  4: [1, 2, 3, 4, 5, 6],
  5: [1, 2, 3, 4, 5, 6],
  6: [1, 2, 3, 4, 5, 6],
  7: [1, 2, 3, 4, 5, 6],
  8: [1, 2, 3, 4, 5, 6],
};

/** @internal */
export const VOTING_REPUTATION_VERSION_LATEST =
  (VOTING_REPUTATION_VERSION_NEXT - 1) as VotingReputationVersion;
