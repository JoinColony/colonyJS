/* @flow */

import BigNumber from 'bn.js';
import { raceAgainstTimeout } from '@colony/colony-js-utils';

import type {
  Transaction,
  TransactionOptions,
} from '@colony/colony-js-adapter';

import ContractClient from './ContractClient';
import ContractMethodCaller from './ContractMethodCaller';
import type {
  ContractResponse,
  ContractMethodArgs,
  SendOptions,
} from '../flowtypes';

export default class ContractMethodSender<
  InputValues: { [inputValueName: string]: any },
  OutputValues: { [outputValueName: string]: any },
  IContractClient: ContractClient,
  ContractData: { [dataValueName: string]: any },
> extends ContractMethodCaller<
  InputValues,
  OutputValues,
  IContractClient,
  ContractData,
> {
  _defaultGasLimit: ?number;

  constructor({
    defaultGasLimit,
    ...rest
  }: ContractMethodArgs<IContractClient> & {
    defaultGasLimit?: number,
  }) {
    super(rest);
    if (defaultGasLimit) this._defaultGasLimit = defaultGasLimit;
  }

  /**
   * Given named input values, call the method's contract function in
   * order to get a gas estimate for calling it with those values.
   */
  async estimate(inputValues: InputValues): Promise<BigNumber> {
    const args = this.getValidatedArgs(inputValues);
    return this.client.estimate(this.functionName, args);
  }

  /**
   * Given named input values and options for sending a transaction, create a
   * transaction which calls the method's contract function with those
   * values as transformed parameters, and collect the transaction receipt
   * and (optionally) event data.
   */
  async send(
    inputValues: InputValues,
    options: SendOptions,
  ): Promise<ContractResponse<OutputValues>> {
    const args = this.getValidatedArgs(inputValues);
    return this._send(args, options);
  }

  async _sendWithWaitingForMining(
    transaction: Transaction,
    timeoutMs: number,
  ): Promise<ContractResponse<OutputValues>> {
    const receipt = await raceAgainstTimeout(
      this.client.adapter.getTransactionReceipt(transaction.hash),
      timeoutMs,
    );
    const eventData = this.client.getReceiptEventData(receipt);

    return {
      successful: receipt && receipt.status === 1,
      meta: {
        transaction,
        receipt,
      },
      eventData,
    };
  }

  _sendWithoutWaitingForMining(
    transaction: Transaction,
    timeoutMs: number,
  ): ContractResponse<OutputValues> {
    const receiptPromise = raceAgainstTimeout(
      this.client.adapter.getTransactionReceipt(transaction.hash),
      timeoutMs,
    );

    // Wait for the receipt before determining whether it was successful
    const successfulPromise = new Promise(async (resolve, reject) => {
      try {
        const receipt = await receiptPromise;
        resolve(receipt && receipt.status === 1);
      } catch (error) {
        reject(error.toString());
      }
    });

    // Wait for the receipt before attempting to decode event logs
    const eventDataPromise = new Promise(async (resolve, reject) => {
      try {
        const receipt = await receiptPromise;
        try {
          resolve(this.client.getReceiptEventData(receipt));
        } catch (decodeError) {
          reject(decodeError.toString());
        }
      } catch (receiptError) {
        reject(receiptError.toString());
      }
    });

    return {
      successfulPromise,
      meta: {
        receiptPromise,
        transaction,
      },
      eventDataPromise,
    };
  }

  async _send(
    callArgs: Array<any>,
    options: SendOptions,
  ): Promise<ContractResponse<OutputValues>> {
    const {
      timeoutMs,
      waitForMining,
      ...transactionOptions
    } = this._getDefaultSendOptions(options);

    const transaction = await this._sendTransaction(
      callArgs,
      transactionOptions,
    );

    return waitForMining
      ? this._sendWithWaitingForMining(transaction, timeoutMs)
      : this._sendWithoutWaitingForMining(transaction, timeoutMs);
  }

  async _sendTransaction(
    callArgs: Array<any>,
    transactionOptions: TransactionOptions,
  ) {
    return this.client.send(this.functionName, callArgs, transactionOptions);
  }

  /**
   * Given send options, set default values for this Sender.
   */
  _getDefaultSendOptions(options: SendOptions) {
    const { name: networkName } = this.client.adapter.provider;
    // Allow a much longer timeout for mainnet transactions.
    const minutes = networkName === 'mainnet' ? 60 : 5;

    return Object.assign(
      {},
      {
        timeoutMs: 1000 * 60 * minutes,
        waitForMining: true,
        ...(this._defaultGasLimit ? { gasLimit: this._defaultGasLimit } : null),
      },
      options,
    );
  }
}
