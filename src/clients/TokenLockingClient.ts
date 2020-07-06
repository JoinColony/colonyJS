import { Signer } from 'ethers';
import { Provider } from 'ethers/providers';

import { ClientType } from '../constants';
import { TokenLockingFactory } from '../contracts/4/TokenLockingFactory';
import { TokenLocking } from '../contracts/4/TokenLocking';

export interface ExtendedTokenLocking extends TokenLocking {
  clientType: ClientType.TokenLockingClient;
}

const getTokenLockingClient = (
  address: string,
  signerOrProvider: Signer | Provider,
): ExtendedTokenLocking => {
  const tokenLockingClient = TokenLockingFactory.connect(
    address,
    signerOrProvider,
  ) as ExtendedTokenLocking;

  tokenLockingClient.clientType = ClientType.TokenLockingClient;

  return tokenLockingClient;
};

export default getTokenLockingClient;