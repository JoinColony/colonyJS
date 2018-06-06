/* @flow */

import type {
  ContractDefinition,
  IContractLoader,
  RequiredContractProps,
  Query,
} from '@colony/colony-js-contract-loader';

import type { ConstructorArgs } from '../flowtypes';

const assert = require('assert');
const path = require('path');
const jsonfile = require('jsonfile');

const ContractLoader = require('@colony/colony-js-contract-loader').default;

export default class FSLoader extends ContractLoader
  implements IContractLoader {
  _contractDir: string;

  constructor({ contractDir, transform }: ConstructorArgs = {}) {
    super({ transform });
    assert(
      typeof contractDir === 'string' && contractDir,
      'A `contractDir` option must be provided',
    );
    this._contractDir = contractDir;
  }
  async _load(
    query: Query = {},
    requiredProps?: RequiredContractProps,
  ): Promise<?ContractDefinition> {
    const { contractName = '' } = query;

    assert(!!contractName, 'A `contractName` option must be provided');

    const file = path.resolve(this._contractDir, `${contractName}.json`);
    return new Promise((resolve, reject) => {
      jsonfile.readFile(file, (error, contents) => {
        let transformed;
        if (error) return reject(error);
        try {
          transformed = this._transform(contents, query, requiredProps);
        } catch (transformError) {
          return reject(transformError);
        }
        return resolve(transformed);
      });
    });
  }
}
