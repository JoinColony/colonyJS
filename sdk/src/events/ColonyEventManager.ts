/**
 * This is a description of the ColonyEventManager module
 * @module ColonyEventManager
 */

import { constants, providers, EventFilter } from 'ethers';
import type { Result } from 'ethers/lib/utils';
import type { BlockTag } from '@ethersproject/abstract-provider';
import {
  IColonyEvents,
  IColonyEvents__factory,
  IColonyNetworkEvents,
  IColonyNetworkEvents__factory,
  OneTxPaymentEvents,
  OneTxPaymentEvents__factory,
  VotingReputationEvents,
  VotingReputationEvents__factory,
} from '@colony/colony-js/extras';

import { IpfsMetadata, MetadataKey, AnyMetadataValue } from './IpfsMetadata';
import type { Ethers6Filter } from '../types';
import { addressesAreEqual, getLogs, nonNullable } from '../utils';

/** Valid sources for Colony emitted events. Used to map the parsed event data */
export interface EventSources {
  Colony: IColonyEvents;
  ColonyNetwork: IColonyNetworkEvents;
  OneTxPayment: OneTxPaymentEvents;
  VotingReputation: VotingReputationEvents;
}

/** An EventSource is essentially an _ethers_ contract, that we can keep track of */
export type EventSource = EventSources[keyof EventSources];

/** A Colony extended ethers Filter to keep track of where events are coming from */
export interface ColonyFilter extends Ethers6Filter {
  /** The Colony contract the event originated from */
  eventSource: keyof EventSources;
  /** The full event signature of this event (e.g. `TokenMinted(uint256))` */
  eventName: string;
}

interface ColonyTopic {
  eventSource: keyof EventSources;
  eventName: string;
  topic: string;
}

/** ColonyFilter with support for multi-events
 * For the multi-event compatible filters the following assumptions prevail:
 * - `address` is a mandatory field
 * - The list of filter topics is always OR'd, never AND'd.
 * - `fromBlock` and `toBlock` are not available
 */
export interface ColonyMultiFilter {
  address: string;
  colonyTopics: ColonyTopic[];
}

/** An Event that came from a contract within the Colony Network */
export interface ColonyEvent extends ColonyFilter {
  data: Result;
  transactionHash: string;
  getMetadata?: () => Promise<AnyMetadataValue>;
}

/**
 * The ColonyEvents class is a wrapper around _ethers_'s event implementations to make it easier to track and fetch Colony related events.
 * It works by creating specific filters that can keep track of event sources and map filters to their respective events. This allows for
 * easy parsing of event data, without necessarily knowing the contract that emitted it.
 *
 * @remarks
 * The API is subject to change as we find more applications for this
 */
export class ColonyEventManager {
  eventSources: EventSources;

  ipfsMetadata: IpfsMetadata;

  provider: providers.JsonRpcProvider;

  /**
   * Create a new ColonyEvents instance
   *
   * @remarks
   * As opposed to the [[ColonyNetwork.ColonyNetwork]] class, this constructor _needs_ an _ethers_ JsonRpcProvider (or a subclass of it) as it's
   * the only provider that supports topic filtering by multiple addresses
   *
   * @param provider An _ethers_ `JsonRpcProvider`
   * @returns A ColonyEvents instance
   */
  constructor(provider: providers.JsonRpcProvider) {
    this.eventSources = {
      Colony: IColonyEvents__factory.connect(constants.AddressZero, provider),
      ColonyNetwork: IColonyNetworkEvents__factory.connect(
        constants.AddressZero,
        provider,
      ),
      OneTxPayment: OneTxPaymentEvents__factory.connect(
        constants.AddressZero,
        provider,
      ),
      VotingReputation: VotingReputationEvents__factory.connect(
        constants.AddressZero,
        provider,
      ),
    };
    this.ipfsMetadata = new IpfsMetadata();
    this.provider = provider;
  }

  private static extractSingleTopic(topicsContainer?: {
    topics?: ColonyFilter['topics'];
  }) {
    if (!topicsContainer || !topicsContainer.topics) return null;
    const topic = topicsContainer.topics;
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

  /**
   * Get events for a single filter
   *
   * Gets events for an individual filter and automatically parses the data if possible
   *
   * @example
   * Retrieve and parse all `DomainAdded` events for a specific [[ColonyNetwork.Colony]] contract
   * ```typescript
   * const domainAdded = colonyEvents.createFilter(
   *   colonyEvents.eventSources.Colony,
   *   'DomainAdded(address,uint256)',
   *   colonyAddress,
   * );
   * // Immediately executing async function
   * (async function() {
   *   const events = await colonyEvents.getEvents(domainAdded);
   * })();
   * ```
   *
   * @param filter A [[ColonyFilter]]. [[ColonyMultiFilters]] will not work
   * @returns An array of [[ColonyEvent]]s
   */
  async getEvents(filter: ColonyFilter): Promise<Array<ColonyEvent>> {
    const logs = await getLogs(filter, this.provider);

    return logs
      .map((log) => {
        const { eventSource, eventName } = filter;
        const data = this.eventSources[eventSource].interface.decodeEventLog(
          eventName,
          log.data,
          log.topics,
        );
        if (IpfsMetadata.eventSupportMetadata(eventName)) {
          return {
            ...filter,
            data,
            transactionHash: log.transactionHash,
            getMetadata: async () => {
              return this.ipfsMetadata.getMetadataForEvent(
                eventName as MetadataKey,
                data.metadata,
              );
            },
          };
        }
        return {
          ...filter,
          transactionHash: log.transactionHash,
          data,
        };
      })
      .filter(nonNullable);
  }

  /**
   * Get events for multiple filters across multiple addresses at once
   *
   * All the filters are connected by a logical OR, i.e. it will find ALL given events for ALL the given contract addresses
   * This is handy when you want to listen to a fixed set of events for a lot of different contracts
   *
   * @remarks
   * `fromBlock` and `toBlock` properties of the indivdual filters will be ignored
   *
   * @example
   * Retrieve and parse all `DomainAdded` and `DomainMetadata` events for a specific [[ColonyNetwork.Colony]] contract.
   * Note that we're using [[ColonyEvents.createMultiFilter]] here. The two `colonyAddress`es could also be different
   *
   * ```typescript
   * const domainAdded = colonyEvents.createMultiFilter(
   *   colonyEvents.eventSources.Colony,
   *   'DomainAdded(address,uint256)',
   *   colonyAddress,
   * );
   * const domainMetadata = colonyEvents.createMultiFilter(
   *   colonyEvents.eventSources.Colony,
   *   'DomainMetadata(address,uint256,string)',
   *   colonyAddress,
   * );
   *
   * // Immediately executing async function
   * (async function() {
   *   const events = await colonyEvents.getMultiEvents([domainAdded, domainMetadata]);
   * })();
   * ```
   *
   * @param filters An array of [[ColonyMultiFilter]]s. Normal [[ColonyFilters]] will not work
   * @param options You can define `fromBlock` and `toBlock` only once for all the filters given
   * @param options.fromBlock Starting block in which to look for this event - inclusive (default: 'latest')
   * @param options.toBlock Ending block in which to look for this event - inclusive (default: 'latest')
   * @returns An array of [[ColonyEvent]]s
   */
  async getMultiEvents(
    filters: ColonyMultiFilter[],
    options: { fromBlock?: BlockTag; toBlock?: BlockTag } = {},
  ): Promise<ColonyEvent[]> {
    // Unique list of addresses
    const addresses = Array.from(
      new Set(filters.flatMap(({ address }) => address)),
    );
    // Unique list of topics
    const uniqueTopics = Array.from(
      new Set(
        filters.flatMap(({ colonyTopics }) =>
          colonyTopics.map(({ topic }) => topic),
        ),
      ),
    );
    const logs = await getLogs(
      {
        address: addresses,
        fromBlock: options.fromBlock,
        toBlock: options.toBlock,
        topics: [uniqueTopics],
      },
      this.provider,
    );
    // TODO: I think it might be smart to just consult a database for this info
    return logs
      .map((log) => {
        const topic = ColonyEventManager.extractSingleTopic(log);
        // We are looking for a MultiFilter that defines this address but also
        // includes the topic that we're looking for so that we can decode it later
        const multiFilter = filters.find(
          ({ address, colonyTopics }) =>
            addressesAreEqual(address, log.address) &&
            colonyTopics.findIndex(
              ({ topic: filterTopic }) => filterTopic === topic,
            ) > -1,
        );
        if (!multiFilter) return null;
        // Now find the actual filter with the topic
        const filter = multiFilter.colonyTopics.find(
          ({ topic: filterTopic }) => filterTopic === topic,
        );
        if (!filter) return null;
        const { eventSource, eventName } = filter;
        const data = this.eventSources[eventSource].interface.decodeEventLog(
          eventName,
          log.data,
          log.topics,
        );
        const colonyEvent = {
          address: log.address,
          eventSource,
          topics: log.topics,
          eventName,
          data,
          transactionHash: log.transactionHash,
        };

        if (IpfsMetadata.eventSupportMetadata(eventName)) {
          return {
            ...colonyEvent,
            getMetadata: async () => {
              return this.ipfsMetadata.getMetadataForEvent(
                eventName as MetadataKey,
                data.metadata,
              );
            },
          };
        }
        return colonyEvent;
      })
      .filter(nonNullable);
  }

  /**
   * Create a [[ColonyFilter]] that keeps track of its event source
   *
   * To create a [[ColonyFilter]], we need to not only give it the topics and addresses as required by _ethers_
   * [`Filter`s](https://docs.ethers.io/v5/api/providers/types/#providers-Filter), but also the actual source contract of that Filter.
   * Like this we can keep track of the source contract interface to parse the event data when it's emitted
   *
   * @remarks
   * We can do that as we do not have ambiguous events across our contracts, so we will always be able to find the right contract to parse the event data later on
   *
   * @example
   * Filter for all `DomainAdded` events between block 21830000 and 21840000 (across all deployed [[ColonyNetwork.Colony]] contracts)
   * ```typescript
   *  const domainAdded = colonyEvents.createFilter(
   *    colonyEvents.eventSources.Colony,
   *    'DomainAdded(address,uint256)',
   *    null,
   *    { fromBlock: 21830000 , toBlock: 21840000  },
   * );
   * ```
   *
   * @typeParam T Needs to be a valid [[EventSource]] (i.e. from `colonyEvents.eventSources`)
   * @typeParam N An event signature as defined in the _ethers_ contract's [`filters`](https://docs.ethers.io/v5/api/contract/contract/#Contract--filters) object.
   * See the [ColonyJS documentation](https://colony.gitbook.io/colony/colonyjs) for a list of all available contracts and events
   *
   * @param contract A valid [[EventSource]]
   * @param eventName A valid event signature from the contract's `filters` object
   * @param address Address of the contract that can emit this event
   * @param params Parameters to filter by for the event. Has to be indexed in the contract (see _ethers_ [Event Filters](https://docs.ethers.io/v5/api/contract/contract/#Contract--filters))
   * @param options You can define `fromBlock` and `toBlock` only once for all the filters given
   * @returns A [[ColonyFilter]]
   */
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
    options?: { fromBlock?: BlockTag; toBlock?: BlockTag },
  ): ColonyFilter;

  // We split up the type definition and the actual implementation to relax the TypeScript strictness a little bit for the implementation so it won't go crazy.
  createFilter(
    contract: EventSource,
    eventName: keyof typeof contract['filters'],
    address?: string,
    params?: Parameters<typeof contract['filters'][typeof eventName]>,
    options: { fromBlock?: BlockTag; toBlock?: BlockTag } = {},
  ): ColonyFilter {
    // Create standard filter
    const filter = params
      ? contract.filters[eventName].apply([
          contract.filters[eventName],
          ...params,
        ])
      : contract.filters[eventName]();
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

  /**
   * Create a [[ColonyMultiFilter]] that keeps track of its event source and can work alongside other filters in [[getMultiEvents]]
   *
   * The [[ColonyMultiFilter]] works much like the [[ColonyFilter]], just that we _have_ to specify an address of the contract which emits this event.
   * Furthermore, no `fromBlock` or `toBlock` requirements can be given (that is done on a global level in [[getMultiEvents]])
   *
   * @remarks
   * We can do that as we do not have ambiguous events across our contracts, so we will always be able to find the right contract to parse the event data later on. Note that `ColonyMultiFilter` does not allow for params to be passed in.
   *
   * @example
   * Filter for all `DomainAdded` events for a specific [[ColonyNetwork.Colony]] contract
   * ```typescript
   * const domainAdded = colonyEvents.createFilter(
   *   colonyEvents.eventSources.Colony,
   *   'DomainAdded(address,uint256)',
   *   colonyAddress,
   * );
   * ```
   *
   * @typeParam T Needs to be a valid [[EventSource]] (i.e. from `colonyEvents.eventSources`)
   * @typeParam N An event signature as defined in the _ethers_ contract's [`filters`](https://docs.ethers.io/v5/api/contract/contract/#Contract--filters) object.
   * See the [ColonyJS documentation](https://colony.gitbook.io/colony/colonyjs) for a list of all available contracts and events
   *
   * @param contract A valid [[EventSource]]
   * @param eventNames A list of valid event signatures from the contract's `filters` object
   * @param address Address of the contract that can emit this event
   * @returns A [[ColonyMultiFilter]]
   */
  createMultiFilter<
    T extends EventSource & {
      filters: { [P in N]: (...args: never) => EventFilter };
    },
    N extends keyof T['filters'],
  >(contract: T, eventNames: N[], address: string): ColonyMultiFilter {
    const colonyTopics: ColonyTopic[] = eventNames
      .map((eventName) => {
        const filter = this.createFilter(contract, eventName, address);
        // As we don't allow parameters, filter.topics should always be a single topic
        const topic = ColonyEventManager.extractSingleTopic(filter);
        if (!topic) return null;
        return {
          topic,
          eventName: eventName as string,
          eventSource: filter.eventSource,
        };
      })
      .filter(nonNullable);

    return {
      address,
      colonyTopics,
    };
  }
}
