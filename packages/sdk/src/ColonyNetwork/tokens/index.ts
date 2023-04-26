import { getTokenClient, TokenClientType } from '@colony/tokens';

import { ColonyToken } from './ColonyToken';
import { ERC20Token } from './ERC20Token';
import { ERC2612Token } from './ERC2612Token';
import { ColonyNetwork } from '../ColonyNetwork';

export type Token = ColonyToken | ERC20Token | ERC2612Token;

export { ColonyToken } from './ColonyToken';
export { ERC20Token } from './ERC20Token';
export { ERC2612Token } from './ERC2612Token';

// FIXME: docs
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
      return new ColonyToken(colonyNetwork, tokenClient);
    }
    case TokenClientType.Erc20: {
      return new ERC20Token(colonyNetwork, tokenClient);
    }
    case TokenClientType.Erc2612: {
      return new ERC2612Token(colonyNetwork, tokenClient);
    }
    default: {
      throw new Error('Your token is not supported in Colony SDK (yet).');
    }
  }
};
