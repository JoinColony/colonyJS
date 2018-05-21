/* @flow */

import type { Query } from '../../../colonyJS-contract-loader';

import ContractHttpLoader from './ContractHttpLoader';

import type { TruffleArtifact, ConstructorArgs } from '../flowtypes';

const DEFAULT_ENDPOINT =
  'http://127.0.0.1:3030/contracts?name=%%NAME%%&address=%%ADDRESS%%&version=%%VERSION%%'; // eslint-disable-line max-len

function trufflepigTransform(
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

export default class TrufflepigLoader extends ContractHttpLoader {
  constructor({
    transform = trufflepigTransform,
    endpoint = DEFAULT_ENDPOINT,
    ...rest
  }: ConstructorArgs = {}) {
    super({ transform, endpoint, ...rest });
  }
}
