import type { TokenSupplierVersion } from '@colony/core';

import { assertExhaustiveSwitch } from '@colony/core/utils';

import { type AugmentedIColony } from '../../Core/augments/commonAugments.js';

import getTokenSupplierClientV1 from './TokenSupplierClientV1.js';
import getTokenSupplierClientV2 from './TokenSupplierClientV2.js';
import getTokenSupplierClientV3 from './TokenSupplierClientV3.js';
import getTokenSupplierClientV4, {
  type TokenSupplierClientV4,
} from './TokenSupplierClientV4.js';
import getTokenSupplierClientV5, {
  type TokenSupplierClientV5,
} from './TokenSupplierClientV5.js';
import getTokenSupplierClientV6, {
  type TokenSupplierClientV6,
} from './TokenSupplierClientV6.js';
import getTokenSupplierClientV7, {
  type TokenSupplierClientV7,
} from './TokenSupplierClientV7.js';
import getTokenSupplierClientV8, {
  type TokenSupplierClientV8,
} from './TokenSupplierClientV8.js';
import getTokenSupplierClientV9, {
  type TokenSupplierClientV9,
} from './TokenSupplierClientV9.js';

export type { TokenSupplierClientV4 } from './TokenSupplierClientV4.js';
export type { TokenSupplierClientV5 } from './TokenSupplierClientV5.js';
export type { TokenSupplierClientV6 } from './TokenSupplierClientV6.js';
export type { TokenSupplierClientV7 } from './TokenSupplierClientV7.js';
export type { TokenSupplierClientV8 } from './TokenSupplierClientV8.js';
export type { TokenSupplierClientV9 } from './TokenSupplierClientV9.js';

export type AnyTokenSupplierClient =
  | TokenSupplierClientV4
  | TokenSupplierClientV5
  | TokenSupplierClientV6
  | TokenSupplierClientV7
  | TokenSupplierClientV8
  | TokenSupplierClientV9;

/** @internal */
export const getTokenSupplierClient = (
  colonyClient: AugmentedIColony,
  address: string,
  version: TokenSupplierVersion,
): AnyTokenSupplierClient => {
  switch (version) {
    case 1:
      return getTokenSupplierClientV1(
        colonyClient,
        address,
      ) as TokenSupplierClientV4;
    case 2:
      return getTokenSupplierClientV2(
        colonyClient,
        address,
      ) as TokenSupplierClientV4;
    case 3:
      return getTokenSupplierClientV3(
        colonyClient,
        address,
      ) as TokenSupplierClientV4;
    case 4:
      return getTokenSupplierClientV4(colonyClient, address);
    case 5:
      return getTokenSupplierClientV5(colonyClient, address);
    case 6:
      return getTokenSupplierClientV6(colonyClient, address);
    case 7:
      return getTokenSupplierClientV7(colonyClient, address);
    case 8:
      return getTokenSupplierClientV8(colonyClient, address);
    case 9:
      return getTokenSupplierClientV9(colonyClient, address);
    default:
      return assertExhaustiveSwitch(
        version,
        'Could not find TokenSupplier version',
      );
  }
};
