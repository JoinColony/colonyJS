import type { StreamingPaymentsVersion } from '@colony/core';

import { assertExhaustiveSwitch } from '@colony/core/utils';

import { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import { ValidColony } from './augments/commonAugments.js';

import getStreamingPaymentsClientV4, {
  StreamingPaymentsClientV4,
} from './StreamingPaymentsClientV4.js';

export { StreamingPaymentsClientV4 } from './StreamingPaymentsClientV4.js';

export type AnyStreamingPaymentsClient = StreamingPaymentsClientV4;

/** @internal */
export const getStreamingPaymentsClient = (
  colonyClient: AugmentedIColony,
  address: string,
  version: StreamingPaymentsVersion,
): AnyStreamingPaymentsClient => {
  switch (version) {
    case 1:
      throw new Error('StreamingPayments version 1 is not supported');
    case 2:
      throw new Error('StreamingPayments version 2 is not supported');
    case 3:
      throw new Error('StreamingPayments version 3 is not supported');
    case 4:
      return getStreamingPaymentsClientV4(
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
