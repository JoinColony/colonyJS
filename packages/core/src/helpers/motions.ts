import {
  BigNumberish,
  BytesLike,
  MaxUint256,
  toBigInt,
  ZeroAddress,
  zeroPadValue,
} from 'ethers';

import { ColonyRole, Id } from '../constants.js';
import {
  MotionTarget__factory as MotionTargetFactory,
  MotionTarget,
} from '../contracts/index.js';

import { parsePermissionedAction } from './permissions.js';
import {
  CommonColony,
  CommonNetwork,
  CommonVotingReputation,
} from './types.js';
import { ReputationClient } from './reputation.js';
import { hex2ColonyRoles } from './network.js';

async function getCapabilityRolesAsArray(
  contract: MotionTarget,
  _sig: BytesLike,
): Promise<ColonyRole[]> {
  let rolesHexString: string;
  try {
    // This will work if the target has the getCapabilityRoles method
    rolesHexString = await contract.getCapabilityRoles(zeroPadValue(_sig, 4));
    return hex2ColonyRoles(rolesHexString);
  } catch (e) {
    // Otherwise we assume that the encoded method is not permissioned
    return [];
  }
}

/**
 * Gets the necessary proofs for motion creation
 *
 * This gets the reputation and domain proofs for motion creation
 *
 * @param contract - Any VotingReputation extension contract
 * @param domainId - Domain id the motion will be created in
 * @param altTarget - Target address for the motion (0x0 if Colony contract)
 * @param action - The encoded action the motion will execute when finalized
 *
 * @returns The necessary reputation and domain proofs to create a motion
 */
export async function getCreateMotionProofs(
  network: CommonNetwork,
  colony: CommonColony,
  reputation: ReputationClient,
  votingReputation: CommonVotingReputation,
  domainId: BigNumberish,
  altTarget: string,
  action: BytesLike,
) {
  let actionCid;

  const { skillId } = await colony.getDomain(domainId);
  const { sig, permissionDomainId, childSkillIndex } =
    parsePermissionedAction(action);

  const motionTarget = MotionTargetFactory.connect(
    altTarget,
    votingReputation.runner,
  );
  const capabilityRoles = await getCapabilityRolesAsArray(motionTarget, sig);

  // Requires root or is not a permissioned function
  if (
    capabilityRoles.includes(ColonyRole.Root) ||
    capabilityRoles.length === 0
  ) {
    if (!(toBigInt(domainId) === 1n)) {
      throw new Error(
        `On root or not permissioned actions, the domainId needs to be ${Id.RootDomain}`,
      );
    }
    // No permission proof needed
    actionCid = MaxUint256;
  } else {
    // Get associated skill of permissionDomainId of action
    const { skillId: permissionSkillId } = await colony.getDomain(
      permissionDomainId,
    );
    // Get the associated skill of the domain the action is taking place in
    const actionSkillId = await network.getChildSkillId(
      permissionSkillId,
      childSkillIndex,
    );
    // It's the same one, that's fine
    if (actionSkillId === skillId) {
      actionCid = MaxUint256;
    } else {
      // Find the relationship between the skill of the domain we want to create the motion in and the skill of the domain the action is taking place in
      const { children } = await network.getSkill(skillId);
      const idx = children.findIndex((cid) => cid === actionSkillId);
      if (idx < 0) {
        throw new Error(
          `Could not find ${actionSkillId} as a child of ${skillId}`,
        );
      }
      actionCid = toBigInt(idx);
    }
  }

  const { key, value, branchMask, siblings } =
    await reputation.getReputationWithProofs(skillId, ZeroAddress);

  return {
    actionCid,
    key,
    value,
    branchMask,
    siblings,
  };
}
