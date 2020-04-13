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

interface IPatriciaTreeInterface extends Interface {
  functions: {
    getNode: TypedFunctionDescription<{ encode([hash]: [Arrayish]): string }>;

    getRootHash: TypedFunctionDescription<{ encode([]: []): string }>;

    getRootEdge: TypedFunctionDescription<{ encode([]: []): string }>;

    insert: TypedFunctionDescription<{
      encode([key, value]: [Arrayish, Arrayish]): string;
    }>;

    getProof: TypedFunctionDescription<{ encode([key]: [Arrayish]): string }>;

    getImpliedRoot: TypedFunctionDescription<{
      encode([key, value, branchMask, siblings]: [
        Arrayish,
        Arrayish,
        BigNumberish,
        Arrayish[]
      ]): string;
    }>;
  };

  events: {};
}

export class IPatriciaTree extends Contract {
  connect(signerOrProvider: Signer | Provider | string): IPatriciaTree;
  attach(addressOrName: string): IPatriciaTree;
  deployed(): Promise<IPatriciaTree>;

  on(event: EventFilter | string, listener: Listener): IPatriciaTree;
  once(event: EventFilter | string, listener: Listener): IPatriciaTree;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): IPatriciaTree;
  removeAllListeners(eventName: EventFilter | string): IPatriciaTree;
  removeListener(eventName: any, listener: Listener): IPatriciaTree;

  interface: IPatriciaTreeInterface;

  functions: {
    getNode(
      hash: Arrayish
    ): Promise<{
      children: { node: string; label: { data: string; length: BigNumber } }[];
    }>;

    getRootHash(): Promise<string>;

    getRootEdge(): Promise<{
      node: string;
      label: { data: string; length: BigNumber };
    }>;

    insert(
      key: Arrayish,
      value: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    getProof(
      key: Arrayish
    ): Promise<{
      branchMask: BigNumber;
      _siblings: string[];
      0: BigNumber;
      1: string[];
    }>;

    getImpliedRoot(
      key: Arrayish,
      value: Arrayish,
      branchMask: BigNumberish,
      siblings: Arrayish[]
    ): Promise<string>;
  };

  getNode(
    hash: Arrayish
  ): Promise<{
    children: { node: string; label: { data: string; length: BigNumber } }[];
  }>;

  getRootHash(): Promise<string>;

  getRootEdge(): Promise<{
    node: string;
    label: { data: string; length: BigNumber };
  }>;

  insert(
    key: Arrayish,
    value: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  getProof(
    key: Arrayish
  ): Promise<{
    branchMask: BigNumber;
    _siblings: string[];
    0: BigNumber;
    1: string[];
  }>;

  getImpliedRoot(
    key: Arrayish,
    value: Arrayish,
    branchMask: BigNumberish,
    siblings: Arrayish[]
  ): Promise<string>;

  filters: {};

  estimate: {
    getNode(hash: Arrayish): Promise<BigNumber>;

    getRootHash(): Promise<BigNumber>;

    getRootEdge(): Promise<BigNumber>;

    insert(key: Arrayish, value: Arrayish): Promise<BigNumber>;

    getProof(key: Arrayish): Promise<BigNumber>;

    getImpliedRoot(
      key: Arrayish,
      value: Arrayish,
      branchMask: BigNumberish,
      siblings: Arrayish[]
    ): Promise<BigNumber>;
  };
}
