/* @flow */

export type Query = {
  contractAddress?: string,
  contractName?: string,
  networkId?: number,
  routerAddress?: string,
  routerName?: string,
  version?: string,
};

export type ContractDefinition = {
  abi: any,
  address?: string,
  bytecode: string,
};

export type Parser = (input: any, options?: {}) => ContractDefinition;

export type ParserOption = string | Parser;

export interface ContractLoader {
  load(query: Query): Promise<ContractDefinition>;
}
