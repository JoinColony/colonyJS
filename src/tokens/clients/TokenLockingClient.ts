import type { SignerOrProvider } from '../../types';
import { ClientType } from '../../constants';

import {
  TokenLocking,
  TokenLocking__factory as TokenLockingFactory,
} from '../contracts';

export interface TokenLockingClient extends TokenLocking {
  clientType: ClientType.TokenLockingClient;
}

const getTokenLockingClient = (
  address: string,
  signerOrProvider: SignerOrProvider,
): TokenLockingClient => {
  const tokenLockingClient = TokenLockingFactory.connect(
    address,
    signerOrProvider,
  ) as TokenLockingClient;

  tokenLockingClient.clientType = ClientType.TokenLockingClient;

  return tokenLockingClient;
};

export default getTokenLockingClient;
