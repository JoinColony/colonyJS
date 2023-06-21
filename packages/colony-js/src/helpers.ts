import type { Filter, Log } from '@ethersproject/abstract-provider';
import type { LogDescription, Result } from '@ethersproject/abi';

import { EventFilter, BigNumber } from 'ethers';
import { ColonyRole, Id } from '@colony/core';

import { AnyColonyClient } from './clients/Core/exports.js';
import { ContractClient, ColonyRoles } from './types.js';

interface LogOptions {
  fromBlock?: number;
  toBlock?: number;
  blockHash?: string;
}

type TopicsArray = string[][];

interface ColonyRolesMap {
  [userAddress: string]: {
    [domainId: string]: Set<ColonyRole>;
  };
}

interface ColonyRoleSetValues extends Result {
  user: string;
  domainId: BigNumber;
  role: ColonyRole;
  setTo: boolean;
}

interface RecoveryRoleSetValues extends Result {
  user: string;
  domainId: BigNumber;
  role: ColonyRole;
  setTo: boolean;
}

/**
 * Format role events into an Array of all roles in the colony
 *
 * E.g.:
 * ```typescript
 * [{
 *  address: 0x5346D0f80e2816FaD329F2c140c870ffc3c3E2Ef // user address
 *  domains: [{                                         // all domains the user has a role in
 *    domainId: 1,                                      // domainId for the roles
 *    roles: [1, 2, 3]                                  // Array of `ColonyRole`
 *  }]
 * }]
 * ```
 */
export const formatColonyRoles = async (
  roleSetEvents: LogDescription[],
  recoveryRoleSetEvents: LogDescription[],
): Promise<ColonyRoles> => {
  const ROOT_DOMAIN = Id.RootDomain.toString();
  // We construct a map that holds all users with all domains and the roles as Sets
  const rolesMap: ColonyRolesMap = roleSetEvents.length
    ? roleSetEvents
        /*
         * We can't enforce the event type using TS (not easily anyway), so we
         * have to ensure that the events we're dealing with are what we expect
         * them to be.
         */
        .filter(({ name }) => name.includes('ColonyRoleSet'))
        .reduce((colonyRolesMap: ColonyRolesMap, { args }) => {
          const { user, domainId, role, setTo } = args as ColonyRoleSetValues;
          const domainKey = domainId.toString();
          if (!colonyRolesMap[user]) {
            const roleSet: Set<ColonyRole> = setTo
              ? new Set([role])
              : new Set();
            // eslint-disable-next-line no-param-reassign
            colonyRolesMap[user] = { [domainKey]: roleSet };
          }
          if (!colonyRolesMap[user][domainKey] && setTo) {
            // eslint-disable-next-line no-param-reassign
            colonyRolesMap[user][domainKey] = new Set([role]);
          }
          if (setTo) {
            colonyRolesMap[user][domainKey].add(role);
          } else {
            colonyRolesMap[user][domainKey].delete(role);
          }
          return colonyRolesMap;
        }, {})
    : {};

  // OK, now we also collect all the RecoveryRoleSet events for this colony
  recoveryRoleSetEvents
    /*
     * We can't enforce the event type using TS (not easily anyway), so we
     * have to ensure that the events we're dealing with are what we expect
     * them to be.
     */
    .filter(({ name }) => name.includes('RecoveryRoleSet'))
    .forEach(({ args }) => {
      const { user, setTo } = args as RecoveryRoleSetValues;
      rolesMap[user] = rolesMap[user] || {};
      if (rolesMap[user][ROOT_DOMAIN]) {
        if (setTo) {
          rolesMap[user][ROOT_DOMAIN].add(ColonyRole.Recovery);
        } else {
          rolesMap[user][ROOT_DOMAIN].delete(ColonyRole.Recovery);
        }
      } else {
        const roleSet: Set<ColonyRole> = setTo
          ? new Set([ColonyRole.Recovery])
          : new Set();
        rolesMap[user][ROOT_DOMAIN] = roleSet;
      }
    });
  return Object.entries(rolesMap).map(([address, userRoles]) => {
    const domains = Object.entries(userRoles).map(
      ([domainId, domainRoles]) => ({
        domainId: parseInt(domainId, 10),
        roles: Array.from(domainRoles),
      }),
    );
    return {
      address,
      domains,
    };
  });
};

/**
 * Get raw (unparsed logs) from filter
 *
 * Example:
 * ```typescript
 * // Gets the logs for the `ColonyFundsClaimed` event (not filtered)
 * const filter = colonyClient.filters.ColonyFundsClaimed(null, null, null);
 * const logs = await getLogs(colonyClient, filter);
 * ```
 *
 * @param client - Any of the intantiated contract clients
 * @param filter - ethers compatible Filter object
 * @param options - Configuration options to filter logs
 *
 * @returns ethers Log array
 */
export const getLogs = async (
  client: ContractClient,
  filter: Filter,
  options: LogOptions = {
    fromBlock: 1,
  },
): Promise<Log[]> =>
  // @TODO: when ethers v5, we can combine topics (so we can get an array of filters here)
  client.provider.getLogs({
    ...filter,
    ...options,
  });

/**
 * Get parsed event data from filter
 *
 * Example:
 * ```typescript
 * // Gets the logs for the `ColonyFundsClaimed` event (not filtered)
 * const filter = colonyClient.filters.ColonyFundsClaimed(null, null, null);
 * const events = await getEvents(colonyClient, filter);
 * ```
 *
 * @param client - Any of the intantiated contract clients
 * @param filter - ethers compatible Filter object
 * @param options - Configuration options to filter logs
 *
 * @returns Parsed ethers LogDescription array (events)
 */
export const getEvents = async (
  client: ContractClient,
  filter: Filter,
  options?: LogOptions,
): Promise<LogDescription[]> => {
  const logs = await getLogs(client, filter, options);
  return logs.map((log: Log) => client.interface.parseLog(log));
};

/**
 * Get multiple events from multiple filters
 *
 * @remarks only works when all events are emitted by the same contract!
 *
 * @param client - Any of the intantiated contract clients
 * @param filters - Array of ethers compatible Filter objects
 * @param options - Configuration options to filter logs
 *
 * @returns Parsed ethers LogDescription array (events)
 */
export const getMultipleEvents = async (
  client: ContractClient,
  filters: EventFilter[],
  options?: LogOptions,
): Promise<LogDescription[]> => {
  // Turns
  // [{ topics: [1, 2, 3] }, { topics: [5, 7] }]
  // into
  // [[1, 5], [2, 7], [3]]
  const multipleTopics = filters.reduce<TopicsArray>((topicsArray, filter) => {
    if (filter.topics) {
      filter.topics.forEach((topic, i) => {
        if (topicsArray[i]) {
          // NOTE: we assume that topics are only simple strings for now
          topicsArray[i].push(topic as string);
        } else {
          // eslint-disable-next-line no-param-reassign
          topicsArray[i] = [topic as string];
        }
      });
    }
    return topicsArray;
  }, []);
  const filter = {
    ...filters[0],
    topics: multipleTopics,
  };
  return getEvents(client, filter, options);
};

/**
 * Get an array of all roles in the colony
 *
 * @param client - Any ColonyClient
 *
 * @returns Array of user roles in a colony (see above) fetching it's own network events
 */
export const getColonyRoles = async (
  client: AnyColonyClient,
  options?: LogOptions,
): Promise<ColonyRoles> => {
  /*
   * Supported only for versions greater or equal to 3
   */
  if (client.clientVersion < 3) {
    throw new Error(`Not supported by colony version ${client.clientVersion}`);
  }

  const colonyRoleEvents = await getMultipleEvents(
    client,
    /*
     * Get all "ColonyRoleSet" events that were emmited for the colony,
     * from all contract versions
     */
    Object.keys(client.filters)
      .filter((filterName) => filterName.match(/ColonyRoleSet\(.+\)/))
      .map((filterName) =>
        /*
         * Note that TS doesn't know about the overloaded filters since
         * they get added at compile time, so they don't really exist
         * as currently existing types
         */
        (client.filters as unknown as Record<string, () => EventFilter>)[
          filterName
        ](),
      ),
    options,
  );

  const recoveryRoleSetFilter = client.colonyEvents.filters.RecoveryRoleSet(
    null,
    null,
  );

  const recoveryRoleEvents = await getEvents(
    client.colonyEvents,
    recoveryRoleSetFilter,
    options,
  );

  return formatColonyRoles(colonyRoleEvents, recoveryRoleEvents);
};

/*
 * Wrapper method around `getColonyRoles` that will get historic user roles based on
 * events, from a certain block number, up to a certain block number
 */
export const getHistoricColonyRoles = async (
  client: AnyColonyClient,
  fromBlock?: number,
  toBlock?: number,
): Promise<ColonyRoles> => getColonyRoles(client, { fromBlock, toBlock });
