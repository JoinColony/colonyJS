import type { WhitelistVersion } from '@colony/core';

import { assertExhaustiveSwitch } from '@colony/core/utils';

import { AugmentedIColony } from '../../Core/augments/commonAugments';

import getWhitelistClientV1, { WhitelistClientV1 } from './WhitelistClientV1';
import getWhitelistClientV2, { WhitelistClientV2 } from './WhitelistClientV2';
import getWhitelistClientV3, { WhitelistClientV3 } from './WhitelistClientV3';

export { WhitelistClientV1 } from './WhitelistClientV1';
export { WhitelistClientV2 } from './WhitelistClientV2';
export { WhitelistClientV3 } from './WhitelistClientV3';

export type AnyWhitelistClient =
  | WhitelistClientV1
  | WhitelistClientV2
  | WhitelistClientV3;

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
    default:
      return assertExhaustiveSwitch(
        version,
        'Could not find Whitelist version',
      );
  }
};
