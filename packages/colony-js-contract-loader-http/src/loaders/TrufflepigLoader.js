/* @flow */

import 'isomorphic-fetch';
import { truffleTransform } from '@colony/colony-js-contract-loader';

import type { ConstructorArgs } from '../flowtypes';

import HttpLoader from './HttpLoader';

const DEFAULT_HOST = 'http://127.0.0.1:3030';

const DEFAULT_ENDPOINT = `${DEFAULT_HOST}/contracts?name=%%NAME%%&address=%%ADDRESS%%&version=%%VERSION%%`; // eslint-disable-line max-len

export default class TrufflepigLoader extends HttpLoader {
  _host: string;

  constructor({ endpoint = DEFAULT_ENDPOINT }: ConstructorArgs = {}) {
    super({ transform: truffleTransform, endpoint });
    const [host] = this._endpoint.split('/contracts');
    this._host = host;
  }

  async getAccount(index: number) {
    const response = await fetch(`${this._host}/accounts`);
    const accounts = await response.json();

    const addresses = Object.keys(accounts);
    if (!addresses[index])
      throw new Error(`Account for index ${index} not found`);

    const address = addresses[index];
    const privateKey = accounts[address];
    return { address, privateKey };
  }
}
