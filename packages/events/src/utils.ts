import type { Log } from '@ethersproject/abstract-provider';
import type { JsonRpcProvider } from '@ethersproject/providers';

import { Ethers6Filter, Ethers6FilterByBlockHash } from './types.js';

/** Version of `getLogs` that also supports filtering for multiple addresses */
export const getLogs = async (
  filter:
    | Ethers6Filter
    | Ethers6FilterByBlockHash
    | Promise<Ethers6Filter | Ethers6FilterByBlockHash>,
  provider: JsonRpcProvider,
): Promise<Log[]> => {
  const usedFilter = await filter;
  return provider.send('eth_getLogs', [usedFilter]);
};

/** Use this to filter empty undefinied values from arrays in a type-safe way */
export const nonNullable = <T>(value: T): value is NonNullable<T> => {
  return value !== null && value !== undefined;
};
