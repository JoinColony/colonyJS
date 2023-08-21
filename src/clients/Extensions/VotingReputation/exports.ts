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
import getVotingReputationClientV4, {
  VotingReputationClientV4,
} from './VotingReputationClientV4';
import getVotingReputationClientV5, {
  VotingReputationClientV5,
} from './VotingReputationClientV5';
import getVotingReputationClientV6, {
  VotingReputationClientV6,
} from './VotingReputationClientV6';
import getVotingReputationClientV7, {
  VotingReputationClientV7,
} from './VotingReputationClientV7';
import getVotingReputationClientV8, {
  VotingReputationClientV8,
} from './VotingReputationClientV8';
import getVotingReputationClientV9, {
  VotingReputationClientV9,
} from './VotingReputationClientV9';
import getVotingReputationClientV10, {
  VotingReputationClientV10,
} from './VotingReputationClientV10';

const VOTING_REPUTATION_VERSION_NEXT = 11;

/** @internal */
export const VOTING_REPUTATION_VERSION_LATEST =
  VOTING_REPUTATION_VERSION_NEXT - 1;

export { VotingReputationClientV1 } from './VotingReputationClientV1';
export { VotingReputationClientV2 } from './VotingReputationClientV2';
export { VotingReputationClientV3 } from './VotingReputationClientV3';
export { VotingReputationClientV4 } from './VotingReputationClientV4';
export { VotingReputationClientV5 } from './VotingReputationClientV5';
export { VotingReputationClientV6 } from './VotingReputationClientV6';
export { VotingReputationClientV7 } from './VotingReputationClientV7';
export { VotingReputationClientV8 } from './VotingReputationClientV8';
export { VotingReputationClientV9 } from './VotingReputationClientV9';
export { VotingReputationClientV10 } from './VotingReputationClientV10';

export type AnyVotingReputationClient =
  | VotingReputationClientV1
  | VotingReputationClientV2
  | VotingReputationClientV3
  | VotingReputationClientV4
  | VotingReputationClientV5
  | VotingReputationClientV6
  | VotingReputationClientV7
  | VotingReputationClientV8
  | VotingReputationClientV9
  | VotingReputationClientV10;

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
  4: [1, 2, 3, 4, 5, 6],
  5: [1, 2, 3, 4, 5, 6],
  6: [1, 2, 3, 4, 5, 6],
  7: [1, 2, 3, 4, 5, 6],
  8: [1, 2, 3, 4, 5, 6],
  9: [1, 2, 3, 4, 5, 6],
  10: [1, 2, 3, 4, 5, 6],
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
    case 4:
      return getVotingReputationClientV4(colonyClient, address);
    case 5:
      return getVotingReputationClientV5(colonyClient, address);
    case 6:
      return getVotingReputationClientV6(colonyClient, address);
    case 7:
      return getVotingReputationClientV7(colonyClient, address);
    case 8:
      return getVotingReputationClientV8(colonyClient, address);
    case 9:
      return getVotingReputationClientV9(colonyClient, address);
    case 10:
      return getVotingReputationClientV10(colonyClient, address);
    default:
      return assertExhaustiveSwitch(
        version,
        'Could not find VotingReputation version',
      );
  }
}
