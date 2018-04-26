/* @flow */

import type { Query } from '@colony/colony-js-contract-loader';

import ContractHttpLoader from './ContractHttpLoader';

type TruffleArtifact = {
  abi: Array<{}>,
  bytecode: string,
  networks: {
    [networkId: number]: {
      address: string,
    },
  },
};

const DEFAULT_ENDPOINT =
  '//127.0.0.1:3030/contracts?name=%%NAME%%&address=%%ADDRESS%%&version=%%VERSION%%'; // eslint-disable-line max-len

export default class TrufflepigLoader extends ContractHttpLoader {
  constructor({ endpoint = DEFAULT_ENDPOINT }: { endpoint: string } = {}) {
    super({ endpoint });
  }
  static parse(
    { abi = [], bytecode, networks = {} }: TruffleArtifact = {},
    { networkId }: Query = {},
  ) {
    let address;

    const networkIds = Object.keys(networks);

    if (networkId && networkIds.length) {
      if (!networks[networkId])
        throw new Error(`Network ID ${networkId} not found in contract`);
      ({ address } = networks[networkId]);
    } else {
      // Pick the last network (assumed to be the most recent)
      ({ address } =
        networks[parseInt(networkIds[networkIds.length - 1], 10)] || {});
    }

    return {
      abi,
      address,
      bytecode,
    };
  }
}
