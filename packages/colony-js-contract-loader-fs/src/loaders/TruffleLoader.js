/* @flow */

import type { ConstructorArgs } from '../flowtypes';

import FSLoader from './FSLoader';

const { truffleTransform } = require('@colony/colony-js-contract-loader');

export default class TruffleLoader extends FSLoader {
  constructor({ contractDir }: ConstructorArgs = {}) {
    super({ transform: truffleTransform, contractDir });
  }
}
