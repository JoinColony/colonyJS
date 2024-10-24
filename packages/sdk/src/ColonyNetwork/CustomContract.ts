import {
  type Abi,
  type AbiParametersToPrimitiveTypes,
  type Address,
  type ExtractAbiFunction,
  type ExtractAbiFunctionNames,
} from 'abitype';
import { Contract, type ContractInterface } from 'ethers';
import {
  type ContractReceipt,
  type EventData,
  type MetaTxBaseContract,
  type TxConfig,
} from '../index.js';
import CustomTxCreator from '../TxCreator/CustomTxCreator.js';
import { type ContractConfig } from '../ContractConfig.js';

export class CustomContract<A extends Abi> {
  private abi: A;

  private contract: MetaTxBaseContract;

  address: Address;

  config: ContractConfig;

  /**
   * Creates a new instance of a custom contract
   *
   * This is your main entry point to talk to the Colony Network Smart Contracts.
   * From here you should be able to instantiate all the required instances for Colonies and their extensions.
   *
   * @param address - Address of the deployed contract
   * @param abi - JSON ABI of the contract
   * @param config - An instance of a ContractConfig (mind: _not_ ContractOptions!)
   * @returns A CustomContract instance
   */
  constructor(address: Address, abi: A, config: ContractConfig) {
    this.abi = abi;
    this.address = address;
    this.config = config;

    // We do a little bit of casting to make ethers happy with the abitype types
    this.contract = new Contract(
      address,
      this.abi as unknown as ContractInterface,
      this.config.signerOrProvider,
    ) as unknown as MetaTxBaseContract;
  }

  /**
   * Creates a new {@link CustomTxCreator} for custom, permissioned transactions or metatransactions
   *
   * @param method - The transaction method to execute on the contract
   * @param args - The arguments for the method
   * @param eventData - A function that extracts the relevant event data from the {@link ContractReceipt}
   * @param txConfig - More configuration options, like {@link MetadataType} if the event contains metadata or if methods are unsupported
   * @returns A {@link CustomTxCreator}
   */
  createTxCreator<
    M extends ExtractAbiFunctionNames<A, 'payable' | 'nonpayable'>,
    E extends EventData,
  >(
    method: M,
    args: AbiParametersToPrimitiveTypes<
      ExtractAbiFunction<A, M>['inputs'],
      'inputs'
    >,
    eventData?: (receipt: ContractReceipt) => Promise<E>,
    txConfig?: TxConfig,
  ) {
    return new CustomTxCreator<A, M, E>({
      config: this.config,
      contract: this.contract,
      method,
      args,
      eventData,
      txConfig,
    });
  }

  /**
   * Read a contract value
   *
   * @param method - The pure/view method to read from the contract
   * @param args - The arguments for the method
   * @returns A promise resolving into the specific type for the contract return value
   */
  async read<M extends ExtractAbiFunctionNames<A, 'pure' | 'view'>>(
    method: M,
    args: AbiParametersToPrimitiveTypes<
      ExtractAbiFunction<A, M>['inputs'],
      'inputs'
    >,
  ): Promise<
    AbiParametersToPrimitiveTypes<
      ExtractAbiFunction<A, M>['outputs'],
      'outputs'
    >[0]
  > {
    // A little typecasting to make ethers happy
    const customArgs = args as unknown[];
    const contract = this.contract as unknown as Record<
      string,
      (...args: unknown[]) => Promise<unknown>
    >;
    const result = contract[method](...customArgs) as Promise<
      AbiParametersToPrimitiveTypes<
        ExtractAbiFunction<A, M>['outputs'],
        'outputs'
      >[0]
    >;
    return result;
  }
}
