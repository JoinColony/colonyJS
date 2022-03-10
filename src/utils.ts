import fetch from 'cross-fetch';
import { utils, BigNumber, BigNumberish } from 'ethers';
import type { LogDescription, Result } from '@ethersproject/abi';

import { ROOT_DOMAIN_ID } from './constants';
import {
  IColonyEvents,
  ReputationMinerEndpoints,
  ColonyRole,
  ColonyRoles,
} from './types';
import { ColonyNetworkClient } from './clients/ColonyNetworkClient';

const { getAddress } = utils;

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

interface ReputationOracleSingleDomainWithoutProofsResponse {
  key: string;
  value: string;
  reputationAmount: string;
}

interface ReputationOracleSingleDomainWithProofsResponse
  extends ReputationOracleSingleDomainWithoutProofsResponse {
  branchMask: string;
  siblings: string[];
}

interface ReputationOracleAllDomainsResponse {
  reputations: {
    skill_id: number;
    reputationAmount: string;
  }[];
}

interface ReputationOracleColonyResponse {
  addresses: string[];
}

type ReputationOracleResponseType<R> =
  R extends ReputationMinerEndpoints.UserReputationInSingleDomainWithoutProofs
    ? ReputationOracleSingleDomainWithoutProofsResponse
    : R extends ReputationMinerEndpoints.UserReputationInSingleDomainWithProofs
    ? ReputationOracleSingleDomainWithProofsResponse
    : R extends ReputationMinerEndpoints.UserReputationInAllDomains
    ? ReputationOracleAllDomainsResponse
    : R extends ReputationMinerEndpoints.UsersWithReputationInColony
    ? ReputationOracleColonyResponse
    : never;

// @TODO ethers v5 has an isAddress function
export const isAddress = (address: string): boolean => {
  try {
    getAddress(address);
  } catch {
    return false;
  }
  return true;
};

/*
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
 */
export const formatColonyRoles = async (
  roleSetEvents: LogDescription[],
  recoveryRoleSetEvents: LogDescription[],
): Promise<ColonyRoles> => {
  const ROOT_DOMAIN = ROOT_DOMAIN_ID.toString();
  // We construct a map that holds all users with all domains and the roles as Sets
  const rolesMap: ColonyRolesMap = roleSetEvents.length
    ? roleSetEvents
        /*
         * We can't enforce the event type using TS (not easily anyway), so we
         * have to ensure that the events we're dealing with are what we expect
         * them to be.
         */
        .filter(({ name }) => name.includes(IColonyEvents.ColonyRoleSet))
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
    .filter(({ name }) => name.includes(IColonyEvents.RecoveryRoleSet))
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

export const fetchReputationOracleData = async <
  E extends ReputationMinerEndpoints,
>(
  endpoint: E,
  networkClient: ColonyNetworkClient,
  colonyAddress: string,
  userAddress?: string,
  skillId?: BigNumberish,
  customRootHash?: string,
): Promise<ReputationOracleResponseType<E>> => {
  if (!isAddress(colonyAddress)) {
    throw new Error(
      `Invalid colony address provided to fetch reputation for: ${colonyAddress}`,
    );
  }
  if (
    endpoint !== ReputationMinerEndpoints.UsersWithReputationInColony &&
    !isAddress(userAddress || '')
  ) {
    throw new Error(
      `Invalid user address provided to fetch reputation for: ${userAddress}`,
    );
  }
  if (
    endpoint !== ReputationMinerEndpoints.UserReputationInAllDomains &&
    !skillId
  ) {
    throw new Error(
      `Invalid skillId provided to fetch reputation for: ${skillId}`,
    );
  }
  const {
    network: networkName,
    reputationOracleEndpoint: reputationOracleHostname,
  } = networkClient;

  const skillIdString = BigNumber.from(skillId || '').toString();

  const rootHash =
    customRootHash || (await networkClient.getReputationRootHash());

  const baseEndpoint = `${reputationOracleHostname}/${networkName}/${rootHash}/${colonyAddress}`;

  switch (endpoint) {
    case ReputationMinerEndpoints.UserReputationInSingleDomainWithoutProofs: {
      const response = await fetch(
        `${baseEndpoint}/${skillIdString}/${userAddress}/noProof`,
      );
      return response.json();
    }
    case ReputationMinerEndpoints.UserReputationInSingleDomainWithProofs: {
      const response = await fetch(
        `${baseEndpoint}/${skillIdString}/${userAddress}`,
      );
      return response.json();
    }
    case ReputationMinerEndpoints.UserReputationInAllDomains: {
      const response = await fetch(`${baseEndpoint}/${userAddress}/all`);
      return response.json();
    }
    case ReputationMinerEndpoints.UsersWithReputationInColony: {
      const response = await fetch(`${baseEndpoint}/${skillIdString}`);
      return response.json();
    }
    default: {
      const response = await fetch(baseEndpoint);
      return response.json();
    }
  }
};

export const assertExhaustiveSwitch = (x: never): never => {
  throw new Error(`Unexpected object: ${x}`);
};
