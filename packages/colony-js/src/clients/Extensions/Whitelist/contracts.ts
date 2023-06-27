// Always add the next Whitelist version here
import type { Whitelist as Whitelist1 } from '../../../contracts/Whitelist/1/index.js';
import type { Whitelist as Whitelist2 } from '../../../contracts/Whitelist/2/index.js';
import type { Whitelist as Whitelist3 } from '../../../contracts/Whitelist/3/index.js';

// Always adjust to the latest factory
export { Whitelist__factory as WhitelistFactory } from '../../../contracts/Whitelist/3/factories/Whitelist__factory.js';

export type WhitelistV1 = Whitelist1;
export type WhitelistV2 = Whitelist2;
export type WhitelistV3 = Whitelist3;

export type AnyWhitelist = Whitelist1 | Whitelist2 | Whitelist3;
