import { ColonyVersion } from '../../../clients/Core/exports';
import {
  assertExhaustiveSwitch,
  createContractVersionArray,
} from '../../../utils';
import { AugmentedIColony } from '../../Core/augments/commonAugments';

import getWhitelistClientV1, { WhitelistClientV1 } from './WhitelistClientV1';
import getWhitelistClientV2, { WhitelistClientV2 } from './WhitelistClientV2';
import getWhitelistClientV3, { WhitelistClientV3 } from './WhitelistClientV3';
import getWhitelistClientV4, { WhitelistClientV4 } from './WhitelistClientV4';
import getWhitelistClientV5, { WhitelistClientV5 } from './WhitelistClientV5';

const WHITELIST_VERSION_NEXT = 6;

/** @internal */
export const WHITELIST_VERSION_LATEST = WHITELIST_VERSION_NEXT - 1;

export { WhitelistClientV1 } from './WhitelistClientV1';
export { WhitelistClientV2 } from './WhitelistClientV2';
export { WhitelistClientV3 } from './WhitelistClientV3';
export { WhitelistClientV4 } from './WhitelistClientV4';
export { WhitelistClientV5 } from './WhitelistClientV5';

export type AnyWhitelistClient =
  | WhitelistClientV1
  | WhitelistClientV2
  | WhitelistClientV3
  | WhitelistClientV4
  | WhitelistClientV5;

/** @internal */
export const WHITELIST_VERSIONS = createContractVersionArray(
  WHITELIST_VERSION_NEXT,
);
/** @internal */
export type WhitelistVersion = typeof WHITELIST_VERSIONS[number];

/** @internal */
export const whitelistIncompatibilityMap: Record<
  WhitelistVersion,
  Array<ColonyVersion>
> = {
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
};

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
    case 5:
      return getWhitelistClientV5(colonyClient, address);
    default:
      return assertExhaustiveSwitch(
        version,
        'Could not find Whitelist version',
      );
  }
};
