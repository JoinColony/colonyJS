import { Network } from '@colony/colony-js';
import { ERC2612Token as ERC2612TokenType } from '@colony/colony-js/tokens';
import { BigNumberish, Signer, utils } from 'ethers';
import { MetadataType } from '@colony/colony-event-metadata-parser';

import type { TypedDataSigner } from '@ethersproject/abstract-signer';

import { ParsedLogTransactionReceipt } from '../types';

import { EventData, TxCreator } from './TxCreator';

const { splitSignature } = utils;

// Little fix until ethers exposes this function
interface TDSigner extends Signer, TypedDataSigner {}

/**
 * An umbrella API for all kinds of transactions
 *
 * The `MetaTxCreator` allows for a simple API to cover all the different cases of transactions within the Colony Network. The `MetaTxCreator` supports sending a standard transaction ([[MetaTxCreator.force]]) as well as metatransactions ([[TxCreator.forceMeta]]).
 *
 * ## Create a standard transaction ("force" in dApp)
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
  protected async sendMetaTransaction(
    target: string,
    [spender, amount]: [string, BigNumberish],
  ): Promise<ParsedLogTransactionReceipt> {
    if (!this.colonyNetwork.config.metaTxBroadcasterEndpoint) {
      throw new Error(
        `No metatransaction broadcaster endpoint found for network ${this.colonyNetwork.network}`,
      );
    }

    const signer = this.colonyNetwork.getSigner() as TDSigner;
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

  async tx() {
    if (this.method === 'permit') {
      throw new Error(
        `Only MetaTransactions are supported for this method. Please use "approve" instead.`,
      );
    }
    return super.tx.apply(this);
  }

  /**
   * Forces an action using a gasless metatransaction
   *
   * @remarks The user sending this transaction has to have the appropriate permissions to do so. Learn more about permissions in Colony [here](/develop/dev-learning/permissions).
   *
   * @returns A tupel of event data and contract receipt (and a function to retrieve metadata if applicable)
   */
  async metaTx() {
    if (this.method !== 'permit') {
      throw new Error(
        `Only the "permit" function is allowed to be sent as MetaTransaction per EIP-2612`,
      );
    }

    const args = await this.getArgs();

    const receipt = await this.sendMetaTransaction(
      this.contract.address,
      args as [string, BigNumberish],
    );
    return this.getEventData(receipt);
  }
}
