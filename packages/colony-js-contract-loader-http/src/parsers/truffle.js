/* @flow */

import type { ContractDefinition } from '@colony/colony-js-contract-loader';

type TruffleArtifact = {
  abi: Array<{}>,
  bytecode: string,
  networks: {
    [networkId: number]: {
      address: string,
    },
  },
};

export default function truffle(
  { abi = [], bytecode, networks = {} }: TruffleArtifact = {},
  { networkId }: { networkId: number } = {},
): ContractDefinition {
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
