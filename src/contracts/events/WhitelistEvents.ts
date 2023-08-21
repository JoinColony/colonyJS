/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { BaseContract, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface WhitelistEventsInterface extends utils.Interface {
  functions: {};

  events: {
    "AgreementSigned(address)": EventFragment;
    "ExtensionInitialised()": EventFragment;
    "LogSetAuthority(address)": EventFragment;
    "LogSetOwner(address)": EventFragment;
    "UserApproved(address,bool)": EventFragment;
    "MetaTransactionExecuted(address,address,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AgreementSigned"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExtensionInitialised"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogSetAuthority"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogSetOwner"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UserApproved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MetaTransactionExecuted"): EventFragment;
}

export interface AgreementSignedEventObject {
  _user: string;
}
export type AgreementSignedEvent = TypedEvent<
  [string],
  AgreementSignedEventObject
>;

export type AgreementSignedEventFilter = TypedEventFilter<AgreementSignedEvent>;

export interface ExtensionInitialisedEventObject {}
export type ExtensionInitialisedEvent = TypedEvent<
  [],
  ExtensionInitialisedEventObject
>;

export type ExtensionInitialisedEventFilter =
  TypedEventFilter<ExtensionInitialisedEvent>;

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

export interface UserApprovedEventObject {
  _user: string;
  _status: boolean;
}
export type UserApprovedEvent = TypedEvent<
  [string, boolean],
  UserApprovedEventObject
>;

export type UserApprovedEventFilter = TypedEventFilter<UserApprovedEvent>;

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

export interface WhitelistEvents extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: WhitelistEventsInterface;

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
    "AgreementSigned(address)"(
      _user?: string | null
    ): AgreementSignedEventFilter;
    AgreementSigned(_user?: string | null): AgreementSignedEventFilter;

    "ExtensionInitialised()"(): ExtensionInitialisedEventFilter;
    ExtensionInitialised(): ExtensionInitialisedEventFilter;

    "LogSetAuthority(address)"(
      authority?: string | null
    ): LogSetAuthorityEventFilter;
    LogSetAuthority(authority?: string | null): LogSetAuthorityEventFilter;

    "LogSetOwner(address)"(owner?: string | null): LogSetOwnerEventFilter;
    LogSetOwner(owner?: string | null): LogSetOwnerEventFilter;

    "UserApproved(address,bool)"(
      _user?: string | null,
      _status?: null
    ): UserApprovedEventFilter;
    UserApproved(
      _user?: string | null,
      _status?: null
    ): UserApprovedEventFilter;

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
  };

  estimateGas: {};

  populateTransaction: {};
}
