import type { MultisigPermissionsVersion } from '@colony/core';

import { assertExhaustiveSwitch } from '@colony/core/utils';

import { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import { ValidColony } from './augments/commonAugments.js';

import getMultisigPermissionsClientV1, {
  MultisigPermissionsClientV1,
} from './MultisigPermissionsClientV1.js';

import getMultisigPermissionsClientV2, {
  MultisigPermissionsClientV2,
} from './MultisigPermissionsClientV2.js';

export { MultisigPermissionsClientV1 } from './MultisigPermissionsClientV1.js';
export { MultisigPermissionsClientV2 } from './MultisigPermissionsClientV2.js';

export type AnyMultisigPermissionsClient =
  | MultisigPermissionsClientV1
  | MultisigPermissionsClientV2;

/** @internal */
export const getMultisigPermissionsClient = (
  colonyClient: AugmentedIColony,
  address: string,
  version: MultisigPermissionsVersion,
): AnyMultisigPermissionsClient => {
  switch (version) {
    case 1:
      return getMultisigPermissionsClientV1(
        colonyClient as AugmentedIColony<ValidColony>,
        address,
      );
    case 2:
      return getMultisigPermissionsClientV2(
        colonyClient as AugmentedIColony<ValidColony>,
        address,
      );
    default:
      return assertExhaustiveSwitch(
        version,
        'Could not find MultisigPermissions version',
      );
  }
};
