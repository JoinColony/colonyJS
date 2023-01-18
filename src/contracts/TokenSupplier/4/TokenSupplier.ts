/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
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

export interface TokenSupplierInterface extends utils.Interface {
  functions: {
    "authority()": FunctionFragment;
    "executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)": FunctionFragment;
    "getCapabilityRoles(bytes4)": FunctionFragment;
    "getChainId()": FunctionFragment;
    "getColony()": FunctionFragment;
    "getDeprecated()": FunctionFragment;
    "multicall(bytes[])": FunctionFragment;
    "owner()": FunctionFragment;
    "setAuthority(address)": FunctionFragment;
    "setOwner(address)": FunctionFragment;
    "verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)": FunctionFragment;
    "getMetatransactionNonce(address)": FunctionFragment;
    "identifier()": FunctionFragment;
    "version()": FunctionFragment;
    "install(address)": FunctionFragment;
    "finishUpgrade()": FunctionFragment;
    "deprecate(bool)": FunctionFragment;
    "uninstall()": FunctionFragment;
    "initialise(uint256,uint256)": FunctionFragment;
    "setTokenSupplyCeiling(uint256)": FunctionFragment;
    "setTokenIssuanceRate(uint256)": FunctionFragment;
    "issueTokens()": FunctionFragment;
    "getTokenSupplyCeiling()": FunctionFragment;
    "getTokenIssuanceRate()": FunctionFragment;
    "getLastPinged()": FunctionFragment;
    "getLastRateUpdate()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "authority"
      | "executeMetaTransaction"
      | "getCapabilityRoles"
      | "getChainId"
      | "getColony"
      | "getDeprecated"
      | "multicall"
      | "owner"
      | "setAuthority"
      | "setOwner"
      | "verify"
      | "getMetatransactionNonce"
      | "identifier"
      | "version"
      | "install"
      | "finishUpgrade"
      | "deprecate"
      | "uninstall"
      | "initialise"
      | "setTokenSupplyCeiling"
      | "setTokenIssuanceRate"
      | "issueTokens"
      | "getTokenSupplyCeiling"
      | "getTokenIssuanceRate"
      | "getLastPinged"
      | "getLastRateUpdate"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "authority", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "executeMetaTransaction",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getCapabilityRoles",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getChainId",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getColony", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getDeprecated",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "multicall",
    values: [PromiseOrValue<BytesLike>[]]
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
    functionFragment: "verify",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getMetatransactionNonce",
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
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setTokenSupplyCeiling",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setTokenIssuanceRate",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "issueTokens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenSupplyCeiling",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenIssuanceRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getLastPinged",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getLastRateUpdate",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "authority", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeMetaTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCapabilityRoles",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getChainId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getColony", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getDeprecated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAuthority",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "verify", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getMetatransactionNonce",
    data: BytesLike
  ): Result;
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
    functionFragment: "setTokenSupplyCeiling",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTokenIssuanceRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "issueTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenSupplyCeiling",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenIssuanceRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLastPinged",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLastRateUpdate",
    data: BytesLike
  ): Result;

  events: {
    "ExtensionInitialised()": EventFragment;
    "LogSetAuthority(address)": EventFragment;
    "LogSetOwner(address)": EventFragment;
    "MetaTransactionExecuted(address,address,bytes)": EventFragment;
    "TokenIssuanceRateSet(uint256)": EventFragment;
    "TokenSupplyCeilingSet(uint256)": EventFragment;
    "TokensIssued(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ExtensionInitialised"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogSetAuthority"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogSetOwner"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MetaTransactionExecuted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenIssuanceRateSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenSupplyCeilingSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokensIssued"): EventFragment;
}

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

export interface TokenIssuanceRateSetEventObject {
  tokenIssuanceRate: BigNumber;
}
export type TokenIssuanceRateSetEvent = TypedEvent<
  [BigNumber],
  TokenIssuanceRateSetEventObject
>;

export type TokenIssuanceRateSetEventFilter =
  TypedEventFilter<TokenIssuanceRateSetEvent>;

export interface TokenSupplyCeilingSetEventObject {
  tokenSupplyCeiling: BigNumber;
}
export type TokenSupplyCeilingSetEvent = TypedEvent<
  [BigNumber],
  TokenSupplyCeilingSetEventObject
>;

export type TokenSupplyCeilingSetEventFilter =
  TypedEventFilter<TokenSupplyCeilingSetEvent>;

export interface TokensIssuedEventObject {
  numTokens: BigNumber;
}
export type TokensIssuedEvent = TypedEvent<
  [BigNumber],
  TokensIssuedEventObject
>;

export type TokensIssuedEventFilter = TypedEventFilter<TokensIssuedEvent>;

export interface TokenSupplier extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TokenSupplierInterface;

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

    /**
     * Main function to be called when user wants to execute meta transaction. The actual function to be called should be passed as param with name functionSignature Here the basic signature recovery is being used. Signature is expected to be generated using personal_sign method.
     * @param _payload Function call to make via meta transaction
     * @param _sigR R part of the signature
     * @param _sigS S part of the signature
     * @param _sigV V part of the signature
     * @param _user Address of user trying to do meta transaction
     */
    executeMetaTransaction(
      _user: PromiseOrValue<string>,
      _payload: PromiseOrValue<BytesLike>,
      _sigR: PromiseOrValue<BytesLike>,
      _sigS: PromiseOrValue<BytesLike>,
      _sigV: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getCapabilityRoles(
      _sig: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getChainId(overrides?: CallOverrides): Promise<[BigNumber]>;

    getColony(overrides?: CallOverrides): Promise<[string]>;

    getDeprecated(overrides?: CallOverrides): Promise<[boolean]>;

    multicall(
      data: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    setAuthority(
      authority_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setOwner(
      owner_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    verify(
      _owner: PromiseOrValue<string>,
      _nonce: PromiseOrValue<BigNumberish>,
      _chainId: PromiseOrValue<BigNumberish>,
      _payload: PromiseOrValue<BytesLike>,
      _sigR: PromiseOrValue<BytesLike>,
      _sigS: PromiseOrValue<BytesLike>,
      _sigV: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    /**
     * Gets the next nonce for a meta-transaction
     * @param userAddress The user's address
     */
    getMetatransactionNonce(
      userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { nonce: BigNumber }>;

    /**
     * Returns the identifier of the extension
     */
    identifier(
      overrides?: CallOverrides
    ): Promise<[string] & { _identifier: string }>;

    /**
     * Returns the version of the extension
     */
    version(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _version: BigNumber }>;

    /**
     * Configures the extension
     * @param _colony The colony in which the extension holds permissions
     */
    install(
      _colony: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * Called when upgrading the extension (currently a no-op)
     */
    finishUpgrade(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * Called when deprecating (or undeprecating) the extension
     * @param _deprecated Indicates whether the extension should be deprecated or undeprecated
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
     * Initialise the extension, must be called before any tokens can be issued
     * @param _tokenIssuanceRate Number of tokens to issue per day
     * @param _tokenSupplyCeiling Total amount of tokens to issue
     */
    initialise(
      _tokenSupplyCeiling: PromiseOrValue<BigNumberish>,
      _tokenIssuanceRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * Update the tokenSupplyCeiling, cannot set below current tokenSupply
     * @param _tokenSupplyCeiling Total amount of tokens to issue
     */
    setTokenSupplyCeiling(
      _tokenSupplyCeiling: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * Update the tokenIssuanceRate
     * @param _tokenIssuanceRate Number of tokens to issue per day
     */
    setTokenIssuanceRate(
      _tokenIssuanceRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * Issue the appropriate amount of tokens
     */
    issueTokens(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * Get the token supply ceiling
     */
    getTokenSupplyCeiling(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { supplyCeiling: BigNumber }>;

    /**
     * Get the token issuance rate
     */
    getTokenIssuanceRate(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { issuanceRate: BigNumber }>;

    /**
     * Get the time of the last token minting event
     */
    getLastPinged(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { lastPinged: BigNumber }>;

    /**
     * Get the time of the last change in issuance rate
     */
    getLastRateUpdate(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { lastUpdate: BigNumber }>;
  };

  authority(overrides?: CallOverrides): Promise<string>;

  /**
   * Main function to be called when user wants to execute meta transaction. The actual function to be called should be passed as param with name functionSignature Here the basic signature recovery is being used. Signature is expected to be generated using personal_sign method.
   * @param _payload Function call to make via meta transaction
   * @param _sigR R part of the signature
   * @param _sigS S part of the signature
   * @param _sigV V part of the signature
   * @param _user Address of user trying to do meta transaction
   */
  executeMetaTransaction(
    _user: PromiseOrValue<string>,
    _payload: PromiseOrValue<BytesLike>,
    _sigR: PromiseOrValue<BytesLike>,
    _sigS: PromiseOrValue<BytesLike>,
    _sigV: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getCapabilityRoles(
    _sig: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  getChainId(overrides?: CallOverrides): Promise<BigNumber>;

  getColony(overrides?: CallOverrides): Promise<string>;

  getDeprecated(overrides?: CallOverrides): Promise<boolean>;

  multicall(
    data: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  setAuthority(
    authority_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setOwner(
    owner_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  verify(
    _owner: PromiseOrValue<string>,
    _nonce: PromiseOrValue<BigNumberish>,
    _chainId: PromiseOrValue<BigNumberish>,
    _payload: PromiseOrValue<BytesLike>,
    _sigR: PromiseOrValue<BytesLike>,
    _sigS: PromiseOrValue<BytesLike>,
    _sigV: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  /**
   * Gets the next nonce for a meta-transaction
   * @param userAddress The user's address
   */
  getMetatransactionNonce(
    userAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

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
   * Called when upgrading the extension (currently a no-op)
   */
  finishUpgrade(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * Called when deprecating (or undeprecating) the extension
   * @param _deprecated Indicates whether the extension should be deprecated or undeprecated
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
   * Initialise the extension, must be called before any tokens can be issued
   * @param _tokenIssuanceRate Number of tokens to issue per day
   * @param _tokenSupplyCeiling Total amount of tokens to issue
   */
  initialise(
    _tokenSupplyCeiling: PromiseOrValue<BigNumberish>,
    _tokenIssuanceRate: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * Update the tokenSupplyCeiling, cannot set below current tokenSupply
   * @param _tokenSupplyCeiling Total amount of tokens to issue
   */
  setTokenSupplyCeiling(
    _tokenSupplyCeiling: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * Update the tokenIssuanceRate
   * @param _tokenIssuanceRate Number of tokens to issue per day
   */
  setTokenIssuanceRate(
    _tokenIssuanceRate: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * Issue the appropriate amount of tokens
   */
  issueTokens(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * Get the token supply ceiling
   */
  getTokenSupplyCeiling(overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * Get the token issuance rate
   */
  getTokenIssuanceRate(overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * Get the time of the last token minting event
   */
  getLastPinged(overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * Get the time of the last change in issuance rate
   */
  getLastRateUpdate(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    authority(overrides?: CallOverrides): Promise<string>;

    /**
     * Main function to be called when user wants to execute meta transaction. The actual function to be called should be passed as param with name functionSignature Here the basic signature recovery is being used. Signature is expected to be generated using personal_sign method.
     * @param _payload Function call to make via meta transaction
     * @param _sigR R part of the signature
     * @param _sigS S part of the signature
     * @param _sigV V part of the signature
     * @param _user Address of user trying to do meta transaction
     */
    executeMetaTransaction(
      _user: PromiseOrValue<string>,
      _payload: PromiseOrValue<BytesLike>,
      _sigR: PromiseOrValue<BytesLike>,
      _sigS: PromiseOrValue<BytesLike>,
      _sigV: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getCapabilityRoles(
      _sig: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    getChainId(overrides?: CallOverrides): Promise<BigNumber>;

    getColony(overrides?: CallOverrides): Promise<string>;

    getDeprecated(overrides?: CallOverrides): Promise<boolean>;

    multicall(
      data: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<string[]>;

    owner(overrides?: CallOverrides): Promise<string>;

    setAuthority(
      authority_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setOwner(
      owner_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    verify(
      _owner: PromiseOrValue<string>,
      _nonce: PromiseOrValue<BigNumberish>,
      _chainId: PromiseOrValue<BigNumberish>,
      _payload: PromiseOrValue<BytesLike>,
      _sigR: PromiseOrValue<BytesLike>,
      _sigS: PromiseOrValue<BytesLike>,
      _sigV: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    /**
     * Gets the next nonce for a meta-transaction
     * @param userAddress The user's address
     */
    getMetatransactionNonce(
      userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

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
     * Called when upgrading the extension (currently a no-op)
     */
    finishUpgrade(overrides?: CallOverrides): Promise<void>;

    /**
     * Called when deprecating (or undeprecating) the extension
     * @param _deprecated Indicates whether the extension should be deprecated or undeprecated
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
     * Initialise the extension, must be called before any tokens can be issued
     * @param _tokenIssuanceRate Number of tokens to issue per day
     * @param _tokenSupplyCeiling Total amount of tokens to issue
     */
    initialise(
      _tokenSupplyCeiling: PromiseOrValue<BigNumberish>,
      _tokenIssuanceRate: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Update the tokenSupplyCeiling, cannot set below current tokenSupply
     * @param _tokenSupplyCeiling Total amount of tokens to issue
     */
    setTokenSupplyCeiling(
      _tokenSupplyCeiling: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Update the tokenIssuanceRate
     * @param _tokenIssuanceRate Number of tokens to issue per day
     */
    setTokenIssuanceRate(
      _tokenIssuanceRate: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Issue the appropriate amount of tokens
     */
    issueTokens(overrides?: CallOverrides): Promise<void>;

    /**
     * Get the token supply ceiling
     */
    getTokenSupplyCeiling(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Get the token issuance rate
     */
    getTokenIssuanceRate(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Get the time of the last token minting event
     */
    getLastPinged(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Get the time of the last change in issuance rate
     */
    getLastRateUpdate(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
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

    "TokenIssuanceRateSet(uint256)"(
      tokenIssuanceRate?: null
    ): TokenIssuanceRateSetEventFilter;
    TokenIssuanceRateSet(
      tokenIssuanceRate?: null
    ): TokenIssuanceRateSetEventFilter;

    "TokenSupplyCeilingSet(uint256)"(
      tokenSupplyCeiling?: null
    ): TokenSupplyCeilingSetEventFilter;
    TokenSupplyCeilingSet(
      tokenSupplyCeiling?: null
    ): TokenSupplyCeilingSetEventFilter;

    "TokensIssued(uint256)"(numTokens?: null): TokensIssuedEventFilter;
    TokensIssued(numTokens?: null): TokensIssuedEventFilter;
  };

  estimateGas: {
    authority(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Main function to be called when user wants to execute meta transaction. The actual function to be called should be passed as param with name functionSignature Here the basic signature recovery is being used. Signature is expected to be generated using personal_sign method.
     * @param _payload Function call to make via meta transaction
     * @param _sigR R part of the signature
     * @param _sigS S part of the signature
     * @param _sigV V part of the signature
     * @param _user Address of user trying to do meta transaction
     */
    executeMetaTransaction(
      _user: PromiseOrValue<string>,
      _payload: PromiseOrValue<BytesLike>,
      _sigR: PromiseOrValue<BytesLike>,
      _sigS: PromiseOrValue<BytesLike>,
      _sigV: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getCapabilityRoles(
      _sig: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getChainId(overrides?: CallOverrides): Promise<BigNumber>;

    getColony(overrides?: CallOverrides): Promise<BigNumber>;

    getDeprecated(overrides?: CallOverrides): Promise<BigNumber>;

    multicall(
      data: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    setAuthority(
      authority_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setOwner(
      owner_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    verify(
      _owner: PromiseOrValue<string>,
      _nonce: PromiseOrValue<BigNumberish>,
      _chainId: PromiseOrValue<BigNumberish>,
      _payload: PromiseOrValue<BytesLike>,
      _sigR: PromiseOrValue<BytesLike>,
      _sigS: PromiseOrValue<BytesLike>,
      _sigV: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Gets the next nonce for a meta-transaction
     * @param userAddress The user's address
     */
    getMetatransactionNonce(
      userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
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
     * Called when upgrading the extension (currently a no-op)
     */
    finishUpgrade(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * Called when deprecating (or undeprecating) the extension
     * @param _deprecated Indicates whether the extension should be deprecated or undeprecated
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
     * Initialise the extension, must be called before any tokens can be issued
     * @param _tokenIssuanceRate Number of tokens to issue per day
     * @param _tokenSupplyCeiling Total amount of tokens to issue
     */
    initialise(
      _tokenSupplyCeiling: PromiseOrValue<BigNumberish>,
      _tokenIssuanceRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * Update the tokenSupplyCeiling, cannot set below current tokenSupply
     * @param _tokenSupplyCeiling Total amount of tokens to issue
     */
    setTokenSupplyCeiling(
      _tokenSupplyCeiling: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * Update the tokenIssuanceRate
     * @param _tokenIssuanceRate Number of tokens to issue per day
     */
    setTokenIssuanceRate(
      _tokenIssuanceRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * Issue the appropriate amount of tokens
     */
    issueTokens(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * Get the token supply ceiling
     */
    getTokenSupplyCeiling(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Get the token issuance rate
     */
    getTokenIssuanceRate(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Get the time of the last token minting event
     */
    getLastPinged(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Get the time of the last change in issuance rate
     */
    getLastRateUpdate(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    authority(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Main function to be called when user wants to execute meta transaction. The actual function to be called should be passed as param with name functionSignature Here the basic signature recovery is being used. Signature is expected to be generated using personal_sign method.
     * @param _payload Function call to make via meta transaction
     * @param _sigR R part of the signature
     * @param _sigS S part of the signature
     * @param _sigV V part of the signature
     * @param _user Address of user trying to do meta transaction
     */
    executeMetaTransaction(
      _user: PromiseOrValue<string>,
      _payload: PromiseOrValue<BytesLike>,
      _sigR: PromiseOrValue<BytesLike>,
      _sigS: PromiseOrValue<BytesLike>,
      _sigV: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getCapabilityRoles(
      _sig: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getColony(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getDeprecated(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    multicall(
      data: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setAuthority(
      authority_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setOwner(
      owner_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    verify(
      _owner: PromiseOrValue<string>,
      _nonce: PromiseOrValue<BigNumberish>,
      _chainId: PromiseOrValue<BigNumberish>,
      _payload: PromiseOrValue<BytesLike>,
      _sigR: PromiseOrValue<BytesLike>,
      _sigS: PromiseOrValue<BytesLike>,
      _sigV: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Gets the next nonce for a meta-transaction
     * @param userAddress The user's address
     */
    getMetatransactionNonce(
      userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
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
     * Called when upgrading the extension (currently a no-op)
     */
    finishUpgrade(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Called when deprecating (or undeprecating) the extension
     * @param _deprecated Indicates whether the extension should be deprecated or undeprecated
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
     * Initialise the extension, must be called before any tokens can be issued
     * @param _tokenIssuanceRate Number of tokens to issue per day
     * @param _tokenSupplyCeiling Total amount of tokens to issue
     */
    initialise(
      _tokenSupplyCeiling: PromiseOrValue<BigNumberish>,
      _tokenIssuanceRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Update the tokenSupplyCeiling, cannot set below current tokenSupply
     * @param _tokenSupplyCeiling Total amount of tokens to issue
     */
    setTokenSupplyCeiling(
      _tokenSupplyCeiling: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Update the tokenIssuanceRate
     * @param _tokenIssuanceRate Number of tokens to issue per day
     */
    setTokenIssuanceRate(
      _tokenIssuanceRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Issue the appropriate amount of tokens
     */
    issueTokens(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Get the token supply ceiling
     */
    getTokenSupplyCeiling(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Get the token issuance rate
     */
    getTokenIssuanceRate(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Get the time of the last token minting event
     */
    getLastPinged(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Get the time of the last change in issuance rate
     */
    getLastRateUpdate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
