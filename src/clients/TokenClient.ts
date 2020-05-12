import { Signer } from 'ethers';
import { Provider } from 'ethers/providers';

import { TokenFactory } from '../contracts/Token/TokenFactory';
import { Token } from '../contracts/Token/Token';

const getTokenClient = async (
  address: string,
  signerOrProvider: Signer | Provider,
): Promise<Token> => {
  return TokenFactory.connect(address, signerOrProvider);
};

export default getTokenClient;
