/* @flow */

import type BigNumber from 'bn.js';

import type { ContractResponse } from '../../index';

export type TransactionRequest = {
  chainId?: number,
  data?: string,
  gasLimit?: number | BigNumber,
  gasPrice?: number | BigNumber,
  nonce?: number,
  to?: string,
  value?: BigNumber,
};

export type TransactionOptions = {
  gasLimit?: number,
  gasPrice?: number,
  nonce?: number,
  value?: BigNumber,
};

export type ContractResponseMeta = $PropertyType<ContractResponse<*>, 'meta'>;
export type TransactionReceipt = $PropertyType<ContractResponseMeta, 'receipt'>;
