import type { MultisigPermissionsVersion } from '@colony/core';

import { assertExhaustiveSwitch } from '@colony/core/utils';

import { type AugmentedIColony } from '../../Core/augments/commonAugments.js';
import { type ValidColony } from './augments/commonAugments.js';

import getMultisigPermissionsClientV1, {
  type MultisigPermissionsClientV1,
} from './MultisigPermissionsClientV1.js';

export type { MultisigPermissionsClientV1 } from './MultisigPermissionsClientV1.js';

export type AnyMultisigPermissionsClient = MultisigPermissionsClientV1;

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
    default:
      return assertExhaustiveSwitch(
        version,
        'Could not find MultisigPermissions version',
      );
  }
};
