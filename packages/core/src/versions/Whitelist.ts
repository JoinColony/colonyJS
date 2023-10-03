import type { ColonyVersion } from './IColony.js';

import { createContractVersionArray } from './utils.js';

const WHITELIST_VERSION_NEXT = 6;

/** @internal */
export const WHITELIST_VERSIONS = createContractVersionArray(
  WHITELIST_VERSION_NEXT,
);

export type WhitelistVersion = (typeof WHITELIST_VERSIONS)[number];

/** @internal */
export const whitelistIncompatibilityMap: Record<
  WhitelistVersion,
  Array<ColonyVersion>
> = {
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
};

/** @internal */
export const WHITELIST_VERSION_LATEST = (WHITELIST_VERSION_NEXT -
  1) as WhitelistVersion;
