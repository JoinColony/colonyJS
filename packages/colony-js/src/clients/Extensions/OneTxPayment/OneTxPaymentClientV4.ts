import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { OneTxPayment } from '../../../contracts/OneTxPayment/4/OneTxPayment.js';

import { OneTxPayment__factory as OneTxPaymentFactory } from '../../../contracts/OneTxPayment/4/factories/OneTxPayment__factory.js';
import { ClientType } from '../../../constants.js';
import {
  addAugments,
  AugmentedEstimate,
  AugmentedOneTxPayment,
} from './augments/commonAugments.js';

type OneTxPaymentEstimate = AugmentedEstimate<OneTxPayment>;

export interface OneTxPaymentClientV4
  extends AugmentedOneTxPayment<OneTxPayment> {
  clientVersion: 4;
  estimateGas: OneTxPaymentEstimate;
}

export default function getOneTxPaymentClient(
  colonyClient: AugmentedIColony,
  address: string,
): OneTxPaymentClientV4 {
  const oneTxPaymentClient = OneTxPaymentFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as OneTxPaymentClientV4;

  oneTxPaymentClient.clientType = ClientType.OneTxPaymentClient;
  oneTxPaymentClient.clientVersion = 4;
  addAugments(oneTxPaymentClient, colonyClient);

  return oneTxPaymentClient;
}
