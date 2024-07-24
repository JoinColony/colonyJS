import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { OneTxPayment } from '../../../contracts/OneTxPayment/6/OneTxPayment.js';

import { OneTxPayment__factory as OneTxPaymentFactory } from '../../../contracts/OneTxPayment/6/factories/OneTxPayment__factory.js';
import { ClientType } from '../../../constants.js';
import {
  addAugments,
  AugmentedEstimate,
  AugmentedOneTxPayment,
  ValidColony,
} from './augments/commonAugments.js';

type OneTxPaymentEstimate = AugmentedEstimate<OneTxPayment>;

export interface OneTxPaymentClientV6
  extends AugmentedOneTxPayment<OneTxPayment> {
  clientVersion: 6;
  estimateGas: OneTxPaymentEstimate;
}

export default function getOneTxPaymentClient(
  colonyClient: AugmentedIColony<ValidColony>,
  address: string,
): OneTxPaymentClientV6 {
  const oneTxPaymentClient = OneTxPaymentFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as OneTxPaymentClientV6;

  oneTxPaymentClient.clientType = ClientType.OneTxPaymentClient;
  oneTxPaymentClient.clientVersion = 6;
  addAugments(oneTxPaymentClient, colonyClient);

  return oneTxPaymentClient;
}
