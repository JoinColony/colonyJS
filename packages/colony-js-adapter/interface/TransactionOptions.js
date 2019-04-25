/* @flow */

import type BigNumber from 'bn.js';

export type TransactionOptions = {
  gasLimit?: number,
  gasPrice?: number,
  nonce?: number,
  value?: BigNumber,
};
