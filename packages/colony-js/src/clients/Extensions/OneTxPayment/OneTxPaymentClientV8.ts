import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { OneTxPayment } from '../../../contracts/OneTxPayment/8/OneTxPayment.js';

import { OneTxPayment__factory as OneTxPaymentFactory } from '../../../contracts/OneTxPayment/8/factories/OneTxPayment__factory.js';
import { ClientType } from '../../../constants.js';
import {
  addAugments,
  type AugmentedEstimate,
  type AugmentedOneTxPayment,
  type ValidColony,
} from './augments/commonAugments.js';

type OneTxPaymentEstimate = AugmentedEstimate<OneTxPayment>;

export interface OneTxPaymentClientV8
  extends AugmentedOneTxPayment<OneTxPayment> {
  clientVersion: 8;
  estimateGas: OneTxPaymentEstimate;
}

export default function getOneTxPaymentClient(
  colonyClient: AugmentedIColony<ValidColony>,
  address: string,
): OneTxPaymentClientV8 {
  const oneTxPaymentClient = OneTxPaymentFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as OneTxPaymentClientV8;

  oneTxPaymentClient.clientType = ClientType.OneTxPaymentClient;
  oneTxPaymentClient.clientVersion = 8;
  addAugments(oneTxPaymentClient, colonyClient);

  return oneTxPaymentClient;
}
