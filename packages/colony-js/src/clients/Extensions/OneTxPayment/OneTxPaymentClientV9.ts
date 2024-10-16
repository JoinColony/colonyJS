import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { OneTxPayment } from '../../../contracts/OneTxPayment/9/OneTxPayment.js';

import { OneTxPayment__factory as OneTxPaymentFactory } from '../../../contracts/OneTxPayment/9/factories/OneTxPayment__factory.js';
import { ClientType } from '../../../constants.js';
import {
  addAugments,
  type AugmentedEstimate,
  type AugmentedOneTxPayment,
  type ValidColony,
} from './augments/commonAugments.js';

type OneTxPaymentEstimate = AugmentedEstimate<OneTxPayment>;

export interface OneTxPaymentClientV9
  extends AugmentedOneTxPayment<OneTxPayment> {
  clientVersion: 9;
  estimateGas: OneTxPaymentEstimate;
}

export default function getOneTxPaymentClient(
  colonyClient: AugmentedIColony<ValidColony>,
  address: string,
): OneTxPaymentClientV9 {
  const oneTxPaymentClient = OneTxPaymentFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as OneTxPaymentClientV9;

  oneTxPaymentClient.clientType = ClientType.OneTxPaymentClient;
  oneTxPaymentClient.clientVersion = 9;
  addAugments(oneTxPaymentClient, colonyClient);

  return oneTxPaymentClient;
}
