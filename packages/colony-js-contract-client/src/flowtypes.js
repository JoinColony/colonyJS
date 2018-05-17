/* @flow */

import type {
  EventHandlers,
  IAdapter,
  Transaction,
  TransactionOptions,
  TransactionReceipt,
} from '@colony/colony-js-adapter';

import type { Query } from '@colony/colony-js-contract-loader';

import ContractClient from './classes/ContractClient';

export type ParamTypes = 'number' | 'string' | 'address' | 'boolean';

export type ParamTypePair = [string, ParamTypes];

export type ParamTypePairs = Array<ParamTypePair>;

export type SendOptions = {
  events?: EventHandlers,
  estimate: boolean,
  timeoutMs: number,
  waitForMining: boolean,
} & TransactionOptions;

export type ContractResponseMeta = {
  transaction: Transaction,
  receipt?: TransactionReceipt,
  receiptPromise?: Promise<TransactionReceipt>,
};

export type ContractResponse<EventData> = {
  eventData?: EventData,
  eventDataPromise?: Promise<EventData>,
  meta: ContractResponseMeta,
};

export type ContractClientConstructorArgs = {
  adapter: IAdapter,
  query: Query,
};

export type ContractMethodArgs<IContractClient: ContractClient> = {
  client: IContractClient,
  functionName: string,
  input: ParamTypePairs,
  output?: ParamTypePairs,
};

export type ContractMethodSenderArgs<IContractClient: ContractClient> = {
  eventHandlers?: EventHandlers,
} & ContractMethodArgs<IContractClient>;

export type ContractMethodDef<IContractClient: ContractClient> = {
  client: IContractClient,
  functionName?: string,
  input: ParamTypePairs,
  output?: ParamTypePairs,
};
