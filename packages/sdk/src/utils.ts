import {
  ContractTransactionReceipt,
  EventLog,
  Filter,
  FilterByBlockHash,
  Interface,
  Log,
  JsonRpcProvider,
  Result,
} from 'ethers';

import { ParsedLogTransactionReceipt } from './types.js';

/** Extract event args from a contract receipt */
// TODO: Make it possible to retrieve multiple events of the same kind
export const extractEvent = <T>(
  eventName: string,
  receipt: ContractTransactionReceipt | ParsedLogTransactionReceipt,
): T | undefined => {
  if ('logs' in receipt && receipt.logs) {
    const event = receipt.logs.find(
      (ev) => ev instanceof EventLog && ev.eventName === eventName,
    ) as EventLog | undefined;
    if (event?.args) {
      return event.args as Result & T;
    }
  } else if ('parsedLogs' in receipt && receipt.parsedLogs) {
    const event = receipt.parsedLogs.find((ev) => ev.name === eventName);
    if (event?.args) {
      return event.args as Result & T;
    }
  }
  return undefined;
};

/** Manually extract an event using the interface (e.g. if emitting contract is a different one than the calling contract) */
export const extractCustomEvent = <T>(
  eventName: string,
  receipt: ContractTransactionReceipt | ParsedLogTransactionReceipt,
  iface: Interface,
): T | undefined => {
  for (let i = 0; i < receipt.logs.length; i += 1) {
    try {
      return iface.decodeEventLog(
        eventName,
        receipt.logs[i].data,
        receipt.logs[i].topics,
      ) as Result & T;
    } catch (e) {
      // ignore
    }
  }
  return undefined;
};

/** Version of `getLogs` that also supports filtering for multiple addresses */
export const getLogs = async (
  filter: Filter | FilterByBlockHash | Promise<Filter | FilterByBlockHash>,
  provider: JsonRpcProvider,
): Promise<Log[]> => {
  const usedFilter = await filter;
  return provider.send('eth_getLogs', [usedFilter]);
};

/** Use this to filter empty undefinied values from arrays in a type-safe way */
export const nonNullable = <T>(value: T): value is NonNullable<T> => {
  return value !== null && value !== undefined;
};
