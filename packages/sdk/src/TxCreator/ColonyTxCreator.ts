import { BigNumberish, ContractReceipt, ContractTransaction } from 'ethers';
import {
  ColonyRole,
  getPermissionProofs,
  getCreateMotionProofs,
  Id,
} from '@colony/core';
import { MetadataType, type MotionCreatedEventObject } from '@colony/events';

import type { TransactionResponse } from '@ethersproject/abstract-provider';
import { Colony } from '../ColonyNetwork/index.js';
import { extractEvent } from '../utils.js';
import {
  TxCreatorConfig,
  EventData,
  ColonyTransaction,
  ColonyMetaTransaction,
} from './TxCreator.js';
import { MetaTxBaseContract, MetaTxCreator } from './MetaTxCreator.js';
import { ParsedLogTransactionReceipt } from '../types.js';

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
 * The `ColonyTxCreator` allows for a simple API to cover all the different cases of transactions within a colony. Once a `ColonyTxCreator` is created using a method on the base contracts (e.g. {@link Colony} or extensions like {@link VotingReputation}) there are four options available:
 *
 * ## Create a standard transaction ("force" in dApp)
 *
 * - {@link ColonyTxCreator.tx}: force a Colony transaction, knowing you have the permissions to do so
 * - {@link ColonyTxCreator.metaTx}: same as `tx()`, but send as a gasless metatransaction
 *
 * ## Create a motion to trigger an action once it passes
 *
 * - {@link ColonyTxCreator.motion}: create a motion (needs the motion's domain as a parameter)
 * - {@link ColonyTxCreator.metaMotion}: same as `motion()`, but sends a gasless metatransaction
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

  private async getMotionTx(motionDomain: BigNumberish) {
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

    return this.colony.ext.motions
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
  }

  // eslint-disable-next-line class-methods-use-this
  private async getMotionMined(tx: ContractTransaction) {
    const receipt = await tx.wait();

    const data = {
      ...extractEvent<MotionCreatedEventObject>('MotionCreated', receipt),
    };

    return [data, receipt] as [typeof data, typeof receipt];
  }

  private async getEncodedMotionTx(motionDomain: BigNumberish) {
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

    return [
      votingReputationClient.interface.encodeFunctionData('createMotion', [
        motionDomain,
        actionCid,
        altTarget,
        encodedAction,
        key,
        value,
        branchMask,
        siblings,
      ]),
      votingReputationClient.address,
    ];
  }

  private async getMetaMotionTx(motionDomain: BigNumberish) {
    const [encodedTransaction, address] = await this.getEncodedMotionTx(
      motionDomain,
    );

    return this.sendMetaTransaction(encodedTransaction, address);
  }

  private async getMetaMotionMinded(tx: TransactionResponse) {
    const receipt = await this.waitForMetaTx(tx);

    const data = {
      ...extractEvent<MotionCreatedEventObject>('MotionCreated', receipt),
    };

    return [data, receipt] as [typeof data, typeof receipt];
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
   * After creation, you can then `send` the transaction or wait for it to be `mined`.
   * See also {@link ColonyTransaction} and https://docs.colony.io/colonysdk/guides/transactions for more information
   *
   * @remarks This will only work if the {@link VotingReputation} extension is installed for the Colony that's being acted on
   *
   * @returns A motion transaction that can be `send` or `mined` or `encode`d.
   */
  motion(motionDomain: BigNumberish = Id.RootDomain) {
    return {
      send: async () => {
        const tx = await this.getMotionTx(motionDomain);
        return [tx, this.getMotionMined.bind(this, tx)];
      },
      mined: async () => {
        const tx = await this.getMotionTx(motionDomain);
        return this.getMotionMined(tx);
      },
      encode: async () => {
        const [encoded] = await this.getEncodedMotionTx(motionDomain);
        return encoded;
      },
    } as ColonyTransaction<
      ContractTransaction,
      MotionCreatedEventObject,
      ContractReceipt,
      MD
    >;
  }

  /**
   * Creates a motion for an action, using a gasless transaction
   *
   * You can specify a team (domain) this motion should be created in. It will be created in the Root team by default.
   *
   * After creation, you can then `send` the transaction or wait for it to be `mined`.
   * See also {@link TxCreator.tx} and https://docs.colony.io/colonysdk/guides/transactions for more information
   *
   * @remarks This will only work if the {@link VotingReputation} extension is installed for the Colony that's being acted on
   *
   * @returns A motion transaction that can be `send` or `mined` or `encode`d.
   */
  metaMotion(motionDomain: BigNumberish = Id.RootDomain) {
    return {
      send: async () => {
        const tx = await this.getMetaMotionTx(motionDomain);
        return [tx, this.getMetaMotionMinded.bind(this, tx)];
      },
      mined: async () => {
        const tx = await this.getMetaMotionTx(motionDomain);
        return this.getMetaMotionMinded(tx);
      },
    } as ColonyMetaTransaction<
      TransactionResponse,
      MotionCreatedEventObject,
      ParsedLogTransactionReceipt,
      MD
    >;
  }
}
