// Always add the next StreamingPayments version here
import type { StreamingPayments as StreamingPayments1 } from '../../../contracts/StreamingPayments/1/index.js';
import type { StreamingPayments as StreamingPayments2 } from '../../../contracts/StreamingPayments/2/index.js';
import type { StreamingPayments as StreamingPayments3 } from '../../../contracts/StreamingPayments/3/index.js';
import type { StreamingPayments as StreamingPayments4 } from '../../../contracts/StreamingPayments/4/index.js';

// Always adjust to the latest factory
export { StreamingPayments__factory as StreamingPaymentsFactory } from '../../../contracts/StreamingPayments/4/factories/StreamingPayments__factory.js';

export type StreamingPaymentsV1 = StreamingPayments1;
export type StreamingPaymentsV2 = StreamingPayments2;
export type StreamingPaymentsV3 = StreamingPayments3;
export type StreamingPaymentsV4 = StreamingPayments4;

// No one is using StreamingPaymentsV1 through V3, so we can safely ignore them for now
export type AnyStreamingPayments = StreamingPayments4;
