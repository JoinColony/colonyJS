// Always add the next TokenSupplier version here
import type { TokenSupplier as TokenSupplier1 } from './1';
import type { TokenSupplier as TokenSupplier2 } from './2';
import type { TokenSupplier as TokenSupplier3 } from './3';
import type { TokenSupplier as TokenSupplier4 } from './4';

// Always adjust to the latest factory
export { TokenSupplier__factory as TokenSupplierFactory } from './4/factories/TokenSupplier__factory';

export type TokenSupplierV1 = TokenSupplier1;
export type TokenSupplierV2 = TokenSupplier2;
export type TokenSupplierV3 = TokenSupplier3;
export type TokenSupplierV4 = TokenSupplier4;

export type AnyTokenSupplier =
  | TokenSupplier1
  | TokenSupplier2
  | TokenSupplier3
  | TokenSupplier4;
