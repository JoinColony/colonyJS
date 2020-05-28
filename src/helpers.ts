import { BigNumber, id } from 'ethers/utils';

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
  const { address: colonyAddress, topics = [] } = client.filters.ColonyRoleSet(
    null,
    null,
    null,
    null,
  );

  // This event is emitted by all versions but doesn't exist on the IColony interface
  // on all versions, so we manually create the topic
  topics.push(id('RecoveryRoleSet(address,bool)'));

  const filter = {
    address: colonyAddress,
    fromBlock: 1,
    topics,
  };
  const logs = await client.provider.getLogs(filter);
  const oneTxAddress = await oneTxPaymentFactoryClient.deployedExtensions(
    client.address,
  );
  const events = logs
    .map((log) => client.interface.parseLog(log))
    // Don't show roles of OneTxPayment contracts
    .filter((event) => event.values.user !== oneTxAddress);

  // We construct a map that holds all users with all domains and the roles as Sets
  const rolesMap: ColonyRolesMap = events
    .filter((event) => event.name === 'ColonyRoleSet')
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
  console.log(events);
  events
    .filter((event) => event.name === 'RecoveryRoleSet')
    .forEach(({ values }) => {
      const { user, setTo }: RecoveryRoleSetValues = values;
      if (rolesMap[user][ROOT_DOMAIN]) {
        if (setTo) {
          rolesMap[user][ROOT_DOMAIN].add(ColonyRole.Recovery);
        } else {
          rolesMap[user][ROOT_DOMAIN].delete(ColonyRole.Recovery);
        }
      }
      if (setTo) {
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
