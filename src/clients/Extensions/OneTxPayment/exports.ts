import { ColonyVersion } from '../../../clients/Core/exports';
import {
  assertExhaustiveSwitch,
  createContractVersionArray,
} from '../../../utils';
import { AugmentedIColony } from '../../Core/augments/commonAugments';

import getOneTxPaymentClientV1, {
  OneTxPaymentClientV1,
} from './OneTxPaymentClientV1';
import getOneTxPaymentClientV2, {
  OneTxPaymentClientV2,
} from './OneTxPaymentClientV2';
import getOneTxPaymentClientV3, {
  OneTxPaymentClientV3,
} from './OneTxPaymentClientV3';

const ONE_TX_PAYMENT_VERSION_NEXT = 4;

export { OneTxPaymentClientV1 } from './OneTxPaymentClientV1';
export { OneTxPaymentClientV2 } from './OneTxPaymentClientV2';
export { OneTxPaymentClientV3 } from './OneTxPaymentClientV3';

export type AnyOneTxPaymentClient =
  | OneTxPaymentClientV1
  | OneTxPaymentClientV2
  | OneTxPaymentClientV3;

/** @internal */
export const ONE_TX_PAYMENT_VERSIONS = createContractVersionArray(
  ONE_TX_PAYMENT_VERSION_NEXT,
);

/** @internal */
export type OneTxPaymentVersion = typeof ONE_TX_PAYMENT_VERSIONS[number];

/** @internal */
export const oneTxPaymentIncompatibilityMap: Record<
  OneTxPaymentVersion,
  Array<ColonyVersion>
> = {
  1: [],
  2: [],
  3: [],
};

/** @internal */
export const getOneTxPaymentClient = (
  colonyClient: AugmentedIColony,
  address: string,
  version: OneTxPaymentVersion,
): AnyOneTxPaymentClient => {
  switch (version) {
    case 1:
      return getOneTxPaymentClientV1(colonyClient, address);
    case 2:
      return getOneTxPaymentClientV2(colonyClient, address);
    case 3:
      return getOneTxPaymentClientV3(colonyClient, address);
    default:
      return assertExhaustiveSwitch(
        version,
        'Could not find OneTxPayment version',
      );
  }
};
