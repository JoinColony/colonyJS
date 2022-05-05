import { ColonyVersion } from '../../../clients/Core/exports';
import {
  assertExhaustiveSwitch,
  createContractVersionArray,
} from '../../../utils';
import { AugmentedIColony } from '../../Core/augments/commonAugments';

import getWhitelistClientV1, { WhitelistClientV1 } from './WhitelistClientV1';
import getWhitelistClientV2, { WhitelistClientV2 } from './WhitelistClientV2';

const WHITELIST_VERSION_NEXT = 3;

/** @internal */
export const WHITELIST_VERSION_LATEST = WHITELIST_VERSION_NEXT - 1;

export { WhitelistClientV1 } from './WhitelistClientV1';
export { WhitelistClientV2 } from './WhitelistClientV2';

export type AnyWhitelistClient = WhitelistClientV1 | WhitelistClientV2;

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
    default:
      return assertExhaustiveSwitch(
        version,
        'Could not find Whitelist version',
      );
  }
};
