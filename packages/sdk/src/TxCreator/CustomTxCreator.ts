import {
  type ExtractAbiFunction,
  type AbiParametersToPrimitiveTypes,
  type Abi,
  type ExtractAbiFunctionNames,
} from 'abitype';

import { type ContractReceipt } from 'ethers';

import { type EventData, type TxConfig } from './TxCreator.js';
import { type MetaTxBaseContract, MetaTxCreator } from '../index.js';
import { type ContractConfig } from '../ContractConfig.js';

/**
 * Create transactions for custom contracts
 *
 * The `CustomTxCreator` allows for a simple API to cover all the different cases of transactions within the Colony Network.
 * This TxCreator works specifically for custom contracts that are not (yet) part of the Colony SDK.
 *
 * ## Creating a transaction
 *
 * - [[CustomTxCreator.tx]]: force a Colony transaction, knowing you have the permissions to do so
 * - [[CustomTxCreator.metaTx]]: same as `tx()`, but send as a gasless metatransaction
 */
class CustomTxCreator<
  A extends Abi,
  M extends ExtractAbiFunctionNames<A, 'payable' | 'nonpayable'>,
  E extends EventData,
> extends MetaTxCreator<MetaTxBaseContract, M, E> {
  constructor({
    contract,
    config,
    method,
    args,
    eventData,
    txConfig,
  }: {
    contract: MetaTxBaseContract;
    config: ContractConfig;
    method: M;
    args: AbiParametersToPrimitiveTypes<
      ExtractAbiFunction<A, M>['inputs'],
      'inputs'
    >;
    eventData?: (receipt: ContractReceipt) => Promise<E>;
    txConfig?: TxConfig;
  }) {
    const customArgs = args as unknown[];
    super({
      contract,
      config,
      method,
      args: customArgs,
      eventData,
      txConfig,
    });
  }
}

export default CustomTxCreator;
