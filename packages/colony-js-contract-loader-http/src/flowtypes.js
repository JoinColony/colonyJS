/* @flow */

import type { Parser } from '@colony/colony-js-contract-loader';

export type ConstructorArgs = {
  endpoint: string,
  parse: Parser,
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
