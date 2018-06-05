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

export interface ContractLoader {
  _load(
    query: Query,
    requiredProps?: RequiredContractProps,
  ): Promise<?ContractDefinition>;
}
