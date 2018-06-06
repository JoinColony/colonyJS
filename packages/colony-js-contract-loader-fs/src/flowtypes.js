/* @flow */

import type { Transform } from '@colony/colony-js-contract-loader';

export type ConstructorArgs = {
  contractDir: string,
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
