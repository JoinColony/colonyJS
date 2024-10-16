import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { StreamingPayments } from '../../../contracts/StreamingPayments/6/StreamingPayments.js';

import { StreamingPayments__factory as StreamingPaymentsFactory } from '../../../contracts/StreamingPayments/6/factories/StreamingPayments__factory.js';
import { ClientType } from '../../../constants.js';
import {
  addAugments,
  type AugmentedStreamingPayments,
  type ValidColony,
} from './augments/commonAugments.js';

export interface StreamingPaymentsClientV6
  extends AugmentedStreamingPayments<StreamingPayments> {
  clientVersion: 6;
}

export default function getStreamingPaymentsClient(
  colonyClient: AugmentedIColony<ValidColony>,
  address: string,
): StreamingPaymentsClientV6 {
  const streamingPaymentsClient = StreamingPaymentsFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as StreamingPaymentsClientV6;

  streamingPaymentsClient.clientType = ClientType.StreamingPaymentsClient;
  streamingPaymentsClient.clientVersion = 6;
  addAugments(streamingPaymentsClient, colonyClient);

  return streamingPaymentsClient;
}
