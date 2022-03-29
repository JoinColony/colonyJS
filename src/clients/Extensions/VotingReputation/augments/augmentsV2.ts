import {
  ContractTransaction,
  BigNumber,
  BigNumberish,
  BytesLike,
  constants,
} from 'ethers';

import { ColonyRole, TxOverrides } from '../../../../types';
import { getUtilsClient } from '../../../Core/exports';
import {
  VotingReputationV2,
  VotingReputationV3,
} from '../../../../contracts/VotingReputation/exports';
import { AugmentedIColony } from '../../../Core/augments/commonAugments';

import {
  addAugments as addCommonAugments,
  AugmentedVotingReputation,
} from './commonAugments';
import { Id } from '../../../../constants';
import { parsePermissionedAction } from '../../../../utils';

type ValidVotingReputation = VotingReputationV2 | VotingReputationV3;

export interface AugmentedEstimateV2 {
  createMotionWithProofs(
    _domainId: BigNumberish,
    _altTarget: string,
    _action: BytesLike,
    overrides?: TxOverrides,
  ): Promise<BigNumber>;
}

export type AugmentsV2<T extends ValidVotingReputation> = {
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

async function getCreateMotionProofs(
  contract: FullAugmentedVotingReputation,
  domainId: BigNumberish,
  altTarget: string,
  action: BytesLike,
) {
  let actionCid;

  const { skillId } = await contract.colonyClient.getDomain(domainId);
  const { sig, permissionDomainId, childSkillIndex } =
    parsePermissionedAction(action);

  const utilsClient = getUtilsClient(
    altTarget,
    contract.signer || contract.provider,
  );
  const capabilityRoles = await utilsClient.getCapabilityRolesAsArray(sig);

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
    actionCid = constants.MaxUint256;
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
      actionCid = constants.MaxUint256;
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

  const walletAddress = await contract.signer.getAddress();

  const { key, value, branchMask, siblings } =
    await contract.colonyClient.getReputation(skillId, walletAddress);

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
    await getCreateMotionProofs(this, _domainId, _altTarget, _action);

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
    await getCreateMotionProofs(this, _domainId, _altTarget, _action);

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
