import { constants, providers, EventFilter } from 'ethers';
import { Result } from 'ethers/lib/utils';
import {
  IColonyEvents,
  IColonyEventsFactory,
  IColonyNetwork,
  IColonyNetworkFactory,
} from '@colony/colony-js/extras';
import type { BlockTag, Filter } from '@ethersproject/abstract-provider';

import { addressesAreEqual, getLogs, nonNullable } from './utils';

type ValueOf<T> = T[keyof T];

interface EventSources {
  Colony: IColonyEvents;
  ColonyNetwork: IColonyNetwork;
}

type EventSource = ValueOf<EventSources>;

export interface ColonyFilter extends Filter {
  eventSource: keyof EventSources;
  eventName: string;
}

// TODO: consider allowing an address array
/** ColonyFilter with support for multi-events
 * For the multi-event compatible filters the following assumptions prevail:
 * - `address` is a mandatory field
 * - it can only take a single `topic`
 * - `fromBlock` and `toBlock` are not available
 */
export interface ColonyMultiFilter
  extends Omit<ColonyFilter, 'address' | 'topics' | 'fromBlock' | 'toBlock'> {
  address: string;
  topic: string;
}

export interface ColonyEvent extends ColonyFilter {
  data: Result;
}

export class ColonyEvents {
  eventSources: EventSources;

  provider: providers.JsonRpcProvider;

  constructor(provider: providers.JsonRpcProvider) {
    this.provider = provider;
    this.eventSources = {
      Colony: IColonyEventsFactory.connect(constants.AddressZero, provider),
      ColonyNetwork: IColonyNetworkFactory.connect(
        constants.AddressZero,
        provider,
      ),
    };
  }

  private static extractSingleTopic(filter?: Filter) {
    if (!filter || !filter.topics) return null;
    const topic = filter.topics;
    if (typeof topic[0] == 'string') return topic[0];
    if (Array.isArray(topic[0]) && typeof topic[0][0] == 'string') {
      return topic[0][0];
    }
    return null;
  }

  private getEventSourceName(contract: EventSource) {
    // Find contract for filter in eventSources to store the name alongside it
    const eventSource = Object.entries(this.eventSources).find(
      ([, c]) => c === contract,
    );
    return eventSource && (eventSource[0] as keyof EventSources);
  }

  /** Get all events for the defined filter list and a certain block number.
   * All the filters are connected by a logical OR, i.e. it will find ALL given events for ALL the given contract addresses
   * This is handy when you want to listen to a fixed set of events for a lot of different contracts
   * @remarks: `fromBlock` and `toBlock` properties of the indivdual filters will be ignored
   */
  async getMultiEvents(
    filters: ColonyMultiFilter[],
    options: { fromBlock?: BlockTag; toBlock?: BlockTag } = {},
  ): Promise<ColonyEvent[]> {
    // Unique list of addresses
    const addresses = Array.from(
      new Set(filters.map(({ address }) => address)),
    );
    // Unique list of topics
    const topics = Array.from(new Set(filters.map(({ topic }) => topic)));
    const logs = await getLogs(
      {
        address: addresses,
        fromBlock: options.fromBlock,
        toBlock: options.toBlock,
        topics: [topics],
      },
      this.provider,
    );
    return logs
      .map((log) => {
        const filter = filters.find(
          ({ topic, address }) =>
            log.topics.includes(topic) &&
            addressesAreEqual(address, log.address),
        );
        if (!filter) return null;
        const { eventSource, topic, eventName, address } = filter;
        const data = this.eventSources[eventSource].interface.decodeEventLog(
          eventName,
          log.data,
          log.topics,
        );
        return {
          address,
          eventSource,
          topic,
          eventName,
          data,
        };
      })
      .filter(nonNullable);
  }

  createFilter<
    T extends EventSource & {
      filters: { [P in N]: (...args: never) => EventFilter };
    },
    N extends keyof T['filters'],
  >(
    contract: T,
    eventName: N,
    address?: string,
    params?: Parameters<T['filters'][N]>,
    options: { fromBlock?: BlockTag; toBlock?: BlockTag } = {},
  ): ColonyFilter {
    // Create standard filter
    const filter = contract.filters[eventName].apply(params);
    const eventSource = this.getEventSourceName(contract);
    if (!eventSource) {
      throw new Error(`Could not find event contract for filter`);
    }
    return {
      eventSource,
      eventName: eventName as string,
      topics: filter.topics,
      address,
      fromBlock: options.fromBlock,
      toBlock: options.toBlock,
    };
  }

  createMultiFilter<
    T extends EventSource & {
      filters: { [P in N]: (...args: never) => EventFilter };
    },
    N extends keyof T['filters'],
  >(
    contract: T,
    eventName: N,
    address: string,
    params?: Parameters<T['filters'][N]>,
  ): ColonyMultiFilter {
    const filter = this.createFilter(contract, eventName, address, params);
    // Just use the first topic for now. Let's see how far we get with this. They will be connected with ORs
    const topic = ColonyEvents.extractSingleTopic(filter);
    if (!topic) {
      throw new Error(`Filter does not have any topics: ${eventName}`);
    }
    delete filter.topics;
    const colonyFilter = filter as ColonyMultiFilter;
    colonyFilter.topic = topic;
    return colonyFilter;
  }
}
