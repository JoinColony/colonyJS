/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { BaseContract, BigNumber, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface MetaTxTokenEventsInterface extends utils.Interface {
  functions: {};

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "Burn(address,uint256)": EventFragment;
    "LogSetAuthority(address)": EventFragment;
    "LogSetOwner(address)": EventFragment;
    "MetaTransactionExecuted(address,address,bytes)": EventFragment;
    "Mint(address,uint256)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Burn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogSetAuthority"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogSetOwner"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MetaTransactionExecuted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Mint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export interface ApprovalEventObject {
  src: string;
  guy: string;
  wad: BigNumber;
}
export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  ApprovalEventObject
>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export interface BurnEventObject {
  guy: string;
  wad: BigNumber;
}
export type BurnEvent = TypedEvent<[string, BigNumber], BurnEventObject>;

export type BurnEventFilter = TypedEventFilter<BurnEvent>;

export interface LogSetAuthorityEventObject {
  authority: string;
}
export type LogSetAuthorityEvent = TypedEvent<
  [string],
  LogSetAuthorityEventObject
>;

export type LogSetAuthorityEventFilter = TypedEventFilter<LogSetAuthorityEvent>;

export interface LogSetOwnerEventObject {
  owner: string;
}
export type LogSetOwnerEvent = TypedEvent<[string], LogSetOwnerEventObject>;

export type LogSetOwnerEventFilter = TypedEventFilter<LogSetOwnerEvent>;

export interface MetaTransactionExecutedEventObject {
  user: string;
  relayerAddress: string;
  functionSignature: string;
}
export type MetaTransactionExecutedEvent = TypedEvent<
  [string, string, string],
  MetaTransactionExecutedEventObject
>;

export type MetaTransactionExecutedEventFilter =
  TypedEventFilter<MetaTransactionExecutedEvent>;

export interface MintEventObject {
  guy: string;
  wad: BigNumber;
}
export type MintEvent = TypedEvent<[string, BigNumber], MintEventObject>;

export type MintEventFilter = TypedEventFilter<MintEvent>;

export interface TransferEventObject {
  src: string;
  dst: string;
  wad: BigNumber;
}
export type TransferEvent = TypedEvent<
  [string, string, BigNumber],
  TransferEventObject
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface MetaTxTokenEvents extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MetaTxTokenEventsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {};

  callStatic: {};

  filters: {
    "Approval(address,address,uint256)"(
      src?: PromiseOrValue<string> | null,
      guy?: PromiseOrValue<string> | null,
      wad?: null
    ): ApprovalEventFilter;
    Approval(
      src?: PromiseOrValue<string> | null,
      guy?: PromiseOrValue<string> | null,
      wad?: null
    ): ApprovalEventFilter;

    "Burn(address,uint256)"(
      guy?: PromiseOrValue<string> | null,
      wad?: null
    ): BurnEventFilter;
    Burn(guy?: PromiseOrValue<string> | null, wad?: null): BurnEventFilter;

    "LogSetAuthority(address)"(
      authority?: PromiseOrValue<string> | null
    ): LogSetAuthorityEventFilter;
    LogSetAuthority(
      authority?: PromiseOrValue<string> | null
    ): LogSetAuthorityEventFilter;

    "LogSetOwner(address)"(
      owner?: PromiseOrValue<string> | null
    ): LogSetOwnerEventFilter;
    LogSetOwner(owner?: PromiseOrValue<string> | null): LogSetOwnerEventFilter;

    "MetaTransactionExecuted(address,address,bytes)"(
      user?: null,
      relayerAddress?: null,
      functionSignature?: null
    ): MetaTransactionExecutedEventFilter;
    MetaTransactionExecuted(
      user?: null,
      relayerAddress?: null,
      functionSignature?: null
    ): MetaTransactionExecutedEventFilter;

    "Mint(address,uint256)"(
      guy?: PromiseOrValue<string> | null,
      wad?: null
    ): MintEventFilter;
    Mint(guy?: PromiseOrValue<string> | null, wad?: null): MintEventFilter;

    "Transfer(address,address,uint256)"(
      src?: PromiseOrValue<string> | null,
      dst?: PromiseOrValue<string> | null,
      wad?: null
    ): TransferEventFilter;
    Transfer(
      src?: PromiseOrValue<string> | null,
      dst?: PromiseOrValue<string> | null,
      wad?: null
    ): TransferEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}