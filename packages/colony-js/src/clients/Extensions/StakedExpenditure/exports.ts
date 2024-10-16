import type { StakedExpenditureVersion } from '@colony/core';

import { assertExhaustiveSwitch } from '@colony/core/utils';

import { type AugmentedIColony } from '../../Core/augments/commonAugments.js';
import { type ValidColony } from './augments/commonAugments.js';

import getStakedExpenditureClientV1 from './StakedExpenditureClientV1.js';
import getStakedExpenditureClientV2, {
  type StakedExpenditureClientV2,
} from './StakedExpenditureClientV2.js';
import getStakedExpenditureClientV3, {
  type StakedExpenditureClientV3,
} from './StakedExpenditureClientV3.js';
import getStakedExpenditureClientV4, {
  type StakedExpenditureClientV4,
} from './StakedExpenditureClientV4.js';
import getStakedExpenditureClientV5, {
  type StakedExpenditureClientV5,
} from './StakedExpenditureClientV5.js';
import getStakedExpenditureClientV6, {
  type StakedExpenditureClientV6,
} from './StakedExpenditureClientV6.js';
import getStakedExpenditureClientV7, {
  type StakedExpenditureClientV7,
} from './StakedExpenditureClientV7.js';

export type { StakedExpenditureClientV2 } from './StakedExpenditureClientV2.js';
export type { StakedExpenditureClientV3 } from './StakedExpenditureClientV3.js';
export type { StakedExpenditureClientV4 } from './StakedExpenditureClientV4.js';
export type { StakedExpenditureClientV5 } from './StakedExpenditureClientV5.js';
export type { StakedExpenditureClientV6 } from './StakedExpenditureClientV6.js';
export type { StakedExpenditureClientV7 } from './StakedExpenditureClientV7.js';

export type AnyStakedExpenditureClient =
  | StakedExpenditureClientV2
  | StakedExpenditureClientV3
  | StakedExpenditureClientV4
  | StakedExpenditureClientV5
  | StakedExpenditureClientV6
  | StakedExpenditureClientV7;

/** @internal */
export const getStakedExpenditureClient = (
  colonyClient: AugmentedIColony,
  address: string,
  version: StakedExpenditureVersion,
): AnyStakedExpenditureClient => {
  switch (version) {
    case 1:
      return getStakedExpenditureClientV1(
        colonyClient as AugmentedIColony<ValidColony>,
        address,
      );
    case 2:
      return getStakedExpenditureClientV2(
        colonyClient as AugmentedIColony<ValidColony>,
        address,
      );
    case 3:
      return getStakedExpenditureClientV3(
        colonyClient as AugmentedIColony<ValidColony>,
        address,
      );
    case 4:
      return getStakedExpenditureClientV4(
        colonyClient as AugmentedIColony<ValidColony>,
        address,
      );
    case 5:
      return getStakedExpenditureClientV5(
        colonyClient as AugmentedIColony<ValidColony>,
        address,
      );
    case 6:
      return getStakedExpenditureClientV6(
        colonyClient as AugmentedIColony<ValidColony>,
        address,
      );
    case 7:
      return getStakedExpenditureClientV7(
        colonyClient as AugmentedIColony<ValidColony>,
        address,
      );
    default:
      return assertExhaustiveSwitch(
        version,
        'Could not find StakedExpenditure version',
      );
  }
};
