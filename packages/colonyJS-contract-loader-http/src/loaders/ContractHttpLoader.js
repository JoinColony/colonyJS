/* @flow */

import assert from 'browser-assert';

import type {
  ContractDefinition,
  IContractLoader,
  Transform,
  RequiredContractProps,
  Query,
} from '../../../colonyJS-contract-loader';

import type { ConstructorArgs } from '../flowtypes';
import { DEFAULT_REQUIRED_CONTRACT_PROPS } from '../defaults';

const validateField = (assertion, field) =>
  assert(
    assertion,
    `Invalid contract definition: ${field} is missing or invalid`,
  );

export default class ContractHttpLoader implements IContractLoader {
  _endpoint: string;
  _transform: Transform;

  /**
   * The default `transform` function is simply returns the JSON object as the
   * default behaviour.
   */
  static defaultTransform(): Transform {
    /* eslint-disable no-unused-vars */
    return (
      jsonObj: any,
      query?: Query,
      requiredProps?: RequiredContractProps,
    ) => jsonObj;
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
    endpoint,
    transform = this.constructor.defaultTransform(),
  }: ConstructorArgs = {}) {
    assert(
      typeof endpoint === 'string',
      'An `endpoint` option must be provided',
    );
    assert(
      typeof transform === 'function',
      'A `transform` function must be provided',
    );
    this._endpoint = endpoint;
    this._transform = transform;
  }
  resolveEndpointResource({
    contractName,
    contractAddress,
    version,
  }: Query): string {
    return (
      this._endpoint
        .replace('%%NAME%%', contractName || '')
        .replace('%%ADDRESS%%', contractAddress || '')
        // `version` can be a string or an integer
        .replace(
          '%%VERSION%%',
          version != null &&
          (typeof version === 'string' ||
            Number(parseInt(version, 10)) === version)
            ? version.toString()
            : '',
        )
    );
  }
  async _load(
    query: Query = {},
    requiredProps: RequiredContractProps,
  ): Promise<ContractDefinition> {
    // Provide some context for errors thrown by lower-level functions
    const throwError = (action: string, error: any) => {
      throw new Error(
        `Unable to ${action} for contract ${query.contractName ||
          query.contractAddress ||
          ''}: ${error.message || error}`,
      );
    };

    let response;
    try {
      response = await fetch(this.resolveEndpointResource(query));
    } catch (error) {
      throwError('fetch resource', error);
    }

    let json;
    try {
      json = response && response.json && (await response.json());
    } catch (error) {
      throwError('get JSON', error);
    }

    let contractDef = { abi: [], bytecode: '' };
    try {
      contractDef = this._transform(json, query, requiredProps);
    } catch (error) {
      throwError('transform contract definition', error);
    }
    return contractDef;
  }
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
    const result = await this._load(
      {
        ...(contractName ? { contractName } : { contractAddress }),
        ...otherQuery,
      },
      requiredProps,
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
      result.address = routerContract.address;
    }

    this.constructor.validateContractDefinition(result, requiredProps);

    return result;
  }
}
