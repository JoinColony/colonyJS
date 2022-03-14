// exports used internally. Do not expose to the outside world

// Always adjust to the latest version here
import * as MetaTxToken from './abis/__develop__/MetaTxToken.json';
import * as TokenAuthority from './abis/elwss3/TokenAuthority.json';
import * as VestingSimple from './abis/elwss3/VestingSimple.json';
import * as WrappedToken from './abis/elwss3/WrappedToken.json';

// Always add the next colony version here
import type { IColony as IColony1 } from './contracts/IColony/1';
import type { IColony as IColony2 } from './contracts/IColony/2';
import type { IColony as IColony3 } from './contracts/IColony/3';
import type { IColony as IColony4 } from './contracts/IColony/4';
import type { IColony as IColony5 } from './contracts/IColony/5';
import type { IColony as IColony6 } from './contracts/IColony/6';
import type { IColony as IColony7 } from './contracts/IColony/7';
import type { IColony as IColony8 } from './contracts/IColony/8';
import type { IColony as IColony9 } from './contracts/IColony/9';

export type IColonyV1 = IColony1;
export type IColonyV2 = IColony2;
export type IColonyV3 = IColony3;
export type IColonyV4 = IColony4;
export type IColonyV5 = IColony5;
export type IColonyV6 = IColony6;
export type IColonyV7 = IColony7;
export type IColonyV8 = IColony8;
export type IColonyV9 = IColony9;

export type AnyIColony =
  | IColony1
  | IColony2
  | IColony3
  | IColony4
  | IColony5
  | IColony6
  | IColony7
  | IColony8
  | IColony9;

// Always adjust to the latest IColonyFactory
export { IColony__factory as IColonyFactory } from './contracts/IColony/9/factories/IColony__factory';

// These ones pretty much stay the same all the time
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
