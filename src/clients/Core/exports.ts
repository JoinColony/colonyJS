import { ColonyClientV1 } from './ColonyClientV1';
import { ColonyClientV2 } from './ColonyClientV2';
import { ColonyClientV3 } from './ColonyClientV3';
import { ColonyClientV4 } from './ColonyClientV4';
import { ColonyClientV5 } from './ColonyClientV5';
import { ColonyClientV6 } from './ColonyClientV6';
import { ColonyClientV7 } from './ColonyClientV7';
import { ColonyClientV8 } from './ColonyClientV8';
import { ColonyClientV9 } from './ColonyClientV9';

export { ColonyClientV1 } from './ColonyClientV1';
export { ColonyClientV2 } from './ColonyClientV2';
export { ColonyClientV3 } from './ColonyClientV3';
export { ColonyClientV4 } from './ColonyClientV4';
export { ColonyClientV5 } from './ColonyClientV5';
export { ColonyClientV6 } from './ColonyClientV6';
export { ColonyClientV7 } from './ColonyClientV7';
export { ColonyClientV8 } from './ColonyClientV8';
export { ColonyClientV9 } from './ColonyClientV9';

// FIXME: use this pattern
// import getWhitelistClientV1, {
//   WhitelistClient as WhitelistClientV1,
// } from './WhitelistClientV1';

export type AnyColonyClient =
  | ColonyClientV1
  | ColonyClientV2
  | ColonyClientV3
  | ColonyClientV4
  | ColonyClientV5
  | ColonyClientV6
  | ColonyClientV7
  | ColonyClientV8
  | ColonyClientV9;
