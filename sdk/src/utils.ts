import { ContractReceipt } from 'ethers';
import type { Log } from '@ethersproject/abstract-provider';
import type { JsonRpcProvider } from '@ethersproject/providers';

import { Ethers6Filter, Ethers6FilterByBlockHash } from './types';

/** Extract event args from a contract receipt */
export const extractEvent = <T>(
  eventName: string,
  receipt: ContractReceipt,
): T | undefined => {
  if (receipt.events) {
    const event = receipt.events.find((ev) => ev.event === eventName);
    if (event?.args) {
      return event.args as ReadonlyArray<unknown> & T;
    }
  }
  return undefined;
};

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

/** Check if two addresses are equal */
export const addressesAreEqual = (a: string, b: string) =>
  a.toLowerCase() === b.toLowerCase();

/** Use this to filter empty undefinied values from arrays in a type-safe way */
export const nonNullable = <T>(value: T): value is NonNullable<T> => {
  return value !== null && value !== undefined;
};
