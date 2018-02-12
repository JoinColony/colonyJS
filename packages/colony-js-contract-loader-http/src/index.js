/* @flow */

import type {
  IContractLoader,
  ConstructorArgs,
  Query,
  ParserOption,
  Parser,
  ContractDefinition,
} from '@colony/colony-js-contract-loader';

import PARSERS from './parsers';

type Options = {};

export default class ContractHttpLoader implements IContractLoader<Options> {
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
    this._endpoint = endpoint; // TODO should validate endpoint and throw an error
    this._parser = ContractHttpLoader.selectParser(parser);
  }
  resolveEndpointResource({ name, version, address }: Query): string {
    let resource = '';
    if (address) {
      resource = this._endpoint.replace('%%ADDRESS%%', address);
    } else if (name) {
      resource = this._endpoint.replace('%%NAME%%', name);

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
  async _load(query: Query) {
    return fetch(this.resolveEndpointResource(query));
  }
  async load(query: Query): Promise<ContractDefinition> {
    const response = await this._load(query);
    const json = await response.json();
    const parsed = this._parser(json);

    if (typeof parsed.address !== 'string')
      throw new Error('Unable to parse contract address');

    if (!(parsed.abi instanceof Array))
      throw new Error('Unable to parse contract ABI');

    return parsed;
  }
}
