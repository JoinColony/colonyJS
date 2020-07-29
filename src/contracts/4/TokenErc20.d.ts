/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface TokenErc20Interface extends Interface {
  functions: {
    name: TypedFunctionDescription<{ encode([]: []): string }>;

    approve: TypedFunctionDescription<{
      encode([_spender, _value]: [string, BigNumberish]): string;
    }>;

    totalSupply: TypedFunctionDescription<{ encode([]: []): string }>;

    transferFrom: TypedFunctionDescription<{
      encode([_from, _to, _value]: [string, string, BigNumberish]): string;
    }>;

    decimals: TypedFunctionDescription<{ encode([]: []): string }>;

    balanceOf: TypedFunctionDescription<{ encode([_owner]: [string]): string }>;

    symbol: TypedFunctionDescription<{ encode([]: []): string }>;

    transfer: TypedFunctionDescription<{
      encode([_to, _value]: [string, BigNumberish]): string;
    }>;

    allowance: TypedFunctionDescription<{
      encode([_owner, _spender]: [string, string]): string;
    }>;
  };

  events: {
    Approval: TypedEventDescription<{
      encodeTopics([owner, spender, value]: [
        string | null,
        string | null,
        null
      ]): string[];
    }>;

    Transfer: TypedEventDescription<{
      encodeTopics([from, to, value]: [
        string | null,
        string | null,
        null
      ]): string[];
    }>;
  };
}

export class TokenErc20 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): TokenErc20;
  attach(addressOrName: string): TokenErc20;
  deployed(): Promise<TokenErc20>;

  on(event: EventFilter | string, listener: Listener): TokenErc20;
  once(event: EventFilter | string, listener: Listener): TokenErc20;
  addListener(eventName: EventFilter | string, listener: Listener): TokenErc20;
  removeAllListeners(eventName: EventFilter | string): TokenErc20;
  removeListener(eventName: any, listener: Listener): TokenErc20;

  interface: TokenErc20Interface;

  functions: {
    name(): Promise<string>;

    approve(
      _spender: string,
      _value: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    totalSupply(): Promise<BigNumber>;

    transferFrom(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    decimals(): Promise<number>;

    balanceOf(_owner: string): Promise<BigNumber>;

    symbol(): Promise<string>;

    transfer(
      _to: string,
      _value: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    allowance(_owner: string, _spender: string): Promise<BigNumber>;
  };

  name(): Promise<string>;

  approve(
    _spender: string,
    _value: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  totalSupply(): Promise<BigNumber>;

  transferFrom(
    _from: string,
    _to: string,
    _value: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  decimals(): Promise<number>;

  balanceOf(_owner: string): Promise<BigNumber>;

  symbol(): Promise<string>;

  transfer(
    _to: string,
    _value: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  allowance(_owner: string, _spender: string): Promise<BigNumber>;

  filters: {
    Approval(
      owner: string | null,
      spender: string | null,
      value: null
    ): EventFilter;

    Transfer(from: string | null, to: string | null, value: null): EventFilter;
  };

  estimate: {
    name(): Promise<BigNumber>;

    approve(_spender: string, _value: BigNumberish): Promise<BigNumber>;

    totalSupply(): Promise<BigNumber>;

    transferFrom(
      _from: string,
      _to: string,
      _value: BigNumberish
    ): Promise<BigNumber>;

    decimals(): Promise<BigNumber>;

    balanceOf(_owner: string): Promise<BigNumber>;

    symbol(): Promise<BigNumber>;

    transfer(_to: string, _value: BigNumberish): Promise<BigNumber>;

    allowance(_owner: string, _spender: string): Promise<BigNumber>;
  };
}
