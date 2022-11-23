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

import { Colony } from './Colony';
import { MetadataType, MetadataValue } from '../ipfs';
import type { ParsedLogTransactionReceipt } from '../utils';
import { IPFS_METADATA_EVENTS } from '../ipfs/IpfsMetadata';

const { arrayify, solidityKeccak256, splitSignature } = utils;

export interface PermissionConfig {
  domain: BigNumberish;
  roles: ColonyRole | ColonyRole[];
  address?: string;
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

export class TxCreator<
  C extends BaseContract,
  M extends keyof C['functions'],
  E extends EventData,
  MD extends MetadataType,
> {
  private colony: Colony;

  private contract: C;

  private method: string;

  private args: unknown[] | (() => Promise<unknown[]>);

  private eventData?: (receipt: ContractReceipt) => Promise<E>;

  private metadataType?: MD;

  private permissionConfig?: PermissionConfig;

  constructor({
    colony,
    contract,
    method,
    args,
    eventData,
    metadataType,
    permissionConfig,
  }: {
    colony: Colony;
    contract: C;
    method: M;
    args: unknown[] | (() => Promise<unknown[]>);
    eventData?: (receipt: ContractReceipt) => Promise<E>;
    metadataType?: MD;
    permissionConfig?: PermissionConfig;
  }) {
    this.colony = colony;
    this.contract = contract;
    this.method = method as string;
    this.args = args;
    this.eventData = eventData;
    this.metadataType = metadataType;
    this.permissionConfig = permissionConfig;
  }

  async forceTx(): Promise<
    | [E, ContractReceipt, () => Promise<MetadataValue<MD>>]
    | [E, ContractReceipt]
  > {
    let args: unknown[] = [];

    if (typeof this.args == 'function') {
      args = await this.args();
    } else {
      args = this.args;
    }

    if (this.permissionConfig) {
      const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
        this.colony.getInternalColonyClient(),
        this.permissionConfig.domain,
        this.permissionConfig.roles,
        this.permissionConfig.address,
      );
      // Quite dangerous but probably fine. Plus, it gets TS off our backs ;)
      args.unshift(permissionDomainId, childSkillIndex);
    }

    const tx = (await this.contract.functions[this.method].apply(
      this.contract,
      args,
    )) as ContractTransaction;
    const receipt = await tx.wait();

    if (this.eventData) {
      const data = await this.eventData(receipt);

      if (this.metadataType && data.metadata) {
        const getMetadata =
          this.colony.colonyNetwork.ipfs.getMetadataForEvent.bind(
            this.colony.colonyNetwork.ipfs,
            IPFS_METADATA_EVENTS[this.metadataType],
            data.metadata,
          ) as () => Promise<MetadataValue<MD>>;

        return [data, receipt, getMetadata];
      }

      return [data, receipt];
    }

    return [{} as E, receipt];
  }

  async motionTx(motionDomain: BigNumberish = Id.RootDomain) {
    if (!this.colony.ext.motions) {
      throw new Error(
        'VotingReputation extension is not installed for this Colony',
      );
    }

    let args: unknown[] = [];

    if (typeof this.args == 'function') {
      args = await this.args();
    } else {
      args = this.args;
    }

    if (this.permissionConfig) {
      const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
        this.colony.getInternalColonyClient(),
        this.permissionConfig.domain,
        this.permissionConfig.roles,
        this.permissionConfig.address,
      );
      // Quite dangerous but probably fine. Plus, it gets TS off our backs ;)
      args.unshift(permissionDomainId, childSkillIndex);
    }

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

  async force() {
    const { colonyNetwork, signerOrProvider } = this.colony;

    if (!colonyNetwork.config.metaTxBroadcasterEndpoint) {
      throw new Error(
        `No metatransaction broadcaster endpoint found for network ${colonyNetwork.network}`,
      );
    }

    if (!(signerOrProvider instanceof Signer)) {
      throw new Error('Need a signer to create a transaction');
    }

    const { provider } = signerOrProvider;
    if (!provider) {
      throw new Error('No provider found');
    }

    let args: unknown[] = [];

    if (typeof this.args == 'function') {
      args = await this.args();
    } else {
      args = this.args;
    }

    const userAddress = await signerOrProvider.getAddress();
    const nonce = await this.contract.functions.getMetatransactionNonce(
      userAddress,
    );

    let chainId: number;

    if (colonyNetwork.network === Network.Custom) {
      chainId = 1;
    } else {
      const networkInfo = await provider.getNetwork();
      chainId = networkInfo.chainId;
    }

    if (this.permissionConfig) {
      const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
        this.colony.getInternalColonyClient(),
        this.permissionConfig.domain,
        this.permissionConfig.roles,
        this.permissionConfig.address,
      );
      // Quite dangerous but probably fine. Plus, it gets TS off our backs ;)
      args.unshift(permissionDomainId, childSkillIndex);
    }

    const encodedTransaction = this.contract.interface.encodeFunctionData(
      this.method,
      args,
    );
    const message = solidityKeccak256(
      ['uint256', 'address', 'uint256', 'bytes'],
      [nonce.toString(), this.contract.address, chainId, encodedTransaction],
    );
    const buf = arrayify(message);
    const signature = await signerOrProvider.signMessage(buf);
    const { r, s, v } = splitSignature(signature);

    const data = {
      target: this.contract.address,
      payload: encodedTransaction,
      userAddress,
      r,
      s,
      v,
    };

    const res = await fetch(
      `${colonyNetwork.config.metaTxBroadcasterEndpoint}/broadcast`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
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

    if (this.eventData) {
      const eventData = await this.eventData(receipt);

      if (this.metadataType && eventData.metadata) {
        const getMetadata = colonyNetwork.ipfs.getMetadataForEvent.bind(
          colonyNetwork.ipfs,
          IPFS_METADATA_EVENTS[this.metadataType],
          eventData.metadata,
        ) as () => Promise<MetadataValue<MD>>;

        return [eventData, receipt, getMetadata];
      }

      return [eventData, receipt];
    }

    return [{} as E, receipt];
  }

  async send(motionDomain: BigNumberish) {
    const { colonyNetwork, signerOrProvider } = this.colony;

    if (!this.colony.ext.motions) {
      throw new Error(
        'VotingReputation extension is not installed for this Colony',
      );
    }

    if (!colonyNetwork.config.metaTxBroadcasterEndpoint) {
      throw new Error(
        `No metatransaction broadcaster endpoint found for network ${colonyNetwork.network}`,
      );
    }

    if (!(signerOrProvider instanceof Signer)) {
      throw new Error('Need a signer to create a transaction');
    }

    const { provider } = signerOrProvider;
    if (!provider) {
      throw new Error('No provider found');
    }

    let args: unknown[] = [];

    if (typeof this.args == 'function') {
      args = await this.args();
    } else {
      args = this.args;
    }

    const userAddress = await signerOrProvider.getAddress();
    const nonce = await this.contract.functions.getMetatransactionNonce(
      userAddress,
    );

    let chainId: number;

    if (colonyNetwork.network === Network.Custom) {
      chainId = 1;
    } else {
      const networkInfo = await provider.getNetwork();
      chainId = networkInfo.chainId;
    }

    if (this.permissionConfig) {
      const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
        this.colony.getInternalColonyClient(),
        this.permissionConfig.domain,
        this.permissionConfig.roles,
        this.permissionConfig.address,
      );
      // Quite dangerous but probably fine. Plus, it gets TS off our backs ;)
      args.unshift(permissionDomainId, childSkillIndex);
    }

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

    const message = solidityKeccak256(
      ['uint256', 'address', 'uint256', 'bytes'],
      [nonce.toString(), this.contract.address, chainId, encodedTransaction],
    );
    const buf = arrayify(message);
    const signature = await signerOrProvider.signMessage(buf);
    const { r, s, v } = splitSignature(signature);

    const data = {
      target: this.contract.address,
      payload: encodedTransaction,
      userAddress,
      r,
      s,
      v,
    };

    const res = await fetch(
      `${colonyNetwork.config.metaTxBroadcasterEndpoint}/broadcast`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
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

    if (this.eventData) {
      const eventData = await this.eventData(receipt);

      if (this.metadataType && eventData.metadata) {
        const getMetadata = colonyNetwork.ipfs.getMetadataForEvent.bind(
          colonyNetwork.ipfs,
          IPFS_METADATA_EVENTS[this.metadataType],
          eventData.metadata,
        ) as () => Promise<MetadataValue<MD>>;

        return [eventData, receipt, getMetadata];
      }

      return [eventData, receipt];
    }

    return [{} as E, receipt];
  }
}
