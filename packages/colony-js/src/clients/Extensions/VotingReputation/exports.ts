import type { VotingReputationVersion } from '@colony/core';

import { assertExhaustiveSwitch } from '@colony/core/utils';

import { type AugmentedIColony } from '../../Core/augments/commonAugments.js';

import getVotingReputationClientV1 from './VotingReputationClientV1.js';
import getVotingReputationClientV2 from './VotingReputationClientV2.js';
import getVotingReputationClientV3 from './VotingReputationClientV3.js';
import getVotingReputationClientV4 from './VotingReputationClientV4.js';
import getVotingReputationClientV5 from './VotingReputationClientV5.js';
import getVotingReputationClientV6 from './VotingReputationClientV6.js';
import getVotingReputationClientV7 from './VotingReputationClientV7.js';
import getVotingReputationClientV8, {
  type VotingReputationClientV8,
} from './VotingReputationClientV8.js';
import getVotingReputationClientV9, {
  type VotingReputationClientV9,
} from './VotingReputationClientV9.js';
import getVotingReputationClientV10, {
  type VotingReputationClientV10,
} from './VotingReputationClientV10.js';
import getVotingReputationClientV11, {
  type VotingReputationClientV11,
} from './VotingReputationClientV11.js';
import getVotingReputationClientV12, {
  type VotingReputationClientV12,
} from './VotingReputationClientV12.js';
import getVotingReputationClientV13, {
  type VotingReputationClientV13,
} from './VotingReputationClientV13.js';

export type { VotingReputationClientV8 } from './VotingReputationClientV8.js';
export type { VotingReputationClientV9 } from './VotingReputationClientV9.js';
export type { VotingReputationClientV10 } from './VotingReputationClientV10.js';
export type { VotingReputationClientV11 } from './VotingReputationClientV11.js';
export type { VotingReputationClientV12 } from './VotingReputationClientV12.js';
export type { VotingReputationClientV13 } from './VotingReputationClientV13.js';

export type AnyVotingReputationClient =
  | VotingReputationClientV8
  | VotingReputationClientV9
  | VotingReputationClientV10
  | VotingReputationClientV11
  | VotingReputationClientV12
  | VotingReputationClientV13;

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
      ) as VotingReputationClientV8;
    case 2:
      return getVotingReputationClientV2(
        colonyClient,
        address,
      ) as VotingReputationClientV8;
    case 3:
      return getVotingReputationClientV3(
        colonyClient,
        address,
      ) as VotingReputationClientV8;
    case 4:
      return getVotingReputationClientV4(
        colonyClient,
        address,
      ) as VotingReputationClientV8;
    case 5:
      return getVotingReputationClientV5(
        colonyClient,
        address,
      ) as VotingReputationClientV8;
    case 6:
      return getVotingReputationClientV6(
        colonyClient,
        address,
      ) as VotingReputationClientV8;
    case 7:
      return getVotingReputationClientV7(
        colonyClient,
        address,
      ) as VotingReputationClientV8;
    case 8:
      return getVotingReputationClientV8(colonyClient, address);
    case 9:
      return getVotingReputationClientV9(colonyClient, address);
    case 10:
      return getVotingReputationClientV10(colonyClient, address);
    case 11:
      return getVotingReputationClientV11(colonyClient, address);
    case 12:
      return getVotingReputationClientV12(colonyClient, address);
    case 13:
      return getVotingReputationClientV13(colonyClient, address);
    default:
      if (colonyClient.networkClient.disableVersionCheck) {
        return getVotingReputationClientV13(colonyClient, address);
      }
      return assertExhaustiveSwitch(
        version,
        `Could not find VotingReputation version ${version}`,
      );
  }
}
