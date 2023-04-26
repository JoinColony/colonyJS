import { constants, providers } from 'ethers';

// eslint-disable-next-line camelcase
import { TokenERC20__factory, TokenERC721__factory } from './contracts/static';

const { AddressZero } = constants;

// Initialize dummy ethers contracts in order to get their (typed) interfaces
// eslint-disable-next-line camelcase
export const ERC20 = TokenERC20__factory.connect(
  AddressZero,
  new providers.BaseProvider(3656691),
).interface;

// eslint-disable-next-line camelcase
export const ERC721 = TokenERC721__factory.connect(
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
