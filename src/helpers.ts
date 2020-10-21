import { EventFilter } from 'ethers';
import { Filter, Log, Provider } from 'ethers/providers';
import {
  BigNumber,
  BigNumberish,
  LogDescription,
  keccak256,
  toUtf8Bytes,
} from 'ethers/utils';

import {
  Extension,
  ColonyRole,
  ColonyRoles,
  ColonyVersion,
  ROOT_DOMAIN_ID,
} from './constants';
import { ColonyClient, ContractClient } from './types';

import {
  getChildIndex as exGetChildIndex,
  getPotDomain as exGetPotDomain,
  getPermissionProofs as exGetPermissionProofs,
  getMoveFundsPermissionProofs as exGetMoveFundsPermissionProofs,
} from './clients/Colony/extensions/commonExtensions';

interface ColonyRolesMap {
  [userAddress: string]: {
    [domainId: string]: Set<ColonyRole>;
  };
}

interface ColonyRoleSetValues {
  user: string;
  domainId: BigNumber;
  role: ColonyRole;
  setTo: boolean;
}

interface RecoveryRoleSetValues {
  user: string;
  domainId: BigNumber;
  role: ColonyRole;
  setTo: boolean;
}

interface LogOptions {
  fromBlock?: number;
  toBlock?: number;
  blockHash?: string;
}

type TopicsArray = string[][];

const ROOT_DOMAIN = ROOT_DOMAIN_ID.toString();

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
 * @param client Any of the intantiated contract clients
 * @param filter ethers compatible Filter object
 * @param options Configuration options to filter logs
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
  // [{ topics: [1, 2, 3] }, { topics: [5, 7] }
  // into
  // [[1, 5], [2, 7], [3]]
  const multipleTopics = filters.reduce<TopicsArray>((topicsArray, filter) => {
    if (filter.topics) {
      filter.topics.forEach((topic, i) => {
        if (topicsArray[i]) {
          topicsArray[i].push(topic);
        } else {
          // eslint-disable-next-line no-param-reassign
          topicsArray[i] = [topic];
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
 *
 * @param client Any ColonyClient
 *
 * @returns Array of user roles in a colony (see above)
 */
export const getColonyRoles = async (
  client: ColonyClient,
): Promise<ColonyRoles> => {
  if (client.clientVersion === ColonyVersion.GoerliGlider) {
    throw new Error(`Not supported by colony version ${client.clientVersion}`);
  }
  const colonyRoleSetFilter = client.filters.ColonyRoleSet(
    null,
    null,
    null,
    null,
  );

  const colonyRoleEvents = await getEvents(client, colonyRoleSetFilter);

  // eslint-disable-next-line max-len
  const recoveryRoleSetFilter = client.awkwardRecoveryRoleEventClient.filters.RecoveryRoleSet(
    null,
    null,
  );

  const recoveryRoleEvents = await getEvents(client, recoveryRoleSetFilter);

  const oneTxAddress = await client.networkClient.getExtensionInstallation(
    getExtensionHash(Extension.OneTxPayment),
    client.address,
  );

  // We construct a map that holds all users with all domains and the roles as Sets
  const rolesMap: ColonyRolesMap = colonyRoleEvents
    // Don't show roles of OneTxPayment contracts
    .filter((event) => event && event.values.user !== oneTxAddress)
    .reduce((colonyRolesMap: ColonyRolesMap, { values }) => {
      const { user, domainId, role, setTo }: ColonyRoleSetValues = values;
      const domainKey = domainId.toString();
      if (!colonyRolesMap[user] && setTo) {
        // eslint-disable-next-line no-param-reassign
        colonyRolesMap[user] = { [domainKey]: new Set([role]) };
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
    }, {});

  // OK, now we also collect all the RecoveryRoleSet events for this colony
  recoveryRoleEvents
    // Don't show roles of OneTxPayment contracts
    .filter((event) => event && event.values.user !== oneTxAddress)
    .forEach(({ values }) => {
      const { user, setTo }: RecoveryRoleSetValues = values;
      if (rolesMap[user][ROOT_DOMAIN]) {
        if (setTo) {
          rolesMap[user][ROOT_DOMAIN].add(ColonyRole.Recovery);
        } else {
          rolesMap[user][ROOT_DOMAIN].delete(ColonyRole.Recovery);
        }
      } else if (setTo) {
        rolesMap[user][ROOT_DOMAIN] = new Set([ColonyRole.Recovery]);
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
 * Get the permission proofs for a user address and the `moveFundsBetweenPots` method
 *
 * The [[`ColonyClientV1.moveFundsBetweenPots`]] method is a special case as it requires the permission proofs for
 * not only one but two domains (source and target domain pots). This helper will call the [[`getPermissionProofs`]]
 * helper internally and apply the correct roles required.
 *
 * @remarks It is required for the `moveFundsBetweenPots` method to work that both the source and the target domain
 * have the same parent domain which provides the role permissions (`Funding` role). That's why we're only returning one
 * `permissionDomainId`.
 *
 * @param client Any ColonyClient
 * @param fromtPotId Source pot id
 * @param toPotId Target pot id
 * @param customAddress A custom address to get the permission proofs for (defaults to the signer's address)
 *
 * @returns Tuple of `[permissionDomainId, fromChildSkillIndex, toChildSkillIndex]`
 */
export const getMoveFundsPermissionProofs = async (
  client: ColonyClient,
  fromtPotId: BigNumberish,
  toPotId: BigNumberish,
  customAddress?: string,
): Promise<[BigNumber, BigNumber, BigNumber]> =>
  exGetMoveFundsPermissionProofs(client, fromtPotId, toPotId, customAddress);
