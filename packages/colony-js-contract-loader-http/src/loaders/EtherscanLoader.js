/* @flow */

import type { Query } from '@colony/colony-js-contract-loader';

import ContractHttpLoader from './ContractHttpLoader';

const DEFAULT_ENDPOINT =
  'https://api.etherscan.io/api?module=contract&action=getabi&address=%%ADDRESS%%'; // eslint-disable-line max-len

export default class EtherscanLoader extends ContractHttpLoader {
  constructor({ endpoint = DEFAULT_ENDPOINT }: { endpoint: string } = {}) {
    super({ endpoint });
  }
  static parse(response: any, query: Query) {
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

    return {
      abi,
      address: query.contractAddress,
    };
  }
}
