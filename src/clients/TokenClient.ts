import { utils } from 'ethers';

import {
  TokenFactory,
  Token,
  TokenErc20Factory,
  TokenErc20,
  TokenSaiFactory,
  TokenSai,
} from '../exports';
import { ClientType, SignerOrProvider, TokenClientType } from '../types';

const { getAddress, isHexString, parseBytes32String } = utils;

// Token addresses to identify tokens that need special treatment
const tokenAddresses = {
  SAI: '0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359',
};

const isSai = (address: string): boolean =>
  getAddress(address) === tokenAddresses.SAI;

export interface TokenInfo {
  name: string;
  symbol: string;
  decimals: number;
}

/** The TokenClient is a good client that does awesome things */
export interface ColonyTokenClient extends Token {
  clientType: ClientType.TokenClient;
  tokenClientType: TokenClientType.Colony;

  getTokenInfo(): Promise<TokenInfo>;
}

export interface Erc20TokenClient extends TokenErc20 {
  clientType: ClientType.TokenClient;
  tokenClientType: TokenClientType.Erc20;

  getTokenInfo(): Promise<TokenInfo>;
}

export interface DaiTokenClient extends TokenSai {
  clientType: ClientType.TokenClient;
  tokenClientType: TokenClientType.Sai;

  getTokenInfo(): Promise<TokenInfo>;
}

export type TokenClient = ColonyTokenClient | Erc20TokenClient | DaiTokenClient;

const getTokenClient = async (
  address: string,
  signerOrProvider: SignerOrProvider,
): Promise<TokenClient> => {
  let tokenClient: TokenClient;
  let isColonyToken = false;

  tokenClient = TokenFactory.connect(
    address,
    signerOrProvider,
  ) as ColonyTokenClient;

  try {
    await tokenClient.totalSupply();
  } catch (err) {
    throw new Error(
      `Token is probably not a valid ERC20 token, got ${
        (err as Error).message
      }`,
    );
  }

  // Colony tokens have the `locked()` method. We assume that when it exists on
  // the contract we have a ColonyToken 🦆. This might not be true though, so can't rely
  // on this 100% when trying to call contract methods
  try {
    await tokenClient.locked();
    isColonyToken = true;
  } catch {
    isColonyToken = false;
  }

  if (isColonyToken) {
    tokenClient.tokenClientType = TokenClientType.Colony;
  } else if (isSai(address)) {
    tokenClient = TokenSaiFactory.connect(
      address,
      signerOrProvider,
    ) as DaiTokenClient;

    tokenClient.tokenClientType = TokenClientType.Sai;
  } else {
    tokenClient = TokenErc20Factory.connect(
      address,
      signerOrProvider,
    ) as Erc20TokenClient;

    tokenClient.tokenClientType = TokenClientType.Erc20;
  }

  tokenClient.clientType = ClientType.TokenClient;

  tokenClient.getTokenInfo = async (): Promise<TokenInfo> => {
    let name = await tokenClient.name();
    // Special case for contracts with bytes32 strings (I'm looking at you, DAI)
    if (isHexString(name)) {
      name = parseBytes32String(name);
    }
    let symbol = await tokenClient.symbol();
    if (isHexString(symbol)) {
      symbol = parseBytes32String(symbol);
    }
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
