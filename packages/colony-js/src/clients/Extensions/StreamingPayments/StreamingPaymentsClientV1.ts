import { StreamingPayments__factory as StreamingPaymentsFactory } from '../../../contracts/StreamingPayments/1/factories/StreamingPayments__factory';
import { StreamingPayments } from '../../../contracts/StreamingPayments/1';
import { AugmentedIColony } from '../../Core/augments/commonAugments';
import {
  addAugments,
  AugmentedStreamingPayments,
  ValidColony,
} from './augments/commonAugments';

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
