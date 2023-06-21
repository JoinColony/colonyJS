import type { VotingReputationVersion } from '@colony/core';

import { assertExhaustiveSwitch } from '@colony/core/utils';

import { AugmentedIColony } from '../../Core/augments/commonAugments.js';

import getVotingReputationClientV1, {
  VotingReputationClientV1,
} from './VotingReputationClientV1.js';
import getVotingReputationClientV2, {
  VotingReputationClientV2,
} from './VotingReputationClientV2.js';
import getVotingReputationClientV3, {
  VotingReputationClientV3,
} from './VotingReputationClientV3.js';
import getVotingReputationClientV4, {
  VotingReputationClientV4,
} from './VotingReputationClientV4.js';
import getVotingReputationClientV5, {
  VotingReputationClientV5,
} from './VotingReputationClientV5.js';
import getVotingReputationClientV6, {
  VotingReputationClientV6,
} from './VotingReputationClientV6.js';
import getVotingReputationClientV7, {
  VotingReputationClientV7,
} from './VotingReputationClientV7.js';
import getVotingReputationClientV8, {
  VotingReputationClientV8,
} from './VotingReputationClientV8.js';

export { VotingReputationClientV1 } from './VotingReputationClientV1.js';
export { VotingReputationClientV2 } from './VotingReputationClientV2.js';
export { VotingReputationClientV3 } from './VotingReputationClientV3.js';
export { VotingReputationClientV4 } from './VotingReputationClientV4.js';
export { VotingReputationClientV5 } from './VotingReputationClientV5.js';
export { VotingReputationClientV6 } from './VotingReputationClientV6.js';
export { VotingReputationClientV7 } from './VotingReputationClientV7.js';
export { VotingReputationClientV8 } from './VotingReputationClientV8.js';

export type AnyVotingReputationClient =
  | VotingReputationClientV1
  | VotingReputationClientV2
  | VotingReputationClientV3
  | VotingReputationClientV4
  | VotingReputationClientV5
  | VotingReputationClientV6
  | VotingReputationClientV7
  | VotingReputationClientV8;

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
    default:
      return assertExhaustiveSwitch(
        version,
        'Could not find VotingReputation version',
      );
  }
}
