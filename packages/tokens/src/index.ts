import { constants, providers } from 'ethers';

import {
  TokenERC20__factory as TokenERC20Factory,
  TokenERC2612__factory as TokenERC2612Factory,
  TokenERC721__factory as TokenERC721Factory,
} from './contracts/static';

const { AddressZero } = constants;

// Initialize dummy ethers contracts in order to get their (typed) interfaces
export const ERC20 = TokenERC20Factory.connect(
  AddressZero,
  new providers.BaseProvider(3656691),
).interface;

export const ERC721 = TokenERC721Factory.connect(
  AddressZero,
  new providers.BaseProvider(3656691),
).interface;

export const ERC2612 = TokenERC2612Factory.connect(
  AddressZero,
  new providers.BaseProvider(3656691),
).interface;

// Some nice aliases for the important token factories
export { MetaTxToken__factory as ColonyTokenFactory } from './contracts';
export type { MetaTxToken as ColonyToken } from './contracts';

export { TokenERC20__factory as ERC20TokenFactory } from './contracts/static';
export type { TokenERC20 as ERC20Token } from './contracts/static';

export { TokenERC2612__factory as ERC2612TokenFactory } from './contracts/static';
export type { TokenERC2612 as ERC2612Token } from './contracts/static';

export * from './contracts';

export { default as getTokenClient } from './clients/TokenClient';
export type {
  LegacyColonyTokenClient,
  TokenClient,
  ColonyTokenClient,
  Erc20TokenClient,
  Erc2612TokenClient,
} from './clients/TokenClient';

export { default as getTokenLockingClient } from './clients/TokenLockingClient';
export type { TokenLockingClient } from './clients/TokenLockingClient';

export { ClientType, TokenClientType } from './constants';
