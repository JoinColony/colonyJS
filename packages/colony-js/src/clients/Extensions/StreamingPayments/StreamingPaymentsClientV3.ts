import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { StreamingPayments } from '../../../contracts/StreamingPayments/3/StreamingPayments.js';

import { StreamingPayments__factory as StreamingPaymentsFactory } from '../../../contracts/StreamingPayments/3/factories/StreamingPayments__factory.js';
import { ClientType } from '../../../constants.js';
import {
  addAugments,
  AugmentedStreamingPayments,
  ValidColony,
} from './augments/commonAugments.js';

export interface StreamingPaymentsClientV3
  extends AugmentedStreamingPayments<StreamingPayments> {
  clientVersion: 3;
}

export default function getStreamingPaymentsClient(
  colonyClient: AugmentedIColony<ValidColony>,
  address: string,
): StreamingPaymentsClientV3 {
  const streamingPaymentsClient = StreamingPaymentsFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as StreamingPaymentsClientV3;

  streamingPaymentsClient.clientType = ClientType.StreamingPaymentsClient;
  streamingPaymentsClient.clientVersion = 3;
  addAugments(streamingPaymentsClient, colonyClient);

  return streamingPaymentsClient;
}
