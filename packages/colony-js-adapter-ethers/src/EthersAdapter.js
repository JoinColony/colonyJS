/* @flow */

import ethers from 'ethers';
import { raceAgainstTimeout } from '@colony/colony-js-utils';
import type {
  IContract,
  IAdapter,
  IProvider,
  IWallet,
  Event,
  EventHandler,
  EventHandlers,
  Signature,
  Transaction,
} from '@colony/colony-js-adapter';
import type { Query } from '@colony/colony-js-contract-loader';

import ContractLoader from '@colony/colony-js-contract-loader';

import type { ConstructorArgs } from './flowtypes';
import EthersContract from './EthersContract';

export default class EthersAdapter implements IAdapter {
  loader: ContractLoader;
  provider: IProvider;
  wallet: IWallet;
  static getEventPromises({
    events,
    timeoutMs,
    transactionHash,
  }: {
    events: { [eventName: string]: EventHandler },
    timeoutMs: number,
    transactionHash: string,
  }): Array<Promise<any>> {
    const mapEventToPromise = eventName => {
      const { contract, handler } = events[eventName];
      let wrappedHandler;

      const subscriptionPromise = new Promise(resolve => {
        wrappedHandler = ({ args }: Event) => resolve(handler(args));
        contract.addListener(eventName, wrappedHandler, transactionHash);
      });

      return raceAgainstTimeout(subscriptionPromise, timeoutMs, () =>
        contract.removeListener(eventName, wrappedHandler, transactionHash),
      );
    };
    return Object.getOwnPropertyNames(events).map(mapEventToPromise);
  }
  constructor({ loader, provider, wallet }: ConstructorArgs) {
    this.loader = loader;
    this.provider = provider;
    this.wallet = wallet;
  }
  async getContract(query: Query): Promise<IContract> {
    const { address, abi } =
      (await this.loader.load(query, {
        abi: true,
        address: true,
        bytecode: false,
      })) || {};

    if (typeof address !== 'string')
      throw new Error('Unable to parse contract address');

    return new EthersContract(address, abi, this.wallet);
  }
  async getContractDeployTransaction(
    query: Query,
    contractParams: Array<any>,
  ): Promise<Transaction> {
    const { abi, bytecode } = await this.loader.load(query, {
      abi: true,
      address: false,
      bytecode: true,
    });
    return ethers.Contract.getDeployTransaction(
      bytecode,
      abi,
      ...contractParams,
    );
  }
  // XXX this isn't a static method because we can't define it as such
  // in the Interface thanks to Flow
  async getEventData({
    events = {},
    transactionHash,
    timeoutMs,
  }: {
    events: EventHandlers,
    timeoutMs: number,
    transactionHash: string,
  }): Promise<{}> {
    const eventPromises = this.constructor.getEventPromises({
      events,
      timeoutMs,
      transactionHash,
    });
    try {
      // Wait for all success events to resolve, or reject on any error event
      return Object.assign({}, ...(await Promise.all(eventPromises)));
    } finally {
      Object.entries(events).forEach(([eventName, { contract, handler }]) => {
        contract.removeListener(eventName, handler, transactionHash);
      });
    }
  }
  async _getTransactionReceipt(transactionHash: string) {
    const receipt = await this.provider.getTransactionReceipt(transactionHash);
    if (receipt == null)
      throw new Error(
        `Transaction receipt not found (transaction: ${transactionHash})`,
      );
    return receipt;
  }
  async waitForTransaction(transactionHash: string) {
    return this.provider.waitForTransaction(transactionHash);
  }
  async getTransactionReceipt(transactionHash: string) {
    let receipt;
    try {
      // Attempt to get the receipt immediately; the transaction may have
      // already been mined, or we're running on TestRPC with no mining time.
      receipt = await this._getTransactionReceipt(transactionHash);
    } catch (error) {
      // Ignore the error if the receipt wasn't found
      if (!error.toString().includes('Transaction receipt not found'))
        throw error;
    }

    // Wait until the transaction has been mined, then get the receipt.
    await this.waitForTransaction(transactionHash);
    receipt = this._getTransactionReceipt(transactionHash);
    return receipt;
  }
  /**
   * Sign a message hash (as binary) and return a split signature.
   */
  async signMessage(messageHash: string) {
    const messageBytes = ethers.utils.arrayify(messageHash);
    const signature = await this.wallet.signMessage(messageBytes);

    const { r: sigR, s: sigS, v: sigV } = ethers.utils.splitSignature(
      signature,
    );
    return {
      sigR,
      sigS,
      sigV,
    };
  }

  /**
   * Given a message digest and a signature, recover the address used to
   * sign the message.
   */
  // eslint-disable-next-line class-methods-use-this
  ecRecover(digest: Array<number>, { sigR, sigS, sigV }: Signature): string {
    // This method doesn't need to be static, but flow Interfaces don't
    // support static methods.
    const recoveryParam = sigV - 27;
    return ethers.SigningKey.recover(digest, sigR, sigS, recoveryParam);
  }
}
