import type { ColonyVersion } from './IColony';

import { createContractVersionArray } from './utils';

const WHITELIST_VERSION_NEXT = 4;

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
};

/** @internal */
export const WHITELIST_VERSION_LATEST = (WHITELIST_VERSION_NEXT -
  1) as WhitelistVersion;
