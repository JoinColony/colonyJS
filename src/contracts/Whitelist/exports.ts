// Always add the next Whitelist version here
import type { Whitelist as Whitelist1 } from './1';
import type { Whitelist as Whitelist2 } from './2';

// Always adjust to the latest factory
export { Whitelist__factory as WhitelistFactory } from './2/factories/Whitelist__factory';

export type WhitelistV1 = Whitelist1;
export type WhitelistV2 = Whitelist2;

export type AnyWhitelist = Whitelist1 | Whitelist2;
