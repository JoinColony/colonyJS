import { Signer } from 'ethers';
import { Provider } from 'ethers/providers';

import { ClientType } from '../constants';
import { TokenLocking__factory as TokenLockingFactory } from '../contracts/6/factories/TokenLocking__factory';
import { TokenLocking } from '../contracts/6/TokenLocking';

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
