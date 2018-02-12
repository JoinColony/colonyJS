/* @flow */

export type Query = {
  name?: string,
  version?: number,
} & {
  address?: string,
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

export interface ContractLoader<Options> {
  _endpoint: string;
  _parser: Parser;
  load(Query, ?Options): Promise<ContractDefinition>;
}
