/* @flow */

export type Options = {
  address?: string,
  router?: string,
  version?: string,
  networkId?: number,
};

export type ContractDefinition = {
  abi: any,
  address: string,
  bytecode: string,
};

export type Parser = (input: any, options?: {}) => ContractDefinition;

export type ParserOption = string | Parser;

export type ConstructorArgs = {
  endpoint: string,
  parser: ParserOption,
};

export interface ContractLoader {
  _endpoint: string;
  _parser: Parser;
  load(contractName: string, options?: Options): Promise<ContractDefinition>;
}
