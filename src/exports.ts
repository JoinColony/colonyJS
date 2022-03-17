// exports used internally. Do not expose to the outside world

// Always adjust to the latest version here
import * as MetaTxToken from './abis/__develop__/MetaTxToken.json';
import * as TokenAuthority from './abis/elwss3/TokenAuthority.json';
import * as VestingSimple from './abis/elwss3/VestingSimple.json';
import * as WrappedToken from './abis/elwss3/WrappedToken.json';

// These ones pretty much stay the same all the time
export {
  IColonyNetwork,
  IColonyNetwork__factory as IColonyNetworkFactory,
  Token,
  Token__factory as TokenFactory,
  TokenERC20 as TokenErc20,
  TokenERC20__factory as TokenErc20Factory,
  TokenSAI as TokenSai,
  TokenSAI__factory as TokenSaiFactory,
  TokenLocking,
  TokenLocking__factory as TokenLockingFactory,
  Utils,
  Utils__factory as UtilsFactory,
} from './contracts';

export const abis = {
  MetaTxToken,
  TokenAuthority,
  VestingSimple,
  WrappedToken,
};
