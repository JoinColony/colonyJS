/* @flow */

import type BigNumber from 'bn.js';

export type Block = {
  difficulty: number,
  extraData: string,
  gasLimit: BigNumber,
  gasUsed: BigNumber,
  hash: string,
  miner: string,
  nonce: string,
  number: number,
  parentHash: string,
  timestamp: number,
  transactions: Array<string>,
};
