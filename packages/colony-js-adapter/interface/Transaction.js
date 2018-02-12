/* @flow */

import type BigNumber from 'bn.js';

export type Transaction = {
  // Exactly one of these will be present (send vs. deploy contract)
  creates: string | null,
  to: string | null,

  // The transaction hash
  hash: string,

  // The transaction request
  data: string,
  from: string,
  gasLimit: BigNumber,
  gasPrice: BigNumber,
  nonce: number,
  value: BigNumber,

  // The network ID (or chain ID); 0 indicates replay-attack vulnerable
  // (eg. 1 = Homestead mainnet, 3 = Ropsten testnet)
  networkId: number,

  // The signature of the transaction
  r: string,
  s: string,
  v: number,

  // The raw transaction
  raw: string,
};

export type MinedTransaction = Transaction & {
  blockHash: string,
  blockNumber: number,
  transactionIndex: number,
};
