import { EventFilter } from 'ethers';
import { Filter, Log, Provider } from 'ethers/providers';
import { BigNumber, LogDescription } from 'ethers/utils';

import {
  ColonyClient,
  ColonyRole,
  ColonyRoles,
  ColonyVersion,
  ContractClient,
  ROOT_DOMAIN_ID,
} from './index';

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

export const getBlockTime = async (
  provider: Provider,
  blockHash: string,
): Promise<number> => {
  const { timestamp } = await provider.getBlock(blockHash);
  // timestamp is seconds, Date wants ms
  return timestamp * 1000;
};

/* Get raw (unparsed logs) from filter */
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

/* Get parsed event data from filter */
export const getEvents = async (
  client: ContractClient,
  filter: Filter,
  options?: LogOptions,
): Promise<LogDescription[]> => {
  const logs = await getLogs(client, filter, options);
  return logs.map((log: Log) => client.interface.parseLog(log));
};

/* Get multiple events from multiple filters (only works for the same contract!) */
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

export const getColonyRoles = async (
  client: ColonyClient,
): Promise<ColonyRoles> => {
  const { oneTxPaymentFactoryClient } = client.networkClient;
  if (client.clientVersion === ColonyVersion.GoerliGlider) {
    throw new Error(
      `Not supported by colony version ${ColonyVersion.GoerliGlider}`,
    );
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

  const oneTxAddress = await oneTxPaymentFactoryClient.deployedExtensions(
    client.address,
  );

  // We construct a map that holds all users with all domains and the roles as Sets
  const rolesMap: ColonyRolesMap = colonyRoleEvents
    // Don't show roles of OneTxPayment contracts
    .filter((event) => event.values.user !== oneTxAddress)
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
    .filter((event) => event.values.user !== oneTxAddress)
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
