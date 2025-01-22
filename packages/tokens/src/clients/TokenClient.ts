import type { SignerOrProvider } from '@colony/core';

import { constants } from 'ethers';

import { ClientType, TokenClientType } from '../constants.js';
import {
  MetaTxToken__factory as MetaTxTokenFactory,
  type MetaTxToken,
} from '../contracts/index.js';
import {
  TokenERC20__factory as TokenERC20Factory,
  type TokenERC20,
  TokenERC2612__factory as TokenERC2612Factory,
  type TokenERC2612,
} from '../contracts/static/index.js';

const { AddressZero } = constants;

/** A ColonyToken has special abilities that go beyond the capabilities of an ERC20 token */
export interface ColonyTokenClient extends MetaTxToken {
  clientType: ClientType.TokenClient;
  tokenClientType: TokenClientType.Colony;
}

/** A standard ERC20 token */
export interface Erc20TokenClient extends TokenERC20 {
  clientType: ClientType.TokenClient;
  tokenClientType: TokenClientType.Erc20;
}

export interface Erc2612TokenClient extends TokenERC2612 {
  clientType: ClientType.TokenClient;
  tokenClientType: TokenClientType.Erc2612;
}

export type TokenClient =
  | ColonyTokenClient
  | Erc20TokenClient
  | Erc2612TokenClient;

async function checkTokenAuthorityCompatibility(
  tokenClient: ColonyTokenClient,
): Promise<void> {
  try {
    await tokenClient.authority();
  } catch (e) {
    throw new Error('Token can not be assigned a TokenAuthority');
  }
}

const getTokenClient = async (
  address: string,
  signerOrProvider: SignerOrProvider,
): Promise<TokenClient> => {
  let tokenClient: TokenClient;
  let isColonyToken = true;
  let isEip2612Token = true;

  tokenClient = MetaTxTokenFactory.connect(
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

  // Colony tokens have the `locked()` and `authority()` methods. We assume that when it exists on
  // the contract we have a ColonyToken 🦆. This might not be true though, so can't rely
  // on this 100% when trying to call contract methods
  try {
    await tokenClient.locked();
    await checkTokenAuthorityCompatibility(tokenClient);
  } catch {
    isColonyToken = false;
  }

  try {
    // NOTE: Casting will be unnecessary when MetaTxToken supports "nonces"
    await (tokenClient as unknown as Erc2612TokenClient).nonces(AddressZero);
  } catch {
    isEip2612Token = false;
  }

  // NOTE: The following is horrible. But that's just how things are with tokens rn.
  if (isColonyToken) {
    tokenClient.tokenClientType = TokenClientType.Colony;
  } else if (isEip2612Token) {
    tokenClient = TokenERC2612Factory.connect(
      address,
      signerOrProvider,
    ) as Erc2612TokenClient;

    tokenClient.tokenClientType = TokenClientType.Erc2612;
  } else {
    tokenClient = TokenERC20Factory.connect(
      address,
      signerOrProvider,
    ) as Erc20TokenClient;

    tokenClient.tokenClientType = TokenClientType.Erc20;
  }

  tokenClient.clientType = ClientType.TokenClient;

  return tokenClient;
};

export default getTokenClient;
