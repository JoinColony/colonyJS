import { ColonyVersion } from '../../../clients/Core/exports';
import {
  assertExhaustiveSwitch,
  createContractVersionArray,
} from '../../../utils';
import { AugmentedIColony } from '../../Core/augments/commonAugments';
import { ValidColony } from './augments/commonAugments';

import getStakedExpenditureClientV1, {
  StakedExpenditureClientV1,
} from './StakedExpenditureClientV1';
import getStakedExpenditureClientV2, {
  StakedExpenditureClientV2,
} from './StakedExpenditureClientV2';
import getStakedExpenditureClientV3, {
  StakedExpenditureClientV3,
} from './StakedExpenditureClientV3';
import getStakedExpenditureClientV4, {
  StakedExpenditureClientV4,
} from './StakedExpenditureClientV4';

const STAKED_EXPENDITURE_VERSION_NEXT = 5;

/** @internal */
export const STAKED_EXPENDITURE_VERSION_LATEST =
  STAKED_EXPENDITURE_VERSION_NEXT - 1;

export { StakedExpenditureClientV1 } from './StakedExpenditureClientV1';
export { StakedExpenditureClientV2 } from './StakedExpenditureClientV2';
export { StakedExpenditureClientV3 } from './StakedExpenditureClientV3';
export { StakedExpenditureClientV4 } from './StakedExpenditureClientV4';

export type AnyStakedExpenditureClient =
  | StakedExpenditureClientV1
  | StakedExpenditureClientV2
  | StakedExpenditureClientV3
  | StakedExpenditureClientV4;

/** @internal */
export const STAKED_EXPENDITURE_VERSIONS = createContractVersionArray(
  STAKED_EXPENDITURE_VERSION_NEXT,
);
/** @internal */
export type StakedExpenditureVersion =
  typeof STAKED_EXPENDITURE_VERSIONS[number];

/** @internal */
export const stakedExpenditureIncompatibilityMap: Record<
  StakedExpenditureVersion,
  Array<ColonyVersion>
> = {
  1: [1, 2, 3],
  2: [1, 2, 3],
  3: [1, 2, 3],
  4: [1, 2, 3],
};

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
    default:
      return assertExhaustiveSwitch(
        version,
        'Could not find StakedExpenditure version',
      );
  }
};
