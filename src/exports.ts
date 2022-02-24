/*
 * Always adjust to the latest version here
 */
import * as MetaTxToken from './abis/__develop__/MetaTxToken.json';
import * as TokenAuthority from './abis/elwss3/TokenAuthority.json';
import * as VestingSimple from './abis/elwss3/VestingSimple.json';
import * as WrappedToken from './abis/elwss3/WrappedToken.json';

export { IColony__factory as IColonyFactory } from './contracts/IColony/9/factories/IColony__factory';

export { IColonyNetwork__factory as IColonyNetworkFactory } from './contracts/factories/IColonyNetwork__factory';
export { IColonyNetwork } from './contracts/IColonyNetwork';
export { Token__factory as TokenFactory } from './contracts/factories/Token__factory';
export { Token } from './contracts/Token';
export { TokenERC20__factory as TokenErc20Factory } from './contracts/factories/TokenERC20__factory';
export { TokenERC20 as TokenErc20 } from './contracts/TokenERC20';
export { TokenSAI__factory as TokenSaiFactory } from './contracts/factories/TokenSAI__factory';
export { TokenSAI as TokenSai } from './contracts/TokenSAI';
export { TokenLocking__factory as TokenLockingFactory } from './contracts/factories/TokenLocking__factory';
export { TokenLocking } from './contracts/TokenLocking';

export const abis = {
  MetaTxToken,
  TokenAuthority,
  VestingSimple,
  WrappedToken,
};
