import type {
  Filter,
  FilterByBlockHash,
} from '@ethersproject/abstract-provider';

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
