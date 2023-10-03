import type { ColonyVersion } from './IColony.js';

import { createContractVersionArray } from './utils.js';

// This is the latest CoinMachine version + 1. It's for generating types and compatibility maps
const COIN_MACHINE_VERSION_NEXT = 10;

/** @internal */
const COIN_MACHINE_VERSIONS = createContractVersionArray(
  COIN_MACHINE_VERSION_NEXT,
);

export type CoinMachineVersion = (typeof COIN_MACHINE_VERSIONS)[number];

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
  6: [],
  7: [],
  8: [],
  9: [],
};

/** @internal */
export const COIN_MACHINE_VERSION_LATEST = (COIN_MACHINE_VERSION_NEXT -
  1) as CoinMachineVersion;
