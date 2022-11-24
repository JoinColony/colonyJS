/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface WhitelistInterface extends utils.Interface {
  functions: {
    "authority()": FunctionFragment;
    "getCapabilityRoles(bytes4)": FunctionFragment;
    "getColony()": FunctionFragment;
    "getDeprecated()": FunctionFragment;
    "owner()": FunctionFragment;
    "setAuthority(address)": FunctionFragment;
    "setOwner(address)": FunctionFragment;
    "identifier()": FunctionFragment;
    "version()": FunctionFragment;
    "install(address)": FunctionFragment;
    "finishUpgrade()": FunctionFragment;
    "deprecate(bool)": FunctionFragment;
    "uninstall()": FunctionFragment;
    "initialise(bool,string)": FunctionFragment;
    "approveUsers(address[],bool)": FunctionFragment;
    "signAgreement(string)": FunctionFragment;
    "isApproved(address)": FunctionFragment;
    "getUseApprovals()": FunctionFragment;
    "getAgreementHash()": FunctionFragment;
    "getApproval(address)": FunctionFragment;
    "getSignature(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "authority"
      | "getCapabilityRoles"
      | "getColony"
      | "getDeprecated"
      | "owner"
      | "setAuthority"
      | "setOwner"
      | "identifier"
      | "version"
      | "install"
      | "finishUpgrade"
      | "deprecate"
      | "uninstall"
      | "initialise"
      | "approveUsers"
      | "signAgreement"
      | "isApproved"
      | "getUseApprovals"
      | "getAgreementHash"
      | "getApproval"
      | "getSignature"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "authority", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getCapabilityRoles",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "getColony", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getDeprecated",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setAuthority",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setOwner",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "identifier",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "install",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "finishUpgrade",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deprecate",
    values: [PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(functionFragment: "uninstall", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialise",
    values: [PromiseOrValue<boolean>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "approveUsers",
    values: [PromiseOrValue<string>[], PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "signAgreement",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isApproved",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getUseApprovals",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAgreementHash",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getApproval",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getSignature",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "authority", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getCapabilityRoles",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getColony", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getDeprecated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAuthority",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "identifier", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "install", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "finishUpgrade",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deprecate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "uninstall", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialise", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "approveUsers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "signAgreement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isApproved", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getUseApprovals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAgreementHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getApproval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSignature",
    data: BytesLike
  ): Result;

  events: {
    "AgreementSigned(address)": EventFragment;
    "ExtensionInitialised()": EventFragment;
    "LogSetAuthority(address)": EventFragment;
    "LogSetOwner(address)": EventFragment;
    "UserApproved(address,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AgreementSigned"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExtensionInitialised"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogSetAuthority"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogSetOwner"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UserApproved"): EventFragment;
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

export interface Whitelist extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: WhitelistInterface;

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

  functions: {
    authority(overrides?: CallOverrides): Promise<[string]>;

    getCapabilityRoles(
      _sig: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getColony(overrides?: CallOverrides): Promise<[string]>;

    getDeprecated(overrides?: CallOverrides): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    setAuthority(
      authority_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setOwner(
      owner_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * Returns the identifier of the extension
     */
    identifier(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Returns the version of the extension
     */
    version(overrides?: CallOverrides): Promise<[BigNumber]>;

    /**
     * Configures the extension
     * @param _colony The colony in which the extension holds permissions
     */
    install(
      _colony: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * Called when upgrading the extension
     */
    finishUpgrade(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * Called when deprecating (or undeprecating) the extension
     */
    deprecate(
      _deprecated: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * Called when uninstalling the extension
     */
    uninstall(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * Initialise the extension
     * @param _agreementHash An agreement hash (such as an IPFS URI)
     * @param _useApprovals Whether or not to require administrative approval
     */
    initialise(
      _useApprovals: PromiseOrValue<boolean>,
      _agreementHash: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * Sets user statuses in the whitelist
     * @param _status The whitelist status to set
     * @param _users An array of user addresses
     */
    approveUsers(
      _users: PromiseOrValue<string>[],
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * The user's signature on the agreement
     * @param _agreementHash The agreement hash being signed
     */
    signAgreement(
      _agreementHash: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * Get the user's overall whitelist status
     * @param _user The address of the user
     */
    isApproved(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    /**
     * Get the useApprovals boolean
     */
    getUseApprovals(overrides?: CallOverrides): Promise<[boolean]>;

    /**
     * Get the agreementHash
     */
    getAgreementHash(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Get the user's approval status
     * @param _user The address of the user
     */
    getApproval(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    /**
     * Get the user's signature status
     * @param _user The address of the user
     */
    getSignature(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  authority(overrides?: CallOverrides): Promise<string>;

  getCapabilityRoles(
    _sig: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  getColony(overrides?: CallOverrides): Promise<string>;

  getDeprecated(overrides?: CallOverrides): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  setAuthority(
    authority_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setOwner(
    owner_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * Returns the identifier of the extension
   */
  identifier(overrides?: CallOverrides): Promise<string>;

  /**
   * Returns the version of the extension
   */
  version(overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * Configures the extension
   * @param _colony The colony in which the extension holds permissions
   */
  install(
    _colony: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * Called when upgrading the extension
   */
  finishUpgrade(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * Called when deprecating (or undeprecating) the extension
   */
  deprecate(
    _deprecated: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * Called when uninstalling the extension
   */
  uninstall(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * Initialise the extension
   * @param _agreementHash An agreement hash (such as an IPFS URI)
   * @param _useApprovals Whether or not to require administrative approval
   */
  initialise(
    _useApprovals: PromiseOrValue<boolean>,
    _agreementHash: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * Sets user statuses in the whitelist
   * @param _status The whitelist status to set
   * @param _users An array of user addresses
   */
  approveUsers(
    _users: PromiseOrValue<string>[],
    _status: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * The user's signature on the agreement
   * @param _agreementHash The agreement hash being signed
   */
  signAgreement(
    _agreementHash: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * Get the user's overall whitelist status
   * @param _user The address of the user
   */
  isApproved(
    _user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  /**
   * Get the useApprovals boolean
   */
  getUseApprovals(overrides?: CallOverrides): Promise<boolean>;

  /**
   * Get the agreementHash
   */
  getAgreementHash(overrides?: CallOverrides): Promise<string>;

  /**
   * Get the user's approval status
   * @param _user The address of the user
   */
  getApproval(
    _user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  /**
   * Get the user's signature status
   * @param _user The address of the user
   */
  getSignature(
    _user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    authority(overrides?: CallOverrides): Promise<string>;

    getCapabilityRoles(
      _sig: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    getColony(overrides?: CallOverrides): Promise<string>;

    getDeprecated(overrides?: CallOverrides): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    setAuthority(
      authority_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setOwner(
      owner_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Returns the identifier of the extension
     */
    identifier(overrides?: CallOverrides): Promise<string>;

    /**
     * Returns the version of the extension
     */
    version(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Configures the extension
     * @param _colony The colony in which the extension holds permissions
     */
    install(
      _colony: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Called when upgrading the extension
     */
    finishUpgrade(overrides?: CallOverrides): Promise<void>;

    /**
     * Called when deprecating (or undeprecating) the extension
     */
    deprecate(
      _deprecated: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Called when uninstalling the extension
     */
    uninstall(overrides?: CallOverrides): Promise<void>;

    /**
     * Initialise the extension
     * @param _agreementHash An agreement hash (such as an IPFS URI)
     * @param _useApprovals Whether or not to require administrative approval
     */
    initialise(
      _useApprovals: PromiseOrValue<boolean>,
      _agreementHash: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Sets user statuses in the whitelist
     * @param _status The whitelist status to set
     * @param _users An array of user addresses
     */
    approveUsers(
      _users: PromiseOrValue<string>[],
      _status: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * The user's signature on the agreement
     * @param _agreementHash The agreement hash being signed
     */
    signAgreement(
      _agreementHash: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Get the user's overall whitelist status
     * @param _user The address of the user
     */
    isApproved(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    /**
     * Get the useApprovals boolean
     */
    getUseApprovals(overrides?: CallOverrides): Promise<boolean>;

    /**
     * Get the agreementHash
     */
    getAgreementHash(overrides?: CallOverrides): Promise<string>;

    /**
     * Get the user's approval status
     * @param _user The address of the user
     */
    getApproval(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    /**
     * Get the user's signature status
     * @param _user The address of the user
     */
    getSignature(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "AgreementSigned(address)"(
      _user?: PromiseOrValue<string> | null
    ): AgreementSignedEventFilter;
    AgreementSigned(
      _user?: PromiseOrValue<string> | null
    ): AgreementSignedEventFilter;

    "ExtensionInitialised()"(): ExtensionInitialisedEventFilter;
    ExtensionInitialised(): ExtensionInitialisedEventFilter;

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

    "UserApproved(address,bool)"(
      _user?: PromiseOrValue<string> | null,
      _status?: null
    ): UserApprovedEventFilter;
    UserApproved(
      _user?: PromiseOrValue<string> | null,
      _status?: null
    ): UserApprovedEventFilter;
  };

  estimateGas: {
    authority(overrides?: CallOverrides): Promise<BigNumber>;

    getCapabilityRoles(
      _sig: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getColony(overrides?: CallOverrides): Promise<BigNumber>;

    getDeprecated(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    setAuthority(
      authority_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setOwner(
      owner_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * Returns the identifier of the extension
     */
    identifier(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the version of the extension
     */
    version(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Configures the extension
     * @param _colony The colony in which the extension holds permissions
     */
    install(
      _colony: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * Called when upgrading the extension
     */
    finishUpgrade(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * Called when deprecating (or undeprecating) the extension
     */
    deprecate(
      _deprecated: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * Called when uninstalling the extension
     */
    uninstall(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * Initialise the extension
     * @param _agreementHash An agreement hash (such as an IPFS URI)
     * @param _useApprovals Whether or not to require administrative approval
     */
    initialise(
      _useApprovals: PromiseOrValue<boolean>,
      _agreementHash: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * Sets user statuses in the whitelist
     * @param _status The whitelist status to set
     * @param _users An array of user addresses
     */
    approveUsers(
      _users: PromiseOrValue<string>[],
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * The user's signature on the agreement
     * @param _agreementHash The agreement hash being signed
     */
    signAgreement(
      _agreementHash: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * Get the user's overall whitelist status
     * @param _user The address of the user
     */
    isApproved(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Get the useApprovals boolean
     */
    getUseApprovals(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Get the agreementHash
     */
    getAgreementHash(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Get the user's approval status
     * @param _user The address of the user
     */
    getApproval(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Get the user's signature status
     * @param _user The address of the user
     */
    getSignature(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    authority(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getCapabilityRoles(
      _sig: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getColony(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getDeprecated(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setAuthority(
      authority_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setOwner(
      owner_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Returns the identifier of the extension
     */
    identifier(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Returns the version of the extension
     */
    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Configures the extension
     * @param _colony The colony in which the extension holds permissions
     */
    install(
      _colony: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Called when upgrading the extension
     */
    finishUpgrade(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Called when deprecating (or undeprecating) the extension
     */
    deprecate(
      _deprecated: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Called when uninstalling the extension
     */
    uninstall(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Initialise the extension
     * @param _agreementHash An agreement hash (such as an IPFS URI)
     * @param _useApprovals Whether or not to require administrative approval
     */
    initialise(
      _useApprovals: PromiseOrValue<boolean>,
      _agreementHash: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Sets user statuses in the whitelist
     * @param _status The whitelist status to set
     * @param _users An array of user addresses
     */
    approveUsers(
      _users: PromiseOrValue<string>[],
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * The user's signature on the agreement
     * @param _agreementHash The agreement hash being signed
     */
    signAgreement(
      _agreementHash: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Get the user's overall whitelist status
     * @param _user The address of the user
     */
    isApproved(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Get the useApprovals boolean
     */
    getUseApprovals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Get the agreementHash
     */
    getAgreementHash(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Get the user's approval status
     * @param _user The address of the user
     */
    getApproval(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Get the user's signature status
     * @param _user The address of the user
     */
    getSignature(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
