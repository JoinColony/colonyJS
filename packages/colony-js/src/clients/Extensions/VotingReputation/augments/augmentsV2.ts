import {
  ContractTransaction,
  BigNumber,
  BigNumberish,
  BytesLike,
} from 'ethers';
import { type TxOverrides, getCreateMotionProofs } from '@colony/core';

import { AugmentedIColony } from '../../../Core/augments/commonAugments.js';
import {
  VotingReputationV2,
  VotingReputationV3,
  VotingReputationV4,
  VotingReputationV5,
  VotingReputationV6,
  VotingReputationV7,
  VotingReputationV8,
} from '../contracts.js';
import { AnyVotingReputationClient } from '../exports.js';
import {
  addAugments as addCommonAugments,
  AugmentedVotingReputation,
} from './commonAugments.js';

type ValidVotingReputation =
  | VotingReputationV2
  | VotingReputationV3
  | VotingReputationV4
  | VotingReputationV5
  | VotingReputationV6
  | VotingReputationV7
  | VotingReputationV8;

export interface AugmentedEstimateV2 {
  /**
   * Same as {@link createMotion}, but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _action - A bytes array encoding a function call
   * @param _altTarget - The contract to which we send the action (0x0 for the colony)
   * @param _domainId - The domain where we vote on the motion
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
   * Same as {@link createMotion}, but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _action - A bytes array encoding a function call
   * @param _altTarget - The contract to which we send the action (0x0 for the colony)
   * @param _domainId - The domain where we vote on the motion
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

async function createMotionWithProofs(
  this: FullAugmentedVotingReputation,
  _domainId: BigNumberish,
  _altTarget: string,
  _action: BytesLike,
  overrides: TxOverrides = {},
): Promise<ContractTransaction> {
  const { actionCid, key, value, branchMask, siblings } =
    await getCreateMotionProofs(
      this.colonyClient.networkClient,
      this.colonyClient,
      this.colonyClient.reputationClient,
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
      this.colonyClient.networkClient,
      this.colonyClient,
      this.colonyClient.reputationClient,
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
