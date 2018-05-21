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
import { SIGNING_MODES } from './constants';

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
  successful?: boolean,
  successfulPromise?: Promise<boolean>,
  eventData?: EventData | {},
  eventDataPromise?: Promise<EventData | {}>,
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

export type GetRequiredSignees = (input: any) => Promise<Array<string>>;

export type ContractMethodMultisigSenderArgs<
  IContractClient: ContractClient,
> = {
  nonceFunctionName: string,
  multisigFunctionName: string,
  getRequiredSignees: GetRequiredSignees,
} & ContractMethodSenderArgs<IContractClient>;

export type ContractMethodDef<IContractClient: ContractClient> = {
  client: IContractClient,
  functionName?: string,
  input: ParamTypePairs,
  output?: ParamTypePairs,
};

export type SigningMode = $Values<typeof SIGNING_MODES>;

export type Signature = {
  sigR: string,
  sigS: string,
  sigV: number,
};

export type Signers = {
  [signeeAddress: string]: Signature & { mode: SigningMode },
};

export type CombinedSignatures = {
  sigR: Array<string>,
  sigS: Array<string>,
  sigV: Array<number>,
  mode: Array<SigningMode>,
};

export type MultisigOperationPayload<InputValues> = {
  data: string,
  destinationAddress: string,
  inputValues: InputValues,
  sourceAddress: string,
  value: number,
};
