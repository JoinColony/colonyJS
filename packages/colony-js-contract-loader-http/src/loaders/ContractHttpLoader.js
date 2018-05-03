/* @flow */

import assert from 'browser-assert';

import type {
  ContractDefinition,
  IContractLoader,
  Parser,
  Query,
} from '@colony/colony-js-contract-loader';

import type { ConstructorArgs } from '../flowtypes';

const validateField = (assertion, field) =>
  assert(
    assertion,
    `Invalid contract definition: ${field} is missing or invalid`,
  );

export default class ContractHttpLoader implements IContractLoader {
  _endpoint: string;
  _parse: Parser;

  /**
   * The default `parse` function is simply returns the JSON object as the
   * default behaviour.
   */
  static defaultParser(): Parser {
    // eslint-disable-next-line no-unused-vars
    return (jsonObj: any, query?: Query) => jsonObj;
  }

  static validateBytecode(contractDef: ContractDefinition): boolean {
    // XXX EtherscanLoader does not support bytecode, and uses a custom
    // getter that throws an error
    let getterError;
    let bytecode;
    try {
      if (contractDef.bytecode != null) ({ bytecode } = contractDef);
    } catch (error) {
      getterError = true;
    }

    // `bytecode` is an optional property
    if (!getterError && bytecode)
      validateField(
        typeof bytecode === 'string' && bytecode.length > 0,
        'bytecode',
      );

    return true;
  }
  static validateContractDefinition(contractDef: ContractDefinition): boolean {
    assert(
      Object.getOwnPropertyNames(contractDef).length > 0,
      'Missing contract definition',
    );

    const { address, abi } = contractDef;

    // `address` is an optional property
    if (address != null)
      validateField(
        typeof address === 'string' && address.length > 0,
        'address',
      );

    this.validateBytecode(contractDef);

    validateField(Array.isArray(abi) && abi.length > 0, 'abi');

    return true;
  }
  constructor({
    endpoint,
    parse = this.constructor.defaultParser(),
  }: ConstructorArgs = {}) {
    assert(
      typeof endpoint === 'string',
      'An `endpoint` option must be provided',
    );
    assert(typeof parse === 'function', 'A `parse` function must be provided');
    this._endpoint = endpoint;
    this._parse = parse;
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
    const contractDef = this._parse(jsonObj, query);

    // The returned object could contain anything, so we need to ensure that
    // it's a valid contract definition.
    this.constructor.validateContractDefinition(contractDef);

    return contractDef;
  }
  async _load(query: Query = {}): Promise<ContractDefinition> {
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
