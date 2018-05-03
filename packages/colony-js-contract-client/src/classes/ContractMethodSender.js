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
  async _send(
    callArgs: Array<any>,
    options: SendOptions,
  ): Promise<ContractResponse<OutputValues>> {
    let receipt;
    const { timeoutMs, waitForMining, ...transactionOptions } = Object.assign(
      {},
      DEFAULT_SEND_OPTIONS,
      options,
    );
    const transaction = await this._sendTransaction(
      callArgs,
      transactionOptions,
    );
    const receiptPromise = this.client.adapter.getTransactionReceipt(
      transaction.hash,
    );

    if (waitForMining) {
      // Await the receipt first if we're waiting for mining; if it wasn't
      // successful, return immediately rather than waiting for events/mined tx
      receipt = await raceAgainstTimeout(receiptPromise, timeoutMs);
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
      timeoutMs,
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
  ) {
    return this.client.send(this.functionName, callArgs, transactionOptions);
  }
}
