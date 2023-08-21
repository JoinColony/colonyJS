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
} from "./common";

export interface IBasicMetaTransactionInterface extends utils.Interface {
  functions: {
    "executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)": FunctionFragment;
    "getMetatransactionNonce(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "executeMetaTransaction" | "getMetatransactionNonce"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "executeMetaTransaction",
    values: [string, BytesLike, BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getMetatransactionNonce",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "executeMetaTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMetatransactionNonce",
    data: BytesLike
  ): Result;

  events: {
    "MetaTransactionExecuted(address,address,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MetaTransactionExecuted"): EventFragment;
}

export interface MetaTransactionExecutedEventObject {
  userAddress: string;
  relayerAddress: string;
  payload: string;
}
export type MetaTransactionExecutedEvent = TypedEvent<
  [string, string, string],
  MetaTransactionExecutedEventObject
>;

export type MetaTransactionExecutedEventFilter =
  TypedEventFilter<MetaTransactionExecutedEvent>;

export interface IBasicMetaTransaction extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IBasicMetaTransactionInterface;

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
    /**
     * Executes a metatransaction targeting this contract
     * @param payload The transaction data that will be executed if signature valid
     * @param sigR The 'r' part of the signature
     * @param sigS The 's' part of the signature
     * @param sigV The 'v' part of the signature
     * @param userAddress The address of the user that signed the metatransaction
     */
    executeMetaTransaction(
      userAddress: string,
      payload: BytesLike,
      sigR: BytesLike,
      sigS: BytesLike,
      sigV: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * Gets the next metatransaction nonce for user that should be used targeting this contract
     * @param userAddress The address of the user that will sign the metatransaction
     */
    getMetatransactionNonce(
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { nonce: BigNumber }>;
  };

  /**
   * Executes a metatransaction targeting this contract
   * @param payload The transaction data that will be executed if signature valid
   * @param sigR The 'r' part of the signature
   * @param sigS The 's' part of the signature
   * @param sigV The 'v' part of the signature
   * @param userAddress The address of the user that signed the metatransaction
   */
  executeMetaTransaction(
    userAddress: string,
    payload: BytesLike,
    sigR: BytesLike,
    sigS: BytesLike,
    sigV: BigNumberish,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * Gets the next metatransaction nonce for user that should be used targeting this contract
   * @param userAddress The address of the user that will sign the metatransaction
   */
  getMetatransactionNonce(
    userAddress: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    /**
     * Executes a metatransaction targeting this contract
     * @param payload The transaction data that will be executed if signature valid
     * @param sigR The 'r' part of the signature
     * @param sigS The 's' part of the signature
     * @param sigV The 'v' part of the signature
     * @param userAddress The address of the user that signed the metatransaction
     */
    executeMetaTransaction(
      userAddress: string,
      payload: BytesLike,
      sigR: BytesLike,
      sigS: BytesLike,
      sigV: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    /**
     * Gets the next metatransaction nonce for user that should be used targeting this contract
     * @param userAddress The address of the user that will sign the metatransaction
     */
    getMetatransactionNonce(
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "MetaTransactionExecuted(address,address,bytes)"(
      userAddress?: null,
      relayerAddress?: null,
      payload?: null
    ): MetaTransactionExecutedEventFilter;
    MetaTransactionExecuted(
      userAddress?: null,
      relayerAddress?: null,
      payload?: null
    ): MetaTransactionExecutedEventFilter;
  };

  estimateGas: {
    /**
     * Executes a metatransaction targeting this contract
     * @param payload The transaction data that will be executed if signature valid
     * @param sigR The 'r' part of the signature
     * @param sigS The 's' part of the signature
     * @param sigV The 'v' part of the signature
     * @param userAddress The address of the user that signed the metatransaction
     */
    executeMetaTransaction(
      userAddress: string,
      payload: BytesLike,
      sigR: BytesLike,
      sigS: BytesLike,
      sigV: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * Gets the next metatransaction nonce for user that should be used targeting this contract
     * @param userAddress The address of the user that will sign the metatransaction
     */
    getMetatransactionNonce(
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * Executes a metatransaction targeting this contract
     * @param payload The transaction data that will be executed if signature valid
     * @param sigR The 'r' part of the signature
     * @param sigS The 's' part of the signature
     * @param sigV The 'v' part of the signature
     * @param userAddress The address of the user that signed the metatransaction
     */
    executeMetaTransaction(
      userAddress: string,
      payload: BytesLike,
      sigR: BytesLike,
      sigS: BytesLike,
      sigV: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * Gets the next metatransaction nonce for user that should be used targeting this contract
     * @param userAddress The address of the user that will sign the metatransaction
     */
    getMetatransactionNonce(
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
