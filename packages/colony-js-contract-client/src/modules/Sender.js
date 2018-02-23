/* @flow */

import type BigNumber from 'bn.js';
import type {
  EventHandlers,
  MinedTransaction,
  Transaction,
  TransactionOptions,
  TransactionReceipt,
} from '@colony/colony-js-adapter';

import utils from '@colony/colony-js-utils';

import ContractClient from './ContractClient';
import { DEFAULT_TIMEOUT, MINING_TIMEOUT } from '../constants';
import Validator from './Validator';

type SendOptions = {
  events?: EventHandlers,
  estimate?: boolean,
  miningTimeoutMs?: number,
  timeoutMs: number,
} & TransactionOptions;

type ContractResponse<EventData> = {
  eventData?: EventData,
  meta: {
    minedTransaction?: MinedTransaction,
    receipt: TransactionReceipt,
    transaction: Transaction,
  },
};

export default class Sender<
  Params,
  EventData,
  // eslint-disable-next-line
  IContractClient: ContractClient<*>
> extends Validator<Params> {
  +_send: *;
  +_estimate: *;
  +eventHandlers: EventHandlers;
  client: IContractClient;
  constructor(client: IContractClient) {
    super();
    this.client = client;
  }
  async estimate(
    params: Params,
    { timeoutMs }: SendOptions,
  ): Promise<BigNumber> {
    return utils.raceAgainstTimeout(
      this._estimate(...this.parseParams(params)),
      timeoutMs,
    );
  }
  // TODO provide another function to send without awaiting Promises?
  // TODO or provide options like `waitForMining`?
  async send(
    params: Params,
    options: SendOptions,
  ): Promise<ContractResponse<EventData>> {
    this.validate(params);

    const {
      timeoutMs = DEFAULT_TIMEOUT,
      miningTimeoutMs = MINING_TIMEOUT,
      ...transactionOptions
    } =
      options || {};
    const transaction = await this.sendTransaction(
      params,
      transactionOptions,
      timeoutMs,
    );
    const receipt = await this.client.adapter.getTransactionReceipt(
      transaction.hash,
    );
    const meta = {
      receipt,
      transaction,
    };
    if (receipt.status === 1) {
      const minedTransaction = await this.client.adapter.waitForTransaction(
        transaction.hash,
        miningTimeoutMs,
      );
      const eventData: EventData = await this.client.adapter.getEventData({
        contract: this.client.contract,
        events: this.eventHandlers || {},
        timeoutMs: miningTimeoutMs,
        transactionHash: transaction.hash,
      });
      return {
        eventData,
        meta: {
          ...meta,
          minedTransaction,
        },
      };
    }
    return {
      meta,
    };
  }
  async sendTransaction(
    params: Params,
    transactionOptions: {},
    timeoutMs: number,
  ) {
    return utils.raceAgainstTimeout(
      this._send(...this.parseParams(params), transactionOptions),
      timeoutMs,
    );
  }
}
