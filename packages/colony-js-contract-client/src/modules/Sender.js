/* @flow */

import type BigNumber from 'bn.js';
import type {
  EstimateFn,
  EventHandlers,
  SendFn,
  Transaction,
  TransactionOptions,
  TransactionReceipt,
} from '@colony/colony-js-adapter';

import { raceAgainstTimeout } from '@colony/colony-js-utils';

import ContractClient from './ContractClient';
import { DEFAULT_SEND_OPTIONS } from '../constants';
import Validator from './Validator';

import type { SenderDef } from '../types';

export type SendOptions = {
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
};

type ContractResponse<EventData> = {
  eventData?: EventData,
  eventDataPromise?: Promise<EventData>,
  meta: ContractResponseMeta,
};

export default class Sender<
  Params: {},
  EventData: {},
  // eslint-disable-next-line
  IContractClient: ContractClient<*>
> extends Validator<Params> {
  client: IContractClient;
  estimateFn: EstimateFn<*>;
  eventHandlers: EventHandlers;
  sendFn: SendFn<*>;
  constructor(client: IContractClient, def: SenderDef) {
    super(def);
    this.client = client;
    const { estimateFn, eventHandlers, getArgs, sendFn } = def || {};
    this.estimateFn = estimateFn;
    this.getArgsFn = getArgs;
    this.sendFn = sendFn;
    if (eventHandlers) this.eventHandlers = eventHandlers;
  }
  async estimate(
    params: Params,
    { timeoutMs }: SendOptions = DEFAULT_SEND_OPTIONS,
  ): Promise<BigNumber> {
    if (typeof this.estimateFn !== 'function')
      throw new TypeError('Expected an estimate function for Sender');

    return raceAgainstTimeout(
      this.estimateFn(...this.getArgs(params)),
      timeoutMs,
    );
  }
  async send(
    params: Params,
    options: SendOptions,
  ): Promise<ContractResponse<EventData>> {
    let receipt;
    if (typeof this.sendFn !== 'function')
      throw new TypeError('Expected a send function for Sender');

    const {
      miningTimeoutMs,
      timeoutMs,
      waitForMining,
      ...transactionOptions
    } = { ...DEFAULT_SEND_OPTIONS, ...options };
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

    const eventDataPromise = this.client.adapter.getEventData({
      contract: this.client.contract,
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
  async sendTransaction(
    params: Params,
    transactionOptions: {},
    timeoutMs: number,
  ) {
    return raceAgainstTimeout(
      this.sendFn(...this.getArgs(params), transactionOptions),
      timeoutMs,
    );
  }
}
