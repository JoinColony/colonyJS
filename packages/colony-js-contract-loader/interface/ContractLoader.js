/* @flow */

export type Options = {
  address?: string,
  router?: string,
  version?: string,
  networkId?: number,
};

export type ContractDefinition = {
  abi: any,
  address?: string,
  bytecode: string,
};

export type Parser = (input: any, options?: {}) => ContractDefinition;

export type ParserOption = string | Parser;

export interface ContractLoader {
  load(contractName: string, options?: Options): Promise<ContractDefinition>;
}
