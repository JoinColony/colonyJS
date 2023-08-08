import { getTokenClient, TokenClientType } from '@colony/tokens';

import type { ColonyNetwork } from '../ColonyNetwork.js';

import { ColonyToken } from './ColonyToken.js';
import { ERC20Token } from './ERC20Token.js';
import { ERC2612Token } from './ERC2612Token.js';

export type Token = ColonyToken | ERC20Token | ERC2612Token;

export { ColonyToken } from './ColonyToken.js';
export { ERC20Token } from './ERC20Token.js';
export { ERC2612Token } from './ERC2612Token.js';

/**
 * Get a properly instantiated Token contract client
 *
 * This method tries to auto-detect the type of the token under the given address
 *
 * @param colonyNetwork - A {@link ColonyNetwork} instance
 * @param address - The token's address
 *
 * @returns A Token contract client
 */
export const getToken = async (
  colonyNetwork: ColonyNetwork,
  address: string,
) => {
  const tokenClient = await getTokenClient(
    address,
    colonyNetwork.signerOrProvider,
  );
  switch (tokenClient.tokenClientType) {
    case TokenClientType.Colony: {
      return new ColonyToken(colonyNetwork, address, tokenClient);
    }
    case TokenClientType.Erc20: {
      return new ERC20Token(colonyNetwork, address, tokenClient);
    }
    case TokenClientType.Erc2612: {
      return new ERC2612Token(colonyNetwork, address, tokenClient);
    }
    default: {
      throw new Error('Your token is not supported in Colony SDK (yet).');
    }
  }
};
