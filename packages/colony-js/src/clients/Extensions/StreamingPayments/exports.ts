import type { StreamingPaymentsVersion } from '@colony/core';

import { assertExhaustiveSwitch } from '@colony/core/utils';

import { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import { ValidColony } from './augments/commonAugments.js';

import getStreamingPaymentsClientV5, {
  StreamingPaymentsClientV5,
} from './StreamingPaymentsClientV5.js';

export { StreamingPaymentsClientV5 } from './StreamingPaymentsClientV5.js';

export type AnyStreamingPaymentsClient = StreamingPaymentsClientV5;

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
      throw new Error('StreamingPayments version 4 is not supported');
    case 5:
      return getStreamingPaymentsClientV5(
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
