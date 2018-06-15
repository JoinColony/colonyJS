/* @flow */

import type { Query } from '../interface/ContractLoader';

type TruffleArtifact = {
  abi: Array<{}>,
  bytecode: string,
  networks: {
    [networkId: string | number]: {
      address: string,
    },
  },
};

export default function truffleTransform(
  { abi = [], bytecode, networks = {} }: TruffleArtifact = {},
  { networkId }: Query = {},
) {
  let address;

  // Some clients (like Ganache) create IDs as integers; normalise them
  const networkIds = Object.keys(networks).map(id => `${id}`);

  if (networkId && networkIds.length) {
    if (!networks[networkId])
      throw new Error(`Network ID ${networkId} not found in contract`);
    ({ address } = networks[networkId]);
  } else {
    // Pick the last network (assumed to be the most recent)
    ({ address } = networks[networkIds[networkIds.length - 1]] || {});
  }

  return {
    abi,
    address,
    bytecode,
  };
}
