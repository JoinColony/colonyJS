import { ContractTransaction, BigNumberish, BigNumber } from 'ethers';
import {
  type TxOverrides,
  type VotingReputationVersion,
  ColonyRole,
  getChildIndex,
  getPermissionProofs,
} from '@colony/core';
import {
  type VotingReputationEvents,
  VotingReputationEvents__factory as VotingReputationEventsFactory,
} from '@colony/events';

import { ClientType } from '../../../../constants';
import { AugmentedIColony } from '../../../Core/augments/commonAugments';
import { AnyVotingReputation } from '../contracts';

export type AugmentedEstimate<
  T extends AnyVotingReputation = AnyVotingReputation,
> = T['estimateGas'] & {
  /**
   * Same as {@link stakeMotion}, but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _amount - The amount of tokens being staked
   * @param _motionId - The id of the motion
   * @param _vote - The side being supported (0 = NAY, 1 = YAY)
   */
  stakeMotionWithProofs(
    _motionId: BigNumberish,
    _vote: BigNumberish,
    _amount: BigNumberish,
    overrides?: TxOverrides,
  ): Promise<BigNumber>;

  /**
   * Same as {@link escalateMotion}, but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _motionId - The id of the motion
   * @param _newDomainId - The desired domain of escalation
   */
  escalateMotionWithProofs(
    _motionId: BigNumberish,
    _newDomainId: BigNumberish, // parent, or ancestor, domain id
    overrides?: TxOverrides,
  ): Promise<BigNumber>;

  /**
   * Same as {@link claimReward}, but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _motionId - The id of the motion
   * @param _staker - The staker whose reward is being claimed
   * @param _vote - The side being supported (0 = NAY, 1 = YAY)
   */
  claimRewardWithProofs(
    _motionId: BigNumberish,
    _staker: string,
    _vote: BigNumberish,
    overrides?: TxOverrides,
  ): Promise<BigNumber>;
};

export type AugmentedVotingReputation<
  T extends AnyVotingReputation = AnyVotingReputation,
> = T & {
  clientType: ClientType.VotingReputationClient;
  clientVersion: VotingReputationVersion;
  /** An instance of the corresponding ColonyClient */
  colonyClient: AugmentedIColony;

  /**
   * The votingReputationsEvents contract supports all events across all versions.
   * Isn't that amazing?
   * It's an ethers contract with only events to filter
   */
  votingReputationEvents: VotingReputationEvents;

  estimateGas: T['estimateGas'] & AugmentedEstimate;

  /**
   * Same as {@link stakeMotion}, but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _amount - The amount of tokens being staked
   * @param _motionId - The id of the motion
   * @param _vote - The side being supported (0 = NAY, 1 = YAY)
   */
  stakeMotionWithProofs(
    _motionId: BigNumberish,
    _vote: BigNumberish,
    _amount: BigNumberish,
    overrides?: TxOverrides,
  ): Promise<ContractTransaction>;

  /**
   * Same as {@link escalateMotion}, but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _motionId - The id of the motion
   * @param _newDomainId - The desired domain of escalation
   */
  escalateMotionWithProofs(
    _motionId: BigNumberish,
    _newDomainId: BigNumberish,
    overrides?: TxOverrides,
  ): Promise<ContractTransaction>;

  /**
   * Same as {@link claimReward}, but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _motionId - The id of the motion
   * @param _staker - The staker whose reward is being claimed
   * @param _vote - The side being supported (0 = NAY, 1 = YAY)
   */
  claimRewardWithProofs(
    _motionId: BigNumberish,
    _staker: string,
    _vote: BigNumberish,
    overrides?: TxOverrides,
  ): Promise<ContractTransaction>;
};

async function stakeMotionWithProofs(
  this: AugmentedVotingReputation,
  _motionId: BigNumberish,
  _vote: BigNumberish,
  _amount: BigNumberish,
  overrides: TxOverrides = {},
): Promise<ContractTransaction> {
  const { domainId, rootHash } = await this.getMotion(_motionId);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.colonyClient.networkClient,
    this.colonyClient,
    domainId,
    ColonyRole.Arbitration,
    this.address,
  );

  const { skillId } = await this.colonyClient.getDomain(domainId);
  const walletAddress = await this.signer.getAddress();
  const { key, value, branchMask, siblings } =
    await this.colonyClient.getReputation(skillId, walletAddress, rootHash);

  return this.stakeMotion(
    _motionId,
    permissionDomainId,
    childSkillIndex,
    _vote,
    _amount,
    key,
    value,
    branchMask,
    siblings,
    overrides,
  );
}

async function escalateMotionWithProofs(
  this: AugmentedVotingReputation,
  _motionId: BigNumberish,
  _newDomainId: BigNumberish, // parent, or ancestor, domain id
  overrides: TxOverrides = {},
): Promise<ContractTransaction> {
  const { domainId, rootHash } = await this.getMotion(_motionId);
  const motionDomainChildSkillIdIndex = await getChildIndex(
    this.colonyClient.networkClient,
    this.colonyClient,
    BigNumber.from(_newDomainId),
    domainId,
  );
  if (motionDomainChildSkillIdIndex.toNumber() === -1) {
    throw new Error('Child skill index could not be found');
  }

  const { skillId } = await this.colonyClient.getDomain(domainId);
  const walletAddress = await this.signer.getAddress();
  const { key, value, branchMask, siblings } =
    await this.colonyClient.getReputation(skillId, walletAddress, rootHash);

  return this.escalateMotion(
    _motionId,
    _newDomainId,
    motionDomainChildSkillIdIndex,
    key,
    value,
    branchMask,
    siblings,
    overrides,
  );
}

async function claimRewardWithProofs(
  this: AugmentedVotingReputation,
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

  return this.claimReward(
    _motionId,
    permissionDomainId,
    childSkillIndex,
    _staker,
    _vote,
    overrides,
  );
}

async function estimateStakeMotionWithProofs(
  this: AugmentedVotingReputation,
  _motionId: BigNumberish,
  _vote: BigNumberish,
  _amount: BigNumberish,
  overrides: TxOverrides = {},
): Promise<BigNumber> {
  const { domainId, rootHash } = await this.getMotion(_motionId);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.colonyClient.networkClient,
    this.colonyClient,
    domainId,
    ColonyRole.Arbitration,
    this.address,
  );

  const { skillId } = await this.colonyClient.getDomain(domainId);
  const walletAddress = await this.signer.getAddress();
  const { key, value, branchMask, siblings } =
    await this.colonyClient.getReputation(skillId, walletAddress, rootHash);

  return this.estimateGas.stakeMotion(
    _motionId,
    permissionDomainId,
    childSkillIndex,
    _vote,
    _amount,
    key,
    value,
    branchMask,
    siblings,
    overrides,
  );
}

async function estimateEscalateMotionWithProofs(
  this: AugmentedVotingReputation,
  _motionId: BigNumberish,
  _newDomainId: BigNumberish, // parent, or ancestor, domain id
  overrides: TxOverrides = {},
): Promise<BigNumber> {
  const { domainId, rootHash } = await this.getMotion(_motionId);
  const motionDomainChildSkillIdIndex = await getChildIndex(
    this.colonyClient.networkClient,
    this.colonyClient,
    BigNumber.from(_newDomainId),
    domainId,
  );
  if (motionDomainChildSkillIdIndex.toNumber() === -1) {
    throw new Error('Child skill index could not be found');
  }

  const { skillId } = await this.colonyClient.getDomain(domainId);
  const walletAddress = await this.signer.getAddress();
  const { key, value, branchMask, siblings } =
    await this.colonyClient.getReputation(skillId, walletAddress, rootHash);

  return this.estimateGas.escalateMotion(
    _motionId,
    _newDomainId,
    motionDomainChildSkillIdIndex,
    key,
    value,
    branchMask,
    siblings,
    overrides,
  );
}

async function estimateClaimRewardWithProofs(
  this: AugmentedVotingReputation,
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
  return this.estimateGas.claimReward(
    _motionId,
    permissionDomainId,
    childSkillIndex,
    _staker,
    _vote,
    overrides,
  );
}

export const addAugments = <T extends AugmentedVotingReputation>(
  instance: T,
  colonyClient: AugmentedIColony,
): T => {
  /* eslint-disable no-param-reassign */
  instance.clientType = ClientType.VotingReputationClient;
  instance.colonyClient = colonyClient;

  instance.stakeMotionWithProofs = stakeMotionWithProofs.bind(instance);
  instance.escalateMotionWithProofs = escalateMotionWithProofs.bind(instance);
  instance.claimRewardWithProofs = claimRewardWithProofs.bind(instance);

  instance.estimateGas.stakeMotionWithProofs =
    estimateStakeMotionWithProofs.bind(instance);
  instance.estimateGas.escalateMotionWithProofs =
    estimateEscalateMotionWithProofs.bind(instance);
  instance.estimateGas.claimRewardWithProofs =
    estimateClaimRewardWithProofs.bind(instance);

  instance.votingReputationEvents = VotingReputationEventsFactory.connect(
    instance.address,
    instance.signer || instance.provider,
  );

  return instance;
  /* eslint-enable no-param-reassign */
};
