/* @flow */

import assert from 'browser-assert';

import type {
  ContractDefinition,
  IContractLoader,
  Query,
} from '@colony/colony-js-contract-loader';

export default class ContractHttpLoader implements IContractLoader {
  _endpoint: string;
  // The `parse` function is designed to be extended in a derived class;
  // it simply returns the JSON object as the default behaviour.
  // eslint-disable-next-line no-unused-vars
  static parse(jsonObj: any, query: Query): ContractDefinition {
    return jsonObj;
  }
  static validateContractDefinition(contractDef: {
    address?: any,
    abi: any,
    bytecode: any,
  }): boolean {
    if (Object.getOwnPropertyNames(contractDef).length === 0)
      throw new Error('Missing contract definition');

    const { address, abi, bytecode } = contractDef;
    const message = field =>
      `Invalid contract definition: ${field} is missing or invalid`;

    // `address` is an optional property
    if (address != null) {
      assert(
        typeof address === 'string' && address.length > 0,
        message('address'),
      );
    }

    // `bytecode` is an optional property
    if (bytecode != null) {
      assert(
        typeof bytecode === 'string' && bytecode.length > 0,
        message('bytecode'),
      );
    }

    assert(Array.isArray(abi) && abi.length > 0, message('abi'));
    return true;
  }
  constructor({ endpoint }: { endpoint: string } = {}) {
    assert(
      typeof endpoint === 'string',
      'An `endpoint` option must be provided',
    );
    this._endpoint = endpoint;
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
  parseContractDefinition(jsonObj: *, query: Query): ContractDefinition {
    const contractDef = this.constructor.parse(jsonObj, query);

    // The returned object could contain anything, so we need to ensure that
    // it's a valid contract definition.
    this.constructor.validateContractDefinition(contractDef);

    return contractDef;
  }
  async _load(query: Query = {}): Promise<ContractDefinition> {
    // Provide some context for errors thrown by lower-level functions
    const throwError = (action: string, error: any) => {
      throw new Error(
        // eslint-disable-next-line max-len
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
      contractDef = this.parseContractDefinition(json, query);
    } catch (error) {
      throwError('parse contract definition', error);
    }
    return contractDef;
  }
  async load(query: Query): Promise<ContractDefinition> {
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
    const result = await this._load({
      ...(contractName ? { contractName } : { contractAddress }),
      ...otherQuery,
    });

    if (contractAddress) {
      // If we have a specific contractAddress, set it directly.
      result.address = contractAddress;
    } else if (routerAddress) {
      // If we have the router address, set it directly.
      result.address = routerAddress;
    } else if (routerName) {
      // If we have the router name, look it up for the router address.
      const routerContract = await this._load({
        ...otherQuery,
        contractName: routerName,
      });
      result.address = routerContract.address;
    }

    return result;
  }
}
