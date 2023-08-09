import type {
  MotionEventSetEventObject,
  MotionFinalizedEventObject,
  MotionStakedEventObject,
  MotionVoteRevealedEventObject,
  MotionVoteSubmittedEventObject,
  UserTokenApprovedEventObject,
  MotionCreatedEventObject,
  ExtensionUpgradedEventObject,
  AnnotationEventObject,
  MotionEscalatedEventObject,
  ExtensionInitialisedEventObject,
} from '@colony/events/types';

import { constants, BigNumber, BigNumberish, utils } from 'ethers';
import {
  type ReputationClient,
  type VotingReputationVersion,
  Extension,
  Id,
  MotionState,
  DecisionMotionCode,
  ColonyRole,
  getChildIndex,
  getContractVersion,
  getCreateMotionProofs,
  getExtensionHash,
  getPermissionProofs,
  isExtensionCompatible,
  toEth,
} from '@colony/core';
import { DecisionData, MetadataType } from '@colony/events';

import type { VotingReputationDataTypes as VotingReputationDataTypes7 } from '../contracts/IVotingReputation/7/IVotingReputation.js';
import type { VotingReputationDataTypes as VotingReputationDataTypes8 } from '../contracts/IVotingReputation/8/IVotingReputation.js';
import type { VotingReputationDataTypes as VotingReputationDataTypes9 } from '../contracts/IVotingReputation/9/IVotingReputation.js';

import {
  IVotingReputation as VotingReputationContract7,
  IVotingReputation__factory as VotingReputationFactory7,
} from '../contracts/IVotingReputation/7/index.js';
import {
  IVotingReputation as VotingReputationContract8,
  IVotingReputation__factory as VotingReputationFactory8,
} from '../contracts/IVotingReputation/8/index.js';
import {
  IVotingReputation as VotingReputationContract9,
  IVotingReputation__factory as VotingReputationFactory9,
} from '../contracts/IVotingReputation/9/index.js';

import { extractEvent, extractCustomEvent } from '../utils.js';
import { Colony } from './Colony.js';

const { AddressZero } = constants;

export type SupportedVotingReputationContract =
  | VotingReputationContract7
  | VotingReputationContract8
  | VotingReputationContract9;

export type Motion =
  | VotingReputationDataTypes7.MotionStructOutput
  | VotingReputationDataTypes8.MotionStructOutput
  | VotingReputationDataTypes9.MotionStructOutput;

export enum Vote {
  Nay,
  Yay,
}

type ReputationData = Awaited<
  ReturnType<ReputationClient['getReputationWithProofs']>
>;

const REP_DIVISOR = BigNumber.from(10).pow(18);

/**
 * ## `VotingReputation` (Motions & Disputes)
 *
 * The `VotingReputation` extension allows any member of a Colony to propose a Motion to take an `action` that will pass after a security delay unless somebody Objects. This applies to all actions, such as creating an expenditure, managing funds, or managing teams.
 *
 * ### Extension parameters
 *
 * Before the `VotingReputation` extension can be used you need to initialize it using a few parameters that heavily influence the Motion lifecycle.
 * For that please see the {@link VotingReputation.initialize} function and also [this document](https://docs.colony.io/use/governance/motions-and-disputes/parameters) for an in-depth explanation of the various parameters.
 *
 * ### What is a Motion?
 *
 * Within Colony a Motion is an on-chain proposal whose two sides (_Yay_ or _Nay_) can be supported by staking the Colony's native token for that side. Motions _always_ have an `action` attached to them which is a contract transaction that can take place in a Colony. For example, Motions could be created to move funds from one team to another, for paying someone that did work or minting new native tokens (even arbitrary transaction on any contract in the name of the Colony are supported!).
 * Motions that pass (the outcome is _Yay_) will execute the `action` once they are finalized. If the outcome is _Nay_, there is no action taking place.
 *
 * ### The Motion lifecycle
 *
 * :::info
 *
 * The exact lifecycle is determined by the parameters that were set when the `VotingReputation` extension was installed for the Colony. You can find a detailed explanation of all the parameters [here](https://colony.gitbook.io/colony/extensions/governance/parameters).
 *
 * :::
 *
 * #### Creating a Motion
 *
 * See {@link ColonyTxCreator.motion} or {@link ColonyTxCreator.metaMotion}.
 *
 * Anyone within a Colony can start a motion. In Colony SDK, this is as easy as sending a transaction of the same kind. There the `action` (the contract transaction) for the Motion will be defined. This is essentially nothing else than an encoded contract function string alongside its parameters (see for detailed info [here](https://medium.com/linum-labs/a-technical-primer-on-using-encoded-function-calls-50e2b9939223) - but don't worry. In Colony SDK this will all be taken care of by the {@link ColonyTxCreator}).
 *
 *  #### Staking
 *
 * See {@link VotingReputation.stakeMotion}.
 *
 * Once a motion is created, native tokens can be staked to support either of its sides (_Yay_ or _Nay_). A user can only stake as many tokens for either side as they have reputation in the team the motion is created in. A side can be staked by the motion creator and an arbitrary number of additional users as long as they adhere to the minimum stake per user that was defined in the extensions parameters. The maximum amount a user can stake is also determined by the amount of reputation in the team in which the Motion takes place.
 *
 * :::caution Over-staking
 *
 * Once a side of a Motion is activated, further attempts to stake tokens for that side will revert. It is not necessary or sensible to stake more tokens than needed. Keep in mind that both sides can be activated at the same time (see below for what happens then). You can use the {@link VotingReputation.getRemainingStakes} method to see how many tokens need to be staked on each side for them to activate.
 *
 * :::
 *
 * After the staking phase (which has a predetermined runtime) one of these four cases can happen:
 *
 * * **Case 1**: _Yay_ side reaches minimum stakes, _Nay_ side does not: the motion passed and can be finalized. All stakes are returned
 * * **Case 2**: _Nay_ side reaches minimum stakes, _Yay_ side does not: the motion failed and will not execute. All stakes are returned
 * * **Case 3**: Neither _Yay_ or _Nay_ side have reached minimum stakes: nothing happens. All stakes are returned.
 * * **Case 4**: Both _Yay_ and _Nay_ sides are activated. The Motion will go into _Voting_ immediately (and will not wait out the staking period).
 *
 * #### Voting
 *
 * See {@link VotingReputation.submitVote}.
 *
 * As soon as the voting phase starts, anyone with reputation in the team the Motion was created in can vote for a side. Votes are secret (i.e. they're encrypted using your private key), and weighted by reputation. Vote weight is proportional to the voter's reputation in the team in which the vote is occurring.
 *
 * Voters receive a reward for voting proportional to their reputation in the team in which the vote is occurring. The reward comes from the stake provided by whichever side of the dispute loses. It doesn't matter whether the voter voters for the winning or the losing side, they are rewarded the same either way.
 *
 * #### Revealing the votes
 *
 * See {@link VotingReputation.revealVote}.
 *
 * After the voting period is complete, the Reveal phase starts. Votes must be Revealed in order to be counted, and for the voter to receive their voter reward. The Reveal phase ends when either the time runs out, or everyone who has voted reveals their vote, whichever comes first.
 *
 * :::danger Staking penalties
 *
 * If you staked tokens for the side that eventually lost you will lose some of your stake. The amount lost will be smaller the closer the decision ultimately ended up being.
 *
 * :::
 *
 * ### The structure of a Motion
 *
 * You can - at any point in the lifecycle inspect the current state of a Motion. Using the {@link VotingReputation.getMotion} method, the resulting object will have the following properties:
 *
 * | Property | Types | Description |
 * | :------ | :------ | :------ |
 * | `events` | `[BigNumberish, BigNumberish, BigNumberish]` | Timestamps (in **seconds**) for when the phases for staking, voting and revealing end |
 * | `rootHash` | `BytesLike` | The root hash of the reputation tree at the time the motion was created |
 * | `domainId` | `BigNumberish` | The domain/team the Motion is in |
 * | `skillId`  | `BigNumberish` | The skillId associated with the domain |
 * | `skillRep` | `BigNumberish` | The total amount of reputation (among all users) that can vote for this motion |
 * | `repSubmitted` | `BigNumberish` | The amount of reputation that has submitted a vote |
 * | `paidVoterComp` | `BigNumberish` | Total compensation that was paid out to voters who revealed their votes |
 * | `pastVoterComp` | `[BigNumberish, BigNumberish]` | Keeps track of previous compensations when escalated |
 * | `stakes` | `[BigNumberish, BigNumberish]` | The amounts staked for each of the sides |
 * | `votes` | `[BigNumberish, BigNumberish]`  | The amount of reputation voted for each side |
 * | `escalated` | `boolean` | Whether a Motion was escelated to a higher team |
 * | `finalized` | `boolean` | Whether the motion is finalized (done) |
 * | `altTarget` | `string`  | A contract the motion should act on. Can be a Colony or an extension contract |
 * | `action` | `BytesLike`  | The data for the contract method that will be executed once the motion passes |
 *
 */
export class VotingReputation {
  static supportedVersions = [
    { version: 7, factory: VotingReputationFactory7 },
    { version: 8, factory: VotingReputationFactory8 },
    { version: 9, factory: VotingReputationFactory9 },
  ];

  static extensionType: Extension.VotingReputation = Extension.VotingReputation;

  // TODO: This could be abstracted in the future
  static async connect(colony: Colony) {
    const address = await colony.colonyNetwork
      .getInternalNetworkContract()
      .getExtensionInstallation(
        getExtensionHash(VotingReputation.extensionType),
        colony.address,
      );
    if (address === AddressZero) {
      throw new Error(
        `${VotingReputation.extensionType} extension is not installed for this Colony`,
      );
    }

    const version = (await getContractVersion(
      address,
      colony.colonyNetwork.signerOrProvider,
    )) as VotingReputationVersion;

    if (
      !isExtensionCompatible(
        VotingReputation.extensionType,
        version,
        colony.version,
      )
    ) {
      throw new Error(
        `Version ${version} of the ${VotingReputation.extensionType} contract is not compatible with the installed Colony contract version ${colony.version}`,
      );
    }

    const Factory = VotingReputation.supportedVersions.find(
      (v) => v.version === version,
    )?.factory;

    if (!Factory) {
      throw new Error(
        `Version ${version} of the ${VotingReputation.extensionType} contract is not supported in the SDK as of now`,
      );
    }

    const oneTxPaymentContract = Factory.connect(
      address,
      colony.colonyNetwork.signerOrProvider,
    );

    return new VotingReputation(colony, oneTxPaymentContract, version);
  }

  private colony: Colony;

  private votingReputationContract: SupportedVotingReputationContract;

  address: string;

  version: VotingReputationVersion;

  static getLatestSupportedVersion() {
    return VotingReputation.supportedVersions[
      VotingReputation.supportedVersions.length - 1
    ]?.version as VotingReputationVersion;
  }

  constructor(
    colony: Colony,
    votingReputationContract: SupportedVotingReputationContract,
    deployedVersion: VotingReputationVersion,
  ) {
    this.address = votingReputationContract.address;
    this.colony = colony;
    this.votingReputationContract = votingReputationContract;
    this.version = deployedVersion;
  }

  /**
   * Have the user sign a message to create a salt for casting and revealing a vote
   */
  private async createMotionSalt(motionId: BigNumberish) {
    const { address } = this.votingReputationContract;
    const motionNumber = BigNumber.from(motionId).toNumber();
    /*
     * NOTE We need this to be all in one line (no new lines, or line breaks) since
     * Metamask doesn't play nice with them and will replace them, in the message
     * presented to the user with \n
     */
    const message = `Sign this message to generate 'salt' entropy. Extension Address: ${address} Motion ID: ${motionNumber}`;
    const signature = await this.colony
      .getInternalColonyContract()
      .signer.signMessage(message);
    return utils.keccak256(signature);
  }

  /**
   * Gets the side the user voted for by testing both options and asserting which one reverts. This method is not 100% failsafe as the contract could revert for other reasons, so it's safer to provide the vote manually
   */
  private async getSideVoted(
    motionId: BigNumberish,
    salt: string,
    reputation: ReputationData,
  ) {
    const { key, value, branchMask, siblings } = reputation;
    let sideVoted;
    try {
      await this.votingReputationContract.estimateGas.revealVote(
        motionId,
        salt,
        0,
        key,
        value,
        branchMask,
        siblings,
      );
      sideVoted = Vote.Nay;
    } catch (nayErr) {
      if ((nayErr as Error).message.includes('voting-rep-secret-no-match')) {
        try {
          await this.votingReputationContract.estimateGas.revealVote(
            motionId,
            salt,
            1,
            key,
            value,
            branchMask,
            siblings,
          );
          sideVoted = Vote.Yay;
        } catch (yayErr) {
          // Can't find a matching vote that was cast
        }
      }
    }
    return sideVoted;
  }

  /**
   * Provide direct access to the internally used VotingReputation contract. Only use when you know what you're doing
   * @internal
   *
   * @returns The internally used VotingReputationContract
   */
  getInternalVotingReputationContract(): SupportedVotingReputationContract {
    return this.votingReputationContract;
  }

  /**
   * Before you can use the extension you need to initialize it by calling this function.
   *
   * @remarks
   * - Fractions are in wei to allow for precise adjustments (you can use the `w` helper method to specify fractions - see example)
   * - All periods values are given in seconds
   *
   * See also [this page](https://docs.colony.io/use/governance/motions-and-disputes/parameters) for a detailed explanation of the parameters.
   *
   * @example
   * ```typescript
   * import { w } from '@colony/sdk';
   *
   * // Immediately executing async function
   * (async function() {
   *   // After installing the extension, initialize the extension with the dApp's default values
   *   await colony.ext.motions.initialize(
   *     w`0.01`,
   *     w`0.2`,
   *     w`0.01`,
   *     w`0.7`,
   *     72 * 60 * 60,
   *     72 * 60 * 60,
   *     72 * 60 * 60,
   *     72 * 60 * 60,
   *   ).tx().mined();
   * })();
   * ```
   *
   * @param totalStakeFraction - The fraction of the domain's reputation we need to stake
   * @param voterRewardFraction - The fraction of the total stake paid out to voters as rewards
   * @param userMinStakeFraction - The minimum per-user stake as fraction of total stake
   * @param maxVoteFraction - The fraction of the domain's reputation which must submit for quick-end
   * @param stakePeriod - The length of the staking period in seconds
   * @param submitPeriod - The length of the submit period in seconds
   * @param revealPeriod - The length of the reveal period in seconds
   * @param escalationPeriod - The length of the escalation period in seconds
   *
   * @returns A transaction creator
   *
   * #### Event data
   *
   * No event data attached
   */
  initialize(
    totalStakeFraction: BigNumber,
    voterRewardFraction: BigNumber,
    userMinStakeFraction: BigNumber,
    maxVoteFraction: BigNumber,
    stakePeriod: number,
    submitPeriod: number,
    revealPeriod: number,
    escalationPeriod: number,
  ) {
    return this.colony.colonyNetwork.createMetaTxCreator(
      this.votingReputationContract,
      'initialise',
      [
        totalStakeFraction,
        voterRewardFraction,
        userMinStakeFraction,
        maxVoteFraction,
        stakePeriod,
        submitPeriod,
        revealPeriod,
        escalationPeriod,
      ],
      async (receipt) => ({
        ...extractEvent<ExtensionInitialisedEventObject>(
          'ExtensionInitialised',
          receipt,
        ),
      }),
    );
  }

  /**
   * Get a motion by its id
   *
   * @remarks Will throw if motionId does not exist
   *
   * @param motionId - The motionId to get the information for
   *
   * @returns A Motion object
   */
  async getMotion(motionId: BigNumberish): Promise<Motion> {
    const motionCount = await this.votingReputationContract.getMotionCount();
    if (motionCount.lt(motionId)) {
      throw new Error(`Motion with id ${motionId} does not exist`);
    }
    return this.votingReputationContract.getMotion(motionId);
  }

  /**
   * Get the result of a motion (if it is finalizeable or finalized)
   *
   * @remarks Will return null if the motion is not finalizeable yet
   *
   * @param motionId - The motionId to get the result for
   *
   * @returns The result of the motion (0 = Nay, 1 = Yay)
   */
  async getMotionResult(motionId: BigNumberish): Promise<Vote | null> {
    const state = await this.getMotionState(motionId);
    if (state < MotionState.Finalizable) {
      return null;
    }
    const motion = await this.getMotion(motionId);
    const totalStakeFraction =
      await this.votingReputationContract.getTotalStakeFraction();
    const requiredStake = motion.skillRep
      .mul(totalStakeFraction)
      .div(REP_DIVISOR);
    if (
      motion.stakes[0].gte(requiredStake) &&
      motion.stakes[1].lt(requiredStake)
    ) {
      return Vote.Nay;
    }
    if (
      motion.stakes[1].gte(requiredStake) &&
      motion.stakes[0].lt(requiredStake)
    ) {
      return Vote.Yay;
    }

    return motion.votes[0].gt(motion.votes[1]) ? Vote.Nay : Vote.Yay;
  }

  /**
   * Get the motion state as a number
   *
   * Will be one of the following:
   *
   * - `Staking` (= 1)
   * - `Submit` (= 2)
   * - `Reveal` (= 3)
   * - `Closed` (= 4)
   * - `Finalizable` (= 5)
   * - `Finalized` (= 6)
   * - `Failed` (= 7)
   *
   * @example You can show the state as a string like so
   * ```typescript
   * import { MotionState } from '@colony/sdk';
   *
   * // Immediately executing async function
   * (async function() {
   *   // Get state of Motion `1`
   *   const state = await colony.ext.motions.getMotionState(1);
   *   const stateStr = MotionState[state]; // `Staking` (or another of the above)
   * })();
   * ```
   *
   * @remarks Will throw if motionId does not exist
   *
   * @param motionId - The motionId to get the state for
   *
   * @returns The motion state
   */
  async getMotionState(motionId: BigNumberish) {
    const motionCount = await this.votingReputationContract.getMotionCount();
    if (motionCount.lt(motionId)) {
      throw new Error(`Motion with id ${motionId} does not exist`);
    }
    return this.votingReputationContract.getMotionState(motionId);
  }

  /**
   * Get the minimum stake that has to be supplied for a motion and a certain vote (NOT for activation)
   *
   * @remarks To get the missing amount for activation, call {@link getRemainingStakes}
   *
   * @param motion - A Motion struct object
   * @param vote - A vote for (Yay) or against (Nay) the motion
   *
   * @returns The minimum stake amount
   */
  async getMinStake(motion: Motion, vote: Vote) {
    // skillRep is the amount of reputation in the domain the motion was created in
    // at the time the motion was created
    const {
      skillRep,
      stakes: [totalNay, totalYay],
    } = motion;

    // Fraction of the total amount that is required to be staked for either side
    // (Yay or Nay) to be activated
    const totalStakeFraction =
      await this.votingReputationContract.getTotalStakeFraction();
    // Fraction of the total amount that has to be staked per transaction
    const userMinStakeFraction =
      await this.votingReputationContract.getUserMinStakeFraction();
    // Total amount that is needed for activation
    const requiredStakeForActivation = BigNumber.from(skillRep)
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
    if (
      vote === Vote.Nay &&
      BigNumber.from(totalNay).lt(requiredStakeForActivation)
    ) {
      const requiredNay = requiredStakeForActivation.sub(
        BigNumber.from(totalNay),
      );
      minStake = requiredNay.lt(minStakePerUser)
        ? requiredNay
        : minStakePerUser;
    } else if (BigNumber.from(totalYay).lt(requiredStakeForActivation)) {
      const requiredYay = requiredStakeForActivation.sub(
        BigNumber.from(totalYay),
      );
      minStake = requiredYay.lt(minStakePerUser)
        ? requiredYay
        : minStakePerUser;
    }
    return minStake;
  }

  /**
   * Get the amounts remaining for Yay/Nay sides to be activated
   *
   * @param motionId - The motionId of the motion
   *
   * @returns An object containing the remaining amounts
   */
  async getRemainingStakes(motionId: BigNumberish) {
    const {
      skillRep,
      stakes: [totalNay, totalYay],
    } = await this.getMotion(motionId);

    // Fraction of the total amount that is required to be staked for either side
    // (Yay or Nay) to be activated
    const totalStakeFraction =
      await this.votingReputationContract.getTotalStakeFraction();
    // Fraction of the total amount that has to be staked per transaction
    // Total amount that is needed for activation
    const requiredStakeForActivation = skillRep
      .mul(totalStakeFraction)
      .div(REP_DIVISOR);

    const remainingToFullyNayStaked = totalNay.gte(requiredStakeForActivation)
      ? BigNumber.from(0)
      : requiredStakeForActivation.sub(totalNay);

    const remainingToFullyYayStaked = totalYay.gte(requiredStakeForActivation)
      ? BigNumber.from(0)
      : requiredStakeForActivation.sub(totalYay);

    return {
      remainingToFullyNayStaked,
      remainingToFullyYayStaked,
    };
  }

  /**
   * Annotate a decision with IPFS metadata to provide extra information
   *
   * Keep in mind that a decision is just a motion without an on-chain action that is being triggered once it finalizes
   *
   * @remarks If {@link DecisionData} is provided directly (as opposed to a [CID](https://docs.ipfs.io/concepts/content-addressing/#identifier-formats) for a JSON file) this requires an {@link IpfsAdapter} that can upload and pin to IPFS. See its documentation for more information. Keep in mind that **the annotation itself is a transaction**.
   *
   * @example
   * ```typescript
   * // Immediately executing async function
   * (async function() {
   *
   *   // Create an empty decision in the Root team
   *   const [, { transactionHash }] = await colony.ext.motions.createDecision().tx().mined();
   *   // Annotate the decision transaction with important data
   *   // (forced transaction example)
   *   await colony.ext.motions.annotateDecision(
   *      transactionHash,
   *      {
   *        title: 'Should we make the naked-mole-rat our official mascot?',
   *        description: 'I think it is time',
   *      },
   *   ).tx().mined();
   * })();
   * ```
   * @param team - Team id to create the decision in
   * @returns A transaction creator
   *
   * #### Event data
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `motionId` | BigNumber | Id of the decision (motion) |
   * | `creator` | string | Address of the user who created the decision |
   * | `domainId` | BigNumber | Team the decision was created in |
   */
  createDecision(team: BigNumberish = Id.RootDomain) {
    return this.colony.colonyNetwork.createMetaTxCreator(
      this.votingReputationContract,
      'createMotion',
      async () => {
        const { actionCid, key, value, branchMask, siblings } =
          await getCreateMotionProofs(
            this.colony.colonyNetwork.getInternalNetworkContract(),
            this.colony.getInternalColonyContract(),
            this.colony.reputation,
            this.votingReputationContract,
            team,
            AddressZero,
            DecisionMotionCode,
          );
        return [
          team,
          actionCid,
          AddressZero,
          DecisionMotionCode,
          key,
          value,
          branchMask,
          siblings,
        ] as [
          BigNumberish,
          BigNumberish,
          string,
          string,
          string,
          string,
          string,
          string[],
        ];
      },
      async (receipt) => ({
        ...extractEvent<MotionCreatedEventObject>('MotionCreated', receipt),
      }),
    );
  }

  /**
   * Annotate a decision with IPFS metadata to provide extra information
   *
   * This will annotate a decision with certain metadata (see below). This only really works for transactions that happened within this Colony. This will connect the decision to the (optionally generated) IPFS hash accordingly.
   *
   * @remarks If {@link DecisionData} is provided directly (as opposed to a [CID](https://docs.ipfs.io/concepts/content-addressing/#identifier-formats) for a JSON file) this requires an {@link IpfsAdapter} that can upload and pin to IPFS. See its documentation for more information. Keep in mind that **the annotation itself is a transaction**.
   *
   * @example
   * ```typescript
   * // Immediately executing async function
   * (async function() {
   *
   *   // Create a motion to pay 10 of the native token to some (maybe your own?) address
   *   const [, { transactionHash }] = await colony.ext.motions.createDecision().tx().mined();
   *   // Annotate the decision transaction with important data
   *   // (forced transaction example)
   *   await colony.ext.motions.annotateDecision(
   *      transactionHash,
   *      {
   *        title: 'Should we make the naked-mole-rat our official mascot?',
   *        description: 'I think it is time',
   *      },
   *   ).tx().mined();
   * })();
   * ```
   * @param txHash - Transaction hash of the transaction to annotate (within the Colony)
   * @param metadata - The annotation metadata you would like to annotate the transaction with (or an IPFS CID pointing to valid metadata)
   * @returns A transaction creator
   *
   * #### Event data
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `agent` | string | The address that is responsible for triggering this event |
   * | `txHash` | string | The hash of the annotated transaction |
   * | `metadata` | string | The IPFS hash (CID) of the metadata object |
   *
   * #### Metadata
   *
   * (can be obtained by calling and awaiting the `getMetadata` function)
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `title` | string | Title of the decision |
   * | `description` | string | Longer description of the decision |
   * | `motionDomainId` | number | Team the decision was created in |
   */
  annotateDecision(txHash: string, metadata: DecisionData | string) {
    return this.colony.colonyNetwork.createMetaTxCreator(
      this.colony.getInternalColonyContract(),
      'annotateTransaction',
      async () => {
        let cid: string;
        if (typeof metadata == 'string') {
          cid = metadata;
        } else {
          cid = await this.colony.colonyNetwork.ipfs.uploadMetadata(
            MetadataType.Decision,
            metadata,
          );
        }
        return [txHash, cid] as [string, string];
      },
      async (receipt) => ({
        ...extractEvent<AnnotationEventObject>('Annotation', receipt),
      }),
      { metadataType: MetadataType.Decision },
    );
  }

  /**
   * Approve `amount` of the "activated" native tokens of a user for staking in a specific team
   * After a token was "activated" (approved and deposited via the native token interface) it can be used for staking motions. To stake a motion, the token amount for staking has to be approved for the domain the motion was created in. See also the example in {@link VotingReputation.stakeMotion}
   *
   * @remarks
   * This method can't be executed as a motion
   *
   * @param amount - Amount of "activated" tokens to be approved for staking
   * @param teamId - Team that the approved tokens can be used in for staking motions
   *
   * @returns A transaction creator
   *
   * #### Event data
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `token` | string | The address of the token that is approved for staking |
   * | `user` | string | The address of the VotingReputation contract |
   * | `approvedBy` | string | The address of the Colony |
   * | `amount` | BigNumber | Amount of the token that was approved for staking |
   */
  approveStake(amount: BigNumberish, teamId: BigNumberish = Id.RootDomain) {
    return this.colony.colonyNetwork.createMetaTxCreator(
      this.colony.getInternalColonyContract(),
      'approveStake',
      [this.votingReputationContract.address, teamId, amount],
      async (receipt) => {
        const tokenLocking = await this.colony.colonyNetwork.getTokenLocking();
        return {
          ...extractCustomEvent<UserTokenApprovedEventObject>(
            'UserTokenApproved',
            receipt,
            tokenLocking.getInternalTokenLockingContract().interface,
          ),
        };
      },
    );
  }

  /**
   * Stake `amount` to support a motion with your vote
   *
   * @remarks
   * * In order to stake a motion the amount to stake (or any amount higher than that) needs to be "activated" and approved for staking in the motion's team first. See below for a full example. Usually you would have more tokens "activated" or even approved for a domain than you would stake, to make this process more seamless
   * * This method can't be executed as a motion
   *
   * @example
   * ```typescript
   * import { Vote, w } from '@colony/sdk';
   *
   * // Immediately executing async function
   * (async function() {
   *   const token = colony.getToken();
   *   // Approve 200 tokens to be "activated"
   *   await token.approve(w`200`);
   *   // Deposit all of approved the tokens
   *   await token.deposit(w`200`);
   *   // Approve 150 tokens for staking in the root domain (can only be forced)
   *   await colony.ext.motions.approveStake(w`150`).tx().mined();
   *   // Stake 100 tokens for motion with id 3
   *   await colony.ext.motions.stakeMotion(3, Vote.Yay, w`100`);
   * })();
   * ```
   *
   * @param amount - Amount of the token to be approved
   *
   * @returns A transaction creator
   *
   * #### Event data
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `motionId` | BigNumber | ID of the motion to stake for |
   * | `staker` | string | The address that staked the tokens |
   * | `vote` | Vote | The vote that was staked for (Yay or Nay). See {@link Vote} |
   * | `amount` | BigNumber | The amount that was staked for that vote |
   * | `eventIndex` | BigNumber | If the stake triggered a motion event, this will contain its index |
   */
  stakeMotion(motionId: BigNumberish, vote: Vote, amount: BigNumberish) {
    const getArgs = async () => {
      const userAddress = await this.colony.colonyNetwork
        .getSigner()
        .getAddress();

      const motionState = await this.votingReputationContract.getMotionState(
        motionId,
      );

      if (motionState !== MotionState.Staking) {
        throw new Error(
          `Motion cannot be staked. It's currently in "${MotionState[motionState]}" state`,
        );
      }

      const motion = await this.getMotion(motionId);
      const tokenLocking = await this.colony.colonyNetwork.getTokenLocking();

      const deposited = await tokenLocking.getUserDeposit(
        this.colony.token.address,
        userAddress,
      );
      if (deposited.lt(amount)) {
        throw new Error('Not enough tokens deposited for staking.');
      }

      const colonyApproval = await tokenLocking.getUserApproval(
        this.colony.token.address,
        userAddress,
        this.colony.address,
      );
      if (colonyApproval.lt(amount)) {
        throw new Error(
          'Not enough tokens approved for staking in the Colony.',
        );
      }

      const votingReputationApproval = await this.colony
        .getInternalColonyContract()
        .getApproval(userAddress, this.address, motion.domainId);

      if (votingReputationApproval.lt(amount)) {
        throw new Error(
          `Not enough tokens approved for staking in the VotingReputation contract.`,
        );
      }

      if (motion.events[0].mul(1000).lte(Date.now())) {
        throw new Error(
          'The staking period for this Motion has passed already.',
        );
      }

      const minStake = await this.getMinStake(motion, vote);

      if (BigNumber.from(amount).lt(minStake)) {
        throw new Error(
          `The staked amount is too small. Please stake at least ${toEth(
            minStake,
          )}`,
        );
      }

      const { domainId, rootHash } = await this.getMotion(motionId);
      const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
        this.colony.colonyNetwork.getInternalNetworkContract(),
        this.colony.getInternalColonyContract(),
        domainId,
        ColonyRole.Arbitration,
        this.address,
      );

      const { skillId } = await this.colony.getTeam(domainId);
      const { key, value, branchMask, siblings } =
        await this.colony.reputation.getReputationWithProofs(
          skillId,
          userAddress,
          rootHash,
        );

      return [
        motionId,
        permissionDomainId,
        childSkillIndex,
        BigNumber.from(vote),
        amount,
        key,
        value,
        branchMask,
        siblings,
      ] as [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        string,
        string,
        string[],
      ];
    };

    return this.colony.colonyNetwork.createMetaTxCreator(
      this.votingReputationContract,
      'stakeMotion',
      getArgs,
      async (receipt) => ({
        ...extractEvent<MotionStakedEventObject>('MotionStaked', receipt),
        ...extractEvent<MotionEventSetEventObject>('MotionEventSet', receipt),
      }),
    );
  }

  /**
   * Submit a vote for a motion
   *
   * @remarks
   * This method can't be executed as a motion
   *
   * @param motionId - The motionId of the motion to be finalized
   * @param vote - A vote for (Yay) or against (Nay) the motion
   *
   * @returns A transaction creator
   *
   * #### Event data
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `motionId` | BigNumber | ID of the motion to submit a vote for |
   * | `voter` | string | The address of the user who voted |
   */
  submitVote(motionId: BigNumberish, vote: Vote) {
    const getArgs = async () => {
      const motionState = await this.votingReputationContract.getMotionState(
        motionId,
      );

      if (motionState !== MotionState.Submit) {
        throw new Error(
          `Motion cannot be voted on at this time. It's currently in "${MotionState[motionState]}" state`,
        );
      }

      const { domainId, rootHash } = await this.getMotion(motionId);
      const { skillId } = await this.colony.getTeam(domainId);
      const userAddress = await this.colony.colonyNetwork
        .getSigner()
        .getAddress();

      const { key, value, branchMask, siblings } =
        await this.colony.reputation.getReputationWithProofs(
          skillId,
          userAddress,
          rootHash,
        );

      const salt = await this.createMotionSalt(motionId);
      const hash = utils.solidityKeccak256(['bytes', 'uint256'], [salt, vote]);

      return [motionId, hash, key, value, branchMask, siblings] as [
        BigNumber,
        string,
        string,
        string,
        string,
        string[],
      ];
    };

    return this.colony.colonyNetwork.createMetaTxCreator(
      this.votingReputationContract,
      'submitVote',
      getArgs,
      async (receipt) => ({
        ...extractEvent<MotionVoteSubmittedEventObject>(
          'MotionVoteSubmitted',
          receipt,
        ),
      }),
    );
  }

  /**
   * Reveal a vote for a motion
   *
   * @remarks
   * * In order for a vote to count it has to be revealed within the reveal period. Only then rewards can be paid out to the voter.
   * * This method can't be executed as a motion
   *
   * @param motionId - The motionId of the motion to be finalized
   * @param vote - The vote that was cast. If not provided Colony SDK will try to find out which side was voted on (not recommended)
   *
   * @returns A transaction creator
   *
   * #### Event data
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `motionId` | BigNumber | ID of the motion to be revealed |
   * | `voter` | string | The address of the user who voted |
   * | `vote` | BigNumber | The vote that was cast (0 = Nay, 1 = Yay) |
   */
  revealVote(motionId: BigNumberish, vote?: Vote) {
    const getArgs = async () => {
      const motionState = await this.votingReputationContract.getMotionState(
        motionId,
      );

      if (motionState !== MotionState.Reveal) {
        throw new Error(
          `Motion cannot be revealed at this time. It's currently in "${MotionState[motionState]}" state`,
        );
      }

      const { domainId, rootHash } = await this.getMotion(motionId);
      const { skillId } = await this.colony.getTeam(domainId);
      const userAddress = await this.colony.colonyNetwork
        .getSigner()
        .getAddress();

      const reputation = await this.colony.reputation.getReputationWithProofs(
        skillId,
        userAddress,
        rootHash,
      );

      const salt = await this.createMotionSalt(motionId);
      const foundVote =
        vote || (await this.getSideVoted(motionId, salt, reputation));

      if (!foundVote) {
        throw new Error(
          `Could not find a vote cast by ${userAddress} for motion ${motionId}`,
        );
      }

      const { key, value, branchMask, siblings } = reputation;

      return [
        motionId,
        salt,
        BigNumber.from(foundVote),
        key,
        value,
        branchMask,
        siblings,
      ] as [BigNumber, string, BigNumber, string, string, string, string[]];
    };

    return this.colony.colonyNetwork.createMetaTxCreator(
      this.votingReputationContract,
      'revealVote',
      getArgs,
      async (receipt) => ({
        ...extractEvent<MotionVoteRevealedEventObject>(
          'MotionVoteRevealed',
          receipt,
        ),
      }),
    );
  }

  /**
   * Escalate a motion to a parent team
   *
   * If all votes for a motion have been revealed but a user is not happy with the outcome, it can be escalated to a parent team (including grandparents, great-grandparents, etc.) as long as the escalation period has not passed yet.
   *
   * @param motionId - The motionId of the motion to be escalated
   * @param newTeamId - The id of the team the motion should be escalated to
   *
   * @returns A transaction creator
   *
   * #### Event data
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `motionId` | BigNumber | ID of the motion to be escalated |
   * | `newTeamId` | string | The ID of the team the motion should be escalated to (has to be a direct parent of the previous team) |
   */
  escalateMotion(motionId: BigNumberish, newTeamId: BigNumberish) {
    const getArgs = async () => {
      const motionState = await this.votingReputationContract.getMotionState(
        motionId,
      );

      if (motionState !== MotionState.Closed) {
        throw new Error(
          `Motion cannot be escalated at this time. It's currently in "${MotionState[motionState]}" state`,
        );
      }

      const { domainId, rootHash } = await this.getMotion(motionId);
      const { skillId } = await this.colony.getTeam(newTeamId);
      const userAddress = await this.colony.colonyNetwork
        .getSigner()
        .getAddress();

      const childIndex = await getChildIndex(
        this.colony.colonyNetwork.getInternalNetworkContract(),
        this.colony.getInternalColonyContract(),
        newTeamId,
        domainId,
      );

      const { key, value, branchMask, siblings } =
        await this.colony.reputation.getReputationWithProofs(
          skillId,
          userAddress,
          rootHash,
        );

      return [
        motionId,
        newTeamId,
        childIndex,
        key,
        value,
        branchMask,
        siblings,
      ] as [BigNumber, string, BigNumber, string, string, string, string[]];
    };

    return this.colony.colonyNetwork.createMetaTxCreator(
      this.votingReputationContract,
      'escalateMotion',
      getArgs,
      async (receipt) => ({
        ...extractEvent<MotionEscalatedEventObject>('MotionEscalated', receipt),
      }),
    );
  }

  /**
   * Finalize a motion, executing its action
   *
   * @remarks
   * * A motion cannot be finalized if:
   *   - The required Yay or Nay stake amount has not been reached
   *   - The staking period is not up yet
   *   - Voting is still in progress
   *   - The motion was already finalized
   * * This method can't be executed as a motion
   *
   * @param motionId - The motionId of the motion to be finalized
   *
   * @returns A transaction creator
   *
   * #### Event data
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `motionId` | BigNumber | ID of the motion created |
   * | `action` | string | The action that was executed in case Yay won |
   * | `exectued` | boolean | Whether the action was executed (Yay won)|
   */
  finalizeMotion(motionId: BigNumberish) {
    const getArgs = async () => {
      const motionState = await this.votingReputationContract.getMotionState(
        motionId,
      );

      if (motionState !== MotionState.Finalizable) {
        throw new Error(
          `Motion cannot be finalized. It's currently in "${MotionState[motionState]}" state`,
        );
      }

      return [motionId] as [BigNumber];
    };

    return this.colony.colonyNetwork.createMetaTxCreator(
      this.votingReputationContract,
      'finalizeMotion',
      getArgs,
      async (receipt) => ({
        ...extractEvent<MotionFinalizedEventObject>('MotionFinalized', receipt),
      }),
    );
  }

  /**
   * Upgrade this extension to the next or a custom version
   *
   * This method upgrades this extension to a specified version or, if no version is provided to the next higher version.
   *
   * @remarks
   * * Only users with *Root* role are allowed to upgrade an extension (or another extension with appropriate permissions)
   * * Downgrading of extensions is not possible
   *
   * @param toVersion - Specify a custom version to upgrade the extension to
   *
   * @returns A transaction creator
   *
   * #### Event data
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `extensionId` | string | Extension id (name of the extension) that was upgraded |
   * | `oldVersion` | BigNumber | Version of the extension before the upgrade |
   * | `newVersion` | BigNumber | Version of the extension after the upgrade |
   */
  upgrade(toVersion?: BigNumberish) {
    const version = toVersion || this.version + 1;
    return this.colony.createColonyTxCreator(
      this.colony.getInternalColonyContract(),
      'upgradeExtension',
      [getExtensionHash(Extension.VotingReputation), version],
      async (receipt) => ({
        ...extractEvent<ExtensionUpgradedEventObject>(
          'ExtensionUpgraded',
          receipt,
        ),
      }),
    );
  }

  /**
   * Get the initialized configuration options
   *
   * Get the configuration options that were set when the extension was initialized.
   * For more information on the individual values see https://docs.colony.io/use/governance/motions-and-disputes/parameters
   *
   * @returns The extensions configuration options
   */
  async getInitializationOptions() {
    const promises = [
      this.votingReputationContract.getTotalStakeFraction(), // requiredStake
      this.votingReputationContract.getVoterRewardFraction(), // voterReward
      this.votingReputationContract.getUserMinStakeFraction(), // minimumUserStake
      this.votingReputationContract.getMaxVoteFraction(), // endVoteThreshold
      this.votingReputationContract.getStakePeriod(), // stakePhaseDuration
      this.votingReputationContract.getSubmitPeriod(), // votingPhaseDuration
      this.votingReputationContract.getRevealPeriod(), // revealPhaseDuration
      this.votingReputationContract.getEscalationPeriod(), // escalationPhaseDuration
    ];
    const [
      requiredStake,
      voterReward,
      minimumUserStake,
      endVoteThreshold,
      stakePhaseDuration,
      votingPhaseDuration,
      revealPhaseDuration,
      escalationPhaseDuration,
    ] = await Promise.all(promises);

    return {
      requiredStake,
      voterReward,
      minimumUserStake,
      endVoteThreshold,
      stakePhaseDuration,
      votingPhaseDuration,
      revealPhaseDuration,
      escalationPhaseDuration,
    };
  }
}
