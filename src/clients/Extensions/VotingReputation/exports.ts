import { ColonyVersion } from '../../../clients/Core/exports';
import {
  assertExhaustiveSwitch,
  createContractVersionArray,
} from '../../../utils';
import { AugmentedIColony } from '../../Core/augments/commonAugments';

import getVotingReputationClientV1, {
  VotingReputationClientV1,
} from './VotingReputationClientV1';
import getVotingReputationClientV2, {
  VotingReputationClientV2,
} from './VotingReputationClientV2';
import getVotingReputationClientV3, {
  VotingReputationClientV3,
} from './VotingReputationClientV3';

const VOTING_REPUTATION_VERSION_NEXT = 4;

/** @internal */
export const VOTING_REPUTATION_VERSION_LATEST =
  VOTING_REPUTATION_VERSION_NEXT - 1;

export { VotingReputationClientV1 } from './VotingReputationClientV1';
export { VotingReputationClientV2 } from './VotingReputationClientV2';
export { VotingReputationClientV3 } from './VotingReputationClientV3';

export type AnyVotingReputationClient =
  | VotingReputationClientV1
  | VotingReputationClientV2
  | VotingReputationClientV3;

/** @internal */
export const VOTING_REPUTATION_VERSIONS = createContractVersionArray(
  VOTING_REPUTATION_VERSION_NEXT,
);
/** @internal */
export type VotingReputationVersion = typeof VOTING_REPUTATION_VERSIONS[number];

/** @internal */
export const votingReputationIncompatibilityMap: Record<
  VotingReputationVersion,
  Array<ColonyVersion>
> = {
  1: [],
  2: [1, 2, 3, 4, 5, 6],
  3: [1, 2, 3, 4, 5, 6],
};

/** @internal */
export function getVotingReputationClient(
  colonyClient: AugmentedIColony,
  address: string,
  version: VotingReputationVersion,
): AnyVotingReputationClient {
  switch (version) {
    case 1:
      return getVotingReputationClientV1(colonyClient, address);
    case 2:
      return getVotingReputationClientV2(colonyClient, address);
    case 3:
      return getVotingReputationClientV3(colonyClient, address);
    default:
      return assertExhaustiveSwitch(
        version,
        'Could not find VotingReputation version',
      );
  }
}
