import { ContractReceipt } from 'ethers';
import type {
  Filter,
  FilterByBlockHash,
  Log,
} from '@ethersproject/abstract-provider';
import type { JsonRpcProvider } from '@ethersproject/providers';

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

/** Ethers 6 supports mulitple addresses in a filter. Until then we have this */
export interface Ethers6Filter extends Omit<Filter, 'address'> {
  address: string | string[];
}

/** Ethers 6 supports mulitple addresses in a filter. Until then we have this */
export interface Ethers6FilterByBlockHash
  extends Omit<FilterByBlockHash, 'address'> {
  address: string | string[];
}

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

/** @internal */
export const addressesAreEqual = (a: string, b: string) =>
  a.toLowerCase() === b.toLowerCase();

/** @internal */
export const nonNullable = <T>(value: T): value is NonNullable<T> => {
  return value !== null && value !== undefined;
};
