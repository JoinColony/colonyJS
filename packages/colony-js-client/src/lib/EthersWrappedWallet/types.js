/* @flow */

import type BigNumber from 'bn.js';

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
