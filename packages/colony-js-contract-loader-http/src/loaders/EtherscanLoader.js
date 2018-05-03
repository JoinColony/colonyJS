/* @flow */

import type { Query } from '@colony/colony-js-contract-loader';

import ContractHttpLoader from './ContractHttpLoader';

import type { ConstructorArgs } from '../flowtypes';

const DEFAULT_ENDPOINT =
  'https://api.etherscan.io/api?module=contract&action=getabi&address=%%ADDRESS%%'; // eslint-disable-line max-len

function etherscanParse(response: any, query: Query) {
  // TODO later: consider building some generalized response validators for
  // common services like etherscan, infura, jsonrpc, etc.
  if (
    typeof response !== 'object' ||
    !Object.hasOwnProperty.call(response, 'status')
  ) {
    throw new Error('Malformed response from Etherscan');
  }

  const { result: abi, status } = response;

  if (status !== '1')
    throw new Error(`Erroneous response from Etherscan (status: ${status})`);

  const parsed = {
    abi,
    address: query.contractAddress,
    bytecode: '',
  };

  // Etherscan's API does not return a bytecode property, so we will employ a
  // custom getter (which throws an error) in order to make this clear.
  // $FlowFixMe: we don't want to assign a value
  Object.defineProperty(parsed, 'bytecode', {
    enumerable: false,
    configurable: false,
    get() {
      throw new Error('Etherscan does not currently provide contract bytecode');
    },
  });

  return parsed;
}

export default class EtherscanLoader extends ContractHttpLoader {
  constructor({
    parse = etherscanParse,
    endpoint = DEFAULT_ENDPOINT,
    ...rest
  }: ConstructorArgs = {}) {
    super({ endpoint, parse, ...rest });
  }
}
