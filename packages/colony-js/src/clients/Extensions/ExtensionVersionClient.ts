// A minimal version of the Colony Extension contract that only supports the `version` method

import type { SignerOrProvider } from '@colony/core';

import { Contract, type BigNumber } from 'ethers';

interface ExtensionVersionClient extends Contract {
  version(): Promise<BigNumber>;
}

const abi = [
  {
    inputs: [],
    name: 'version',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
];

export default function getExtensionVersionClient(
  address: string,
  signerOrProvider: SignerOrProvider,
): ExtensionVersionClient {
  return new Contract(address, abi, signerOrProvider) as ExtensionVersionClient;
}
