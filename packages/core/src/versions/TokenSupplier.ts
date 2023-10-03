import type { ColonyVersion } from './IColony.js';

import { createContractVersionArray } from './utils.js';

const TOKEN_SUPPLIER_VERSION_NEXT = 7;

/** @internal */
export const TOKEN_SUPPLIER_VERSIONS = createContractVersionArray(
  TOKEN_SUPPLIER_VERSION_NEXT,
);

export type TokenSupplierVersion = (typeof TOKEN_SUPPLIER_VERSIONS)[number];

/** @internal */
export const tokenSupplierIncompatibilityMap: Record<
  TokenSupplierVersion,
  Array<ColonyVersion>
> = {
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
  6: [],
};

/** @internal */
export const TOKEN_SUPPLIER_VERSION_LATEST = (TOKEN_SUPPLIER_VERSION_NEXT -
  1) as TokenSupplierVersion;
