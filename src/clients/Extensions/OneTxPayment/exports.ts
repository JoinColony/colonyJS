import { ColonyVersion } from '../../../clients/Core/exports';
import {
  assertExhaustiveSwitch,
  createContractVersionArray,
} from '../../../utils';
import { AugmentedIColony } from '../../Core/augments/commonAugments';

import getOneTxPaymentClientV1, {
  OneTxPaymentClient as OneTxPaymentClient1,
} from './OneTxPaymentClientV1';
import getOneTxPaymentClientV2, {
  OneTxPaymentClient as OneTxPaymentClient2,
} from './OneTxPaymentClientV2';
import getOneTxPaymentClientV3, {
  OneTxPaymentClient as OneTxPaymentClient3,
} from './OneTxPaymentClientV3';

const ONE_TX_PAYMENT_VERSION_NEXT = 4;

export type OneTxPaymentClientV1 = OneTxPaymentClient1;
export type OneTxPaymentClientV2 = OneTxPaymentClient2;
export type OneTxPaymentClientV3 = OneTxPaymentClient3;

export type AnyOneTxPaymentClient =
  | OneTxPaymentClient1
  | OneTxPaymentClient2
  | OneTxPaymentClient3;

export const ONE_TX_PAYMENT_VERSIONS = createContractVersionArray(
  ONE_TX_PAYMENT_VERSION_NEXT,
);
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
