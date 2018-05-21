/* @flow */

import type { Transform } from '../../colonyJS-contract-loader';

export type ConstructorArgs = {
  endpoint: string,
  transform: Transform,
};

export type TruffleArtifact = {
  abi: Array<{}>,
  bytecode: string,
  networks: {
    [networkId: number]: {
      address: string,
    },
  },
};
