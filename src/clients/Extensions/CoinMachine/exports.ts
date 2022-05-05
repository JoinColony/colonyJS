import { ColonyVersion } from '../../../clients/Core/exports';
import {
  assertExhaustiveSwitch,
  createContractVersionArray,
} from '../../../utils';
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

// This is the latest CoinMachine version + 1. It's for generating types and compatibility maps
const COIN_MACHINE_VERSION_NEXT = 6;

/** @internal */
export const COIN_MACHINE_VERSION_LATEST = COIN_MACHINE_VERSION_NEXT - 1;

export { CoinMachineClientV1 } from './CoinMachineClientV1';
export { CoinMachineClientV2 } from './CoinMachineClientV2';
export { CoinMachineClientV3 } from './CoinMachineClientV3';
export { CoinMachineClientV4 } from './CoinMachineClientV4';
export { CoinMachineClientV5 } from './CoinMachineClientV5';

export type AnyCoinMachineClient =
  | CoinMachineClientV1
  | CoinMachineClientV2
  | CoinMachineClientV3
  | CoinMachineClientV4
  | CoinMachineClientV5;

/** @internal */
const COIN_MACHINE_VERSIONS = createContractVersionArray(
  COIN_MACHINE_VERSION_NEXT,
);
/** @internal */
export type CoinMachineVersion = typeof COIN_MACHINE_VERSIONS[number];

/** @internal */
export const coinMachineIncompatibilityMap: Record<
  CoinMachineVersion,
  Array<ColonyVersion>
> = {
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
};

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
    default:
      return assertExhaustiveSwitch(
        version,
        'Could not find CoinMachine version',
      );
  }
};
