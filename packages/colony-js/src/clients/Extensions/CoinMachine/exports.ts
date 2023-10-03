import type { CoinMachineVersion } from '@colony/core';

import { assertExhaustiveSwitch } from '@colony/core/utils';

import { AugmentedIColony } from '../../Core/augments/commonAugments.js';

import getCoinMachineClientV1 from './CoinMachineClientV1.js';
import getCoinMachineClientV2 from './CoinMachineClientV2.js';
import getCoinMachineClientV3 from './CoinMachineClientV3.js';
import getCoinMachineClientV4 from './CoinMachineClientV4.js';
import getCoinMachineClientV5, {
  CoinMachineClientV5,
} from './CoinMachineClientV5.js';
import getCoinMachineClientV6, {
  CoinMachineClientV6,
} from './CoinMachineClientV6.js';
import getCoinMachineClientV7, {
  CoinMachineClientV7,
} from './CoinMachineClientV7.js';
import getCoinMachineClientV8, {
  CoinMachineClientV8,
} from './CoinMachineClientV8.js';
import getCoinMachineClientV9, {
  CoinMachineClientV9,
} from './CoinMachineClientV9.js';

export { CoinMachineClientV5 } from './CoinMachineClientV5.js';
export { CoinMachineClientV6 } from './CoinMachineClientV6.js';
export { CoinMachineClientV7 } from './CoinMachineClientV7.js';
export { CoinMachineClientV8 } from './CoinMachineClientV8.js';
export { CoinMachineClientV9 } from './CoinMachineClientV9.js';

export type AnyCoinMachineClient =
  | CoinMachineClientV5
  | CoinMachineClientV6
  | CoinMachineClientV7
  | CoinMachineClientV8
  | CoinMachineClientV9;

/** @internal */
export const getCoinMachineClient = (
  colonyClient: AugmentedIColony,
  address: string,
  version: CoinMachineVersion,
): AnyCoinMachineClient => {
  switch (version) {
    case 1:
      return getCoinMachineClientV1(
        colonyClient,
        address,
      ) as CoinMachineClientV5;
    case 2:
      return getCoinMachineClientV2(
        colonyClient,
        address,
      ) as CoinMachineClientV5;
    case 3:
      return getCoinMachineClientV3(
        colonyClient,
        address,
      ) as CoinMachineClientV5;
    case 4:
      return getCoinMachineClientV4(
        colonyClient,
        address,
      ) as CoinMachineClientV5;
    case 5:
      return getCoinMachineClientV5(colonyClient, address);
    case 6:
      return getCoinMachineClientV6(colonyClient, address);
    case 7:
      return getCoinMachineClientV7(colonyClient, address);
    case 8:
      return getCoinMachineClientV8(colonyClient, address);
    case 9:
      return getCoinMachineClientV9(colonyClient, address);
    default:
      return assertExhaustiveSwitch(
        version,
        'Could not find CoinMachine version',
      );
  }
};
