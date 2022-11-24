import type {
  Filter,
  FilterByBlockHash,
  TransactionReceipt,
} from '@ethersproject/abstract-provider';
import type { LogDescription } from '@ethersproject/abi';

/**
 * Custom Transaction receipt for when we manually have to parse logs (metatransactions)
 */
export interface ParsedLogTransactionReceipt extends TransactionReceipt {
  parsedLogs: LogDescription[];
}

/**
 * Ethers 6 supports mulitple addresses in a filter. Until then we have this
 */
export interface Ethers6Filter extends Omit<Filter, 'address'> {
  address?: string | string[];
}

/**
 * Ethers 6 supports mulitple addresses in a filter. Until then we have this
 */
export interface Ethers6FilterByBlockHash
  extends Omit<FilterByBlockHash, 'address'> {
  address?: string | string[];
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
