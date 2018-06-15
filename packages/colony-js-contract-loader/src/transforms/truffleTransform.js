/* @flow */

import type { Query } from '../interface/ContractLoader';

type TruffleArtifact = {
  abi: Array<{}>,
  bytecode: string,
  networks: {
    [network: string | number]: {
      address: string,
    },
  },
};

export default function truffleTransform(
  { abi = [], bytecode, networks = {} }: TruffleArtifact = {},
  { network }: Query = {},
) {
  let address;

  // Some clients (like Ganache) create IDs as integers; normalise them
  const networkKeys = Object.keys(networks).map(id => `${id}`);

  if (network && networkKeys.length) {
    if (!networks[network])
      throw new Error(`Network ID ${network} not found in contract`);
    ({ address } = networks[network]);
  } else {
    // Pick the last network (assumed to be the most recent)
    ({ address } = networks[networkKeys[networkKeys.length - 1]] || {});
  }

  return {
    abi,
    address,
    bytecode,
  };
}
