import type { TokenSupplierVersion } from '@colony/core';

import { assertExhaustiveSwitch } from '@colony/core/utils';

import { AugmentedIColony } from '../../Core/augments/commonAugments.js';

import getTokenSupplierClientV1 from './TokenSupplierClientV1.js';
import getTokenSupplierClientV2 from './TokenSupplierClientV2.js';
import getTokenSupplierClientV3, {
  TokenSupplierClientV3,
} from './TokenSupplierClientV3.js';
import getTokenSupplierClientV4, {
  TokenSupplierClientV4,
} from './TokenSupplierClientV4.js';
import getTokenSupplierClientV5, {
  TokenSupplierClientV5,
} from './TokenSupplierClientV5.js';
import getTokenSupplierClientV6, {
  TokenSupplierClientV6,
} from './TokenSupplierClientV6.js';
import getTokenSupplierClientV7, {
  TokenSupplierClientV7,
} from './TokenSupplierClientV7.js';
import getTokenSupplierClientV8, {
  TokenSupplierClientV8,
} from './TokenSupplierClientV8.js';

export { TokenSupplierClientV3 } from './TokenSupplierClientV3.js';
export { TokenSupplierClientV4 } from './TokenSupplierClientV4.js';
export { TokenSupplierClientV5 } from './TokenSupplierClientV5.js';
export { TokenSupplierClientV6 } from './TokenSupplierClientV6.js';
export { TokenSupplierClientV7 } from './TokenSupplierClientV7.js';
export { TokenSupplierClientV8 } from './TokenSupplierClientV8.js';

export type AnyTokenSupplierClient =
  | TokenSupplierClientV3
  | TokenSupplierClientV4
  | TokenSupplierClientV5
  | TokenSupplierClientV6
  | TokenSupplierClientV7
  | TokenSupplierClientV8;

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
      ) as TokenSupplierClientV3;
    case 2:
      return getTokenSupplierClientV2(
        colonyClient,
        address,
      ) as TokenSupplierClientV3;
    case 3:
      return getTokenSupplierClientV3(colonyClient, address);
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
    default:
      return assertExhaustiveSwitch(
        version,
        'Could not find TokenSupplier version',
      );
  }
};
