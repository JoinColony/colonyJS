/* @flow */

import type { ConstructorArgs } from '../flowtypes';

const FSLoader = require('./FSLoader');

const { truffleTransform } = require('@colony/colony-js-contract-loader');

class TruffleLoader extends FSLoader {
  constructor({ contractDir }: ConstructorArgs = {}) {
    super({ transform: truffleTransform, contractDir });
  }
}

module.exports = TruffleLoader;
