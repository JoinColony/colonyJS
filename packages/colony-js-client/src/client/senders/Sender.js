/* @flow */

import type BigNumber from 'bn.js';
import utils from '@colony/colony-js-utils';
import type {
  EventHandlers,
  MinedTransaction,
  Transaction,
  TransactionOptions,
  TransactionReceipt,
} from '@colony/colony-js-adapter';

import ContractClient from '../ContractClient';
import { DEFAULT_TIMEOUT, MINING_TIMEOUT } from '../../constants';

const EXPECTED_DERIVATION = 'Expected implementation in a derived class';

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

type ContractFn<T> = (...T) => Promise<Transaction>;

type ContractEstimateFn = (...*) => Promise<BigNumber>;

export default class Sender<
  Params,
  EventData,
  IContractClient: ContractClient<*>,
> {
  client: IContractClient;
  estimateFn: ContractEstimateFn;
  eventHandlers: EventHandlers;
  sendFn: ContractFn<*>;

  // eslint-disable-next-line no-unused-vars
  static parseParams(params: Params): Array<*> {
    throw new TypeError(EXPECTED_DERIVATION);
  }

  static get eventHandlers(): EventHandlers {
    return {};
  }

  constructor(client: IContractClient) {
    this.client = client;
  }

  // eslint-disable-next-line class-methods-use-this,no-unused-vars
  async validate(params: Params) {
    throw new TypeError(EXPECTED_DERIVATION);
  }

  // eslint-disable-next-line class-methods-use-this
  async _validate(params: Params): Promise<boolean> {
    const validators = this.validate(params);
    if (!validators.length) {
      throw new TypeError('No validators defined for Sender');
    }
    const validated = (await Promise.all(validators)).every(Boolean);
    if (!validated) {
      throw new TypeError(
        'Validation failed; ' +
          'not all validators returned true, but no error was thrown',
      );
    }
    return validated;
  }

  async estimate(
    params: Params,
    { timeoutMs }: SendOptions,
  ): Promise<BigNumber> {
    if (!this.estimateFn) throw new Error(EXPECTED_DERIVATION);

    return utils.raceAgainstTimeout(
      this.estimateFn(...this.constructor.parseParams(params)),
      timeoutMs,
    );
  }

  async _send(params: Params, transactionOptions: {}, timeoutMs: number) {
    if (!this.sendFn) throw new Error(EXPECTED_DERIVATION);

    return utils.raceAgainstTimeout(
      this.sendFn(...this.constructor.parseParams(params), transactionOptions),
      timeoutMs,
    );
  }

  // TODO provide another function to send without awaiting Promises?
  // TODO or provide options like `waitForMining`?
  async send(
    params: Params,
    options: SendOptions,
  ): Promise<ContractResponse<EventData>> {
    await this._validate(params);
    const {
      timeoutMs = DEFAULT_TIMEOUT,
      miningTimeoutMs = MINING_TIMEOUT,
      ...transactionOptions
    } = options;
    const transaction = await this._send(params, transactionOptions, timeoutMs);
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
        events: this.constructor.eventHandlers,
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
}
