/* @flow */

import type BigNumber from 'bn.js';
import * as web3 from 'web3-utils';

import utils from '@colony/colony-js-utils';

import type { Query as ContractQuery } from '@colony/colony-js-contract-loader';
import type {
  ContractFn,
  ContractEstimateFn,
  Event,
  IAdapter,
  IContract,
  MinedTransaction,
  Transaction,
  TransactionOptions,
} from '@colony/colony-js-adapter';

type TimeoutOption = {
  timeoutMs?: number,
};

export type EstimateOptions = TimeoutOption;

export type CallOptions = TimeoutOption;

export type SendOptions = {
  events?: Array<string>,
  miningTimeoutMs?: number,
} & TimeoutOption &
  TransactionOptions;

export type ContractResponse = {
  data?: {
    result?: Array<*>,
  },
  events: Array<Promise<Event>>,
  meta: {
    transaction: Transaction,
    confirmed: Promise<MinedTransaction>,
  },
};

const DEFAULT_TIMEOUT = 60 * 1000; // 1 minute
const MINING_TIMEOUT = 5 * 60 * 1000; // 5 minutes

export default class ContractClient<ContractInterface: IContract> {
  adapter: IAdapter<*>;
  contract: ContractInterface;
  // XXX Derived classes inherit static methods from their parent, so we need to loosely type (see https://github.com/facebook/flow/issues/1393)
  static async create(
    // TODO use two queries: for ABI and for address (to actually load it), but only if the alternative name is provided.
    query: ContractQuery,
    adapter: IAdapter<*>,
    // eslint-disable-next-line no-unused-vars
    ...args: *
  ): Promise<*> {
    // $FlowFixMe getContract returns Contract, not generic ContractInterface
    const contract = await adapter.getContract(query);
    return new this(adapter, contract);
  }
  static checkIsAddress(address: string): boolean {
    if (!web3.isAddress(address)) {
      throw new Error(`Address ${address} is not a valid address`);
    }
    return true;
  }
  constructor(adapter: IAdapter<*>, contract: ContractInterface) {
    this.adapter = adapter;
    this.contract = contract;
  }
  // eslint-disable-next-line class-methods-use-this
  async estimate(
    fn: ContractEstimateFn,
    { timeoutMs = DEFAULT_TIMEOUT }: EstimateOptions = {},
    ...args: *
  ): Promise<BigNumber> {
    return utils.raceAgainstTimeout(fn(...args), timeoutMs);
  }
  // eslint-disable-next-line class-methods-use-this
  async call(
    fn: (
      ...args?: *
    ) => Promise<
      // XXX the results of functions implementing `call` have the following tuple arities:
      | [*]
      | [*, *]
      | [*, *, *]
      | [*, *, *, *]
      | [*, *, *, *, *]
      | [*, *, *, *, *, *, *, *, *],
    >,
    { timeoutMs = DEFAULT_TIMEOUT }: CallOptions = {},
    ...args: *
  ): Promise<Array<*>> {
    return utils.raceAgainstTimeout(fn(...args), timeoutMs);
  }
  async send(
    fn: ContractFn<*>,
    sendOptions: SendOptions = {},
    ...args: *
  ): Promise<ContractResponse> {
    const {
      events = [],
      timeoutMs = DEFAULT_TIMEOUT,
      miningTimeoutMs = MINING_TIMEOUT,
      ...transactionOptions
    } = sendOptions;
    const transaction = await utils.raceAgainstTimeout(
      fn(...args, transactionOptions),
      timeoutMs,
    );
    return {
      events: this.adapter.getEventPromises({
        contract: this.contract,
        events,
        timeoutMs: miningTimeoutMs,
        transactionHash: transaction.hash,
      }),
      meta: {
        confirmed: this.adapter.waitForTransaction(
          transaction.hash,
          miningTimeoutMs,
        ),
        transaction,
      },
    };
  }
}
