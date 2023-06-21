import type { StreamingPaymentsVersion } from '@colony/core';

import { assertExhaustiveSwitch } from '@colony/core/utils';

import { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import { ValidColony } from './augments/commonAugments.js';

import getStreamingPaymentsClientV1, {
  StreamingPaymentsClientV1,
} from './StreamingPaymentsClientV1.js';
import getStreamingPaymentsClientV2, {
  StreamingPaymentsClientV2,
} from './StreamingPaymentsClientV2.js';

export { StreamingPaymentsClientV1 } from './StreamingPaymentsClientV1.js';
export { StreamingPaymentsClientV2 } from './StreamingPaymentsClientV2.js';

export type AnyStreamingPaymentsClient =
  | StreamingPaymentsClientV1
  | StreamingPaymentsClientV2;

/** @internal */
export const getStreamingPaymentsClient = (
  colonyClient: AugmentedIColony,
  address: string,
  version: StreamingPaymentsVersion,
): AnyStreamingPaymentsClient => {
  switch (version) {
    case 1:
      return getStreamingPaymentsClientV1(
        colonyClient as AugmentedIColony<ValidColony>,
        address,
      );
    case 2:
      return getStreamingPaymentsClientV2(
        colonyClient as AugmentedIColony<ValidColony>,
        address,
      );
    default:
      return assertExhaustiveSwitch(
        version,
        'Could not find StreamingPayments version',
      );
  }
};
