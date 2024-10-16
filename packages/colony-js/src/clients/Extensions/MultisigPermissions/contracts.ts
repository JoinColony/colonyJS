// Always add the next MultisigPermissions version here
import type { MultisigPermissions as MultisigPermissions1 } from '../../../contracts/MultisigPermissions/1/index.js';
import type { MultisigPermissions as MultisigPermissions2 } from '../../../contracts/MultisigPermissions/2/index.js';

// Always adjust to the latest factory
export { MultisigPermissions__factory as MultisigPermissionsFactory } from '../../../contracts/MultisigPermissions/2/factories/MultisigPermissions__factory.js';

export type MultisigPermissionsV1 = MultisigPermissions1;
export type MultisigPermissionsV2 = MultisigPermissions2;

export type AnyMultisigPermissions =
  | MultisigPermissions1
  | MultisigPermissions2;
