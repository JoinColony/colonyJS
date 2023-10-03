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
import getStreamingPaymentsClientV3, {
  StreamingPaymentsClientV3,
} from './StreamingPaymentsClientV3.js';

export { StreamingPaymentsClientV1 } from './StreamingPaymentsClientV1.js';
export { StreamingPaymentsClientV2 } from './StreamingPaymentsClientV2.js';
export { StreamingPaymentsClientV3 } from './StreamingPaymentsClientV3.js';

export type AnyStreamingPaymentsClient =
  | StreamingPaymentsClientV1
  | StreamingPaymentsClientV2
  | StreamingPaymentsClientV3;

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
    case 3:
      return getStreamingPaymentsClientV3(
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
