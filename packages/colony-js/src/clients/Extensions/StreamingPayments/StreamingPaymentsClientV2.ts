import { StreamingPayments__factory as StreamingPaymentsFactory } from '../../../contracts/StreamingPayments/2/factories/StreamingPayments__factory.js';
import { StreamingPayments } from '../../../contracts/StreamingPayments/2/StreamingPayments.js';
import { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import {
  addAugments,
  AugmentedStreamingPayments,
  ValidColony,
} from './augments/commonAugments.js';

export interface StreamingPaymentsClientV2
  extends AugmentedStreamingPayments<StreamingPayments> {
  clientVersion: 2;
}

export default function getStreamingPaymentsClient(
  colonyClient: AugmentedIColony<ValidColony>,
  address: string,
): StreamingPaymentsClientV2 {
  const streamingPaymentsClient = StreamingPaymentsFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as StreamingPaymentsClientV2;

  streamingPaymentsClient.clientVersion = 2;
  addAugments(streamingPaymentsClient, colonyClient);

  return streamingPaymentsClient;
}
