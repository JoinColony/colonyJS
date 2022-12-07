import { ContractReceipt, ContractTransaction } from 'ethers';
import { MetadataType } from '@colony/colony-event-metadata-parser';

import { MetadataValue } from '../ipfs';
import { ParsedLogTransactionReceipt } from '../types';
import { IPFS_METADATA_EVENTS } from '../ipfs/IpfsMetadata';
import { ColonyNetwork } from '../ColonyNetwork';

export interface TxConfig<M> {
  metadataType?: M;
}

export interface EventData {
  metadata?: string;
}

export interface TxCreatorConfig<C, M, E, MD> {
  colonyNetwork: ColonyNetwork;
  contract: C;
  method: M;
  args: unknown[] | (() => Promise<unknown[]>);
  eventData?: (receipt: ContractReceipt) => Promise<E>;
  metadataType?: MD;
  txConfig?: TxConfig<MD>;
}

// I really just wanted to use the ethers' `BaseContract` but that seemed to have been to specific
export interface BaseContract {
  address: string;
  functions: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: (...args: any[]) => Promise<any>;
  };
}

/**
 * An umbrella API for all kinds of transactions
 *
 * The `TxCreator` allows for a simple API to cover all the different cases of transactions within the Colony Network. This is the base class of the TxCreator that only supports the `force()` action and no metatransactions.
 *
 * ## Force a transaction
 *
 * - [[TxCreator.force]]: force a Colony transaction, knowing you have the permissions to do so
 *
 * Learn more about these functions in their individual documentation
 */
export class TxCreator<
  C extends BaseContract,
  M extends keyof C['functions'],
  E extends EventData,
  MD extends MetadataType,
> {
  protected colonyNetwork: ColonyNetwork;

  protected contract: C;

  protected method: string;

  protected args: unknown[] | (() => Promise<unknown[]>);

  private eventData?: (receipt: ContractReceipt) => Promise<E>;

  protected txConfig?: TxConfig<MD>;

  constructor({
    colonyNetwork,
    contract,
    method,
    args,
    eventData,
    txConfig,
  }: {
    colonyNetwork: ColonyNetwork;
    contract: C;
    method: M;
    args: unknown[] | (() => Promise<unknown[]>);
    eventData?: (receipt: ContractReceipt) => Promise<E>;
    metadataType?: MD;
    txConfig?: TxConfig<MD>;
  }) {
    this.colonyNetwork = colonyNetwork;
    this.contract = contract;
    this.method = method as string;
    this.args = args;
    this.eventData = eventData;
    this.txConfig = txConfig;
  }

  protected async getArgs() {
    let args: unknown[] = [];

    if (typeof this.args == 'function') {
      args = await this.args();
    } else {
      args = this.args;
    }

    return args;
  }

  protected async getEventData<
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

  /**
   * Forces an action
   *
   * @remarks The user sending this transaction has to have the appropriate permissions to do so. Learn more about permissions in Colony [here](/develop/dev-learning/permissions).
   *
   * @returns A tupel of event data and contract receipt (and a function to retrieve metadata if applicable)
   */
  async force() {
    const args = await this.getArgs();

    const tx = (await this.contract.functions[this.method].apply(
      this.contract,
      args,
    )) as ContractTransaction;
    const receipt = await tx.wait();
    return this.getEventData(receipt);
  }
}
