import { BigNumber } from 'ethers/utils';

import {
  ColonyClient,
  ColonyRole,
  ColonyRoles,
  ColonyVersion,
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

const ROOT_DOMAIN = ROOT_DOMAIN_ID.toString();

export const getColonyRoles = async (
  client: ColonyClient,
): Promise<ColonyRoles> => {
  const { oneTxPaymentFactoryClient } = client.networkClient;
  if (client.clientVersion === ColonyVersion.GoerliGlider) {
    throw new Error(
      `Not supported by colony version ${ColonyVersion.GoerliGlider}`,
    );
  }
  const { topics: colonyRoleTopics = [] } = client.filters.ColonyRoleSet(
    null,
    null,
    null,
    null,
  );
  const colonyRoleFilter = {
    address: client.address,
    fromBlock: 1,
    topics: colonyRoleTopics,
  };
  const colonyRoleLogs = await client.provider.getLogs(colonyRoleFilter);

  const {
    topics: recoveryRoleTopics = [],
  } = client.awkwardRecoveryRoleEventClient.filters.RecoveryRoleSet(null, null);

  const recoveryRoleFilter = {
    address: client.address,
    fromBlock: 1,
    topics: recoveryRoleTopics,
  };
  // @TODO: when ethers v5, we can combine topics
  const recoveryRoleLogs = await client.provider.getLogs(recoveryRoleFilter);

  const oneTxAddress = await oneTxPaymentFactoryClient.deployedExtensions(
    client.address,
  );

  const colonyRoleEvents = colonyRoleLogs
    .map((log) => client.interface.parseLog(log))
    // Don't show roles of OneTxPayment contracts
    .filter((event) => event.values.user !== oneTxAddress);

  // We construct a map that holds all users with all domains and the roles as Sets
  const rolesMap: ColonyRolesMap = colonyRoleEvents.reduce(
    (colonyRolesMap: ColonyRolesMap, { values }) => {
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
    },
    {},
  );

  const recoveryRoleEvents = recoveryRoleLogs
    .map((log) => client.awkwardRecoveryRoleEventClient.interface.parseLog(log))
    // Don't show roles of OneTxPayment contracts
    .filter((event) => event.values.user !== oneTxAddress);

  // OK, now we also collect all the RecoveryRoleSet events for this colony
  recoveryRoleEvents.forEach(({ values }) => {
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
