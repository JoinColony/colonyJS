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

export interface CoinMachineInterface extends utils.Interface {
  contractName: "CoinMachine";
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
    "initialise(address,address,uint256,uint256,uint256,uint256,uint256,uint256,address)": FunctionFragment;
    "setWhitelist(address)": FunctionFragment;
    "buyTokens(uint256)": FunctionFragment;
    "updatePeriod()": FunctionFragment;
    "getPurchaseToken()": FunctionFragment;
    "getToken()": FunctionFragment;
    "getActivePeriod()": FunctionFragment;
    "getActiveSold()": FunctionFragment;
    "getActiveIntake()": FunctionFragment;
    "getEMAIntake()": FunctionFragment;
    "getTokenBalance()": FunctionFragment;
    "getPeriodLength()": FunctionFragment;
    "getWindowSize()": FunctionFragment;
    "getTargetPerPeriod()": FunctionFragment;
    "getMaxPerPeriod()": FunctionFragment;
    "getCurrentPrice()": FunctionFragment;
    "getSellableTokens()": FunctionFragment;
    "getUserLimit(address)": FunctionFragment;
    "getMaxPurchase(address)": FunctionFragment;
    "getWhitelist()": FunctionFragment;
    "getEvolvePrice()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "authority", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getCapabilityRoles",
    values: [BytesLike]
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
    functionFragment: "initialise",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setWhitelist",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "buyTokens",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePeriod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPurchaseToken",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getActivePeriod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getActiveSold",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getActiveIntake",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getEMAIntake",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPeriodLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getWindowSize",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTargetPerPeriod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMaxPerPeriod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSellableTokens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getUserLimit",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getMaxPurchase",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getWhitelist",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getEvolvePrice",
    values?: undefined
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
    functionFragment: "setWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "buyTokens", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updatePeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPurchaseToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getActivePeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getActiveSold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getActiveIntake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEMAIntake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPeriodLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getWindowSize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTargetPerPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMaxPerPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSellableTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMaxPurchase",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEvolvePrice",
    data: BytesLike
  ): Result;

  events: {
    "ExtensionInitialised()": EventFragment;
    "LogSetAuthority(address)": EventFragment;
    "LogSetOwner(address)": EventFragment;
    "PeriodUpdated(uint256,uint256)": EventFragment;
    "PriceEvolutionSet(bool)": EventFragment;
    "TokensBought(address,uint256,uint256)": EventFragment;
    "WhitelistSet(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ExtensionInitialised"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogSetAuthority"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogSetOwner"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PeriodUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PriceEvolutionSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokensBought"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WhitelistSet"): EventFragment;
}

export type ExtensionInitialisedEvent = TypedEvent<[], {}>;

export type ExtensionInitialisedEventFilter =
  TypedEventFilter<ExtensionInitialisedEvent>;

export type LogSetAuthorityEvent = TypedEvent<[string], { authority: string }>;

export type LogSetAuthorityEventFilter = TypedEventFilter<LogSetAuthorityEvent>;

export type LogSetOwnerEvent = TypedEvent<[string], { owner: string }>;

export type LogSetOwnerEventFilter = TypedEventFilter<LogSetOwnerEvent>;

export type PeriodUpdatedEvent = TypedEvent<
  [BigNumber, BigNumber],
  { activePeriod: BigNumber; currentPeriod: BigNumber }
>;

export type PeriodUpdatedEventFilter = TypedEventFilter<PeriodUpdatedEvent>;

export type PriceEvolutionSetEvent = TypedEvent<
  [boolean],
  { evolvePrice: boolean }
>;

export type PriceEvolutionSetEventFilter =
  TypedEventFilter<PriceEvolutionSetEvent>;

export type TokensBoughtEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { buyer: string; numTokens: BigNumber; totalCost: BigNumber }
>;

export type TokensBoughtEventFilter = TypedEventFilter<TokensBoughtEvent>;

export type WhitelistSetEvent = TypedEvent<[string], { whitelist: string }>;

export type WhitelistSetEventFilter = TypedEventFilter<WhitelistSetEvent>;

export interface CoinMachine extends BaseContract {
  contractName: "CoinMachine";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CoinMachineInterface;

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
      _sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

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

    identifier(overrides?: CallOverrides): Promise<[string]>;

    version(overrides?: CallOverrides): Promise<[BigNumber]>;

    install(
      _colony: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    finishUpgrade(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deprecate(
      _deprecated: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    uninstall(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialise(
      _token: string,
      _purchaseToken: string,
      _periodLength: BigNumberish,
      _windowSize: BigNumberish,
      _targetPerPeriod: BigNumberish,
      _maxPerPeriod: BigNumberish,
      _userLimitFraction: BigNumberish,
      _startingPrice: BigNumberish,
      _whitelist: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setWhitelist(
      _whitelist: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    buyTokens(
      _numTokens: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updatePeriod(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getPurchaseToken(overrides?: CallOverrides): Promise<[string]>;

    getToken(overrides?: CallOverrides): Promise<[string]>;

    getActivePeriod(overrides?: CallOverrides): Promise<[BigNumber]>;

    getActiveSold(overrides?: CallOverrides): Promise<[BigNumber]>;

    getActiveIntake(overrides?: CallOverrides): Promise<[BigNumber]>;

    getEMAIntake(overrides?: CallOverrides): Promise<[BigNumber]>;

    getTokenBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    getPeriodLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    getWindowSize(overrides?: CallOverrides): Promise<[BigNumber]>;

    getTargetPerPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;

    getMaxPerPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;

    getCurrentPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    getSellableTokens(overrides?: CallOverrides): Promise<[BigNumber]>;

    getUserLimit(
      _user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getMaxPurchase(
      _user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getWhitelist(overrides?: CallOverrides): Promise<[string]>;

    getEvolvePrice(overrides?: CallOverrides): Promise<[boolean]>;
  };

  authority(overrides?: CallOverrides): Promise<string>;

  getCapabilityRoles(
    _sig: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

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

  identifier(overrides?: CallOverrides): Promise<string>;

  version(overrides?: CallOverrides): Promise<BigNumber>;

  install(
    _colony: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  finishUpgrade(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deprecate(
    _deprecated: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  uninstall(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialise(
    _token: string,
    _purchaseToken: string,
    _periodLength: BigNumberish,
    _windowSize: BigNumberish,
    _targetPerPeriod: BigNumberish,
    _maxPerPeriod: BigNumberish,
    _userLimitFraction: BigNumberish,
    _startingPrice: BigNumberish,
    _whitelist: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setWhitelist(
    _whitelist: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  buyTokens(
    _numTokens: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updatePeriod(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getPurchaseToken(overrides?: CallOverrides): Promise<string>;

  getToken(overrides?: CallOverrides): Promise<string>;

  getActivePeriod(overrides?: CallOverrides): Promise<BigNumber>;

  getActiveSold(overrides?: CallOverrides): Promise<BigNumber>;

  getActiveIntake(overrides?: CallOverrides): Promise<BigNumber>;

  getEMAIntake(overrides?: CallOverrides): Promise<BigNumber>;

  getTokenBalance(overrides?: CallOverrides): Promise<BigNumber>;

  getPeriodLength(overrides?: CallOverrides): Promise<BigNumber>;

  getWindowSize(overrides?: CallOverrides): Promise<BigNumber>;

  getTargetPerPeriod(overrides?: CallOverrides): Promise<BigNumber>;

  getMaxPerPeriod(overrides?: CallOverrides): Promise<BigNumber>;

  getCurrentPrice(overrides?: CallOverrides): Promise<BigNumber>;

  getSellableTokens(overrides?: CallOverrides): Promise<BigNumber>;

  getUserLimit(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

  getMaxPurchase(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

  getWhitelist(overrides?: CallOverrides): Promise<string>;

  getEvolvePrice(overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    authority(overrides?: CallOverrides): Promise<string>;

    getCapabilityRoles(
      _sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getColony(overrides?: CallOverrides): Promise<string>;

    getDeprecated(overrides?: CallOverrides): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    setAuthority(authority_: string, overrides?: CallOverrides): Promise<void>;

    setOwner(owner_: string, overrides?: CallOverrides): Promise<void>;

    identifier(overrides?: CallOverrides): Promise<string>;

    version(overrides?: CallOverrides): Promise<BigNumber>;

    install(_colony: string, overrides?: CallOverrides): Promise<void>;

    finishUpgrade(overrides?: CallOverrides): Promise<void>;

    deprecate(_deprecated: boolean, overrides?: CallOverrides): Promise<void>;

    uninstall(overrides?: CallOverrides): Promise<void>;

    initialise(
      _token: string,
      _purchaseToken: string,
      _periodLength: BigNumberish,
      _windowSize: BigNumberish,
      _targetPerPeriod: BigNumberish,
      _maxPerPeriod: BigNumberish,
      _userLimitFraction: BigNumberish,
      _startingPrice: BigNumberish,
      _whitelist: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setWhitelist(_whitelist: string, overrides?: CallOverrides): Promise<void>;

    buyTokens(
      _numTokens: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updatePeriod(overrides?: CallOverrides): Promise<void>;

    getPurchaseToken(overrides?: CallOverrides): Promise<string>;

    getToken(overrides?: CallOverrides): Promise<string>;

    getActivePeriod(overrides?: CallOverrides): Promise<BigNumber>;

    getActiveSold(overrides?: CallOverrides): Promise<BigNumber>;

    getActiveIntake(overrides?: CallOverrides): Promise<BigNumber>;

    getEMAIntake(overrides?: CallOverrides): Promise<BigNumber>;

    getTokenBalance(overrides?: CallOverrides): Promise<BigNumber>;

    getPeriodLength(overrides?: CallOverrides): Promise<BigNumber>;

    getWindowSize(overrides?: CallOverrides): Promise<BigNumber>;

    getTargetPerPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    getMaxPerPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    getCurrentPrice(overrides?: CallOverrides): Promise<BigNumber>;

    getSellableTokens(overrides?: CallOverrides): Promise<BigNumber>;

    getUserLimit(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    getMaxPurchase(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getWhitelist(overrides?: CallOverrides): Promise<string>;

    getEvolvePrice(overrides?: CallOverrides): Promise<boolean>;
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

    "PeriodUpdated(uint256,uint256)"(
      activePeriod?: null,
      currentPeriod?: null
    ): PeriodUpdatedEventFilter;
    PeriodUpdated(
      activePeriod?: null,
      currentPeriod?: null
    ): PeriodUpdatedEventFilter;

    "PriceEvolutionSet(bool)"(evolvePrice?: null): PriceEvolutionSetEventFilter;
    PriceEvolutionSet(evolvePrice?: null): PriceEvolutionSetEventFilter;

    "TokensBought(address,uint256,uint256)"(
      buyer?: null,
      numTokens?: null,
      totalCost?: null
    ): TokensBoughtEventFilter;
    TokensBought(
      buyer?: null,
      numTokens?: null,
      totalCost?: null
    ): TokensBoughtEventFilter;

    "WhitelistSet(address)"(whitelist?: null): WhitelistSetEventFilter;
    WhitelistSet(whitelist?: null): WhitelistSetEventFilter;
  };

  estimateGas: {
    authority(overrides?: CallOverrides): Promise<BigNumber>;

    getCapabilityRoles(
      _sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

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

    identifier(overrides?: CallOverrides): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;

    install(
      _colony: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    finishUpgrade(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deprecate(
      _deprecated: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    uninstall(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialise(
      _token: string,
      _purchaseToken: string,
      _periodLength: BigNumberish,
      _windowSize: BigNumberish,
      _targetPerPeriod: BigNumberish,
      _maxPerPeriod: BigNumberish,
      _userLimitFraction: BigNumberish,
      _startingPrice: BigNumberish,
      _whitelist: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setWhitelist(
      _whitelist: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    buyTokens(
      _numTokens: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updatePeriod(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getPurchaseToken(overrides?: CallOverrides): Promise<BigNumber>;

    getToken(overrides?: CallOverrides): Promise<BigNumber>;

    getActivePeriod(overrides?: CallOverrides): Promise<BigNumber>;

    getActiveSold(overrides?: CallOverrides): Promise<BigNumber>;

    getActiveIntake(overrides?: CallOverrides): Promise<BigNumber>;

    getEMAIntake(overrides?: CallOverrides): Promise<BigNumber>;

    getTokenBalance(overrides?: CallOverrides): Promise<BigNumber>;

    getPeriodLength(overrides?: CallOverrides): Promise<BigNumber>;

    getWindowSize(overrides?: CallOverrides): Promise<BigNumber>;

    getTargetPerPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    getMaxPerPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    getCurrentPrice(overrides?: CallOverrides): Promise<BigNumber>;

    getSellableTokens(overrides?: CallOverrides): Promise<BigNumber>;

    getUserLimit(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    getMaxPurchase(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getWhitelist(overrides?: CallOverrides): Promise<BigNumber>;

    getEvolvePrice(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    authority(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getCapabilityRoles(
      _sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

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

    identifier(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    install(
      _colony: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    finishUpgrade(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deprecate(
      _deprecated: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    uninstall(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialise(
      _token: string,
      _purchaseToken: string,
      _periodLength: BigNumberish,
      _windowSize: BigNumberish,
      _targetPerPeriod: BigNumberish,
      _maxPerPeriod: BigNumberish,
      _userLimitFraction: BigNumberish,
      _startingPrice: BigNumberish,
      _whitelist: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setWhitelist(
      _whitelist: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    buyTokens(
      _numTokens: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updatePeriod(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getPurchaseToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getActivePeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getActiveSold(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getActiveIntake(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getEMAIntake(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTokenBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPeriodLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getWindowSize(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTargetPerPeriod(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMaxPerPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getCurrentPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSellableTokens(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getUserLimit(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMaxPurchase(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getWhitelist(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getEvolvePrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
