import type { TransactionResponse } from '@ethersproject/abstract-provider';

import {
  type Contract,
  type ContractReceipt,
  type ContractTransaction,
} from 'ethers';
import { type TxOverrides, parseLogs } from '@colony/core';
import {
  type MetadataTypeMap,
  type VotingReputationEvents,
  IpfsMetadataEvents,
  type MetadataType,
} from '@colony/events';

import { type ParsedLogTransactionReceipt } from '../types.js';
import { type ContractConfig } from '../ContractConfig.js';

export interface TxConfig<M = MetadataType.DEFAULT> {
  metadataType?: M;
}

export interface EventData {
  metadata?: string;
}

export interface TxCreatorConfig<C, M, E, MD> {
  contract: C;
  config: ContractConfig;
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
  interface: Contract['interface'];
}

/**
 * A standard gasless MetaTransaction ("force" in dApp)
 *
 * You can then `send` the transaction, wait for it to be `mined` or `encode` it.
 * See also https://docs.colony.io/colonysdk/guides/transactions for more information
 *
 * @example
 * ```typescript
 * (async function() {
 *   // Just send off the transaction and get back the tx object
 *   // First tupel value is the ethers transaction, including the hash
 *   // Second tupel value is a function that does the same as `.mined()` below
 *   const [tx, mined] = await colony.claimFunds().metaTx().send();
 *   console.info(tx.hash); // Transaction hash
 *   const [eventData, receipt] = await mined();
 *   // Wait for tx to be mined, get back the eventData, receipt
 *   const [eventData, receipt] = await colony.claimFunds().metaTx().mined();
 * })();
 * ```
 *
 * @returns A transaction that can be `send`, `mined` or `encode`d.
 */
export interface ColonyMetaTransaction<
  C extends TransactionResponse,
  E extends EventData | VotingReputationEvents.MotionCreatedEventObject,
  R extends ParsedLogTransactionReceipt,
  MD extends MetadataType,
> {
  /**
   * Send off the tx, returning the transaction including its hash, not waiting for it to be mined
   *
   * @returns A tupel of a contract transaction and a function to wait for the mined event data as well as the receipt
   */
  send(): Promise<
    [C, () => Promise<[E, R, () => Promise<MetadataTypeMap[MD]>] | [E, R]>]
  >;
  /**
   * Wait until the tx is mined, returning the event data and the receipt
   *
   * @returns A tupel of event data and contract receipt (and a function to retrieve metadata if applicable)
   */
  mined(): Promise<[E, R, () => Promise<MetadataTypeMap[MD]>] | [E, R]>;
}

/**
 * A standard transaction ("force" in dApp)
 *
 * You can then `send` the transaction, wait for it to be `mined` or `encode` it.
 * See also https://docs.colony.io/colonysdk/guides/transactions for more information
 *
 * @example
 * ```typescript
 * (async function() {
 *   // Just send off the transaction and get back the tx object
 *   // First tupel value is the ethers transaction, including the hash
 *   // Second tupel value is a function that does the same as `.mined()` below
 *   const [tx, mined] = await colony.claimFunds().tx().send();
 *   console.info(tx.hash); // Transaction hash
 *   const [eventData, receipt] = await mined();
 *   // Wait for tx to be mined, get back the eventData, receipt
 *   const [eventData, receipt] = await colony.claimFunds().tx().mined();
 *   // A transaction can also be output as a raw, encoded string for later use (e.g. using `sendRawTransaction`)
 *   const encoded = await colony.claimFunds().tx().encode();
 *   console.log(encoded); // 0x89224a1e000000000000000000000000bdc38a08548b47015f5fe853aa6614cfb2cbfcc0
 * })();
 * ```
 *
 *
 * @returns A transaction that can be `send`, `mined` or `encode`d.
 */
export interface ColonyTransaction<
  C extends ContractTransaction,
  E extends EventData | VotingReputationEvents.MotionCreatedEventObject,
  R extends ContractReceipt,
  MD extends MetadataType,
> {
  /**
   * Send off the tx, returning the transaction including its hash, not waiting for it to be mined
   *
   * @returns A tupel of a contract transaction and a function to wait for the mined event data as well as the receipt
   */
  send(
    overrides?: TxOverrides,
  ): Promise<
    [C, () => Promise<[E, R, () => Promise<MetadataTypeMap[MD]>] | [E, R]>]
  >;
  /**
   * Wait until the tx is mined, returning the event data and the receipt
   *
   * @returns A tupel of event data and contract receipt (and a function to retrieve metadata if applicable)
   */
  mined(
    overrides?: TxOverrides,
  ): Promise<[E, R, () => Promise<MetadataTypeMap[MD]>] | [E, R]>;
  /** Encode the transaction into a raw string
   *
   * @returns A raw, encoded transaction string
   */
  encode(): Promise<string>;
}

/**
 * An umbrella API for all kinds of transactions
 *
 * The `TxCreator` allows for a simple API to cover all the different cases of transactions within the Colony Network. This is the base class of the TxCreator that only supports the `tx()` action and no metatransactions.
 *
 * ## Create a standard transaction ("force" in dApp)
 *
 * - {@link TxCreator.tx}: force a Colony transaction, knowing you have the permissions to do so
 *
 * Learn more about these functions in their individual documentation
 */
export class TxCreator<
  C extends BaseContract,
  M extends keyof C['functions'],
  E extends EventData,
  MD extends MetadataType,
> {
  protected contract: C;

  protected config: ContractConfig;

  protected method: string;

  protected args: unknown[] | (() => Promise<unknown[]>);

  private eventData?: (receipt: ContractReceipt) => Promise<E>;

  protected txConfig?: TxConfig<MD>;

  constructor({
    contract,
    config,
    method,
    args,
    eventData,
    txConfig,
  }: {
    contract: C;
    config: ContractConfig;
    method: M;
    args: unknown[] | (() => Promise<unknown[]>);
    eventData?: (receipt: ContractReceipt) => Promise<E>;
    metadataType?: MD;
    txConfig?: TxConfig<MD>;
  }) {
    this.config = config;
    this.contract = contract;
    this.method = method as string;
    this.args = args;
    this.eventData = eventData;
    this.txConfig = txConfig;
  }

  protected async getArgs(overrides?: TxOverrides) {
    let args: unknown[] = [];

    if (typeof this.args == 'function') {
      args = await this.args();
    } else {
      args = this.args;
    }

    if (overrides) {
      args.push(overrides);
    }

    return args;
  }

  private async getTx(overrides?: TxOverrides) {
    const args = await this.getArgs(overrides);
    const tx = (await this.contract.functions[this.method].apply(
      this.contract,
      args,
    )) as ContractTransaction;
    return tx;
  }

  private async getMined(tx: ContractTransaction) {
    const receipt = await tx.wait();
    return this.getEventData(receipt);
  }

  protected async getEventData<
    R extends ContractReceipt | ParsedLogTransactionReceipt,
  >(receipt: R): Promise<[E, R, () => Promise<MetadataTypeMap[MD]>] | [E, R]> {
    if (this.eventData) {
      const data = await this.eventData(receipt);

      if (this.txConfig?.metadataType && data.metadata) {
        const getMetadata = this.config.ipfs.getMetadataForEvent.bind(
          this.config.ipfs,
          IpfsMetadataEvents[this.txConfig.metadataType],
          data.metadata,
        ) as () => Promise<MetadataTypeMap[MD]>;

        return [data, receipt as R, getMetadata];
      }

      return [data, receipt as R];
    }

    return [{} as E, receipt as R];
  }

  protected async broadcastMetaTx(broadcastData: Record<string, unknown>) {
    const { provider } = this.config.getSigner();

    if (!provider) {
      throw new Error('No provider found');
    }

    const res = await fetch(
      `${this.config.metaTxBroadcasterEndpoint}/broadcast`,
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

    return provider.getTransaction(parsed.data.txHash);
  }

  protected async waitForMetaTx(tx: TransactionResponse) {
    const receipt = (await tx.wait()) as ParsedLogTransactionReceipt;
    receipt.parsedLogs = parseLogs(receipt.logs, this.contract.interface);

    return receipt;
  }

  /**
   * Create a standard transaction ("force" in dApp)
   *
   * See also {@link ColonyTransaction} or https://docs.colony.io/colonysdk/guides/transactions for more information
   *
   * @remarks The user sending this transaction has to have the appropriate permissions to do so. Learn more about permissions in Colony [here](/develop/dev-learning/permissions).
   *
   * @returns A transaction that can be `send`, `mined` or `encode`d.
   */
  tx() {
    return {
      send: async (overrides?: TxOverrides) => {
        const tx = await this.getTx(overrides);
        return [tx, this.getMined.bind(this, tx)];
      },
      mined: async (overrides?: TxOverrides) => {
        const tx = await this.getTx(overrides);
        return this.getMined(tx);
      },
      encode: async () => {
        const args = await this.getArgs();
        return this.contract.interface.encodeFunctionData(this.method, args);
      },
    } as ColonyTransaction<ContractTransaction, E, ContractReceipt, MD>;
  }
}
