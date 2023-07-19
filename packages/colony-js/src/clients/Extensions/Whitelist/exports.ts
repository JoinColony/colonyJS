import type { WhitelistVersion } from '@colony/core';

import { assertExhaustiveSwitch } from '@colony/core/utils';

import { AugmentedIColony } from '../../Core/augments/commonAugments.js';

import getWhitelistClientV1, {
  WhitelistClientV1,
} from './WhitelistClientV1.js';
import getWhitelistClientV2, {
  WhitelistClientV2,
} from './WhitelistClientV2.js';
import getWhitelistClientV3, {
  WhitelistClientV3,
} from './WhitelistClientV3.js';
import getWhitelistClientV4, {
  WhitelistClientV4,
} from './WhitelistClientV4.js';

export { WhitelistClientV1 } from './WhitelistClientV1.js';
export { WhitelistClientV2 } from './WhitelistClientV2.js';
export { WhitelistClientV3 } from './WhitelistClientV3.js';
export { WhitelistClientV4 } from './WhitelistClientV4.js';

export type AnyWhitelistClient =
  | WhitelistClientV1
  | WhitelistClientV2
  | WhitelistClientV3
  | WhitelistClientV4;

/** @internal */
export const getWhitelistClient = (
  colonyClient: AugmentedIColony,
  address: string,
  version: WhitelistVersion,
): AnyWhitelistClient => {
  switch (version) {
    case 1:
      return getWhitelistClientV1(colonyClient, address);
    case 2:
      return getWhitelistClientV2(colonyClient, address);
    case 3:
      return getWhitelistClientV3(colonyClient, address);
    case 4:
      return getWhitelistClientV4(colonyClient, address);
    default:
      return assertExhaustiveSwitch(
        version,
        'Could not find Whitelist version',
      );
  }
};
