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

export default class ContractMethodSender<
  InputValues: { [inputValueName: string]: any },
  OutputValues: { [outputValueName: string]: any },
  IContractClient: ContractClient,
> extends ContractMethod<InputValues, OutputValues, IContractClient> {
  eventHandlers: EventHandlers;
  _defaultGasLimit: ?BigNumber;

  constructor({
    defaultGasLimit,
    eventHandlers,
    ...rest
  }: ContractMethodArgs<IContractClient> & {
    eventHandlers?: EventHandlers,
    defaultGasLimit?: BigNumber,
  }) {
    super(rest);
    if (defaultGasLimit) this._defaultGasLimit = defaultGasLimit;
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
    const successful = receipt.status === 1;

    // If the receipt wasn't successful, return immediately rather than waiting
    // for events/mined tx
    if (!successful) {
      return {
        successful,
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
      successful,
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
    const successfulPromise = new Promise(async (resolve, reject) => {
      try {
        const { status } = await receiptPromise;
        resolve(status === 1);
      } catch (error) {
        reject(error.toString());
      }
    });

    return {
      successfulPromise,
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
    return Object.assign(
      {},
      DEFAULT_SEND_OPTIONS,
      this._defaultGasLimit ? { gasLimit: this._defaultGasLimit } : {},
      options,
    );
  }
}
