import { EventFilter, BigNumber, BigNumberish, utils } from 'ethers';

import type { Filter, Log, Provider } from '@ethersproject/abstract-provider';
import type { LogDescription } from '@ethersproject/abi';

import { ColonyClient, ContractClient, ColonyRole, ColonyRoles } from './types';
import { formatColonyRoles } from './utils';

import {
  getChildIndex as exGetChildIndex,
  getPotDomain as exGetPotDomain,
  getPermissionProofs as exGetPermissionProofs,
  getExtensionPermissionProofs as exGetExtensionPermissionProofs,
  AwkwardRecoveryRoleEventClient,
  AugmentedIColony,
} from './clients/Core/augments/commonAugments';

const { keccak256, toUtf8Bytes } = utils;

interface LogOptions {
  fromBlock?: number;
  toBlock?: number;
  blockHash?: string;
}

type TopicsArray = string[][];

/**
 * Hashes to identify the colony extension contracts
 */
export const getExtensionHash = (extensionName: string): string =>
  keccak256(toUtf8Bytes(extensionName));

/**
 * Get the JavaScript timestamp for a block
 *
 * @param provider ethers compatible Provider
 * @param blockHash Hash of block to get time for
 *
 * @returns block timestamp in ms
 */
export const getBlockTime = async (
  provider: Provider,
  blockHash: string,
): Promise<number> => {
  const { timestamp } = await provider.getBlock(blockHash);
  // timestamp is seconds, Date wants ms
  return timestamp * 1000;
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
 * @param client Any of the intantiated contract clients
 * @param filter ethers compatible Filter object
 * @param options Configuration options to filter logs
 *
 * @returns ethers Log array
 */
export const getLogs = async (
  client: ContractClient | AwkwardRecoveryRoleEventClient,
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
 * @param client Any of the intantiated contract clients
 * @param filter ethers compatible Filter object
 * @param options Configuration options to filter logs
 *
 * @returns Parsed ethers LogDescription array (events)
 */
export const getEvents = async (
  client: ContractClient | AwkwardRecoveryRoleEventClient,
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
 * @param client Any of the intantiated contract clients
 * @param filter Array of ethers compatible Filter objects
 * @param options Configuration options to filter logs
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
 * Get the associated domain for a pot id
 *
 * @remarks pots can be associated with different types, like domains, payments or tasks
 * See [[`FundingPotAssociatedType`]] for details
 *
 * @param client Any ColonyClient
 * @param potId The funding pot id
 *
 * @returns The associated domainId
 */
export const getPotDomain = async (
  client: ColonyClient,
  potId: BigNumberish,
): Promise<BigNumberish> => exGetPotDomain(client, potId);

/**
 * Get the child index for a domain inside its corresponding skills parent children array
 *
 * E.g. (the values *will* differ for you!):
 * domainId = 1
 * corresponding skillId = 2
 * parent of skillId 2:
 * ```
 * {
 *  // ...
 *  children: [2]
 * }
 * ```
 * childSkillIndex would be 0 in this case (0-position in children array)
 *
 * @param client Any ColonyClient
 * @param parentDomainId id of parent domain
 * @param domainId id of the domain
 *
 * @returns Index in the `children` array (see above)
 */
export const getChildIndex = async (
  client: ColonyClient,
  parentDomainId: BigNumberish,
  domainId: BigNumberish,
): Promise<BigNumber> => exGetChildIndex(client, parentDomainId, domainId);

/**
 * Get an array of all roles in the colony
 *
 * @param client Any ColonyClient
 *
 * @returns Array of user roles in a colony (see above) fetching it's own network events
 */
export const getColonyRoles = async (
  client: ColonyClient,
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

  const recoveryRoleSetFilter =
    client.awkwardRecoveryRoleEventClient.filters.RecoveryRoleSet(null, null);

  const recoveryRoleEvents = await getEvents(
    client.awkwardRecoveryRoleEventClient,
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
  client: ColonyClient,
  fromBlock?: number,
  toBlock?: number,
): Promise<ColonyRoles> => getColonyRoles(client, { fromBlock, toBlock });

/**
 * Get the permission proofs for a user address and a certain role
 *
 * Certain methods on Colony contracts require so called "permission proofs". These are made up by
 * the `permissionDomainId` and the `childSkillIndex`. We shall attempt an explanation here.
 *
 * Domains within a colony can be nested and all the permissions in a parent domain apply for all child domains.
 * Yet at the time of calling a domain-permissioned method the contracts are unaware of the parent domain
 * a certain user has the required permission in. So when we these methods are called we have to supply them
 * the id of the parent domain the user has the permission in (it could also be the very same domain id they
 * want to act in!). Furthermore for the contracts the unidirectional chain downwards we have to supply
 * the method wuth the index of the domains associated skill in its parents children array
 * (`childSkillIndex`, see [[`getChildIndex`]]).
 * The contracts are then able to verify the permissions (the role) claimed by the caller.
 *
 * tl;dr:
 *
 * * `permissionDomainId`: id of the parent domain of the required domain the user has the required permission in
 * * `childSkillIndex`: the child index for a domain inside its corresponding skills parent children array
 *
 * @param client Any ColonyClient
 * @param domainId Domain id the method needs to act in
 * @param role Permissioning role that the methods needs to function
 * @param customAddress A custom address to get the permission proofs for (defaults to the signer's address)
 *
 * @returns Tuple of `[permissionDomainId, childSkillIndex]`
 */
export const getPermissionProofs = async (
  client: ColonyClient,
  domainId: BigNumberish,
  role: ColonyRole,
  customAddress?: string,
): Promise<[BigNumber, BigNumber]> =>
  exGetPermissionProofs(client, domainId, role, customAddress);

/**
 * Wrapper around `getPermissionProofs` to check two types of permissions: Funding and Administration
 * To be used for checking an extension's permission in said colony
 *
 * @param colonyClient Any ColonyClient
 * @param domainId Domain id the method needs to act in
 * @param address Address of the extension
 *
 * @returns Tuple of `[permissionDomainId, childSkillIndex]`
 */
export const getExtensionPermissionProofs = async (
  colonyClient: AugmentedIColony,
  domainId: BigNumberish,
  address?: string,
): Promise<[BigNumberish, BigNumberish]> =>
  exGetExtensionPermissionProofs(colonyClient, domainId, address);
