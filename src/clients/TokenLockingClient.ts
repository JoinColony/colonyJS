import { Signer } from 'ethers';
import { Provider } from 'ethers/providers';

import { ClientType } from '../constants';
import { TokenLockingFactory } from '../contracts/5/TokenLockingFactory';
import { TokenLocking } from '../contracts/5/TokenLocking';

export interface TokenLockingClient extends TokenLocking {
  clientType: ClientType.TokenLockingClient;
}

const getTokenLockingClient = (
  address: string,
  signerOrProvider: Signer | Provider,
): TokenLockingClient => {
  const tokenLockingClient = TokenLockingFactory.connect(
    address,
    signerOrProvider,
  ) as TokenLockingClient;

  tokenLockingClient.clientType = ClientType.TokenLockingClient;

  return tokenLockingClient;
};

export default getTokenLockingClient;
