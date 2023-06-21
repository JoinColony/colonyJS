import { BigNumber, BigNumberish, BytesLike, constants, utils } from 'ethers';

import { ColonyRole, Id } from '../constants.js';
import { CommonColony, CommonNetwork } from './types.js';
import { getChildIndex } from './network.js';

const { hexDataSlice } = utils;
const { MaxUint256 } = constants;

/*
 * Parses a permissioned action that is supposed to be executed (e.g. in a motion)
 *
 * The signature, as well as the domain in which the permission exists are returned
 *
 * @param action - Encoded action (an encoded transaction, essentially)
 *
 * @returns Signature, domain the permissions exists in and the index on the children array of the parent domain
 */
export const parsePermissionedAction = (action: BytesLike) => {
  const sig = hexDataSlice(action, 0, 3);
  const permissionDomainId = BigNumber.from(hexDataSlice(action, 4, 35));
  const childSkillIndex = BigNumber.from(hexDataSlice(action, 36, 67));
  return { sig, permissionDomainId, childSkillIndex };
};

const getSinglePermissionProofs = async (
  network: CommonNetwork,
  colony: CommonColony,
  domainId: BigNumberish,
  role: ColonyRole,
  customAddress?: string,
  /* [permissionDomainId, childSkillIndex] */
): Promise<[BigNumber, BigNumber, string]> => {
  const walletAddress = customAddress || (await colony.signer.getAddress());
  const hasPermissionInDomain = await colony.hasUserRole(
    walletAddress,
    domainId,
    role,
  );
  if (hasPermissionInDomain) {
    return [BigNumber.from(domainId), MaxUint256, walletAddress];
  }
  // TODO: once we allow nested domains on the network level, this needs to traverse down the skill/domain tree. Use binary search
  const foundDomainId = BigNumber.from(Id.RootDomain);
  const hasPermissionInAParentDomain = await colony.hasUserRole(
    walletAddress,
    foundDomainId,
    role,
  );
  if (!hasPermissionInAParentDomain) {
    throw new Error(
      `${walletAddress} does not have the permission ${role} in any parent domain`,
    );
  }
  const idx = await getChildIndex(network, colony, foundDomainId, domainId);
  if (idx.lt(0)) {
    throw new Error(
      `${walletAddress} does not have the permission ${role} in any parent domain`,
    );
  }
  return [foundDomainId, idx, walletAddress];
};

const getMultiPermissionProofs = async (
  network: CommonNetwork,
  colony: CommonColony,
  domainId: BigNumberish,
  roles: ColonyRole[],
  customAddress?: string,
): Promise<[BigNumber, BigNumber, string]> => {
  const proofs = await Promise.all(
    roles.map((role) =>
      getSinglePermissionProofs(network, colony, domainId, role, customAddress),
    ),
  );

  // We are checking that all of the permissions resolve to the same domain and childSkillIndex
  for (let idx = 0; idx < proofs.length; idx += 1) {
    const [permissionDomainId, childSkillIndex, address] = proofs[idx];
    if (
      !permissionDomainId.eq(proofs[0][0]) ||
      !childSkillIndex.eq(proofs[0][1])
    ) {
      throw new Error(
        `${address} has to have all required roles (${roles}) in the same domain`,
      );
    }
  }

  // It does not need to be an array because if we get here, all the proofs are the same
  return proofs[0];
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
 * @param client - Any ColonyClient
 * @param domainId - Domain id the method needs to act in
 * @param roles - Permissioning role(s) that the methods needs to function
 * @param customAddress - A custom address to get the permission proofs for (defaults to the signer's address)
 *
 * @returns Tuple of `[permissionDomainId, childSkillIndex, permissionAddress]`
 */
export const getPermissionProofs = async (
  network: CommonNetwork,
  colony: CommonColony,
  domainId: BigNumberish,
  roles: ColonyRole | ColonyRole[],
  customAddress?: string,
): Promise<[BigNumber, BigNumber, string]> => {
  if (Array.isArray(roles)) {
    if (roles.length === 1) {
      return getPermissionProofs(
        network,
        colony,
        domainId,
        roles[0],
        customAddress,
      );
    }
    return getMultiPermissionProofs(
      network,
      colony,
      domainId,
      roles,
      customAddress,
    );
  }
  return getSinglePermissionProofs(
    network,
    colony,
    domainId,
    roles,
    customAddress,
  );
};
