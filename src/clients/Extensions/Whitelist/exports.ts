import { assertExhaustiveSwitch } from '../../../utils';
import { AugmentedIColony } from '../../Core/augments/commonAugments';

import getWhitelistClientV1, {
  WhitelistClient as WhitelistClient1,
} from './WhitelistClientV1';

export type WhitelistVersion = 1;

export type WhitelistClientV1 = WhitelistClient1;

export type AnyWhitelistClient = WhitelistClient1;

export const getWhitelistClient = (
  colonyClient: AugmentedIColony,
  address: string,
  version: WhitelistVersion,
): AnyWhitelistClient => {
  switch (version) {
    case 1:
      return getWhitelistClientV1(colonyClient, address);
    default:
      return assertExhaustiveSwitch(version);
  }
};
