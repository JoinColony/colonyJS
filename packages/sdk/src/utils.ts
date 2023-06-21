import { ContractReceipt } from 'ethers';

import type { Log } from '@ethersproject/abstract-provider';
import type { JsonRpcProvider } from '@ethersproject/providers';
import type { Interface } from '@ethersproject/abi';

import {
  Ethers6Filter,
  Ethers6FilterByBlockHash,
  ParsedLogTransactionReceipt,
} from './types.js';

/** Extract event args from a contract receipt */
// TODO: Make it possible to retrieve multiple events of the same kind
export const extractEvent = <T>(
  eventName: string,
  receipt: ContractReceipt | ParsedLogTransactionReceipt,
): T | undefined => {
  if ('events' in receipt && receipt.events) {
    const event = receipt.events.find((ev) => ev.event === eventName);
    if (event?.args) {
      return event.args as ReadonlyArray<unknown> & T;
    }
  } else if ('parsedLogs' in receipt && receipt.parsedLogs) {
    const event = receipt.parsedLogs.find((ev) => ev.name === eventName);
    if (event?.args) {
      return event.args as ReadonlyArray<unknown> & T;
    }
  }
  return undefined;
};

/** Manually extract an event using the interface (e.g. if emitting contract is a different one than the calling contract) */
export const extractCustomEvent = <T>(
  eventName: string,
  receipt: ContractReceipt | ParsedLogTransactionReceipt,
  iface: Interface,
): T | undefined => {
  let events: { data: string; topics: string[] }[];
  if ('events' in receipt && receipt.events) {
    events = receipt.events;
  } else if ('logs' in receipt && receipt.logs) {
    events = receipt.logs;
  } else {
    events = [];
  }
  for (let i = 0; i < events.length; i += 1) {
    try {
      return iface.decodeEventLog(
        eventName,
        events[i].data,
        events[i].topics,
      ) as ReadonlyArray<unknown> & T;
    } catch (e) {
      // ignore
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

/** Use this to filter empty undefinied values from arrays in a type-safe way */
export const nonNullable = <T>(value: T): value is NonNullable<T> => {
  return value !== null && value !== undefined;
};
