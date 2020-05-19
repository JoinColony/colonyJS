import { Signer } from 'ethers';
import { Provider } from 'ethers/providers';

import { ClientType } from '../constants';
import { TokenFactory } from '../contracts/1/TokenFactory';
import { Token } from '../contracts/1/Token';

export interface TokenInfo {
  name: string;
  symbol: string;
  decimals: number;
}

export interface ExtendedToken extends Token {
  clientType: ClientType.TokenClient;

  getTokenInfo(): Promise<TokenInfo>;
}

const getTokenClient = (
  address: string,
  signerOrProvider: Signer | Provider,
): ExtendedToken => {
  const tokenClient = TokenFactory.connect(
    address,
    signerOrProvider,
  ) as ExtendedToken;

  tokenClient.clientType = ClientType.TokenClient;

  tokenClient.getTokenInfo = async (): Promise<TokenInfo> => {
    const name = await tokenClient.name();
    const symbol = await tokenClient.symbol();
    const decimals = await tokenClient.decimals();
    return {
      name,
      symbol,
      decimals,
    };
  };

  return tokenClient;
};

export default getTokenClient;
