import {
  type BaseContract,
  type TransactionResponse,
  getBytes,
  solidityPackedKeccak256,
  Signature,
} from 'ethers';
import { Network } from '@colony/core';
import { MetadataType } from '@colony/event-metadata';

import type { IBasicMetaTransaction } from '../contracts/index.js';

import { ColonyMetaTransaction, EventData, TxCreator } from './TxCreator.js';
import { ParsedLogTransactionReceipt } from '../types.js';

type MetaTxInterface = IBasicMetaTransaction['interface'];

interface Interface extends MetaTxInterface {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  encodeFunctionData(functionFragment: string, values: any[]): string;
}

export interface MetaTxBaseContract extends BaseContract {
  interface: Interface;
  getMetatransactionNonce: IBasicMetaTransaction['getMetatransactionNonce'];
}

/**
 * An umbrella API for all kinds of transactions
 *
 * The `MetaTxCreator` allows for a simple API to cover all the different cases of transactions within the Colony Network. The `MetaTxCreator` supports sending a standard transaction ({@link MetaTxCreator.tx}) as well as metatransactions ({@link MetaTxCreator.metaTx}).
 *
 * ## Create a standard transaction ("force" in dApp)
 *
 * - {@link MetaTxCreator.tx}: force a Colony transaction, knowing you have the permissions to do so
 * - {@link MetaTxCreator.metaTx}: same as `tx()`, but send as a gasless metatransaction
 *
 * Learn more about these functions in their individual documentation
 */
export class MetaTxCreator<
  C extends MetaTxBaseContract,
  M extends keyof C,
  E extends EventData,
  MD extends MetadataType,
> extends TxCreator<C, M, E, MD> {
  protected async sendMetaTransaction(
    encodedTransaction: string,
    target: string,
  ): Promise<TransactionResponse> {
    if (!this.colonyNetwork.config.metaTxBroadcasterEndpoint) {
      throw new Error(
        `No metatransaction broadcaster endpoint found for network ${this.colonyNetwork.network}`,
      );
    }

    const signer = this.colonyNetwork.getSigner();
    const { provider } = signer;

    if (!provider) {
      throw new Error('No provider found');
    }

    let chainId: bigint;

    if (this.colonyNetwork.network === Network.Custom) {
      chainId = 1n;
    } else {
      const networkInfo = await provider.getNetwork();
      chainId = networkInfo.chainId;
    }

    const userAddress = await signer.getAddress();
    const nonce = await this.contract.getMetatransactionNonce(userAddress);

    const message = solidityPackedKeccak256(
      ['uint256', 'address', 'uint256', 'bytes'],
      [nonce.toString(), target, chainId, encodedTransaction],
    );
    const buf = getBytes(message);
    const signature = await signer.signMessage(buf);
    const { r, s, v } = Signature.from(signature);

    const broadcastData = {
      target,
      payload: encodedTransaction,
      userAddress,
      r,
      s,
      v,
    };

    return this.broadcastMetaTx(broadcastData);
  }

  private async getMetaTx() {
    const args = await this.getArgs();
    const encodedTransaction = this.contract.interface.encodeFunctionData(
      this.method,
      args,
    );
    const address = await this.contract.getAddress();
    return this.sendMetaTransaction(encodedTransaction, address);
  }

  private async getMetaMined(tx: TransactionResponse) {
    const receipt = await this.waitForMetaTx(tx);
    return this.getEventData(receipt);
  }

  /**
   * Create a gasless MetaTransaction ("force" in dApp)
   *
   * After creation, you can then `send` the transaction or wait for it to be `mined`.
   * See also {@link TxCreator.tx} and https://docs.colony.io/colonysdk/guides/transactions for more information
   *
   * @remarks The user sending this transaction has to have the appropriate permissions to do so. Learn more about permissions in Colony [here](/develop/dev-learning/permissions).
   *
   * @returns A transaction that can be `send` or `mined`.
   */
  metaTx() {
    return {
      send: async () => {
        const tx = await this.getMetaTx();
        return [tx, this.getMetaMined.bind(this, tx)];
      },
      mined: async () => {
        const tx = await this.getMetaTx();
        return this.getMetaMined(tx);
      },
    } as ColonyMetaTransaction<
      TransactionResponse,
      E,
      ParsedLogTransactionReceipt,
      MD
    >;
  }
}
