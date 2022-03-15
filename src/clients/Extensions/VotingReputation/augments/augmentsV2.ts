import {
  ContractTransaction,
  BigNumber,
  BigNumberish,
  Overrides,
  BytesLike,
} from 'ethers';

// import { ColonyRole } from '../../../../types';
import {
  VotingReputationV2,
  VotingReputationV3,
} from '../../../../contracts/VotingReputation/exports';
import {
  AugmentedIColony,
  // getPermissionProofs,
  // getChildIndex,
} from '../../../Core/augments/commonAugments';

import {
  addAugments as addCommonAugments,
  AugmentedVotingReputation,
} from './commonAugments';

type ValidVotingReputation = VotingReputationV2 | VotingReputationV3;

export interface AugmentedEstimateV2 {
  createMotionWithProofs(
    _domainId: BigNumberish,
    _childSkillIndex: BigNumberish,
    _altTarget: string,
    _action: BytesLike,
    _key: BytesLike,
    _value: BytesLike,
    _branchMask: BigNumberish,
    _siblings: BytesLike[],
    overrides?: Overrides,
  ): Promise<BigNumber>;
}

export type AugmentsV2<T extends ValidVotingReputation> = {
  createMotionWithProofs(
    _domainId: BigNumberish,
    _childSkillIndex: BigNumberish,
    _altTarget: string,
    _action: BytesLike,
    _key: BytesLike,
    _value: BytesLike,
    _branchMask: BigNumberish,
    _siblings: BytesLike[],
    overrides?: Overrides,
  ): Promise<ContractTransaction>;
  estimateGas: T['estimateGas'] & AugmentedEstimateV2;
};

type FullAugmentedVotingReputation =
  AugmentedVotingReputation<ValidVotingReputation> &
    AugmentsV2<ValidVotingReputation>;

async function createMotionWithProofs(
  this: FullAugmentedVotingReputation,
  _domainId: BigNumberish,
  _childSkillIndex: BigNumberish,
  _altTarget: string,
  _action: BytesLike,
  _key: BytesLike,
  _value: BytesLike,
  _branchMask: BigNumberish,
  _siblings: BytesLike[],
  overrides?: Overrides,
): Promise<ContractTransaction> {
  // TODO: this should be implemented
  // const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
  //   this.colonyClient,
  //   _domainId,
  //   ColonyRole.Arbitration,
  //   this.address,
  // );

  return this.createMotion(
    _domainId,
    _childSkillIndex,
    _altTarget,
    _action,
    _key,
    _value,
    _branchMask,
    _siblings,
    overrides,
  );
}

async function estimateCreateMotionWithProofs(
  this: FullAugmentedVotingReputation,
  _domainId: BigNumberish,
  _childSkillIndex: BigNumberish,
  _altTarget: string,
  _action: BytesLike,
  _key: BytesLike,
  _value: BytesLike,
  _branchMask: BigNumberish,
  _siblings: BytesLike[],
  overrides?: Overrides,
): Promise<BigNumber> {
  // TODO: this should be implemented
  // const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
  //   this.colonyClient,
  //   _domainId,
  //   ColonyRole.Arbitration,
  //   this.address,
  // );

  return this.estimateGas.createMotion(
    _domainId,
    _childSkillIndex,
    _altTarget,
    _action,
    _key,
    _value,
    _branchMask,
    _siblings,
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
