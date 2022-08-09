import type { BigNumberish } from 'ethers';

import {
  Id,
  Extension,
  ColonyRole,
  getPermissionProofs,
  getExtensionPermissionProofs,
  getChildIndex,
} from '@colony/colony-js';

import { MotionCreatedEventObject } from '@colony/colony-js/extras';

import type { SupportedColonyMethods } from './Colony';

import { ParametersFrom2 } from '../types';
import { extractEvent } from '../utils';
import { SupportedColonyClient } from './Colony';
import { SupportedVotingReputationClient } from './VotingReputation';

/**
 * MotionCreator
 *
 * This is part of the [[VotingReputation]] class and not to be meant to instantiated directly.
 * You can find an instance of this under `colony.ext.motions.create`
 *
 */
export class MotionCreator {
  private colonyClient: SupportedColonyClient;

  private votingReputationClient: SupportedVotingReputationClient;

  constructor(
    colonyClient: SupportedColonyClient,
    votingReputationClient: SupportedVotingReputationClient,
  ) {
    this.colonyClient = colonyClient;
    this.votingReputationClient = votingReputationClient;
  }

  private async createMotion<F extends keyof SupportedColonyMethods>(
    signature: F,
    actionDomain: BigNumberish,
    actionRole: ColonyRole,
    motionDomain: BigNumberish,
    args: ParametersFrom2<SupportedColonyMethods[F]>,
  ) {
    const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
      this.colonyClient,
      actionDomain,
      actionRole,
      this.votingReputationClient.address,
    );

    const encodedAction = this.colonyClient.interface.encodeFunctionData(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore I don't think this can be typed properly here
      signature,
      [permissionDomainId, childSkillIndex, ...args],
    ) as string;

    const tx = await this.votingReputationClient.createMotionWithProofs(
      motionDomain,
      '0x0',
      encodedAction,
    );

    const receipt = await tx.wait();

    const data = {
      ...extractEvent<MotionCreatedEventObject>('MotionCreated', receipt),
    };

    return [data, receipt] as [typeof data, typeof receipt];
  }

  /**
   * Create a motion to create a team within a Colony
   *
   * For more information about the resulting action, see [[Colony.createTeam]].
   *
   * @remarks
   * Currently you can only add domains within the `Root` domain. This restriction will be lifted soon
   *
   * @param metadataCid An IPFS [CID](https://docs.ipfs.io/concepts/content-addressing/#identifier-formats) for a JSON file containing the metadata described below. For now, we would like to keep it agnostic to any IPFS upload mechanism, so you have to upload the file manually and provide your own hash (by using, for example, [Pinata](https://docs.pinata.cloud/))
   *
   * @returns A tupel: `[eventData, ContractReceipt]`
   *
   * **Motion event data**
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `motionId` | BigNumber | ID of the motion created |
   * | `creator` | string | Address of the motion's creator |
   * | `domainId` | BigNumber | Team ID of the motion |
   */
  async createTeam(metadataCid?: string) {
    // This will change when we have nested permissions
    const parentDomain = Id.RootDomain;

    return metadataCid
      ? this.createMotion(
          'addDomain(uint256,uint256,uint256,string)',
          parentDomain,
          ColonyRole.Architecture,
          parentDomain,
          [parentDomain, metadataCid],
        )
      : this.createMotion(
          'addDomain(uint256,uint256,uint256)',
          parentDomain,
          ColonyRole.Architecture,
          parentDomain,
          [parentDomain],
        );
  }

  /**
   * Create a motion to make a payment to a single address using a single token
   *
   * For more information about the resulting action, see [[Colony.pay]].
   *
   * @remarks Requires the `OneTxPayment` extension to be installed for the Colony (this is usually the case for Colonies created via the Dapp). Note that most tokens use 18 decimals, so add a bunch of zeros or use our `w` or `toWei` functions (see example)
   *
   * @example
   * ```typescript
   * import { Id, Tokens, w } from '@colony/sdk';
   *
   * // Immediately executing async function
   * (async function() {
   *   // Pay 10 XDAI (on Gnosis chain) from the root domain to the following address
   *   await colony.ext.motions.create.pay(
   *      '0xb77D57F4959eAfA0339424b83FcFaf9c15407461',
   *      w`10`,
   *      Id.RootDomain,
   *      Tokens.Gnosis.XDAI,
   *   );
   * })();
   * ```
   *
   * @param recipient Wallet address of account to send the funds to (also awarded reputation when sending the native token)
   * @param amount Amount to pay in wei
   * @param tokenAddress The address of the token to make the payment in. Default is the Colony's native token
   * @param teamId The team to use to send the funds from. Has to have funding of at least the amount you need to send. See [[Colony.moveFundsToTeam]]. Defaults to the Colony's root team
   * @returns A tupel of event data and contract receipt
   *
   * **Motion event data**
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `motionId` | BigNumber | ID of the motion created |
   * | `creator` | string | Address of the motion's creator |
   * | `domainId` | BigNumber | Team ID of the motion |
   */
  async pay(
    recipient: string,
    amount: BigNumberish,
    teamId?: BigNumberish,
    tokenAddress?: string,
  ) {
    const setTeamId = teamId || Id.RootDomain;
    const setTokenAddress =
      tokenAddress || this.colonyClient.tokenClient.address;

    const oneTxClient = await this.colonyClient.getExtensionClient(
      Extension.OneTxPayment,
    );

    const [extensionPDID, extensionCSI] = await getExtensionPermissionProofs(
      this.colonyClient,
      setTeamId,
      oneTxClient.address,
    );
    const [userPDID, userCSI] = await getExtensionPermissionProofs(
      this.colonyClient,
      setTeamId,
    );

    const encodedAction = oneTxClient.interface.encodeFunctionData(
      'makePaymentFundedFromDomain',
      [
        extensionPDID,
        extensionCSI,
        userPDID,
        userCSI,
        [recipient],
        [setTokenAddress],
        [amount],
        setTeamId,
        // Skill associated with this payment. Ignore for now
        Id.SkillIgnore,
      ],
    );

    const tx = await this.votingReputationClient.createMotionWithProofs(
      setTeamId,
      oneTxClient.address,
      encodedAction,
    );

    const receipt = await tx.wait();

    const data = {
      ...extractEvent<MotionCreatedEventObject>('MotionCreated', receipt),
    };

    return [data, receipt] as [typeof data, typeof receipt];
  }

  /**
   * Create a motion to move funds from one team to another
   *
   * For more information about the resulting action, see [[Colony.moveFundsToTeam]].
   *
   * After sending funds to and claiming funds for your Colony they will land in a special team, the root team. If you want to make payments from other teams (in order to award reputation in that team) you have to move the funds there first. Use this method to do so.
   *
   * @remarks Requires the `Funding` permission in the root team. As soon as teams can be nested, this requires the `Funding` permission in a team that is a parent of both teams in which funds are moved.
   *
   * @example
   * ```typescript
   * import { Tokens } from '@colony/sdk';
   *
   * // Immediately executing async function
   * (async function() {
   *   // Move 10 of the native token from team 2 to team 3
   *   await colony.ext.motions.create.moveFundsToTeam(
   *      w`10`,
   *      2,
   *      3,
   *   );
   * })();
   * ```
   *
   * @param amount Amount to transfer between the teams
   * @param toTeam The team to transfer the funds to
   * @param fromTeam The team to transfer the funds from. Default is the Root team
   * @param tokenAddress The address of the token to be transferred. Default is the Colony's native token
   * @returns A tupel of event data and contract receipt
   *
   * **Motion event data**
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `motionId` | BigNumber | ID of the motion created |
   * | `creator` | string | Address of the motion's creator |
   * | `domainId` | BigNumber | Team ID of the motion |
   */
  async moveFundsToTeam(
    amount: BigNumberish,
    toTeam: BigNumberish,
    fromTeam?: BigNumberish,
    tokenAddress?: string,
  ) {
    const parentTeam = Id.RootDomain;
    const setFromTeam = fromTeam || Id.RootDomain;
    const setTokenAddress =
      tokenAddress || this.colonyClient.tokenClient.address;

    const { fundingPotId: fromPot } = await this.colonyClient.getDomain(
      setFromTeam,
    );
    const { fundingPotId: toPot } = await this.colonyClient.getDomain(toTeam);

    const fromChildSkillIndex = await getChildIndex(
      this.colonyClient,
      parentTeam,
      setFromTeam,
    );
    const toChildSkillIndex = await getChildIndex(
      this.colonyClient,
      parentTeam,
      toTeam,
    );

    return this.createMotion(
      // eslint-disable-next-line max-len
      'moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address)',
      parentTeam,
      ColonyRole.Funding,
      parentTeam,
      [
        parentTeam,
        fromChildSkillIndex,
        toChildSkillIndex,
        fromPot,
        toPot,
        amount,
        setTokenAddress,
      ],
    );
  }
}
