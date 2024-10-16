import type { ColonyVersion } from './IColony.js';

import { createContractVersionArray } from './utils.js';

const ONE_TX_PAYMENT_VERSION_NEXT = 10;

/** @internal */
export const ONE_TX_PAYMENT_VERSIONS = createContractVersionArray(
  ONE_TX_PAYMENT_VERSION_NEXT,
);

export type OneTxPaymentVersion = (typeof ONE_TX_PAYMENT_VERSIONS)[number];

/** @internal */
export const oneTxPaymentIncompatibilityMap: Record<
  OneTxPaymentVersion,
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
export const ONE_TX_PAYMENT_VERSION_LATEST = (ONE_TX_PAYMENT_VERSION_NEXT -
  1) as OneTxPaymentVersion;
