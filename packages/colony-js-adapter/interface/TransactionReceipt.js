/* @flow */

import type BigNumber from 'bn.js';

export type TransactionReceipt = {
  blockHash: string,
  blockNumber: number,
  contractAddress: string | null,
  cumulativeGasUsed: BigNumber,
  gasUsed: BigNumber,
  log: Array<*>,
  logsBloom: string,
  root: string,
  transactionHash: string,
  transactionIndex: number,
};
