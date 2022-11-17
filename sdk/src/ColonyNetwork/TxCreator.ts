import {
  ColonyRole,
  IBasicMetaTransaction,
  getPermissionProofs,
  Id,
} from '@colony/colony-js';
import { BigNumberish, ContractReceipt, ContractTransaction } from 'ethers';

import { Colony } from './Colony';
import { MetadataEvent, MetadataEventValue } from '../ipfs';

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
  };
}

export class TxCreator<
  C extends BaseContract,
  M extends keyof C['functions'],
  E extends EventData,
  ME extends MetadataEvent,
> {
  private colony: Colony;

  private contract: C;

  private method: string;

  private args: unknown[] | (() => Promise<unknown[]>);

  private eventData?: (receipt: ContractReceipt) => Promise<E>;

  private metadataEvent?: ME;

  private permissionConfig?: PermissionConfig;

  constructor({
    colony,
    contract,
    method,
    args,
    eventData,
    metadataEvent,
    permissionConfig,
  }: {
    colony: Colony;
    contract: C;
    method: M;
    args: unknown[] | (() => Promise<unknown[]>);
    eventData?: (receipt: ContractReceipt) => Promise<E>;
    metadataEvent?: ME;
    permissionConfig?: PermissionConfig;
  }) {
    this.colony = colony;
    this.contract = contract;
    this.method = method as string;
    this.args = args;
    this.eventData = eventData;
    this.metadataEvent = metadataEvent;
    this.permissionConfig = permissionConfig;
  }

  async forceTx(): Promise<
    | [E, ContractReceipt, () => Promise<MetadataEventValue<ME>>]
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

      if (this.metadataEvent && data.metadata) {
        const getMetadata =
          this.colony.colonyNetwork.ipfs.getMetadataForEvent.bind(
            this.colony.colonyNetwork.ipfs,
            this.metadataEvent,
            data.metadata,
          ) as () => Promise<MetadataEventValue<ME>>;

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
}
