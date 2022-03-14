// A minimal version of the ColonyClient contract that only supports the `version` method
import { BigNumber, Contract } from 'ethers';
import { SignerOrProvider } from '../..';

interface ColonyVersionClient extends Contract {
  version(): Promise<BigNumber>;
}

const abi = [
  {
    constant: true,
    inputs: [],
    name: 'version',
    outputs: [
      {
        name: 'colonyVersion',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'pure',
    type: 'function',
  },
];

export default function getColonyVersionClient(
  address: string,
  signerOrProvider: SignerOrProvider,
): ColonyVersionClient {
  return new Contract(address, abi, signerOrProvider) as ColonyVersionClient;
}
