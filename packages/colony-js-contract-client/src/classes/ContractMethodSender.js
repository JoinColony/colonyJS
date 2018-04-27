/* @flow */

import BigNumber from 'bn.js';
import { raceAgainstTimeout } from '@colony/colony-js-utils';

import type {
  EventHandlers,
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
  static addSendOptionsDefaults(options?: Object): SendOptions {
    return Object.assign({}, DEFAULT_SEND_OPTIONS, options);
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
   * @param inputValues
   * @param options
   * @returns {Promise<BigNumber>}
   */
  async estimate(inputValues: InputValues, options: SendOptions) {
    const args = this.getMethodArgs(inputValues);
    return this._estimate(args, options);
  }
  /**
   * Given named input values and options for sending a transaction, create a
   * transaction which calls the method's contract function with those
   * values as transformed parameters, and collect the transaction receipt
   * and (optionally) event data.
   * @param inputValues
   * @param options
   * @returns {Promise<ContractResponse<OutputValues>>}
   */
  async send(inputValues: InputValues, options: SendOptions) {
    const args = this.getMethodArgs(inputValues);
    return this._send(args, options);
  }
  async _send(
    callArgs: Array<any>,
    options: SendOptions,
  ): Promise<ContractResponse<OutputValues>> {
    let receipt;
    const {
      miningTimeoutMs,
      timeoutMs,
      waitForMining,
      ...transactionOptions
    } = this.constructor.addSendOptionsDefaults(options);
    const transaction = await this._sendTransaction(
      callArgs,
      transactionOptions,
      timeoutMs,
    );
    const receiptPromise = await this.client.adapter.getTransactionReceipt(
      transaction.hash,
    );

    if (waitForMining) {
      // Await the receipt first if we're waiting for mining; if it wasn't
      // successful, return immediately rather than waiting for events/mined tx
      receipt = await receiptPromise;
      if (receipt.status === 0) {
        return {
          meta: {
            receipt,
            transaction,
          },
        };
      }
    }

    const eventDataPromise = this.client.getEventData({
      events: this.eventHandlers,
      timeoutMs: miningTimeoutMs,
      transactionHash: transaction.hash,
    });

    return waitForMining
      ? {
          eventData: await eventDataPromise,
          meta: {
            receipt,
            transaction,
          },
        }
      : {
          eventDataPromise,
          meta: {
            receiptPromise,
            transaction,
          },
        };
  }
  async _sendTransaction(
    callArgs: Array<any>,
    transactionOptions: TransactionOptions,
    timeoutMs: number,
  ) {
    return raceAgainstTimeout(
      this.client.send(this.functionName, callArgs, transactionOptions),
      timeoutMs,
    );
  }
  async _estimate(
    callArgs: Array<any>,
    options: SendOptions,
  ): Promise<BigNumber> {
    const { timeoutMs } = this.constructor.addSendOptionsDefaults(options);
    return raceAgainstTimeout(
      this.client.estimate(this.functionName, callArgs),
      timeoutMs,
    );
  }
}
