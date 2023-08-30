import { ColonyVersion } from '../../../clients/Core/exports';
import {
  assertExhaustiveSwitch,
  createContractVersionArray,
} from '../../../utils';
import { AugmentedIColony } from '../../Core/augments/commonAugments';
import { ValidColony } from './augments/commonAugments';

import getStagedExpenditureClientV1, {
  StagedExpenditureClientV1,
} from './StagedExpenditureClientV1';

const STAGED_EXPENDITURE_VERSION_NEXT = 2;

/** @internal */
export const STAGED_EXPENDITURE_VERSION_LATEST =
  STAGED_EXPENDITURE_VERSION_NEXT - 1;

export { StagedExpenditureClientV1 } from './StagedExpenditureClientV1';

export type AnyStagedExpenditureClient = StagedExpenditureClientV1;

/** @internal */
export const STAGED_EXPENDITURE_VERSIONS = createContractVersionArray(
  STAGED_EXPENDITURE_VERSION_NEXT,
);
/** @internal */
export type StagedExpenditureVersion =
  typeof STAGED_EXPENDITURE_VERSIONS[number];

/** @internal */
export const stagedExpenditureIncompatibilityMap: Record<
  StagedExpenditureVersion,
  Array<ColonyVersion>
> = {
  1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
};

/** @internal */
export const getStagedExpenditureClient = (
  colonyClient: AugmentedIColony,
  address: string,
  version: StagedExpenditureVersion,
): AnyStagedExpenditureClient => {
  switch (version) {
    case 1:
      return getStagedExpenditureClientV1(
        colonyClient as AugmentedIColony<ValidColony>,
        address,
      );
    default:
      return assertExhaustiveSwitch(
        version,
        'Could not find StagedExpenditure version',
      );
  }
};
