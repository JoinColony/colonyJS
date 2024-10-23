import type { Interface } from '@ethersproject/abi';

import { type ContractReceipt } from 'ethers';

import { type ParsedLogTransactionReceipt } from './types.js';

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
