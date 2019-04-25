/* @flow */

import type { GenericWallet } from '@colony/purser-core/es';

import { hexSequenceNormalizer } from '@colony/purser-core/normalizers';
import BigNumber from 'bn.js';
import EthereumTx from 'ethereumjs-tx';
import { utils } from 'ethers';
import { isHex } from 'web3-utils';

import type {
  TransactionOptions,
  TransactionReceipt,
  TransactionRequest,
} from './types';

export default class EthersWrappedWallet {
  wallet: GenericWallet;
  provider: *;

  constructor(wallet: *, provider: *) {
    this.wallet = wallet;
    this.provider = provider;
  }

  get address() {
    return this.wallet.address;
  }

  async getAddress(): Promise<string> {
    return this.wallet.address;
  }

  async signMessage(message: any): Promise<string> {
    const payload =
      typeof message === 'string' && !isHex(message)
        ? { message }
        : { messageData: message };
    return this.wallet.signMessage(payload);
  }

  /**
   * Given a partial transaction request, sets the remaining required fields,
   * signs the transaction with the Purser wallet and sends it using the
   * provider.
   */
  async sendTransaction(tx: TransactionRequest): Promise<TransactionReceipt> {
    const { chainId, data, gasLimit, gasPrice, nonce, to, value } = tx;
    const signOptions = {
      chainId: chainId || this.provider.chainId,
      data,
      // If no gas limit is provided, we need to get the estimate and multiply
      // it by 1.1 (an amount that will prevent the transaction from failing)
      gasLimit: gasLimit
        ? new BigNumber(gasLimit)
        : (await this.estimateGas(tx))
            .mul(new BigNumber('11'))
            .div(new BigNumber('10')),
      gasPrice: gasPrice ? new BigNumber(gasPrice) : await this.getGasPrice(),
      nonce: nonce || (await this.getTransactionCount()),
      to,
      value,
    };
    const signedTx = await this.sign(signOptions);

    let txHash;
    if (this.wallet.subtype === 'metamask') {
      // if metamask, tx has already been sent
      // TODO: add `online` main wallet type or similar to Purser
      const parsedSignedTx = new EthereumTx(signedTx);
      txHash = hexSequenceNormalizer(parsedSignedTx.hash().toString('hex'));
    } else {
      // otherwise we still need to send it
      txHash = await this.provider.sendTransaction(signedTx);
    }

    // We need to wait for transaction to be mined but ganache will mine the
    // transaction too quickly causing us to wait indefinitely, therefore, we
    // need to try getting the transaction and then, if that fails, we need to
    // try getting the transaction using `waitForTransaction`.
    const transaction = await this.provider.getTransaction(txHash);
    return transaction || this.provider.waitForTransaction(txHash);
  }

  /**
   * Estimates the gas cost of a transaction using the provider and converts to
   * our BN format.
   */
  async estimateGas(tx: TransactionRequest): Promise<BigNumber> {
    // We need to properly send `from`, so that `msg.sender` will have the correct value when estimating
    const from = await this.getAddress();
    const transformedTx = { ...tx, from };
    const estimate = await this.provider.estimateGas(transformedTx);
    return new BigNumber(estimate.toString());
  }

  /**
   * Gets the gas price from the provider and converts to our BN format.
   */
  async getGasPrice(): Promise<BigNumber> {
    const price = await this.provider.getGasPrice();
    return new BigNumber(price.toString());
  }

  async getBalance(): Promise<BigNumber> {
    const address = await this.getAddress();
    return this.provider.getBalance(address);
  }

  async getTransactionCount(): Promise<number> {
    const address = await this.getAddress();
    return this.provider.getTransactionCount(address);
  }

  // eslint-disable-next-line class-methods-use-this
  parseTransaction(tx: string): Object {
    return utils.parseTransaction(tx);
  }

  async send(
    to: string,
    value: BigNumber,
    options: TransactionOptions = {},
  ): Promise<TransactionReceipt> {
    return this.sendTransaction({
      to,
      value,
      ...options,
    });
  }

  /**
   * Sign a given complete transaction request in Ethers format using Purser.
   */
  async sign({ data, ...tx }: TransactionRequest): Promise<string> {
    return this.wallet.sign({ ...tx, inputData: data });
  }

  // eslint-disable-next-line class-methods-use-this
  verifyMessage(message: string, signature: string): string {
    return utils.verifyMessage(message, signature);
  }

  // eslint-disable-next-line class-methods-use-this
  encrypt() {
    throw new Error('Wallet method "encrypt" not available');
  }

  // eslint-disable-next-line class-methods-use-this
  get privateKey() {
    throw new Error('Wallet property "privateKey" not available');
  }

  // eslint-disable-next-line class-methods-use-this
  set privateKey(privateKey: any) {
    throw new Error('Wallet property "privateKey" not available');
  }
}
