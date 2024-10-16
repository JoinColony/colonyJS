import type { OneTxPaymentVersion } from '@colony/core';

import { assertExhaustiveSwitch } from '@colony/core/utils';

import { type AugmentedIColony } from '../../Core/augments/commonAugments.js';

import getOneTxPaymentClientV1 from './OneTxPaymentClientV1.js';
import getOneTxPaymentClientV2 from './OneTxPaymentClientV2.js';
import getOneTxPaymentClientV3 from './OneTxPaymentClientV3.js';
import getOneTxPaymentClientV4, {
  type OneTxPaymentClientV4,
} from './OneTxPaymentClientV4.js';
import getOneTxPaymentClientV5, {
  type OneTxPaymentClientV5,
} from './OneTxPaymentClientV5.js';
import getOneTxPaymentClientV6, {
  type OneTxPaymentClientV6,
} from './OneTxPaymentClientV6.js';
import getOneTxPaymentClientV7, {
  type OneTxPaymentClientV7,
} from './OneTxPaymentClientV7.js';
import getOneTxPaymentClientV8, {
  type OneTxPaymentClientV8,
} from './OneTxPaymentClientV8.js';
import getOneTxPaymentClientV9, {
  type OneTxPaymentClientV9,
} from './OneTxPaymentClientV9.js';

export type { OneTxPaymentClientV4 } from './OneTxPaymentClientV4.js';
export type { OneTxPaymentClientV5 } from './OneTxPaymentClientV5.js';
export type { OneTxPaymentClientV6 } from './OneTxPaymentClientV6.js';
export type { OneTxPaymentClientV7 } from './OneTxPaymentClientV7.js';
export type { OneTxPaymentClientV8 } from './OneTxPaymentClientV8.js';
export type { OneTxPaymentClientV9 } from './OneTxPaymentClientV9.js';

export type AnyOneTxPaymentClient =
  | OneTxPaymentClientV4
  | OneTxPaymentClientV5
  | OneTxPaymentClientV6
  | OneTxPaymentClientV7
  | OneTxPaymentClientV8
  | OneTxPaymentClientV9;

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
      ) as OneTxPaymentClientV4;
    case 2:
      return getOneTxPaymentClientV2(
        colonyClient,
        address,
      ) as OneTxPaymentClientV4;
    case 3:
      return getOneTxPaymentClientV3(
        colonyClient,
        address,
      ) as OneTxPaymentClientV4;
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
    case 9:
      return getOneTxPaymentClientV9(colonyClient, address);
    default:
      return assertExhaustiveSwitch(
        version,
        'Could not find OneTxPayment version',
      );
  }
};
