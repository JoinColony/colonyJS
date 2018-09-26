/* @flow */

import type BigNumber from 'bn.js';
import type {
  IAdapter,
  Transaction,
  TransactionOptions,
  TransactionReceipt,
} from '@colony/colony-js-adapter';
import type { Query } from '@colony/colony-js-contract-loader';

import ContractClient from '../classes/ContractClient';
import type { Params } from './params';
import type { Signers } from './signatures';

export type DefaultValues = {
  [inputName: string]: *,
};

export type SendOptions = {
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
  query: ?Query,
};

export type ValidateEmpty = (
  outputValues: Object | null,
  inputValues: Object | null,
) => Promise<boolean>;

export type ContractMethodArgs<IContractClient: ContractClient> = {
  client: IContractClient,
  functionName: string,
  name: string,
  input: Params,
  output?: Params,
  validateEmpty?: ValidateEmpty,
  defaultValues?: DefaultValues,
};

export type ContractMethodSenderArgs<IContractClient: ContractClient> = {
  defaultGasLimit?: BigNumber,
} & ContractMethodArgs<IContractClient>;

export type GetRequiredSignees = (input: any) => Promise<Array<string>>;

export type ContractMethodMultisigSenderArgs<
  IContractClient: ContractClient,
> = {
  nonceFunctionName: string,
  nonceInput: Params,
  multisigFunctionName: string,
  getRequiredSignees: GetRequiredSignees,
} & ContractMethodSenderArgs<IContractClient>;

export type ContractMethodDef<IContractClient: ContractClient> = {
  client: IContractClient,
  functionName?: string,
  input: Params,
  output?: Params,
};

export type MultisigOperationPayload<InputValues> = {
  data: string,
  destinationAddress: string,
  inputValues: InputValues,
  sourceAddress: string,
  value: number,
};

export type MultisigOperationConstructorArgs<InputValues> = {
  payload: MultisigOperationPayload<InputValues>,
  signers?: Signers,
  nonce?: number,
  onReset?: Function,
};
