import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { StreamingPayments } from '../../../contracts/StreamingPayments/5/StreamingPayments.js';

import { StreamingPayments__factory as StreamingPaymentsFactory } from '../../../contracts/StreamingPayments/5/factories/StreamingPayments__factory.js';
import { ClientType } from '../../../constants.js';
import {
  addAugments,
  type AugmentedStreamingPayments,
  type ValidColony,
} from './augments/commonAugments.js';

export interface StreamingPaymentsClientV5
  extends AugmentedStreamingPayments<StreamingPayments> {
  clientVersion: 5;
}

export default function getStreamingPaymentsClient(
  colonyClient: AugmentedIColony<ValidColony>,
  address: string,
): StreamingPaymentsClientV5 {
  const streamingPaymentsClient = StreamingPaymentsFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as StreamingPaymentsClientV5;

  streamingPaymentsClient.clientType = ClientType.StreamingPaymentsClient;
  streamingPaymentsClient.clientVersion = 5;
  addAugments(streamingPaymentsClient, colonyClient);

  return streamingPaymentsClient;
}
