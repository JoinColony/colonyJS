/* @flow */

import assert from 'browser-assert';

import type {
  IContractLoader,
  ConstructorArgs,
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
  constructor({ endpoint, parser }: ConstructorArgs) {
    this._endpoint = endpoint;
    this._parser = ContractHttpLoader.selectParser(parser);
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
  async _load(contractName: string, { networkId, version }: Options = {}) {
    // TODO add more meaningful error handling for each step.
    const response = await fetch(
      this.resolveEndpointResource(contractName, { version }),
    );
    const json = await response.json();
    return this._parser(json, { networkId });
  }
  async load(
    contractName: string,
    options: Options = {},
  ): Promise<ContractDefinition> {
    const result = await this._load(contractName, options);

    if (!result)
      throw new Error(
        `Did not receive a response for contract "${contractName}"`,
      );

    const { address, router } = options;
    if (address) {
      result.address = address;
    } else if (router) {
      const routerContract = await this._load(router);
      result.address = routerContract.address;
    }

    if (!(result.abi instanceof Array))
      throw new Error('Unable to parse contract ABI');

    return result;
  }
}
