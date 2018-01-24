/* @flow */

export type Query = {
  name: string,
  version?: number,
};

export type ContractDefinition = {
  abi: {},
  address: string,
};

export type Parser = (input: any) => ContractDefinition;

export type ParserOption = string | Parser;

export type Options = {
  // XXX This type is designed to be overriden in Loaders
};

export type ConstructorArgs = {
  endpoint: string,
  parser: ParserOption,
};

export interface ContractLoader {
  _endpoint: string;
  _parser: Parser;
  load(Query, ?Options): Promise<ContractDefinition>;
}
