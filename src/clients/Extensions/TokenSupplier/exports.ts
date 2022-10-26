import { ColonyVersion } from '../../../clients/Core/exports';
import {
  assertExhaustiveSwitch,
  createContractVersionArray,
} from '../../../utils';
import { AugmentedIColony } from '../../Core/augments/commonAugments';

import getTokenSupplierClientV1, {
  TokenSupplierClientV1,
} from './TokenSupplierClientV1';
import getTokenSupplierClientV2, {
  TokenSupplierClientV2,
} from './TokenSupplierClientV2';
import getTokenSupplierClientV3, {
  TokenSupplierClientV3,
} from './TokenSupplierClientV3';

const TOKEN_SUPPLIER_VERSION_NEXT = 4;

/** @internal */
export const TOKEN_SUPPLIER_VERSION_LATEST = TOKEN_SUPPLIER_VERSION_NEXT - 1;

export { TokenSupplierClientV1 } from './TokenSupplierClientV1';
export { TokenSupplierClientV2 } from './TokenSupplierClientV2';
export { TokenSupplierClientV3 } from './TokenSupplierClientV3';

export type AnyTokenSupplierClient =
  | TokenSupplierClientV1
  | TokenSupplierClientV2
  | TokenSupplierClientV3;

/** @internal */
export const TOKEN_SUPPLIER_VERSIONS = createContractVersionArray(
  TOKEN_SUPPLIER_VERSION_NEXT,
);
/** @internal */
export type TokenSupplierVersion = typeof TOKEN_SUPPLIER_VERSIONS[number];

/** @internal */
export const tokenSupplierIncompatibilityMap: Record<
  TokenSupplierVersion,
  Array<ColonyVersion>
> = {
  1: [],
  2: [],
  3: [],
};

/** @internal */
export const getTokenSupplierClient = (
  colonyClient: AugmentedIColony,
  address: string,
  version: TokenSupplierVersion,
): AnyTokenSupplierClient => {
  switch (version) {
    case 1:
      return getTokenSupplierClientV1(colonyClient, address);
    case 2:
      return getTokenSupplierClientV2(colonyClient, address);
    case 3:
      return getTokenSupplierClientV3(colonyClient, address);
    default:
      return assertExhaustiveSwitch(
        version,
        'Could not find TokenSupplier version',
      );
  }
};
