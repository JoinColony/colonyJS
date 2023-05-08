import type { MotionCreatedEventObject } from '@colony/events';

import { BigNumberish } from 'ethers';
import {
  ColonyRole,
  getPermissionProofs,
  getCreateMotionProofs,
  Id,
} from '@colony/core';
import { MetadataType } from '@colony/event-metadata';

import { Colony } from '../ColonyNetwork';
import { extractEvent } from '../utils';
import { TxCreatorConfig, EventData } from './TxCreator';
import { MetaTxBaseContract, MetaTxCreator } from './MetaTxCreator';

export interface PermissionConfig {
  domain: BigNumberish;
  roles: ColonyRole | ColonyRole[];
  address?: string;
}

interface MetaMotionsConfig<C, M, E, MD> extends TxCreatorConfig<C, M, E, MD> {
  colony: Colony;
  permissionConfig?: PermissionConfig;
}

/**
 * An umbrella API for all kinds of transactions within colonies
 *
 * The `ColonyTxCreator` allows for a simple API to cover all the different cases of transactions within a colony. Once a `ColonyTxCreator` is created using a method on the base contracts (e.g. [[Colony]] or extensions like [[VotingReputation]]), there are four options available:
 *
 * ## Create a standard transaction ("force" in dApp)
 *
 * - [[ColonyTxCreator.tx]]: force a Colony transaction, knowing you have the permissions to do so
 * - [[ColonyTxCreator.metaTx]]: same as `tx()`, but send as a gasless metatransaction
 *
 * ## Create a motion to trigger an action once it passes
 *
 * - [[ColonyTxCreator.motion]]: create a motion (needs the motion's domain as a parameter)
 * - [[ColonyTxCreator.metaMotion]]: same as `motion()`, but sends a gasless metatransaction
 *
 * Learn more about these functions in their individual documentation
 */
export class ColonyTxCreator<
  C extends MetaTxBaseContract,
  M extends keyof C['functions'],
  E extends EventData,
  MD extends MetadataType,
> extends MetaTxCreator<C, M, E, MD> {
  private colony: Colony;

  private permissionConfig?: PermissionConfig;

  constructor(config: MetaMotionsConfig<C, M, E, MD>) {
    super(config);
    this.colony = config.colony;
    this.permissionConfig = config.permissionConfig;
  }

  protected async getArgs() {
    let args: unknown[] = [];

    if (typeof this.args == 'function') {
      args = await this.args();
    } else {
      args = this.args;
    }

    if (this.permissionConfig) {
      if (!this.colony) {
        throw new Error(
          'Permissioned transactions can only be created on a Colony',
        );
      }
      const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
        this.colonyNetwork.getInternalNetworkContract(),
        this.colony.getInternalColonyContract(),
        this.permissionConfig.domain,
        this.permissionConfig.roles,
        this.permissionConfig.address,
      );
      // Quite dangerous but probably fine. Plus, it gets TS off our backs ;)
      args.unshift(permissionDomainId, childSkillIndex);
    }

    return args;
  }

  /**
   * Creates a motion for an action
   *
   * You can specify a team (domain) this motion should be created in. It will be created in the Root team by default.
   *
   * @remarks This will only work if the [[VotingReputation]] extension is installed for the Colony that's being acted on
   *
   * @returns A tupel of motion event data and contract receipt
   */
  async motion(motionDomain: BigNumberish = Id.RootDomain) {
    if (!this.colony) {
      throw new Error('Motions can only be created on a Colony');
    }

    if (!this.colony.ext.motions) {
      throw new Error(
        'VotingReputation extension is not installed for this Colony',
      );
    }

    const args = await this.getArgs();

    const encodedAction = this.contract.interface.encodeFunctionData(
      this.method,
      args,
    );

    // If the contract for this TxCreator is the colony, use 0x0, otherwise use the extension's address
    const altTarget =
      this.contract.address === this.colony.address
        ? '0x0'
        : this.contract.address;

    const { actionCid, key, value, branchMask, siblings } =
      await getCreateMotionProofs(
        this.colonyNetwork.getInternalNetworkContract(),
        this.colony.getInternalColonyContract(),
        this.colony.reputation,
        this.colony.ext.motions.getInternalVotingReputationContract(),
        motionDomain,
        altTarget,
        encodedAction,
      );

    const tx = await this.colony.ext.motions
      .getInternalVotingReputationContract()
      .createMotion(
        motionDomain,
        actionCid,
        altTarget,
        encodedAction,
        key,
        value,
        branchMask,
        siblings,
      );

    const receipt = await tx.wait();

    const data = {
      ...extractEvent<MotionCreatedEventObject>('MotionCreated', receipt),
    };

    return [data, receipt] as [typeof data, typeof receipt];
  }

  /**
   * Creates a motion for an action
   *
   * You can specify a team (domain) this motion should be created in. It will be created in the Root team by default.
   *
   * @remarks This will only work if the [[VotingReputation]] extension is installed for the Colony that's being acted on
   *
   * @returns A tupel of motion event data and contract receipt
   */
  async metaMotion(motionDomain: BigNumberish = Id.RootDomain) {
    if (!this.colony) {
      throw new Error('Motions can only be created on a Colony');
    }

    if (!this.colony.ext.motions) {
      throw new Error(
        'VotingReputation extension is not installed for this Colony',
      );
    }

    const args = await this.getArgs();

    const encodedAction = this.contract.interface.encodeFunctionData(
      this.method,
      args,
    );

    // If the contract for this TxCreator is the colony, use 0x0, otherwise use the extension's address
    const altTarget =
      this.contract.address === this.colony.address
        ? '0x0'
        : this.contract.address;

    const votingReputationClient =
      this.colony.ext.motions.getInternalVotingReputationContract();

    const { actionCid, key, value, branchMask, siblings } =
      await getCreateMotionProofs(
        this.colonyNetwork.getInternalNetworkContract(),
        this.colony.getInternalColonyContract(),
        this.colony.reputation,
        this.colony.ext.motions.getInternalVotingReputationContract(),
        motionDomain,
        altTarget,
        encodedAction,
      );

    const encodedTransaction =
      votingReputationClient.interface.encodeFunctionData('createMotion', [
        motionDomain,
        actionCid,
        altTarget,
        encodedAction,
        key,
        value,
        branchMask,
        siblings,
      ]);

    const receipt = await this.sendMetaTransaction(
      encodedTransaction,
      votingReputationClient.address,
    );

    const data = {
      ...extractEvent<MotionCreatedEventObject>('MotionCreated', receipt),
    };

    return [data, receipt] as [typeof data, typeof receipt];
  }
}
