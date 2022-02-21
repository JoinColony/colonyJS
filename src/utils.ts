import { isEqual } from 'lodash-es';
import fetch from 'cross-fetch';
import { Signer } from 'ethers';
import {
  getAddress,
  EventFragment,
  LogDescription,
  BigNumber,
  BigNumberish,
  bigNumberify,
} from 'ethers/utils';
import { Provider } from 'ethers/providers';

import { IColony__factory as IColonyFactory } from '../src/contracts/colony/9/factories/IColony__factory';
import { ColonyRole, ColonyRoles, ROOT_DOMAIN_ID } from './constants';
import { ColonyVersion } from './versions';
import { IColonyEvents, ReputationMinerEndpoints } from './types';
import { ColonyNetworkClient } from './clients/ColonyNetworkClient';

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

export const getAbiEvents = (
  factory: IColonyFactory,
  address: string,
  signerOrProvider: Signer | Provider,
): EventFragment[] => {
  const {
    interface: { abi },
    // @ts-ignore
  } = factory.connect(address, signerOrProvider);
  return abi.filter(({ type }: EventFragment) => type === 'event');
};

export const getAbiFunctions = (
  factory: IColonyFactory,
  address: string,
  signerOrProvider: Signer | Provider,
): EventFragment[] => {
  const {
    interface: { abi },
    // @ts-ignore
  } = factory.connect(address, signerOrProvider);
  return abi.filter(({ type }: EventFragment) => type !== 'event');
};

export const getUniqueAbiEvents = (
  baseEventsAbi: EventFragment[],
  eventsAbi: EventFragment[],
): EventFragment[] =>
  eventsAbi.filter(
    (event) => !baseEventsAbi.find((baseEvent) => isEqual(baseEvent, event)),
  );

export const getAllAbiEvents = (
  factories: IColonyFactory[],
  address: string,
  signerOrProvider: Signer | Provider,
): EventFragment[] => {
  let abiEvents: EventFragment[] = [];
  factories.map((factory) => {
    const currentFactoryAbiEvents = getAbiEvents(
      factory,
      address,
      signerOrProvider,
    );
    const currentUniqueAbiEvents = getUniqueAbiEvents(
      abiEvents,
      currentFactoryAbiEvents,
    );
    abiEvents = [...abiEvents, ...currentUniqueAbiEvents];
    return null;
  });
  return abiEvents;
};

export const getExtensionCompatibilityMap = (
  incompatibilityMap: Record<string, number[]>,
  colonyVersions: typeof ColonyVersion,
): Record<number, number[]> => {
  const compatibilityMap: Record<number, number[]> = {};
  const allColonyVersions = Object.keys(colonyVersions)
    .map((version) => parseInt(version, 10))
    .filter((version) => !!version);
  const extensionVersions = Object.keys(incompatibilityMap);
  extensionVersions.map((version) => {
    const currentCompatibleVersions = allColonyVersions.filter(
      (colonyVersion) => !incompatibilityMap[version].includes(colonyVersion),
    );
    compatibilityMap[parseInt(version, 10)] = currentCompatibleVersions;
    return null;
  });
  return compatibilityMap;
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
        .reduce((colonyRolesMap: ColonyRolesMap, { values }) => {
          const { user, domainId, role, setTo }: ColonyRoleSetValues = values;
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
    .forEach(({ values }) => {
      const { user, setTo }: RecoveryRoleSetValues = values;
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

  const skillIdString = bigNumberify(skillId || '').toString();

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
