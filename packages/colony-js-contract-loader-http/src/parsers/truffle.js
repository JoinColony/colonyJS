/* @flow */

import type { ContractDefinition } from '@colony/colony-js-contract-loader';

type TruffleArtifact = {
  abi: {},
  networks: {},
};

export default function truffle(artifact: TruffleArtifact): ContractDefinition {
  const { abi = {}, networks = {} } = artifact;
  const { address } = networks[Object.keys(networks)[0]] || {};
  return {
    abi,
    address,
  };
}
