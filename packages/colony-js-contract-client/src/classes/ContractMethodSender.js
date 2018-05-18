/* @flow */

import BigNumber from 'bn.js';
import { raceAgainstTimeout } from '@colony/colony-js-utils';

import type {
  EventHandlers,
  Transaction,
  TransactionOptions,
} from '@colony/colony-js-adapter';

import ContractClient from './ContractClient';
import ContractMethod from './ContractMethod';
import type {
  ContractResponse,
  ContractMethodArgs,
  SendOptions,
} from '../flowtypes';
import { DEFAULT_SEND_OPTIONS } from '../defaults';
import { TRANSACTION_STATUS } from '../constants';

export default class ContractMethodSender<
  InputValues: { [inputValueName: string]: any },
  OutputValues: { [outputValueName: string]: any },
  IContractClient: ContractClient,
> extends ContractMethod<InputValues, OutputValues, IContractClient> {
  eventHandlers: EventHandlers;

  static getTransactionStatus(status: number) {
    return status === 1
      ? TRANSACTION_STATUS.SUCCESS
      : TRANSACTION_STATUS.FAILURE;
  }

  constructor({
    eventHandlers,
    ...rest
  }: ContractMethodArgs<IContractClient> & { eventHandlers?: EventHandlers }) {
    super(rest);
    if (eventHandlers) this.eventHandlers = eventHandlers;
  }
  /**
   * Given named input values, call the method's contract function in
   * order to get a gas estimate for calling it with those values.
   */
  async estimate(inputValues: InputValues): Promise<BigNumber> {
    this.validate(inputValues);
    const args = this.getMethodArgs(inputValues);
    return this.client.estimate(this.functionName, args);
  }
  /**
   * Given named input values and options for sending a transaction, create a
   * transaction which calls the method's contract function with those
   * values as transformed parameters, and collect the transaction receipt
   * and (optionally) event data.
   */
  async send(inputValues: InputValues, options: SendOptions) {
    this.validate(inputValues);
    const args = this.getMethodArgs(inputValues);
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

    const meta = {
      transaction,
      receipt,
    };
    const status = this.constructor.getTransactionStatus(receipt.status);

    // If the receipt wasn't successful, return immediately rather than waiting
    // for events/mined tx
    if (receipt.status === 0) {
      return {
        status,
        meta,
        eventData: {},
      };
    }

    const eventData = await this.client.getEventData({
      events: this.eventHandlers,
      timeoutMs,
      transactionHash: transaction.hash,
    });

    return {
      status,
      meta,
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
    const statusPromise = new Promise(async (resolve, reject) => {
      try {
        const { status } = await receiptPromise;
        resolve(this.constructor.getTransactionStatus(status));
      } catch (error) {
        reject(error.toString());
      }
    });

    return {
      statusPromise,
      meta: {
        receiptPromise,
        transaction,
      },
      eventDataPromise: this.client.getEventData({
        events: this.eventHandlers,
        timeoutMs,
        transactionHash: transaction.hash,
      }),
    };
  }

  async _send(
    callArgs: Array<any>,
    options: SendOptions,
  ): Promise<ContractResponse<OutputValues>> {
    const { timeoutMs, waitForMining, ...transactionOptions } = Object.assign(
      {},
      DEFAULT_SEND_OPTIONS,
      options,
    );

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
}
