import { StreamingPayments__factory as StreamingPaymentsFactory } from '../../../contracts/StreamingPayments/1/factories/StreamingPayments__factory.js';
import { StreamingPayments } from '../../../contracts/StreamingPayments/1/StreamingPayments.js';
import { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import {
  addAugments,
  AugmentedStreamingPayments,
  ValidColony,
} from './augments/commonAugments.js';

export interface StreamingPaymentsClientV1
  extends AugmentedStreamingPayments<StreamingPayments> {
  clientVersion: 1;
}

export default function getStreamingPaymentsClient(
  colonyClient: AugmentedIColony<ValidColony>,
  address: string,
): StreamingPaymentsClientV1 {
  const streamingPaymentsClient = StreamingPaymentsFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as StreamingPaymentsClientV1;

  streamingPaymentsClient.clientVersion = 1;
  addAugments(streamingPaymentsClient, colonyClient);

  return streamingPaymentsClient;
}
