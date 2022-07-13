import { Extension, Id, VotingReputationClientV4 } from '@colony/colony-js';
import {
  MotionEventSetEventObject,
  MotionStakedEventObject,
  UserTokenApprovedEventObject,
} from '@colony/colony-js/extras';
import { BigNumber, BigNumberish } from 'ethers';
import { extractEvent } from '../utils';

import { SupportedColonyClient } from './Colony';
import { MotionCreator } from './MotionCreator';

export enum Vote {
  Nay,
  Yay,
}

export type SupportedVotingReputationClient = VotingReputationClientV4;
export const SUPPORTED_VOTING_REPUTATION_VERSION = 4;

export const getVotingReputationClient = async (
  colonyClient: SupportedColonyClient,
) => {
  const votingReputationClient = await colonyClient.getExtensionClient(
    Extension.VotingReputation,
  );

  if (
    votingReputationClient.clientVersion !== SUPPORTED_VOTING_REPUTATION_VERSION
  ) {
    throw new Error(
      `The installed version ${votingReputationClient.clientVersion} of the VotingReputation extension is not supported. Please upgrade the extension in your Colony`,
    );
  }

  return votingReputationClient;
};

const REP_DIVISOR = BigNumber.from(10).pow(18);

export class VotingReputation {
  private colonyClient: SupportedColonyClient;

  private votingReputationClient: SupportedVotingReputationClient;

  create: MotionCreator;

  constructor(
    colonyClient: SupportedColonyClient,
    votingReputationClient: SupportedVotingReputationClient,
  ) {
    this.create = new MotionCreator(colonyClient, votingReputationClient);
    this.colonyClient = colonyClient;
    this.votingReputationClient = votingReputationClient;
  }

  /**
   * Get a motion by its id
   *
   * @remarks Will throw if motionId does not exist
   *
   * @param motionId The motionId to get the information for
   *
   * @returns A Motion object
   */
  async getMotion(motionId: BigNumberish) {
    const motionCount = await this.votingReputationClient.getMotionCount();
    if (motionCount.lt(motionId)) {
      throw new Error(`Motion with id ${motionId} does not exist`);
    }
    return this.votingReputationClient.getMotion(motionId);
  }

  /**
   * Get the minimum stake that has to be supplied for a motion and a certain vote (NOT for activation)
   *
   * @remarks To get the missing amount for activation, call [[getMotionStakes]]
   *
   * @param motionId The motionId of the motion
   * @param vote The vote to be cast
   *
   * @returns The minimum stake amount
   */
  async getMinStake(motionId: BigNumberish, vote: Vote) {
    // skillRep is the amount of reputation in the domain the motion was created in
    // at the time the motion was created
    const {
      skillRep,
      stakes: [totalNay, totalYay],
    } = await this.getMotion(motionId);

    // Fraction of the total amount that is required to be staked for either side
    // (Yay or Nay) to be activated
    const totalStakeFraction =
      await this.votingReputationClient.getTotalStakeFraction();
    // Fraction of the total amount that has to be staked per transaction
    const userMinStakeFraction =
      await this.votingReputationClient.getUserMinStakeFraction();
    // Total amount that is needed for activation
    const requiredStakeForActivation = skillRep
      .mul(totalStakeFraction)
      .div(REP_DIVISOR);
    // Total amount that is needed per transaction
    const minStakePerUser = requiredStakeForActivation
      .mul(userMinStakeFraction)
      .div(REP_DIVISOR);

    // The minimum amount to be staked is usually the minStakePerUser
    // With one exception. If less than minStakePerUser is needed to activate the
    // voted side then this is the minimum amount
    // E.g.:
    // Stake to activation: 10
    // Already staked for Yay: 9
    // Minimum stake per transaction: 2
    // Here the minimum becomes 1 (instead of 2) as this is what's missing for activation
    let minStake = minStakePerUser;
    if (vote === Vote.Nay && totalNay.lt(requiredStakeForActivation)) {
      const requiredNay = requiredStakeForActivation.sub(totalNay);
      minStake = requiredNay.lt(minStakePerUser)
        ? requiredNay
        : minStakePerUser;
    } else if (totalYay.lt(requiredStakeForActivation)) {
      const requiredYay = requiredStakeForActivation.sub(totalYay);
      minStake = requiredYay.lt(minStakePerUser)
        ? requiredYay
        : minStakePerUser;
    }
    return minStake;
  }

  /**
   * Get the amounts remaining for Yay/Nay sides to be activated
   *
   * @param motionId The motionId of the motion
   *
   * @returns An object containing the remaining amounts
   */
  async getRemainingMotionStakes(motionId: BigNumberish) {
    const {
      skillRep,
      stakes: [totalNay, totalYay],
    } = await this.getMotion(motionId);

    // Fraction of the total amount that is required to be staked for either side
    // (Yay or Nay) to be activated
    const totalStakeFraction =
      await this.votingReputationClient.getTotalStakeFraction();
    // Fraction of the total amount that has to be staked per transaction
    // Total amount that is needed for activation
    const requiredStakeForActivation = skillRep
      .mul(totalStakeFraction)
      .div(REP_DIVISOR);

    return {
      remainingToFullyNayStaked: requiredStakeForActivation.sub(totalNay),
      remainingToFullyYayStaked: requiredStakeForActivation.sub(totalYay),
    };
  }

  /**
   * Approve `amount` of the "activated" native tokens of a user for staking in a specific team
   * After a token was "activated" (approved and deposited via the native token interface) it can be used for staking motions. To stake a motion, the token amount for staking has to be approved for the domain the motion was created in. See also the example in [[VotingReputation.stakeMotion]]
   *
   * @param amount Amount of "activated" tokens to be approved for staking
   * @param teamId Team that the approved tokens can be used in for staking motions
   *
   * @returns A tupel of event data and contract receipt
   *
   * **Event data**
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `token` | string | The address of the token that is approved for staking |
   * | `user` | string | The address of the VotingReputation contract |
   * | `approvedBy` | string | The address of the user who approved the tokens for staking |
   * | `amount` | BigNumber | Amount of the token that was approved for staking |
   */
  async approveStake(
    amount: BigNumberish,
    teamId: BigNumberish = Id.RootDomain,
  ) {
    const tx = await this.colonyClient.approveStake(
      this.votingReputationClient.address,
      teamId,
      amount,
    );
    const receipt = await tx.wait();

    const data = {
      ...extractEvent<UserTokenApprovedEventObject>(
        'UserTokenApproved',
        receipt,
      ),
    };

    return [data, receipt] as [typeof data, typeof receipt];
  }

  /**
   * Stake `amount` to support a motion with your vote
   *
   * @remarks In order to stake a motion the amount to stake (or any amount higher than that) needs to be "activated" and approved for staking in the motion's team first. See below for a full example. Usually you would have more tokens "activated" or even approved for a domain than you would stake, to make this process more seamless
   *
   * @example
   * ```typescript
   * import { Vote } from '@colony/sdk';
   * import { utils } from 'ethers';
   *
   * // Immediately executing async function
   * (async function() {
   *   const token = colony.getToken();
   *   // Approve 200 tokens to be "activated"
   *   await token.approve(utils.parseUnits('200'));
   *   // Deposit all of approved the tokens
   *   await token.deposit(utils.parseUnits('200'));
   *   // Approve 150 tokens for staking in the root domain
   *   await colony.ext.motions.approveStake(utils.parseUnits('150'));
   *   // Stake 100 tokens for motion with id 3
   *   await colony.ext.motions.stakeMotion(3, Vote.Yay, utils.parseUnits('100'));
   * })();
   * ```
   *
   * @param amount Amount of the token to be approved
   *
   * @returns A tupel of event data and contract receipt
   *
   * **Event data**
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `motionId` | BigNumber | ID of the motion created |
   * | `staker` | string | The address that staked the tokens |
   * | `vote` | Vote | The vote that was staked for (Yay or Nay). See [[Vote]] |
   * | `amount` | BigNumber | The amount that was staked for that vote |
   * | `eventIndex` | BigNumber | If the stake triggered a motion event, this will contain its index |
   */
  async stakeMotion(motionId: BigNumberish, vote: Vote, amount: BigNumberish) {
    const minStake = await this.getMinStake(motionId, vote);

    if (amount < minStake) {
      throw new Error(
        `The staked amount is too small. Please stake at least ${minStake}`,
      );
    }

    const tx = await this.votingReputationClient.stakeMotionWithProofs(
      motionId,
      BigNumber.from(vote),
      amount,
    );
    const receipt = await tx.wait();

    const data = {
      ...extractEvent<MotionStakedEventObject>('MotionStaked', receipt),
      ...extractEvent<MotionEventSetEventObject>('MotionEventSet', receipt),
    };

    return [data, receipt] as [typeof data, typeof receipt];
  }
}
