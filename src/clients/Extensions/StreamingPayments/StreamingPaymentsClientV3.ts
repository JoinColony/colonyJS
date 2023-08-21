import { StreamingPayments__factory as StreamingPaymentsFactory } from '../../../contracts/StreamingPayments/3/factories/StreamingPayments__factory';
import { StreamingPayments } from '../../../contracts/StreamingPayments/3';
import { AugmentedIColony } from '../../Core/augments/commonAugments';
import {
  addAugments,
  AugmentedStreamingPayments,
  ValidColony,
} from './augments/commonAugments';

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

  streamingPaymentsClient.clientVersion = 3;
  addAugments(streamingPaymentsClient, colonyClient);

  return streamingPaymentsClient;
}
