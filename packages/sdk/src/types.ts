import type { LogDescription } from '@ethersproject/abi';
import type { TransactionReceipt } from '@ethersproject/abstract-provider';

/**
 * Custom Transaction receipt for when we manually have to parse logs (metatransactions)
 */
export interface ParsedLogTransactionReceipt extends TransactionReceipt {
  parsedLogs: LogDescription[];
}

/**
 * @internal
 * Type helper. Extracts all parameter types
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export type Parameters<F> = F extends (...rest: infer R) => any ? R : never;

/**
 * @internal
 * Type helper. Extracts all parameter types except the first two
 * Mostly used for removing the proof params from contract transaction methods
 */
export type ParametersFrom2<F> = F extends (
  arg0: any,
  arg1: any,
  ...rest: infer R
) => any
  ? R
  : never;
/* eslint-enable @typescript-eslint/no-explicit-any */

/**
 * @internal
 * Type helper. Forces TypeScript to expand the contents in the docs
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export type Expand<T> = {} & { [P in keyof T]: T[P] };
