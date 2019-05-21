/* @flow */

import type { ConstructorArgs } from '../flowtypes';

const { truffleTransform } = require('@colony/colony-js-contract-loader');

const FSLoader = require('./FSLoader');

class TruffleLoader extends FSLoader {
  constructor({ contractDir }: ConstructorArgs = {}) {
    super({ transform: truffleTransform, contractDir });
  }
}

module.exports = TruffleLoader;
