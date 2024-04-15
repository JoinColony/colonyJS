import type { ColonyVersion } from './IColony.js';

import { createContractVersionArray } from './utils.js';

const MULTISIG_PERMISSIONS_VERSION_NEXT = 2;

/** @internal */
export const MULTISIG_PERMISSIONS_VERSIONS = createContractVersionArray(
  MULTISIG_PERMISSIONS_VERSION_NEXT,
);

export type MultisigPermissionsVersion =
  (typeof MULTISIG_PERMISSIONS_VERSIONS)[number];

/** @internal */
export const multisigPermissionsIncompatibilityMap: Record<
  MultisigPermissionsVersion,
  Array<ColonyVersion>
> = {
  1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
};

/** @internal */
export const MULTISIG_PERMISSIONS_VERSION_LATEST =
  (MULTISIG_PERMISSIONS_VERSION_NEXT - 1) as MultisigPermissionsVersion;
