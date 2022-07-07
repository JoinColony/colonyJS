import type {
  Filter,
  FilterByBlockHash,
} from '@ethersproject/abstract-provider';

/** Ethers 6 supports mulitple addresses in a filter. Until then we have this */
export interface Ethers6Filter extends Omit<Filter, 'address'> {
  address?: string | string[];
}

/** Ethers 6 supports mulitple addresses in a filter. Until then we have this */
export interface Ethers6FilterByBlockHash
  extends Omit<FilterByBlockHash, 'address'> {
  address?: string | string[];
}

/** @internal
 * Type helper. Extracts all parameter types except the first two
 * Mostly used for removing the proof params from contract transaction methods
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export type ParametersFrom2<F> = F extends (
  arg0: any,
  arg1: any,
  ...rest: infer R
) => any
  ? R
  : never;
/* eslint-enable @typescript-eslint/no-explicit-any */
