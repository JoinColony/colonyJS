// Always add the next StreamingPayments version here
import type { StreamingPayments as StreamingPayments1 } from '../../../contracts/StreamingPayments/1';
import type { StreamingPayments as StreamingPayments2 } from '../../../contracts/StreamingPayments/2';

// Always adjust to the latest factory
export { StreamingPayments__factory as StreamingPaymentsFactory } from '../../../contracts/StreamingPayments/2/factories/StreamingPayments__factory';

export type StreamingPaymentsV1 = StreamingPayments1;
export type StreamingPaymentsV2 = StreamingPayments2;

export type AnyStreamingPayments = StreamingPayments1 | StreamingPayments2;
