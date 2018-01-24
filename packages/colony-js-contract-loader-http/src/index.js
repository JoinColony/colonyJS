/* @flow */

import type { IContractLoader, ConstructorArgs, Query, ParserOption, Parser, ContractDefinition } from '@colony/colony-js-contract-loader';

import PARSERS from './parsers';

export default class ContractHttpLoader implements IContractLoader {
  _endpoint: string;
  _parser: Parser;
  static selectParser(parser: ParserOption): Parser {
    if (typeof parser === 'function') {
      return parser;
    } else if (typeof parser === 'string') {
      if (!PARSERS[parser]) {
        throw new Error(`ContractHttpLoader: The contract parser ${parser} was not found`);
      }
      return PARSERS[parser];
    }
    throw new Error('Invalid parser supplied to ContractHttpLoader');
  }
  constructor({ endpoint, parser }: ConstructorArgs) {
    this._endpoint = endpoint;
    this._parser = ContractHttpLoader.selectParser(parser);
  }
  resolveEndpointResource({ name, version }: Query): string {
    let resource = this._endpoint.replace('%%NAME%%', name);
    if (version != null && Number(parseFloat(version)) === version) {
      resource = resource.replace('%%VERSION%%', version.toString());
    }
    return resource;
  }
  async _load({ name, version }: Query) {
    return fetch(this.resolveEndpointResource({ name, version }));
  }
  async load(query: Query): Promise<ContractDefinition> {
    const response = await this._load(query);
    return this._parser(await response.json());
  }
}
