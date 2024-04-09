import type { VotingReputationVersion } from '@colony/core';

import { assertExhaustiveSwitch } from '@colony/core/utils';

import { AugmentedIColony } from '../../Core/augments/commonAugments.js';

import getVotingReputationClientV1 from './VotingReputationClientV1.js';
import getVotingReputationClientV2 from './VotingReputationClientV2.js';
import getVotingReputationClientV3 from './VotingReputationClientV3.js';
import getVotingReputationClientV4 from './VotingReputationClientV4.js';
import getVotingReputationClientV5 from './VotingReputationClientV5.js';
import getVotingReputationClientV6, {
  VotingReputationClientV6,
} from './VotingReputationClientV6.js';
import getVotingReputationClientV7, {
  VotingReputationClientV7,
} from './VotingReputationClientV7.js';
import getVotingReputationClientV8, {
  VotingReputationClientV8,
} from './VotingReputationClientV8.js';
import getVotingReputationClientV9, {
  VotingReputationClientV9,
} from './VotingReputationClientV9.js';
import getVotingReputationClientV10, {
  VotingReputationClientV10,
} from './VotingReputationClientV10.js';
import getVotingReputationClientV11, {
  VotingReputationClientV11,
} from './VotingReputationClientV11.js';

export { VotingReputationClientV6 } from './VotingReputationClientV6.js';
export { VotingReputationClientV7 } from './VotingReputationClientV7.js';
export { VotingReputationClientV8 } from './VotingReputationClientV8.js';
export { VotingReputationClientV9 } from './VotingReputationClientV9.js';
export { VotingReputationClientV10 } from './VotingReputationClientV10.js';
export { VotingReputationClientV11 } from './VotingReputationClientV11.js';

export type AnyVotingReputationClient =
  | VotingReputationClientV6
  | VotingReputationClientV7
  | VotingReputationClientV8
  | VotingReputationClientV9
  | VotingReputationClientV10
  | VotingReputationClientV11;

/** @internal */
export function getVotingReputationClient(
  colonyClient: AugmentedIColony,
  address: string,
  version: VotingReputationVersion,
): AnyVotingReputationClient {
  switch (version) {
    case 1:
      return getVotingReputationClientV1(
        colonyClient,
        address,
      ) as VotingReputationClientV6;
    case 2:
      return getVotingReputationClientV2(
        colonyClient,
        address,
      ) as VotingReputationClientV6;
    case 3:
      return getVotingReputationClientV3(
        colonyClient,
        address,
      ) as VotingReputationClientV6;
    case 4:
      return getVotingReputationClientV4(
        colonyClient,
        address,
      ) as VotingReputationClientV6;
    case 5:
      return getVotingReputationClientV5(
        colonyClient,
        address,
      ) as VotingReputationClientV6;
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
    case 11:
      return getVotingReputationClientV11(colonyClient, address);
    default:
      return assertExhaustiveSwitch(
        version,
        'Could not find VotingReputation version',
      );
  }
}
