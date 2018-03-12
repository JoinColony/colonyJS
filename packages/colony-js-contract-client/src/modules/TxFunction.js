/* @flow */

import type BigNumber from 'bn.js';
import type {
  EstimateFn,
  EventHandlers,
  MinedTransaction,
  TxFunction as ContractTxFunction,
  Transaction,
  TransactionOptions,
  TransactionReceipt,
} from '@colony/colony-js-adapter';

import { raceAgainstTimeout } from '@colony/colony-js-utils';

import ContractClient from './ContractClient';
import { DEFAULT_TIMEOUT, MINING_TIMEOUT } from '../constants';
import Validator from './Validator';

import type { TxFunctionDef } from '../types';

type SendOptions = {
  events?: EventHandlers,
  estimate?: boolean,
  miningTimeoutMs?: number,
  timeoutMs: number,
  waitForMining?: boolean,
} & TransactionOptions;

type ContractResponseMeta = {
  transaction: Transaction,
  receipt?: TransactionReceipt,
  receiptPromise?: Promise<TransactionReceipt>,
  minedTransaction?: MinedTransaction,
  minedTransactionPromise?: Promise<MinedTransaction>,
};

type ContractResponse<EventData> = {
  eventData?: EventData,
  eventDataPromise?: Promise<EventData>,
  meta: ContractResponseMeta,
};

export default class TxFunction<
  Params: {},
  EventData: {},
  // eslint-disable-next-line
  IContractClient: ContractClient<*>
> extends Validator<Params> {
  static eventHandlers: EventHandlers;
  _send: ContractTxFunction<*>;
  _estimate: EstimateFn<*>;
  client: IContractClient;
  static create(
    client: IContractClient,
    { estimate, eventHandlers = {}, getArgs, params, send }: TxFunctionDef,
  ): TxFunction<Params, EventData, IContractClient> {
    class _TxFunction extends TxFunction<Params, EventData, IContractClient> {
      static params = params;
      static eventHandlers = eventHandlers;
      getArgs(_params: Params): Array<*> {
        return getArgs
          ? getArgs.call(this, _params)
          : this.constructor.getArgs(_params);
      }
    }
    return new _TxFunction(client, send, estimate);
  }
  // For overloading
  getArgs(params: Params): Array<*> {
    return this.constructor.getArgs(params);
  }
  constructor(
    client: IContractClient,
    send?: ContractTxFunction<*>,
    estimate?: EstimateFn<*>,
  ) {
    super();
    this.client = client;
    if (typeof estimate === 'function') this._estimate = estimate;
    if (typeof send === 'function') this._send = send;
  }
  async estimate(
    params: Params,
    { timeoutMs }: SendOptions,
  ): Promise<BigNumber> {
    if (typeof this._estimate !== 'function')
      throw new TypeError('Expected an estimate function for TxFunction');

    return raceAgainstTimeout(
      this._estimate(...this.getArgs(params)),
      timeoutMs,
    );
  }
  async send(
    params: Params,
    options: SendOptions,
  ): Promise<ContractResponse<EventData>> {
    let receipt;
    if (typeof this._send !== 'function')
      throw new TypeError('Expected a send function for TxFunction');

    const {
      timeoutMs = DEFAULT_TIMEOUT,
      miningTimeoutMs = MINING_TIMEOUT,
      waitForMining = true,
      ...transactionOptions
    } =
      options || {};
    const transaction = await this.sendTransaction(
      params,
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

    const minedTransactionPromise = this.client.adapter.waitForTransaction(
      transaction.hash,
      miningTimeoutMs,
    );
    const eventDataPromise = this.client.adapter.getEventData({
      contract: this.client.contract,
      events: this.constructor.eventHandlers,
      timeoutMs: miningTimeoutMs,
      transactionHash: transaction.hash,
    });

    return waitForMining
      ? {
          eventData: await eventDataPromise,
          meta: {
            minedTransaction: await minedTransactionPromise,
            receipt,
            transaction,
          },
        }
      : {
          eventDataPromise,
          meta: {
            minedTransactionPromise,
            receiptPromise,
            transaction,
          },
        };
  }
  async sendTransaction(
    params: Params,
    transactionOptions: {},
    timeoutMs: number,
  ) {
    return raceAgainstTimeout(
      this._send(...this.getArgs(params), transactionOptions),
      timeoutMs,
    );
  }
}
