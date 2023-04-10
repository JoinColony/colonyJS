import { ColonyVersion } from '../../../clients/Core/exports';
import {
  assertExhaustiveSwitch,
  createContractVersionArray,
} from '../../../utils';
import { AugmentedIColony } from '../../Core/augments/commonAugments';
import { ValidColony } from './augments/commonAugments';

import getStreamingPaymentsClientV1, {
  StreamingPaymentsClientV1,
} from './StreamingPaymentsClientV1';
import getStreamingPaymentsClientV2, {
  StreamingPaymentsClientV2,
} from './StreamingPaymentsClientV2';

const STREAMING_PAYMENTS_VERSION_NEXT = 3;

/** @internal */
export const STREAMING_PAYMENTS_VERSION_LATEST =
  STREAMING_PAYMENTS_VERSION_NEXT - 1;

export { StreamingPaymentsClientV1 } from './StreamingPaymentsClientV1';
export { StreamingPaymentsClientV2 } from './StreamingPaymentsClientV2';

export type AnyStreamingPaymentsClient =
  | StreamingPaymentsClientV1
  | StreamingPaymentsClientV2;

/** @internal */
export const STREAMING_PAYMENTS_VERSIONS = createContractVersionArray(
  STREAMING_PAYMENTS_VERSION_NEXT,
);
/** @internal */
export type StreamingPaymentsVersion =
  typeof STREAMING_PAYMENTS_VERSIONS[number];

/** @internal */
export const streamingPaymentsIncompatibilityMap: Record<
  StreamingPaymentsVersion,
  Array<ColonyVersion>
> = {
  1: [1, 2, 3],
  2: [1, 2, 3],
};

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
