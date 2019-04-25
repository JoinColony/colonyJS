/* @flow */

import type {
  ContractDefinition,
  ConstructorArgs,
  Transform,
  RequiredContractProps,
  Query,
} from './interface/ContractLoader';

import { DEFAULT_REQUIRED_CONTRACT_PROPS } from './defaults';

const assert = require('assert');

const validateField = (assertion, field) =>
  assert(
    assertion,
    `Invalid contract definition: ${field} is missing or invalid`,
  );

export default class ContractLoader {
  _network: ?string;
  _transform: Transform;

  /**
   * The default `transform` function is simply returns the input object as the
   * default behaviour.
   */
  static defaultTransform(): Transform {
    /* eslint-disable no-unused-vars */
    return (
      inputObj: any,
      query?: Query,
      requiredProps?: RequiredContractProps,
    ) => inputObj;
    /* eslint-enable no-unused-vars */
  }

  static validateContractDefinition(
    contractDef: ContractDefinition,
    requiredProps: RequiredContractProps,
  ): boolean {
    assert(
      Object.getOwnPropertyNames(contractDef).length > 0,
      'Missing contract definition',
    );

    const { address, abi } = contractDef;

    if (requiredProps.address)
      validateField(
        typeof address === 'string' && address.length > 0,
        'address',
      );

    if (requiredProps.bytecode)
      validateField(
        typeof contractDef.bytecode === 'string' &&
          contractDef.bytecode.length > 0,
        'bytecode',
      );

    if (requiredProps.abi)
      validateField(Array.isArray(abi) && abi.length > 0, 'abi');

    return true;
  }
  constructor({
    transform = this.constructor.defaultTransform(),
  }: ConstructorArgs = {}) {
    assert(
      typeof transform === 'function',
      'A `transform` function must be provided',
    );
    this._transform = transform;
  }
  /* eslint-disable class-methods-use-this,no-unused-vars */
  async _load(
    query: Query,
    requiredProps?: RequiredContractProps, // eslint-disable-line no-unused-vars
  ): Promise<?ContractDefinition> {
    throw new Error(
      'ContractLoader._load() is expected to be defined in a derived class',
    );
  }
  /* eslint-enable class-methods-use-this,no-unused-vars */
  async load(
    query: Query,
    requiredProps?: RequiredContractProps = DEFAULT_REQUIRED_CONTRACT_PROPS,
  ): Promise<ContractDefinition> {
    const {
      contractName,
      contractAddress,
      routerName,
      routerAddress,
      ...otherQuery
    } = query;

    if (!(contractName || contractAddress))
      throw new TypeError(
        'The field `contractName` or `contractAddress` must be supplied',
      );

    // Load the contract definition by either the contract name or address
    const firstQuery = {
      ...(contractName ? { contractName } : { contractAddress }),
      ...otherQuery,
    };
    const result = await this._load(firstQuery, requiredProps);

    if (result == null)
      throw new Error(
        `Unable to load contract definition (${JSON.stringify(firstQuery)})`,
      );

    if (contractAddress) {
      // If we have a specific contractAddress, set it directly.
      result.address = contractAddress;
    } else if (routerAddress) {
      // If we have the router address, set it directly.
      result.address = routerAddress;
    } else if (routerName) {
      // If we have the router name, look it up for the router address.
      const routerContract = await this._load(
        {
          ...otherQuery,
          contractName: routerName,
        },
        requiredProps,
      );
      if (routerContract != null) result.address = routerContract.address;
    }

    this.constructor.validateContractDefinition(result, requiredProps);

    return result;
  }
}
