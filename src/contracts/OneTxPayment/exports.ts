// Always add the next OneTxPayment version here
import type { OneTxPayment as OneTxPayment1 } from './1';
import type { OneTxPayment as OneTxPayment2 } from './2';
import type { OneTxPayment as OneTxPayment3 } from './3';

// Always adjust to the latest factory
export { OneTxPayment__factory as OneTxPaymentFactory } from './3/factories/OneTxPayment__factory';

export type OneTxPaymentV1 = OneTxPayment1;
export type OneTxPaymentV2 = OneTxPayment2;
export type OneTxPaymentV3 = OneTxPayment3;

export type AnyOneTxPayment = OneTxPayment1 | OneTxPayment2 | OneTxPayment3;
