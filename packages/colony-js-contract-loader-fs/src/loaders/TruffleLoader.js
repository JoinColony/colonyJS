/* @flow */

import type { Query } from '@colony/colony-js-contract-loader';

import FSLoader from './FSLoader';

import type { TruffleArtifact, ConstructorArgs } from '../flowtypes';

function truffleTransform(
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

export default class TruffleLoader extends FSLoader {
  constructor({ contractDir }: ConstructorArgs = {}) {
    super({ transform: truffleTransform, contractDir });
  }
}
