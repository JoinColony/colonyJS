import type { OneTxPaymentVersion } from '@colony/core';

import { assertExhaustiveSwitch } from '@colony/core/utils';

import { AugmentedIColony } from '../../Core/augments/commonAugments.js';

import getOneTxPaymentClientV1, {
  OneTxPaymentClientV1,
} from './OneTxPaymentClientV1.js';
import getOneTxPaymentClientV2, {
  OneTxPaymentClientV2,
} from './OneTxPaymentClientV2.js';
import getOneTxPaymentClientV3, {
  OneTxPaymentClientV3,
} from './OneTxPaymentClientV3.js';
import getOneTxPaymentClientV4, {
  OneTxPaymentClientV4,
} from './OneTxPaymentClientV4.js';
import getOneTxPaymentClientV5, {
  OneTxPaymentClientV5,
} from './OneTxPaymentClientV5.js';

export { OneTxPaymentClientV1 } from './OneTxPaymentClientV1.js';
export { OneTxPaymentClientV2 } from './OneTxPaymentClientV2.js';
export { OneTxPaymentClientV3 } from './OneTxPaymentClientV3.js';
export { OneTxPaymentClientV4 } from './OneTxPaymentClientV4.js';
export { OneTxPaymentClientV5 } from './OneTxPaymentClientV5.js';

export type AnyOneTxPaymentClient =
  | OneTxPaymentClientV1
  | OneTxPaymentClientV2
  | OneTxPaymentClientV3
  | OneTxPaymentClientV4
  | OneTxPaymentClientV5;

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
    case 5:
      return getOneTxPaymentClientV5(colonyClient, address);
    default:
      return assertExhaustiveSwitch(
        version,
        'Could not find OneTxPayment version',
      );
  }
};
