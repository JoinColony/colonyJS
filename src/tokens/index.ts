import { constants, providers } from 'ethers';

// eslint-disable-next-line camelcase
import { TokenERC20__factory, TokenERC721__factory } from './contracts';

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

export { TokenERC20__factory as ERC20TokenFactory } from './contracts';
export type { TokenERC20 as ERC20Token } from './contracts';

export * from './contracts';