/* @flow */

import type { ContractDefinition } from '@colony/colony-js-contract-loader';

type TruffleArtifact = {
  abi: {},
  networks: {},
};

export default function truffle({
  abi = {},
  networks = {},
}: TruffleArtifact = {}): ContractDefinition {
  const { address } = networks[Object.keys(networks)[0]] || {};
  return {
    abi,
    address,
  };
}
