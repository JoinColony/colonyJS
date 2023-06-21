import type { ColonyVersion } from './IColony';

import { createContractVersionArray } from './utils.js';

const ONE_TX_PAYMENT_VERSION_NEXT = 5;

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
};

/** @internal */
export const ONE_TX_PAYMENT_VERSION_LATEST = (ONE_TX_PAYMENT_VERSION_NEXT -
  1) as OneTxPaymentVersion;
