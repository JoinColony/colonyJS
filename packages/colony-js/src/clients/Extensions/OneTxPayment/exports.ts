import type { OneTxPaymentVersion } from '@colony/core';

import { assertExhaustiveSwitch } from '@colony/core/utils';

import { AugmentedIColony } from '../../Core/augments/commonAugments.js';

import getOneTxPaymentClientV1 from './OneTxPaymentClientV1.js';
import getOneTxPaymentClientV2 from './OneTxPaymentClientV2.js';
import getOneTxPaymentClientV3, {
  OneTxPaymentClientV3,
} from './OneTxPaymentClientV3.js';
import getOneTxPaymentClientV4, {
  OneTxPaymentClientV4,
} from './OneTxPaymentClientV4.js';
import getOneTxPaymentClientV5, {
  OneTxPaymentClientV5,
} from './OneTxPaymentClientV5.js';
import getOneTxPaymentClientV6, {
  OneTxPaymentClientV6,
} from './OneTxPaymentClientV6.js';
import getOneTxPaymentClientV7, {
  OneTxPaymentClientV7,
} from './OneTxPaymentClientV7.js';
import getOneTxPaymentClientV8, {
  OneTxPaymentClientV8,
} from './OneTxPaymentClientV8.js';

export { OneTxPaymentClientV3 } from './OneTxPaymentClientV3.js';
export { OneTxPaymentClientV4 } from './OneTxPaymentClientV4.js';
export { OneTxPaymentClientV5 } from './OneTxPaymentClientV5.js';
export { OneTxPaymentClientV6 } from './OneTxPaymentClientV6.js';
export { OneTxPaymentClientV7 } from './OneTxPaymentClientV7.js';
export { OneTxPaymentClientV8 } from './OneTxPaymentClientV8.js';

export type AnyOneTxPaymentClient =
  | OneTxPaymentClientV3
  | OneTxPaymentClientV4
  | OneTxPaymentClientV5
  | OneTxPaymentClientV6
  | OneTxPaymentClientV7
  | OneTxPaymentClientV8;

/** @internal */
export const getOneTxPaymentClient = (
  colonyClient: AugmentedIColony,
  address: string,
  version: OneTxPaymentVersion,
): AnyOneTxPaymentClient => {
  switch (version) {
    case 1:
      return getOneTxPaymentClientV1(
        colonyClient,
        address,
      ) as OneTxPaymentClientV3;
    case 2:
      return getOneTxPaymentClientV2(
        colonyClient,
        address,
      ) as OneTxPaymentClientV3;
    case 3:
      return getOneTxPaymentClientV3(colonyClient, address);
    case 4:
      return getOneTxPaymentClientV4(colonyClient, address);
    case 5:
      return getOneTxPaymentClientV5(colonyClient, address);
    case 6:
      return getOneTxPaymentClientV6(colonyClient, address);
    case 7:
      return getOneTxPaymentClientV7(colonyClient, address);
    case 8:
      return getOneTxPaymentClientV8(colonyClient, address);
    default:
      return assertExhaustiveSwitch(
        version,
        'Could not find OneTxPayment version',
      );
  }
};
