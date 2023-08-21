// Always add the next StreamingPayments version here
import type { StreamingPayments as StreamingPayments1 } from './1';
import type { StreamingPayments as StreamingPayments2 } from './2';
import type { StreamingPayments as StreamingPayments3 } from './3';

// Always adjust to the latest factory
export { StreamingPayments__factory as StreamingPaymentsFactory } from './3/factories/StreamingPayments__factory';

export type StreamingPaymentsV1 = StreamingPayments1;
export type StreamingPaymentsV2 = StreamingPayments2;
export type StreamingPaymentsV3 = StreamingPayments3;

export type AnyStreamingPayments =
  | StreamingPayments1
  | StreamingPayments2
  | StreamingPayments3;
