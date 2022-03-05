/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
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
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface OneTxPaymentInterface extends utils.Interface {
  contractName: "OneTxPayment";
  functions: {
    "authority()": FunctionFragment;
    "executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)": FunctionFragment;
    "getChainId()": FunctionFragment;
    "getColony()": FunctionFragment;
    "getDeprecated()": FunctionFragment;
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
    "getCapabilityRoles(bytes4)": FunctionFragment;
    "makePayment(uint256,uint256,uint256,uint256,address[],address[],uint256[],uint256,uint256)": FunctionFragment;
    "makePaymentFundedFromDomain(uint256,uint256,uint256,uint256,address[],address[],uint256[],uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "authority", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "executeMetaTransaction",
    values: [string, BytesLike, BytesLike, BytesLike, BigNumberish]
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
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setAuthority",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setOwner", values: [string]): string;
  encodeFunctionData(
    functionFragment: "verify",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike,
      BytesLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getMetatransactionNonce",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "identifier",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;
  encodeFunctionData(functionFragment: "install", values: [string]): string;
  encodeFunctionData(
    functionFragment: "finishUpgrade",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "deprecate", values: [boolean]): string;
  encodeFunctionData(functionFragment: "uninstall", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getCapabilityRoles",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "makePayment",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string[],
      string[],
      BigNumberish[],
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "makePaymentFundedFromDomain",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string[],
      string[],
      BigNumberish[],
      BigNumberish,
      BigNumberish
    ]
  ): string;

  decodeFunctionResult(functionFragment: "authority", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeMetaTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getChainId", data: BytesLike): Result;
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
  decodeFunctionResult(
    functionFragment: "getCapabilityRoles",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "makePayment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "makePaymentFundedFromDomain",
    data: BytesLike
  ): Result;

  events: {
    "ExtensionInitialised()": EventFragment;
    "LogSetAuthority(address)": EventFragment;
    "LogSetOwner(address)": EventFragment;
    "MetaTransactionExecuted(address,address,bytes)": EventFragment;
    "OneTxPaymentMade(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ExtensionInitialised"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogSetAuthority"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogSetOwner"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MetaTransactionExecuted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OneTxPaymentMade"): EventFragment;
}

export type ExtensionInitialisedEvent = TypedEvent<[], {}>;

export type ExtensionInitialisedEventFilter =
  TypedEventFilter<ExtensionInitialisedEvent>;

export type LogSetAuthorityEvent = TypedEvent<[string], { authority: string }>;

export type LogSetAuthorityEventFilter = TypedEventFilter<LogSetAuthorityEvent>;

export type LogSetOwnerEvent = TypedEvent<[string], { owner: string }>;

export type LogSetOwnerEventFilter = TypedEventFilter<LogSetOwnerEvent>;

export type MetaTransactionExecutedEvent = TypedEvent<
  [string, string, string],
  { user: string; relayerAddress: string; functionSignature: string }
>;

export type MetaTransactionExecutedEventFilter =
  TypedEventFilter<MetaTransactionExecutedEvent>;

export type OneTxPaymentMadeEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { agent: string; fundamentalId: BigNumber; nPayouts: BigNumber }
>;

export type OneTxPaymentMadeEventFilter =
  TypedEventFilter<OneTxPaymentMadeEvent>;

export interface OneTxPayment extends BaseContract {
  contractName: "OneTxPayment";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OneTxPaymentInterface;

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
      _user: string,
      _payload: BytesLike,
      _sigR: BytesLike,
      _sigS: BytesLike,
      _sigV: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getChainId(overrides?: CallOverrides): Promise<[BigNumber]>;

    getColony(overrides?: CallOverrides): Promise<[string]>;

    getDeprecated(overrides?: CallOverrides): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    setAuthority(
      authority_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setOwner(
      owner_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    verify(
      _owner: string,
      _nonce: BigNumberish,
      _chainId: BigNumberish,
      _payload: BytesLike,
      _sigR: BytesLike,
      _sigS: BytesLike,
      _sigV: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    getMetatransactionNonce(
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { nonce: BigNumber }>;

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
      _colony: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * Called when upgrading the extension
     */
    finishUpgrade(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * Called when deprecating (or undeprecating) the extension
     */
    deprecate(
      _deprecated: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * Called when uninstalling the extension
     */
    uninstall(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * Return the permissions required for each function
     * @param _sig The function signature
     */
    getCapabilityRoles(
      _sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    /**
     * Assumes that each entity holds administration and funding roles in the root domain
     * Completes a colony payment in a single transaction
     * @param _amounts amounts of the tokens being paid out
     * @param _callerChildSkillIndex Index of the _callerPermissionDomainId skill.children array to get
     * @param _callerPermissionDomainId The domainId in which the _caller_ has the administration permission (must have funding in root)
     * @param _childSkillIndex Index of the _permissionDomainId skill.children array to get
     * @param _domainId The domainId the payment should be coming from
     * @param _permissionDomainId The domainId in which the _contract_ has permissions to add a payment and fund it
     * @param _skillId The skillId that the payment should be marked with, possibly awarding reputation in this skill.
     * @param _tokens Addresses of the tokens the payments are being made in. 0x00 for Ether.
     * @param _workers The addresses of the recipients of the payment
     */
    makePayment(
      _permissionDomainId: BigNumberish,
      _childSkillIndex: BigNumberish,
      _callerPermissionDomainId: BigNumberish,
      _callerChildSkillIndex: BigNumberish,
      _workers: string[],
      _tokens: string[],
      _amounts: BigNumberish[],
      _domainId: BigNumberish,
      _skillId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * Assumes that each entity holds administration and funding roles in the same domain,   although contract and caller can have the permissions in different domains. Payment is taken from domain funds - if the domain does not have sufficient funds, call will fail.
     * Completes a colony payment in a single transaction
     * @param _amounts The amounts of the tokens being paid out
     * @param _callerChildSkillIndex Index of the _callerPermissionDomainId skill.children array to get
     * @param _callerPermissionDomainId The domainId in which the _caller_ has permissions to add a payment and fund it
     * @param _childSkillIndex Index of the _permissionDomainId skill.children array to get
     * @param _domainId The domainId the payment should be coming from
     * @param _permissionDomainId The domainId in which the _contract_ has permissions to add a payment and fund it
     * @param _skillId The skillId that the payment should be marked with, possibly awarding reputation in this skill.
     * @param _tokens The addresses of the token the payments are being made in. 0x00 for Ether.
     * @param _workers The addresses of the recipients of the payment
     */
    makePaymentFundedFromDomain(
      _permissionDomainId: BigNumberish,
      _childSkillIndex: BigNumberish,
      _callerPermissionDomainId: BigNumberish,
      _callerChildSkillIndex: BigNumberish,
      _workers: string[],
      _tokens: string[],
      _amounts: BigNumberish[],
      _domainId: BigNumberish,
      _skillId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
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
    _user: string,
    _payload: BytesLike,
    _sigR: BytesLike,
    _sigS: BytesLike,
    _sigV: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getChainId(overrides?: CallOverrides): Promise<BigNumber>;

  getColony(overrides?: CallOverrides): Promise<string>;

  getDeprecated(overrides?: CallOverrides): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  setAuthority(
    authority_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setOwner(
    owner_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  verify(
    _owner: string,
    _nonce: BigNumberish,
    _chainId: BigNumberish,
    _payload: BytesLike,
    _sigR: BytesLike,
    _sigS: BytesLike,
    _sigV: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getMetatransactionNonce(
    userAddress: string,
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
    _colony: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * Called when upgrading the extension
   */
  finishUpgrade(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * Called when deprecating (or undeprecating) the extension
   */
  deprecate(
    _deprecated: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * Called when uninstalling the extension
   */
  uninstall(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * Return the permissions required for each function
   * @param _sig The function signature
   */
  getCapabilityRoles(
    _sig: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  /**
   * Assumes that each entity holds administration and funding roles in the root domain
   * Completes a colony payment in a single transaction
   * @param _amounts amounts of the tokens being paid out
   * @param _callerChildSkillIndex Index of the _callerPermissionDomainId skill.children array to get
   * @param _callerPermissionDomainId The domainId in which the _caller_ has the administration permission (must have funding in root)
   * @param _childSkillIndex Index of the _permissionDomainId skill.children array to get
   * @param _domainId The domainId the payment should be coming from
   * @param _permissionDomainId The domainId in which the _contract_ has permissions to add a payment and fund it
   * @param _skillId The skillId that the payment should be marked with, possibly awarding reputation in this skill.
   * @param _tokens Addresses of the tokens the payments are being made in. 0x00 for Ether.
   * @param _workers The addresses of the recipients of the payment
   */
  makePayment(
    _permissionDomainId: BigNumberish,
    _childSkillIndex: BigNumberish,
    _callerPermissionDomainId: BigNumberish,
    _callerChildSkillIndex: BigNumberish,
    _workers: string[],
    _tokens: string[],
    _amounts: BigNumberish[],
    _domainId: BigNumberish,
    _skillId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * Assumes that each entity holds administration and funding roles in the same domain,   although contract and caller can have the permissions in different domains. Payment is taken from domain funds - if the domain does not have sufficient funds, call will fail.
   * Completes a colony payment in a single transaction
   * @param _amounts The amounts of the tokens being paid out
   * @param _callerChildSkillIndex Index of the _callerPermissionDomainId skill.children array to get
   * @param _callerPermissionDomainId The domainId in which the _caller_ has permissions to add a payment and fund it
   * @param _childSkillIndex Index of the _permissionDomainId skill.children array to get
   * @param _domainId The domainId the payment should be coming from
   * @param _permissionDomainId The domainId in which the _contract_ has permissions to add a payment and fund it
   * @param _skillId The skillId that the payment should be marked with, possibly awarding reputation in this skill.
   * @param _tokens The addresses of the token the payments are being made in. 0x00 for Ether.
   * @param _workers The addresses of the recipients of the payment
   */
  makePaymentFundedFromDomain(
    _permissionDomainId: BigNumberish,
    _childSkillIndex: BigNumberish,
    _callerPermissionDomainId: BigNumberish,
    _callerChildSkillIndex: BigNumberish,
    _workers: string[],
    _tokens: string[],
    _amounts: BigNumberish[],
    _domainId: BigNumberish,
    _skillId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

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
      _user: string,
      _payload: BytesLike,
      _sigR: BytesLike,
      _sigS: BytesLike,
      _sigV: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getChainId(overrides?: CallOverrides): Promise<BigNumber>;

    getColony(overrides?: CallOverrides): Promise<string>;

    getDeprecated(overrides?: CallOverrides): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    setAuthority(authority_: string, overrides?: CallOverrides): Promise<void>;

    setOwner(owner_: string, overrides?: CallOverrides): Promise<void>;

    verify(
      _owner: string,
      _nonce: BigNumberish,
      _chainId: BigNumberish,
      _payload: BytesLike,
      _sigR: BytesLike,
      _sigS: BytesLike,
      _sigV: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getMetatransactionNonce(
      userAddress: string,
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
    install(_colony: string, overrides?: CallOverrides): Promise<void>;

    /**
     * Called when upgrading the extension
     */
    finishUpgrade(overrides?: CallOverrides): Promise<void>;

    /**
     * Called when deprecating (or undeprecating) the extension
     */
    deprecate(_deprecated: boolean, overrides?: CallOverrides): Promise<void>;

    /**
     * Called when uninstalling the extension
     */
    uninstall(overrides?: CallOverrides): Promise<void>;

    /**
     * Return the permissions required for each function
     * @param _sig The function signature
     */
    getCapabilityRoles(
      _sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    /**
     * Assumes that each entity holds administration and funding roles in the root domain
     * Completes a colony payment in a single transaction
     * @param _amounts amounts of the tokens being paid out
     * @param _callerChildSkillIndex Index of the _callerPermissionDomainId skill.children array to get
     * @param _callerPermissionDomainId The domainId in which the _caller_ has the administration permission (must have funding in root)
     * @param _childSkillIndex Index of the _permissionDomainId skill.children array to get
     * @param _domainId The domainId the payment should be coming from
     * @param _permissionDomainId The domainId in which the _contract_ has permissions to add a payment and fund it
     * @param _skillId The skillId that the payment should be marked with, possibly awarding reputation in this skill.
     * @param _tokens Addresses of the tokens the payments are being made in. 0x00 for Ether.
     * @param _workers The addresses of the recipients of the payment
     */
    makePayment(
      _permissionDomainId: BigNumberish,
      _childSkillIndex: BigNumberish,
      _callerPermissionDomainId: BigNumberish,
      _callerChildSkillIndex: BigNumberish,
      _workers: string[],
      _tokens: string[],
      _amounts: BigNumberish[],
      _domainId: BigNumberish,
      _skillId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Assumes that each entity holds administration and funding roles in the same domain,   although contract and caller can have the permissions in different domains. Payment is taken from domain funds - if the domain does not have sufficient funds, call will fail.
     * Completes a colony payment in a single transaction
     * @param _amounts The amounts of the tokens being paid out
     * @param _callerChildSkillIndex Index of the _callerPermissionDomainId skill.children array to get
     * @param _callerPermissionDomainId The domainId in which the _caller_ has permissions to add a payment and fund it
     * @param _childSkillIndex Index of the _permissionDomainId skill.children array to get
     * @param _domainId The domainId the payment should be coming from
     * @param _permissionDomainId The domainId in which the _contract_ has permissions to add a payment and fund it
     * @param _skillId The skillId that the payment should be marked with, possibly awarding reputation in this skill.
     * @param _tokens The addresses of the token the payments are being made in. 0x00 for Ether.
     * @param _workers The addresses of the recipients of the payment
     */
    makePaymentFundedFromDomain(
      _permissionDomainId: BigNumberish,
      _childSkillIndex: BigNumberish,
      _callerPermissionDomainId: BigNumberish,
      _callerChildSkillIndex: BigNumberish,
      _workers: string[],
      _tokens: string[],
      _amounts: BigNumberish[],
      _domainId: BigNumberish,
      _skillId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ExtensionInitialised()"(): ExtensionInitialisedEventFilter;
    ExtensionInitialised(): ExtensionInitialisedEventFilter;

    "LogSetAuthority(address)"(
      authority?: string | null
    ): LogSetAuthorityEventFilter;
    LogSetAuthority(authority?: string | null): LogSetAuthorityEventFilter;

    "LogSetOwner(address)"(owner?: string | null): LogSetOwnerEventFilter;
    LogSetOwner(owner?: string | null): LogSetOwnerEventFilter;

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

    "OneTxPaymentMade(address,uint256,uint256)"(
      agent?: null,
      fundamentalId?: null,
      nPayouts?: null
    ): OneTxPaymentMadeEventFilter;
    OneTxPaymentMade(
      agent?: null,
      fundamentalId?: null,
      nPayouts?: null
    ): OneTxPaymentMadeEventFilter;
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
      _user: string,
      _payload: BytesLike,
      _sigR: BytesLike,
      _sigS: BytesLike,
      _sigV: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getChainId(overrides?: CallOverrides): Promise<BigNumber>;

    getColony(overrides?: CallOverrides): Promise<BigNumber>;

    getDeprecated(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    setAuthority(
      authority_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setOwner(
      owner_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    verify(
      _owner: string,
      _nonce: BigNumberish,
      _chainId: BigNumberish,
      _payload: BytesLike,
      _sigR: BytesLike,
      _sigS: BytesLike,
      _sigV: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMetatransactionNonce(
      userAddress: string,
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
      _colony: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * Called when upgrading the extension
     */
    finishUpgrade(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * Called when deprecating (or undeprecating) the extension
     */
    deprecate(
      _deprecated: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * Called when uninstalling the extension
     */
    uninstall(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * Return the permissions required for each function
     * @param _sig The function signature
     */
    getCapabilityRoles(
      _sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Assumes that each entity holds administration and funding roles in the root domain
     * Completes a colony payment in a single transaction
     * @param _amounts amounts of the tokens being paid out
     * @param _callerChildSkillIndex Index of the _callerPermissionDomainId skill.children array to get
     * @param _callerPermissionDomainId The domainId in which the _caller_ has the administration permission (must have funding in root)
     * @param _childSkillIndex Index of the _permissionDomainId skill.children array to get
     * @param _domainId The domainId the payment should be coming from
     * @param _permissionDomainId The domainId in which the _contract_ has permissions to add a payment and fund it
     * @param _skillId The skillId that the payment should be marked with, possibly awarding reputation in this skill.
     * @param _tokens Addresses of the tokens the payments are being made in. 0x00 for Ether.
     * @param _workers The addresses of the recipients of the payment
     */
    makePayment(
      _permissionDomainId: BigNumberish,
      _childSkillIndex: BigNumberish,
      _callerPermissionDomainId: BigNumberish,
      _callerChildSkillIndex: BigNumberish,
      _workers: string[],
      _tokens: string[],
      _amounts: BigNumberish[],
      _domainId: BigNumberish,
      _skillId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * Assumes that each entity holds administration and funding roles in the same domain,   although contract and caller can have the permissions in different domains. Payment is taken from domain funds - if the domain does not have sufficient funds, call will fail.
     * Completes a colony payment in a single transaction
     * @param _amounts The amounts of the tokens being paid out
     * @param _callerChildSkillIndex Index of the _callerPermissionDomainId skill.children array to get
     * @param _callerPermissionDomainId The domainId in which the _caller_ has permissions to add a payment and fund it
     * @param _childSkillIndex Index of the _permissionDomainId skill.children array to get
     * @param _domainId The domainId the payment should be coming from
     * @param _permissionDomainId The domainId in which the _contract_ has permissions to add a payment and fund it
     * @param _skillId The skillId that the payment should be marked with, possibly awarding reputation in this skill.
     * @param _tokens The addresses of the token the payments are being made in. 0x00 for Ether.
     * @param _workers The addresses of the recipients of the payment
     */
    makePaymentFundedFromDomain(
      _permissionDomainId: BigNumberish,
      _childSkillIndex: BigNumberish,
      _callerPermissionDomainId: BigNumberish,
      _callerChildSkillIndex: BigNumberish,
      _workers: string[],
      _tokens: string[],
      _amounts: BigNumberish[],
      _domainId: BigNumberish,
      _skillId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
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
      _user: string,
      _payload: BytesLike,
      _sigR: BytesLike,
      _sigS: BytesLike,
      _sigV: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getColony(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getDeprecated(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setAuthority(
      authority_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setOwner(
      owner_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    verify(
      _owner: string,
      _nonce: BigNumberish,
      _chainId: BigNumberish,
      _payload: BytesLike,
      _sigR: BytesLike,
      _sigS: BytesLike,
      _sigV: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMetatransactionNonce(
      userAddress: string,
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
      _colony: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Called when upgrading the extension
     */
    finishUpgrade(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Called when deprecating (or undeprecating) the extension
     */
    deprecate(
      _deprecated: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Called when uninstalling the extension
     */
    uninstall(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Return the permissions required for each function
     * @param _sig The function signature
     */
    getCapabilityRoles(
      _sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Assumes that each entity holds administration and funding roles in the root domain
     * Completes a colony payment in a single transaction
     * @param _amounts amounts of the tokens being paid out
     * @param _callerChildSkillIndex Index of the _callerPermissionDomainId skill.children array to get
     * @param _callerPermissionDomainId The domainId in which the _caller_ has the administration permission (must have funding in root)
     * @param _childSkillIndex Index of the _permissionDomainId skill.children array to get
     * @param _domainId The domainId the payment should be coming from
     * @param _permissionDomainId The domainId in which the _contract_ has permissions to add a payment and fund it
     * @param _skillId The skillId that the payment should be marked with, possibly awarding reputation in this skill.
     * @param _tokens Addresses of the tokens the payments are being made in. 0x00 for Ether.
     * @param _workers The addresses of the recipients of the payment
     */
    makePayment(
      _permissionDomainId: BigNumberish,
      _childSkillIndex: BigNumberish,
      _callerPermissionDomainId: BigNumberish,
      _callerChildSkillIndex: BigNumberish,
      _workers: string[],
      _tokens: string[],
      _amounts: BigNumberish[],
      _domainId: BigNumberish,
      _skillId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Assumes that each entity holds administration and funding roles in the same domain,   although contract and caller can have the permissions in different domains. Payment is taken from domain funds - if the domain does not have sufficient funds, call will fail.
     * Completes a colony payment in a single transaction
     * @param _amounts The amounts of the tokens being paid out
     * @param _callerChildSkillIndex Index of the _callerPermissionDomainId skill.children array to get
     * @param _callerPermissionDomainId The domainId in which the _caller_ has permissions to add a payment and fund it
     * @param _childSkillIndex Index of the _permissionDomainId skill.children array to get
     * @param _domainId The domainId the payment should be coming from
     * @param _permissionDomainId The domainId in which the _contract_ has permissions to add a payment and fund it
     * @param _skillId The skillId that the payment should be marked with, possibly awarding reputation in this skill.
     * @param _tokens The addresses of the token the payments are being made in. 0x00 for Ether.
     * @param _workers The addresses of the recipients of the payment
     */
    makePaymentFundedFromDomain(
      _permissionDomainId: BigNumberish,
      _childSkillIndex: BigNumberish,
      _callerPermissionDomainId: BigNumberish,
      _callerChildSkillIndex: BigNumberish,
      _workers: string[],
      _tokens: string[],
      _amounts: BigNumberish[],
      _domainId: BigNumberish,
      _skillId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
