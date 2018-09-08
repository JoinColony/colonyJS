/* @flow */

export type Query = {
  contractAddress?: string,
  contractName?: string,
  routerAddress?: string,
  routerName?: string,
  version?: string,
  network?: string,
};

export type ContractDefinition = {
  abi: any,
  address?: string,
  bytecode?: string,
};

export type RequiredContractProps = {
  address?: boolean,
  abi?: boolean,
  bytecode?: boolean,
};

export type Transform = (
  input: any,
  query?: Query,
  requiredProps?: RequiredContractProps,
) => ContractDefinition;

export type ConstructorArgs = {
  transform: Transform,
};

export interface ContractLoader {
  _network: ?string;
  _load(
    query: Query,
    requiredProps?: RequiredContractProps,
  ): Promise<?ContractDefinition>;
}
