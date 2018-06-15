/* @flow */

type TruffleArtifact = {
  abi: Array<{}>,
  bytecode: string,
  networks: {
    [networkId: number]: {
      address: string,
    },
  },
};

export default function truffleTransform({
  abi = [],
  bytecode,
  networks = {},
}: TruffleArtifact = {}) {
  const networkIds = Object.keys(networks);
  // Pick the last network (assumed to be the most recent)
  const { address } =
    networks[parseInt(networkIds[networkIds.length - 1], 10)] || {};

  return {
    abi,
    address,
    bytecode,
  };
}
