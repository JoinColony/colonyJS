import {
  assertExhaustiveSwitch,
  createContractVersionArray,
} from '../../../utils';
import { AugmentedIColony } from '../../Core/augments/commonAugments';

import getVotingReputationClientV1, {
  VotingReputationClient as VotingReputationClient1,
} from './VotingReputationClientV1';
import getVotingReputationClientV2, {
  VotingReputationClient as VotingReputationClient2,
} from './VotingReputationClientV2';
import getVotingReputationClientV3, {
  VotingReputationClient as VotingReputationClient3,
} from './VotingReputationClientV3';

const VOTING_REPUTATION_VERSION_NEXT = 4;

export type VotingReputationClientV1 = VotingReputationClient1;
export type VotingReputationClientV2 = VotingReputationClient2;
export type VotingReputationClientV3 = VotingReputationClient3;

export type AnyVotingReputationClient =
  | VotingReputationClient1
  | VotingReputationClient2
  | VotingReputationClient3;

export const VOTING_REPUTATION_VERSIONS = createContractVersionArray(
  VOTING_REPUTATION_VERSION_NEXT,
);
export type VotingReputationVersion = typeof VOTING_REPUTATION_VERSIONS[number];

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
