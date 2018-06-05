/* @flow */

import assert from 'browser-assert';
import 'isomorphic-fetch';
import ContractLoader from '@colony/colony-js-contract-loader';

import type {
  ContractDefinition,
  IContractLoader,
  RequiredContractProps,
  Query,
} from '@colony/colony-js-contract-loader';

import type { ConstructorArgs } from '../flowtypes';

export default class HttpLoader extends ContractLoader
  implements IContractLoader {
  _endpoint: string;

  constructor({ endpoint, transform }: ConstructorArgs = {}) {
    super({ transform });
    assert(
      typeof endpoint === 'string' && endpoint,
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
  async _load(
    query: Query = {},
    requiredProps?: RequiredContractProps,
  ): Promise<?ContractDefinition> {
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

    let contractDef;
    try {
      contractDef = this._transform(json, query, requiredProps);
    } catch (error) {
      throwError('transform contract definition', error);
    }
    return contractDef;
  }
}
