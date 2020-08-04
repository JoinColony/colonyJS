import { Signer } from 'ethers';
import { Provider } from 'ethers/providers';
import { getAddress, isHexString, parseBytes32String } from 'ethers/utils';

import { ClientType, TokenClientType, tokenAddresses } from '../constants';
import { TokenFactory } from '../contracts/4/TokenFactory';
import { Token } from '../contracts/4/Token';
import { TokenErc20Factory } from '../contracts/4/TokenErc20Factory';
import { TokenErc20 } from '../contracts/4/TokenErc20';
import { TokenSaiFactory } from '../contracts/4/TokenSaiFactory';
import { TokenSai } from '../contracts/4/TokenSai';

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
  tokenClientType: TokenClientType.Dai;

  getTokenInfo(): Promise<TokenInfo>;
}

export type TokenClient = ColonyTokenClient | Erc20TokenClient | DaiTokenClient;

const getTokenClient = async (
  address: string,
  signerOrProvider: Signer | Provider,
): Promise<TokenClient> => {
  let tokenClient: TokenClient;
  let isColonyToken = false;

  tokenClient = TokenFactory.connect(
    address,
    signerOrProvider,
  ) as ColonyTokenClient;

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

    tokenClient.tokenClientType = TokenClientType.Dai;
  } else {
    tokenClient = TokenErc20Factory.connect(
      address,
      signerOrProvider,
    ) as Erc20TokenClient;

    tokenClient.tokenClientType = TokenClientType.Erc20;
  }

  // Before we go, let's check if this resembles a valid ERC20 token, for good measure
  try {
    await tokenClient.estimate.transfer(address, 0);
  } catch (err) {
    throw new Error(`Token is probably not a valid ERC20 token, got ${err}`);
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
