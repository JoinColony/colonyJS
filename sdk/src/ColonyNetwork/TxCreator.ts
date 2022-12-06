import {
  ColonyRole,
  IBasicMetaTransaction,
  getPermissionProofs,
  getCreateMotionProofs,
  Id,
  Network,
} from '@colony/colony-js';
import {
  BigNumberish,
  ContractReceipt,
  ContractTransaction,
  Signer,
  utils,
} from 'ethers';
import { fetch } from 'cross-fetch';
import { MetadataType } from '@colony/colony-event-metadata-parser';

import { MotionCreatedEventObject } from '@colony/colony-js/extras';
import { Colony } from './Colony';
import { MetadataValue } from '../ipfs';
import { extractEvent } from '../utils';
import { ParsedLogTransactionReceipt } from '../types';
import { IPFS_METADATA_EVENTS } from '../ipfs/IpfsMetadata';
import { ColonyNetwork } from './ColonyNetwork';

const { arrayify, solidityKeccak256, splitSignature } = utils;

export interface PermissionConfig {
  domain: BigNumberish;
  roles: ColonyRole | ColonyRole[];
  address?: string;
}

export interface TxConfig<M> {
  metadataType?: M;
  unsupported?: {
    force?: boolean;
    motion?: boolean;
    forceMeta?: boolean;
    motionMeta?: boolean;
  };
}

interface EventData {
  metadata?: string;
}

type MetaTxFunctions = IBasicMetaTransaction['functions'];

interface Functions extends MetaTxFunctions {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: (...args: any[]) => Promise<any>;
}

interface BaseContract {
  address: string;
  functions: Functions;
  interface: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    encodeFunctionData(functionFragment: string, values: any[]): string;
    parseLog: IBasicMetaTransaction['interface']['parseLog'];
  };
}

/**
 * An umbrella API for all kinds of transactions
 *
 * The `TxCreator` allows for a simple API to cover all the different cases of transactions within Colony. Once a `TxCreator` is created using a method on the base contracts (e.g. [[Colony]] or extensions like [[VotingReputation]]), there are four options available:
 *
 * ## Force a transaction
 *
 * - [[TxCreator.force]]: force a Colony transaction, knowing you have the permissions to do so
 * - [[TxCreator.forceMeta]]: same as `force()`, but send as a gasless metatransaction
 *
 * ## Create a motion to trigger an action once it passes
 *
 * - [[TxCreator.motion]]: create a motion (needs the motion's domain as a parameter)
 * - [[TxCreator.motionMeta]]: same as `motion()`, but sends a gasless metatransaction
 *
 * Learn more about these functions in their individual documentation
 */
export class TxCreator<
  C extends BaseContract,
  M extends keyof C['functions'],
  E extends EventData,
  MD extends MetadataType,
> {
  private colonyNetwork: ColonyNetwork;

  private colony?: Colony;

  private contract: C;

  private method: string;

  private args: unknown[] | (() => Promise<unknown[]>);

  private eventData?: (receipt: ContractReceipt) => Promise<E>;

  private permissionConfig?: PermissionConfig;

  private txConfig?: TxConfig<MD>;

  constructor({
    colony,
    colonyNetwork,
    contract,
    method,
    args,
    eventData,
    permissionConfig,
    txConfig,
  }: {
    colony?: Colony;
    colonyNetwork: ColonyNetwork;
    contract: C;
    method: M;
    args: unknown[] | (() => Promise<unknown[]>);
    eventData?: (receipt: ContractReceipt) => Promise<E>;
    metadataType?: MD;
    permissionConfig?: PermissionConfig;
    txConfig?: TxConfig<MD>;
  }) {
    this.colony = colony;
    this.colonyNetwork = colonyNetwork;
    this.contract = contract;
    this.method = method as string;
    this.args = args;
    this.eventData = eventData;
    this.permissionConfig = permissionConfig;
    this.txConfig = txConfig;
  }

  private async getArgs() {
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
        this.colony.getInternalColonyClient(),
        this.permissionConfig.domain,
        this.permissionConfig.roles,
        this.permissionConfig.address,
      );
      // Quite dangerous but probably fine. Plus, it gets TS off our backs ;)
      args.unshift(permissionDomainId, childSkillIndex);
    }

    return args;
  }

  private async getEventData<
    R extends ContractReceipt | ParsedLogTransactionReceipt,
  >(receipt: R): Promise<[E, R, () => Promise<MetadataValue<MD>>] | [E, R]> {
    if (this.eventData) {
      const data = await this.eventData(receipt);

      if (this.txConfig?.metadataType && data.metadata) {
        const getMetadata = this.colonyNetwork.ipfs.getMetadataForEvent.bind(
          this.colonyNetwork.ipfs,
          IPFS_METADATA_EVENTS[this.txConfig.metadataType],
          data.metadata,
        ) as () => Promise<MetadataValue<MD>>;

        return [data, receipt as R, getMetadata];
      }

      return [data, receipt as R];
    }

    return [{} as E, receipt as R];
  }

  private getSigner(): Signer {
    const { signerOrProvider } = this.colonyNetwork;
    if (!(signerOrProvider instanceof Signer)) {
      throw new Error('Need a signer to create a transaction');
    }
    return signerOrProvider;
  }

  private async sendMetaTransaction(
    encodedTransaction: string,
    target: string,
  ): Promise<ParsedLogTransactionReceipt> {
    if (!this.colonyNetwork.config.metaTxBroadcasterEndpoint) {
      throw new Error(
        `No metatransaction broadcaster endpoint found for network ${this.colonyNetwork.network}`,
      );
    }

    const signer = this.getSigner();
    const { provider } = signer;

    if (!provider) {
      throw new Error('No provider found');
    }

    let chainId: number;

    if (this.colonyNetwork.network === Network.Custom) {
      chainId = 1;
    } else {
      const networkInfo = await provider.getNetwork();
      chainId = networkInfo.chainId;
    }

    const userAddress = await signer.getAddress();
    const nonce = await this.contract.functions.getMetatransactionNonce(
      userAddress,
    );

    const message = solidityKeccak256(
      ['uint256', 'address', 'uint256', 'bytes'],
      [nonce.toString(), target, chainId, encodedTransaction],
    );
    const buf = arrayify(message);
    const signature = await signer.signMessage(buf);
    const { r, s, v } = splitSignature(signature);

    const broadcastData = {
      target,
      payload: encodedTransaction,
      userAddress,
      r,
      s,
      v,
    };

    const res = await fetch(
      `${this.colonyNetwork.config.metaTxBroadcasterEndpoint}/broadcast`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(broadcastData),
      },
    );
    const parsed = await res.json();

    if (parsed.status !== 'success') {
      throw new Error(
        `Could not send Metatransaction. Reason given: ${parsed.data.reason}`,
      );
    }

    if (!parsed.data?.txHash) {
      throw new Error(
        'Could not get transaction hash from broadcaster response',
      );
    }

    const receipt = (await provider.waitForTransaction(
      parsed.data.txHash,
    )) as ParsedLogTransactionReceipt;
    receipt.parsedLogs = receipt.logs.map((log) =>
      this.contract.interface.parseLog(log),
    );

    return receipt;
  }

  /**
   * Forces an action
   *
   * @remarks The user sending this transaction has to have the appropriate permissions to do so. Learn more about permissions in Colony [here](/develop/dev-learning/permissions).
   *
   * @returns A tupel of event data and contract receipt (and a function to retrieve metadata if applicable)
   */
  async force() {
    if (this.txConfig?.unsupported?.force) {
      throw new Error(`force() is not allowed for ${this.method}`);
    }

    const args = await this.getArgs();

    const tx = (await this.contract.functions[this.method].apply(
      this.contract,
      args,
    )) as ContractTransaction;
    const receipt = await tx.wait();
    return this.getEventData(receipt);
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
    if (this.txConfig?.unsupported?.motion) {
      throw new Error(`motion() is not allowed for ${this.method}`);
    }

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

    return this.colony.ext.motions.createMotion(
      motionDomain,
      encodedAction,
      altTarget,
    );
  }

  /**
   * Forces an action using a gasless metatransaction
   *
   * @remarks The user sending this transaction has to have the appropriate permissions to do so. Learn more about permissions in Colony [here](/develop/dev-learning/permissions).
   *
   * @returns A tupel of event data and contract receipt (and a function to retrieve metadata if applicable)
   */
  async forceMeta() {
    if (this.txConfig?.unsupported?.forceMeta) {
      throw new Error(`forceMeta() is not allowed for ${this.method}`);
    }

    const args = await this.getArgs();

    const encodedTransaction = this.contract.interface.encodeFunctionData(
      this.method,
      args,
    );
    const receipt = await this.sendMetaTransaction(
      encodedTransaction,
      this.contract.address,
    );
    return this.getEventData(receipt);
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
  async motionMeta(motionDomain: BigNumberish = Id.RootDomain) {
    if (this.txConfig?.unsupported?.motionMeta) {
      throw new Error(`motionMeta() is not allowed for ${this.method}`);
    }

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
      this.colony.ext.motions.getInternalVotingReputationClient();

    const { actionCid, key, value, branchMask, siblings } =
      await getCreateMotionProofs(
        votingReputationClient,
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
