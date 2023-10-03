// Always add the next Whitelist version here
import type { Whitelist as Whitelist1 } from '../../../contracts/Whitelist/1/index.js';
import type { Whitelist as Whitelist2 } from '../../../contracts/Whitelist/2/index.js';
import type { Whitelist as Whitelist3 } from '../../../contracts/Whitelist/3/index.js';
import type { Whitelist as Whitelist4 } from '../../../contracts/Whitelist/4/index.js';
import type { Whitelist as Whitelist5 } from '../../../contracts/Whitelist/5/index.js';

// Always adjust to the latest factory
export { Whitelist__factory as WhitelistFactory } from '../../../contracts/Whitelist/5/factories/Whitelist__factory.js';

export type WhitelistV1 = Whitelist1;
export type WhitelistV2 = Whitelist2;
export type WhitelistV3 = Whitelist3;
export type WhitelistV4 = Whitelist4;
export type WhitelistV5 = Whitelist5;

export type AnyWhitelist =
  | Whitelist1
  | Whitelist2
  | Whitelist3
  | Whitelist4
  | Whitelist5;
