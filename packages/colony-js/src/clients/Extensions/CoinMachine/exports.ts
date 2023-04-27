import type { CoinMachineVersion } from '@colony/core';

import { assertExhaustiveSwitch } from '@colony/core/utils';

import { AugmentedIColony } from '../../Core/augments/commonAugments';

import getCoinMachineClientV1, {
  CoinMachineClientV1,
} from './CoinMachineClientV1';
import getCoinMachineClientV2, {
  CoinMachineClientV2,
} from './CoinMachineClientV2';
import getCoinMachineClientV3, {
  CoinMachineClientV3,
} from './CoinMachineClientV3';
import getCoinMachineClientV4, {
  CoinMachineClientV4,
} from './CoinMachineClientV4';
import getCoinMachineClientV5, {
  CoinMachineClientV5,
} from './CoinMachineClientV5';
import getCoinMachineClientV6, {
  CoinMachineClientV6,
} from './CoinMachineClientV6';
import getCoinMachineClientV7, {
  CoinMachineClientV7,
} from './CoinMachineClientV7';

export { CoinMachineClientV1 } from './CoinMachineClientV1';
export { CoinMachineClientV2 } from './CoinMachineClientV2';
export { CoinMachineClientV3 } from './CoinMachineClientV3';
export { CoinMachineClientV4 } from './CoinMachineClientV4';
export { CoinMachineClientV5 } from './CoinMachineClientV5';
export { CoinMachineClientV6 } from './CoinMachineClientV6';
export { CoinMachineClientV7 } from './CoinMachineClientV7';

export type AnyCoinMachineClient =
  | CoinMachineClientV1
  | CoinMachineClientV2
  | CoinMachineClientV3
  | CoinMachineClientV4
  | CoinMachineClientV5
  | CoinMachineClientV6
  | CoinMachineClientV7;

/** @internal */
export const getCoinMachineClient = (
  colonyClient: AugmentedIColony,
  address: string,
  version: CoinMachineVersion,
): AnyCoinMachineClient => {
  switch (version) {
    case 1:
      return getCoinMachineClientV1(colonyClient, address);
    case 2:
      return getCoinMachineClientV2(colonyClient, address);
    case 3:
      return getCoinMachineClientV3(colonyClient, address);
    case 4:
      return getCoinMachineClientV4(colonyClient, address);
    case 5:
      return getCoinMachineClientV5(colonyClient, address);
    case 6:
      return getCoinMachineClientV6(colonyClient, address);
    case 7:
      return getCoinMachineClientV7(colonyClient, address);
    default:
      return assertExhaustiveSwitch(
        version,
        'Could not find CoinMachine version',
      );
  }
};
