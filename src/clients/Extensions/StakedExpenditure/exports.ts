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

const STAKED_EXPENDITURE_VERSION_NEXT = 2;

/** @internal */
export const STAKED_EXPENDITURE_VERSION_LATEST =
  STAKED_EXPENDITURE_VERSION_NEXT - 1;

export { StakedExpenditureClientV1 } from './StakedExpenditureClientV1';

export type AnyStakedExpenditureClient = StakedExpenditureClientV1;

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
    default:
      return assertExhaustiveSwitch(
        version,
        'Could not find StakedExpenditure version',
      );
  }
};
