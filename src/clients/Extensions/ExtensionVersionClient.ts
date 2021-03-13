// A minimal version of the Colony Extension contract that only supports the `version` method

import { Contract, Signer } from 'ethers';
import { Provider } from 'ethers/providers';

import { BigNumber } from 'ethers/utils';

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
  signerOrProvider: Signer | Provider,
): ExtensionVersionClient {
  return new Contract(address, abi, signerOrProvider) as ExtensionVersionClient;
}
