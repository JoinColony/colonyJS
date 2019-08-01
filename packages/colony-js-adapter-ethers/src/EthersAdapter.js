/* @flow */

import ethers from 'ethers';
import { raceAgainstTimeout } from '@colony/colony-js-utils';
import type {
  IContract,
  IAdapter,
  IProvider,
  IWallet,
  Signature,
  Transaction,
  TransactionRequest,
} from '@colony/colony-js-adapter';
import type { Query } from '@colony/colony-js-contract-loader';

import ContractLoader from '@colony/colony-js-contract-loader';

import type { ConstructorArgs } from './flowtypes';
import EthersContract from './EthersContract';

import { DEFAULT_TRANSACTION_WAIT_TIMEOUT } from './defaults';

// See https://solidity.readthedocs.io/en/v0.4.24/control-structures.html#error-handling-assert-require-revert-and-exceptions
const SOLIDITY_ERROR = '0x08c379a0';

export default class EthersAdapter implements IAdapter {
  loader: ContractLoader;

  provider: IProvider;

  wallet: IWallet;

  constructor({ loader, provider, wallet }: ConstructorArgs) {
    this.loader = loader;
    this.provider = provider;
    this.wallet = wallet;
  }

  async callTransaction(transaction: TransactionRequest): Promise<string> {
    const result = await this.provider.call(transaction);

    // Given an erroneous result, parse the revert reason and throw an error.
    if (
      ((result.length - 2) / 2) % 32 === 4 &&
      result.slice(0, 10) === SOLIDITY_ERROR
    ) {
      const reason = ethers.utils.AbiCoder.defaultCoder.decode(
        ['string'],
        `0x${result.slice(10)}`,
      );
      const error = new Error(`Reverted: ${reason}`);
      // $FlowFixMe
      Object.assign(error, { reason });
      throw error;
    }

    return result;
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

  async _getTransactionReceipt(transactionHash: string) {
    const receipt = await this.provider.getTransactionReceipt(transactionHash);
    if (receipt == null)
      throw new Error(
        `Transaction receipt not found (transaction: ${transactionHash})`,
      );
    return receipt;
  }

  async waitForTransaction(
    transactionHash: string,
    timeoutMs: number = DEFAULT_TRANSACTION_WAIT_TIMEOUT,
  ) {
    return raceAgainstTimeout(
      this.provider.waitForTransaction(transactionHash),
      timeoutMs,
    );
  }

  async getTransactionReceipt(transactionHash: string, timeoutMs?: number) {
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

    // If we didn't get the receipt, wait for the transaction and try again.
    if (!receipt) {
      await this.waitForTransaction(transactionHash, timeoutMs);
    }

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
