import {
  type ContractTransaction,
  type BigNumber,
  type BigNumberish,
} from 'ethers';
import {
  type TxOverrides,
  ColonyRole,
  getPermissionProofs,
} from '@colony/core';

import { type AugmentedIColony } from '../../../Core/augments/commonAugments.js';
import {
  type VotingReputationV7,
  type VotingReputationV8,
  type VotingReputationV9,
  type VotingReputationV10,
  type VotingReputationV11,
  type VotingReputationV12,
} from '../contracts.js';
import { type AugmentedVotingReputation } from './commonAugments.js';
import { addAugments as addAugmentsV2, type AugmentsV2 } from './augmentsV2.js';

type ValidVotingReputation =
  | VotingReputationV7
  | VotingReputationV8
  | VotingReputationV9
  | VotingReputationV10
  | VotingReputationV11
  | VotingReputationV12;

export interface AugmentedEstimateV3 {
  /**
   * Same as {@link claimMisalignedReward}, but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _motionId - The id of the motion
   * @param _staker - The staker whose reward is being claimed
   * @param _vote - The side being supported (0 = NAY, 1 = YAY)
   */
  claimMisalignedRewardWithProofs(
    _motionId: BigNumberish,
    _staker: string,
    _vote: BigNumberish,
    overrides?: TxOverrides,
  ): Promise<BigNumber>;
}

export type AugmentsV3<T extends ValidVotingReputation> = {
  /**
   * Same as {@link claimMisalignedReward}, but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _motionId - The id of the motion
   * @param _staker - The staker whose reward is being claimed
   * @param _vote - The side being supported (0 = NAY, 1 = YAY)
   */
  claimMisalignedRewardWithProofs(
    _motionId: BigNumberish,
    _staker: string,
    _vote: BigNumberish,
    overrides?: TxOverrides,
  ): Promise<ContractTransaction>;

  estimateGas: T['estimateGas'] & AugmentedEstimateV3;
};

type FullAugmentedVotingReputation =
  AugmentedVotingReputation<ValidVotingReputation> &
    AugmentsV2<ValidVotingReputation> &
    AugmentsV3<ValidVotingReputation>;

async function claimMisalignedRewardWithProofs(
  this: FullAugmentedVotingReputation,
  _motionId: BigNumberish,
  _staker: string,
  _vote: BigNumberish,
  overrides: TxOverrides = {},
): Promise<ContractTransaction> {
  const { domainId } = await this.getMotion(_motionId);

  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.colonyClient.networkClient,
    this.colonyClient,
    domainId,
    ColonyRole.Arbitration,
    this.address,
  );

  return this.claimMisalignedReward(
    _motionId,
    permissionDomainId,
    childSkillIndex,
    _staker,
    _vote,
    overrides,
  );
}

async function estimateClaimMisalignedRewardWithProofs(
  this: FullAugmentedVotingReputation,
  _motionId: BigNumberish,
  _staker: string,
  _vote: BigNumberish,
  overrides: TxOverrides = {},
): Promise<BigNumber> {
  const { domainId } = await this.getMotion(_motionId);

  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.colonyClient.networkClient,
    this.colonyClient,
    domainId,
    ColonyRole.Arbitration,
    this.address,
  );

  return this.estimateGas.claimMisalignedReward(
    _motionId,
    permissionDomainId,
    childSkillIndex,
    _staker,
    _vote,
    overrides,
  );
}

export const addAugments = (
  instance: AugmentedVotingReputation<ValidVotingReputation>,
  colonyClient: AugmentedIColony,
): FullAugmentedVotingReputation => {
  const augmentedInstance = addAugmentsV2(
    instance,
    colonyClient,
  ) as FullAugmentedVotingReputation;

  augmentedInstance.claimMisalignedRewardWithProofs =
    claimMisalignedRewardWithProofs.bind(augmentedInstance);
  augmentedInstance.estimateGas.claimMisalignedRewardWithProofs =
    estimateClaimMisalignedRewardWithProofs.bind(augmentedInstance);

  return augmentedInstance;
};
