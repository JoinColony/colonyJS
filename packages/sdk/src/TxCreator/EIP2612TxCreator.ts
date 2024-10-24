import type { TypedDataSigner } from '@ethersproject/abstract-signer';
import type { TransactionResponse } from '@ethersproject/abstract-provider';

import { type BigNumberish, type Signer, utils } from 'ethers';
import { Network } from '@colony/core';
import { type MetadataType } from '@colony/events';
import { type ERC2612Token as ERC2612TokenType } from '@colony/tokens';

import {
  type ColonyMetaTransaction,
  type EventData,
  TxCreator,
} from './TxCreator.js';
import { type ParsedLogTransactionReceipt } from '../types.js';

const { splitSignature } = utils;

// Little fix until ethers exposes this function
interface TDSigner extends Signer, TypedDataSigner {}

/**
 * Create transactions for contracts supporting the EIP2612 standard
 *
 * The `EIP2612TxCreator` allows for a simple API to cover all the different cases of transactions within the Colony Network.
 *
 * ## Create a standard transaction ("permissions" in dApp)
 *
 * - [[EIP2612TxCreator.tx]]: force a Colony transaction, knowing you have the permissions to do so
 * - [[EIP2612TxCreator.metaTx]]: same as `tx()`, but send as a gasless metatransaction
 *
 * Learn more about these functions in their individual documentation
 */
export class EIP2612TxCreator<
  E extends EventData,
  MD extends MetadataType,
> extends TxCreator<ERC2612TokenType, 'permit', E, MD> {
  private async getMetaTx() {
    const args = await this.getArgs();
    return this.sendMetaTransaction(
      this.contract.address,
      args as [string, BigNumberish],
    );
  }

  private async getMetaMined(tx: TransactionResponse) {
    const receipt = await this.waitForMetaTx(tx);
    return this.getEventData(receipt);
  }

  protected async sendMetaTransaction(
    target: string,
    [spender, amount]: [string, BigNumberish],
  ): Promise<TransactionResponse> {
    if (!this.config.metaTxBroadcasterEndpoint) {
      throw new Error(
        `No metatransaction broadcaster endpoint found for network ${this.config.network}`,
      );
    }

    const signer = this.contract.signer as TDSigner;
    const { provider } = signer;

    if (!provider) {
      throw new Error('No provider found');
    }

    let chainId: number;

    if (this.config.network === Network.Custom) {
      chainId = 1;
    } else {
      const networkInfo = await provider.getNetwork();
      chainId = networkInfo.chainId;
    }

    const userAddress = await signer.getAddress();
    const nonce = await this.contract.functions.nonces(userAddress);
    const tokenName = await this.contract.name();
    /*
     * @NOTE One hour in the future from now
     * Time is in seconds
     */
    const deadline = Math.floor(Date.now() / 1000) + 3600;

    // eslint-disable-next-line no-underscore-dangle
    const signature = await signer._signTypedData(
      {
        name: tokenName, // token.name()
        version: '1',
        chainId,
        verifyingContract: this.contract.address,
      },
      {
        Permit: [
          { name: 'owner', type: 'address' },
          { name: 'spender', type: 'address' },
          { name: 'value', type: 'uint256' },
          { name: 'nonce', type: 'uint256' },
          { name: 'deadline', type: 'uint256' },
        ],
      },
      {
        owner: userAddress,
        spender,
        value: amount,
        nonce: nonce.toString(),
        deadline,
      },
    );

    const { r, s, v } = splitSignature(signature);

    const broadcastData = {
      target,
      owner: userAddress,
      spender,
      value: amount.toString(),
      deadline,
      r,
      s,
      v,
    };

    return this.broadcastMetaTx(broadcastData);
  }

  /**
   * Create a standard transaction ("force" in dApp)
   *
   * You can then `send` the transaction or wait for it to be `mined`.
   * See also https://docs.colony.io/colonysdk/guides/transactions for more information
   *
   * @remarks The user sending this transaction has to have the appropriate permissions to do so. Learn more about permissions in Colony [here](/develop/dev-learning/permissions).
   *
   * @returns A transaction that can be `send`, `mined` or `encode`d.
   */
  tx() {
    if (this.method === 'permit') {
      throw new Error(
        `Only MetaTransactions are supported for this method. Please use "approve" instead.`,
      );
    }
    return super.tx.apply(this);
  }

  /**
   * Create a gasless MetaTransaction ("force" in dApp)
   *
   * After creation, you can then `send` the transaction or wait for it to be `mined`.
   * See also [[TxCreator.tx]] and https://docs.colony.io/colonysdk/guides/transactions for more information
   *
   * @remarks The user sending this transaction has to have the appropriate permissions to do so. Learn more about permissions in Colony [here](/develop/dev-learning/permissions).
   *
   * @returns A transaction that can be `send` or `mined`.
   */
  metaTx() {
    if (this.method !== 'permit') {
      throw new Error(
        `Only the "permit" function is allowed to be sent as MetaTransaction per EIP-2612`,
      );
    }

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
