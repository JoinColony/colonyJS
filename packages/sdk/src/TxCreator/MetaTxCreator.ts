import { utils } from 'ethers';
import { Network } from '@colony/core';
import { MetadataType } from '@colony/event-metadata';

import { ParsedLogTransactionReceipt } from '../types';
import { IBasicMetaTransaction } from '../contracts';
import { BaseContract, EventData, TxCreator } from './TxCreator';

const { arrayify, solidityKeccak256, splitSignature } = utils;

type MetaTxFunctions = IBasicMetaTransaction['functions'];
type MetaTxInterface = IBasicMetaTransaction['interface'];

interface Functions extends MetaTxFunctions {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: (...args: any[]) => Promise<any>;
}
interface Interface extends MetaTxInterface {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  encodeFunctionData(functionFragment: string, values: any[]): string;
}

export interface MetaTxBaseContract extends BaseContract {
  functions: Functions;
  interface: Interface;
}

/**
 * An umbrella API for all kinds of transactions
 *
 * The `MetaTxCreator` allows for a simple API to cover all the different cases of transactions within the Colony Network. The `MetaTxCreator` supports sending a standard transaction ([[MetaTxCreator.tx]]) as well as metatransactions ([[MetaTxCreator.metaTx]]).
 *
 * ## Create a standard transaction ("force" in dApp)
 *
 * - [[MetaTxCreator.tx]]: force a Colony transaction, knowing you have the permissions to do so
 * - [[MetaTxCreator.metaTx]]: same as `tx()`, but send as a gasless metatransaction
 *
 * Learn more about these functions in their individual documentation
 */
export class MetaTxCreator<
  C extends MetaTxBaseContract,
  M extends keyof C['functions'],
  E extends EventData,
  MD extends MetadataType,
> extends TxCreator<C, M, E, MD> {
  protected async sendMetaTransaction(
    encodedTransaction: string,
    target: string,
  ): Promise<ParsedLogTransactionReceipt> {
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

    return this.broadcastMetaTx(broadcastData);
  }

  /**
   * Forces an action using a gasless metatransaction
   *
   * @remarks The user sending this transaction has to have the appropriate permissions to do so. Learn more about permissions in Colony [here](/develop/dev-learning/permissions).
   *
   * @returns A tupel of event data and contract receipt (and a function to retrieve metadata if applicable)
   */
  async metaTx() {
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
}
