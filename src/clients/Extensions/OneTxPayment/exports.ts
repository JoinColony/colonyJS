import { assertExhaustiveSwitch } from '../../../utils';
import { AugmentedIColony } from '../../Core/augments/commonAugments';

import getOneTxPaymentClientV1, {
  OneTxPaymentClient as OneTxPaymentClient1,
} from './OneTxPaymentClientV1';
import getOneTxPaymentClientV2, {
  OneTxPaymentClient as OneTxPaymentClient2,
} from './OneTxPaymentClientV2';

export type OneTxPaymentVersion = 1 | 2;

export type OneTxPaymentClientV1 = OneTxPaymentClient1;
export type OneTxPaymentClientV2 = OneTxPaymentClient2;

export type AnyOneTxPaymentClient = OneTxPaymentClient1 | OneTxPaymentClient2;

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
    default:
      return assertExhaustiveSwitch(version);
  }
};
