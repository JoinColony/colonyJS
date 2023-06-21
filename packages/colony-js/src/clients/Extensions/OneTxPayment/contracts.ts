// Always add the next OneTxPayment version here
import type { OneTxPayment as OneTxPayment1 } from '../../../contracts/OneTxPayment/1';
import type { OneTxPayment as OneTxPayment2 } from '../../../contracts/OneTxPayment/2';
import type { OneTxPayment as OneTxPayment3 } from '../../../contracts/OneTxPayment/3';
import type { OneTxPayment as OneTxPayment4 } from '../../../contracts/OneTxPayment/4';

// Always adjust to the latest factory
export { OneTxPayment__factory as OneTxPaymentFactory } from '../../../contracts/OneTxPayment/4/factories/OneTxPayment__factory.js';

export type OneTxPaymentV1 = OneTxPayment1;
export type OneTxPaymentV2 = OneTxPayment2;
export type OneTxPaymentV3 = OneTxPayment3;
export type OneTxPaymentV4 = OneTxPayment4;

export type AnyOneTxPayment =
  | OneTxPayment1
  | OneTxPayment2
  | OneTxPayment3
  | OneTxPayment4;
