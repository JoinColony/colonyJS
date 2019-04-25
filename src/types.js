/* @flow */

export type Web3Transaction = {|
  from?: string | number,
  to?: string,
  gasPrice?: string,
  gas?: number | string,
  value?: number | string,
  chainId?: number,
  data?: string,
  nonce?: number,
  v?: string,
  r?: string,
  s?: string,
  hash?: string,
|};

export type Web3RLPEncodedTransaction = {|
  raw: string,
  tx: Web3Transaction,
|};

export type Web3EventLog = {|
  event: string,
  address: string,
  returnValues: { [valueName: string]: any },
  logIndex: number,
  transactionIndex: number,
  transactionHash: string,
  blockHash: string,
  blockNumber: number,
  raw?: {| data: string, topics: any[] |},
|};

export type Web3Log = {|
  address: string,
  data: string,
  topics: Array<string | string[]>,
  logIndex: number,
  transactionIndex: number,
  transactionHash: string,
  blockHash: string,
  blockNumber: number,
|};

export type Web3Receipt = {|
  transactionHash: string,
  transactionIndex: number,
  blockHash: string,
  blockNumber: number,
  from: string,
  to: string,
  contractAddress: string,
  cumulativeGasUsed: number,
  gasUsed: number,
  logs?: Web3Log[],
  events?: {
    [eventName: string]: Web3EventLog,
  },
|};
