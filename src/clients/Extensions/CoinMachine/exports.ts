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

// This is the latest colony version + 1. It's for generating types and compatibility maps
const COIN_MACHINE_VERSION_NEXT = 4;

export { CoinMachineClientV1 } from './CoinMachineClientV1';
export { CoinMachineClientV2 } from './CoinMachineClientV2';
export { CoinMachineClientV3 } from './CoinMachineClientV3';

export type AnyCoinMachineClient =
  | CoinMachineClientV1
  | CoinMachineClientV2
  | CoinMachineClientV3;

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
    default:
      return assertExhaustiveSwitch(
        version,
        'Could not find CoinMachine version',
      );
  }
};
