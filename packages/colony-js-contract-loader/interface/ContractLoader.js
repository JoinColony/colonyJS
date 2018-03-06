/* @flow */

export type Options = {
  address?: string,
  router?: string,
  version?: string,
};

export type ContractDefinition = {
  abi: {},
  address: string,
};

export type Parser = (input: any) => ContractDefinition;

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
