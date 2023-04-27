import type { OneTxPaymentVersion } from '@colony/core';

import { assertExhaustiveSwitch } from '@colony/core/utils';

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
import getOneTxPaymentClientV4, {
  OneTxPaymentClientV4,
} from './OneTxPaymentClientV4';

export { OneTxPaymentClientV1 } from './OneTxPaymentClientV1';
export { OneTxPaymentClientV2 } from './OneTxPaymentClientV2';
export { OneTxPaymentClientV3 } from './OneTxPaymentClientV3';
export { OneTxPaymentClientV4 } from './OneTxPaymentClientV4';

export type AnyOneTxPaymentClient =
  | OneTxPaymentClientV1
  | OneTxPaymentClientV2
  | OneTxPaymentClientV3
  | OneTxPaymentClientV4;

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
    case 4:
      return getOneTxPaymentClientV4(colonyClient, address);
    default:
      return assertExhaustiveSwitch(
        version,
        'Could not find OneTxPayment version',
      );
  }
};
