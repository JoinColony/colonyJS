import {
  assertExhaustiveSwitch,
  createContractVersionArray,
} from '../../../utils';
import { AugmentedIColony } from '../../Core/augments/commonAugments';

import getWhitelistClientV1, {
  WhitelistClient as WhitelistClient1,
} from './WhitelistClientV1';

const WHITELIST_VERSION_NEXT = 2;

export type WhitelistClientV1 = WhitelistClient1;

export type AnyWhitelistClient = WhitelistClient1;

export const WHITELIST_VERSIONS = createContractVersionArray(
  WHITELIST_VERSION_NEXT,
);
export type WhitelistVersion = typeof WHITELIST_VERSIONS[number];

/** @internal */
export const getWhitelistClient = (
  colonyClient: AugmentedIColony,
  address: string,
  version: WhitelistVersion,
): AnyWhitelistClient => {
  switch (version) {
    case 1:
      return getWhitelistClientV1(colonyClient, address);
    default:
      return assertExhaustiveSwitch(
        version,
        'Could not find Whitelist version',
      );
  }
};
