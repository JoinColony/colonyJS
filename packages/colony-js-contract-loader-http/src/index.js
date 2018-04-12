/* @flow */

import assert from 'browser-assert';

import type {
  IContractLoader,
  Options,
  ParserOption,
  Parser,
  ContractDefinition,
} from '@colony/colony-js-contract-loader';

import PARSERS from './parsers';

export default class ContractHttpLoader implements IContractLoader {
  _endpoint: string;
  _parser: Parser;
  static selectParser(parser: ParserOption): Parser {
    if (typeof parser === 'function') {
      return parser;
    } else if (typeof parser === 'string') {
      if (!PARSERS[parser]) {
        throw new Error(
          `ContractHttpLoader: The contract parser ${parser} was not found`,
        );
      }
      return PARSERS[parser];
    }
    throw new Error('Invalid parser supplied to ContractHttpLoader');
  }
  static validateContractDefinition({
    address,
    abi,
    bytecode,
  }: {
    address?: any,
    abi: any,
    bytecode: any,
  }): boolean {
    const message = field =>
      `Invalid contract definition: ${field} is missing or invalid`;

    // `address` is an optional property
    if (address != null) {
      assert(
        typeof address === 'string' && address.length > 0,
        message('address'),
      );
    }

    assert(
      typeof bytecode === 'string' && bytecode.length > 0,
      message('bytecode'),
    );
    assert(Array.isArray(abi) && abi.length > 0, message('abi'));
    return true;
  }
  constructor({
    endpoint,
    parser,
  }: {
    endpoint: string,
    parser?: ParserOption,
  } = {}) {
    assert(
      typeof endpoint === 'string',
      'An `endpoint` option must be provided',
    );
    this._endpoint = endpoint;
    if (parser) this._parser = ContractHttpLoader.selectParser(parser);
  }
  resolveEndpointResource(
    contractName: string,
    { version }: Options = {},
  ): string {
    let resource = '';
    if (contractName) {
      resource = this._endpoint.replace('%%NAME%%', contractName);

      // `version` can be a string or an integer
      if (
        version != null &&
        (typeof version === 'string' ||
          Number(parseInt(version, 10)) === version)
      ) {
        resource = resource.replace('%%VERSION%%', version.toString());
      }
    }
    return resource;
  }
  parseContractDefinition(jsonObj: *, options: Options): ContractDefinition {
    // If a parser is not defined, just return the JSON-derived object
    const contractDef = this._parser ? this._parser(jsonObj, options) : jsonObj;

    // The returned object could contain anything, so we need to ensure that
    // it's a valid contract definition.
    this.constructor.validateContractDefinition(contractDef);

    return contractDef;
  }
  async _load(
    contractName: string,
    { networkId, version }: Options = {},
  ): Promise<ContractDefinition> {
    // Provide some context for errors thrown by lower-level functions
    const throwError = (action: string, error: any) => {
      throw new Error(
        // eslint-disable-next-line max-len
        `Unable to ${action} for contract ${contractName}: ${error.message ||
          error}`,
      );
    };

    let response;
    try {
      response = await fetch(
        this.resolveEndpointResource(contractName, { version }),
      );
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
      contractDef = this.parseContractDefinition(json, { networkId });
    } catch (error) {
      throwError('parse contract definition', error);
    }
    return contractDef;
  }
  async load(
    contractName: string,
    options: Options = {},
  ): Promise<ContractDefinition> {
    const result = await this._load(contractName, options);

    const { address, router } = options;
    if (address) {
      result.address = address;
    } else if (router) {
      const routerContract = await this._load(router);
      result.address = routerContract.address;
    }

    return result;
  }
}
