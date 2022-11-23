import {
  ContractTransaction,
  BigNumber,
  BigNumberish,
  BytesLike,
  constants,
} from 'ethers';

import { ColonyRole, TxOverrides } from '../../../../types';
import { getMotionTargetClient } from '../../../Core/exports';
import {
  VotingReputationV2,
  VotingReputationV3,
  VotingReputationV4,
  VotingReputationV5,
  VotingReputationV6,
  VotingReputationV7,
} from '../../../../contracts/VotingReputation/exports';
import { AugmentedIColony } from '../../../Core/augments/commonAugments';

import {
  addAugments as addCommonAugments,
  AugmentedVotingReputation,
} from './commonAugments';
import { Id } from '../../../../constants';
import { parsePermissionedAction } from '../../../../utils';
import { AnyVotingReputationClient } from '../exports';

const { AddressZero, MaxUint256 } = constants;

type ValidVotingReputation =
  | VotingReputationV2
  | VotingReputationV3
  | VotingReputationV4
  | VotingReputationV5
  | VotingReputationV6
  | VotingReputationV7;

export interface AugmentedEstimateV2 {
  /**
   * Same as [[createMotion]], but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _action A bytes array encoding a function call
   * @param _altTarget The contract to which we send the action (0x0 for the colony)
   * @param _domainId The domain where we vote on the motion
   */
  createMotionWithProofs(
    _domainId: BigNumberish,
    _altTarget: string,
    _action: BytesLike,
    overrides?: TxOverrides,
  ): Promise<BigNumber>;
}

export type AugmentsV2<T extends ValidVotingReputation> = {
  /**
   * Same as [[createMotion]], but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _action A bytes array encoding a function call
   * @param _altTarget The contract to which we send the action (0x0 for the colony)
   * @param _domainId The domain where we vote on the motion
   */
  createMotionWithProofs(
    _domainId: BigNumberish,
    _altTarget: string,
    _action: BytesLike,
    overrides?: TxOverrides,
  ): Promise<ContractTransaction>;
  estimateGas: T['estimateGas'] & AugmentedEstimateV2;
};

type FullAugmentedVotingReputation =
  AugmentedVotingReputation<ValidVotingReputation> &
    AugmentsV2<ValidVotingReputation>;

export async function getCreateMotionProofs(
  contract: AnyVotingReputationClient,
  domainId: BigNumberish,
  altTarget: string,
  action: BytesLike,
) {
  let actionCid;

  const { skillId } = await contract.colonyClient.getDomain(domainId);
  const { sig, permissionDomainId, childSkillIndex } =
    parsePermissionedAction(action);

  const motionTargetClient = getMotionTargetClient(
    altTarget,
    contract.signer || contract.provider,
  );
  const capabilityRoles = await motionTargetClient.getCapabilityRolesAsArray(
    sig,
  );

  // Requires root or is not a permissioned function
  if (
    capabilityRoles.includes(ColonyRole.Root) ||
    capabilityRoles.length === 0
  ) {
    if (!BigNumber.from(domainId).eq(1)) {
      throw new Error(
        `On root or not permissioned actions, the domainId needs to be ${Id.RootDomain}`,
      );
    }
    // No permission proof needed
    actionCid = MaxUint256;
  } else {
    // Get associated skill of permissionDomainId of action
    const { skillId: permissionSkillId } =
      await contract.colonyClient.getDomain(permissionDomainId);
    // Get the associated skill of the domain the action is taking place in
    const actionSkillId =
      await contract.colonyClient.networkClient.getChildSkillId(
        permissionSkillId,
        childSkillIndex,
      );
    // It's the same one, that's fine
    if (actionSkillId.eq(skillId)) {
      actionCid = MaxUint256;
    } else {
      // Find the relationship between the skill of the domain we want to create the motion in and the skill of the domain the action is taking place in
      const { children } = await contract.colonyClient.networkClient.getSkill(
        skillId,
      );
      const idx = children.findIndex((cid) => cid.eq(actionSkillId));
      if (idx < 0) {
        throw new Error(
          `Could not find ${actionSkillId} as a child of ${skillId}`,
        );
      }
      actionCid = BigNumber.from(idx);
    }
  }

  const { key, value, branchMask, siblings } =
    await contract.colonyClient.getReputation(skillId, AddressZero);

  return {
    actionCid,
    key,
    value,
    branchMask,
    siblings,
  };
}

async function createMotionWithProofs(
  this: FullAugmentedVotingReputation,
  _domainId: BigNumberish,
  _altTarget: string,
  _action: BytesLike,
  overrides: TxOverrides = {},
): Promise<ContractTransaction> {
  const { actionCid, key, value, branchMask, siblings } =
    await getCreateMotionProofs(
      this as AnyVotingReputationClient,
      _domainId,
      _altTarget,
      _action,
    );

  return this.createMotion(
    _domainId,
    actionCid,
    _altTarget,
    _action,
    key,
    value,
    branchMask,
    siblings,
    overrides,
  );
}

async function estimateCreateMotionWithProofs(
  this: FullAugmentedVotingReputation,
  _domainId: BigNumberish,
  _altTarget: string,
  _action: BytesLike,
  overrides: TxOverrides = {},
): Promise<BigNumber> {
  const { actionCid, key, value, branchMask, siblings } =
    await getCreateMotionProofs(
      this as AnyVotingReputationClient,
      _domainId,
      _altTarget,
      _action,
    );

  return this.estimateGas.createMotion(
    _domainId,
    actionCid,
    _altTarget,
    _action,
    key,
    value,
    branchMask,
    siblings,
    overrides,
  );
}

export const addAugments = (
  instance: AugmentedVotingReputation<ValidVotingReputation>,
  colonyClient: AugmentedIColony,
): FullAugmentedVotingReputation => {
  const augmentedInstance = addCommonAugments(
    instance,
    colonyClient,
  ) as FullAugmentedVotingReputation;

  augmentedInstance.createMotionWithProofs =
    createMotionWithProofs.bind(augmentedInstance);
  augmentedInstance.estimateGas.createMotionWithProofs =
    estimateCreateMotionWithProofs.bind(augmentedInstance);

  return augmentedInstance;
};
