import { ClientType } from '../../../constants.js';
import { OneTxPayment__factory as OneTxPaymentFactory } from '../../../contracts/OneTxPayment/1/factories/OneTxPayment__factory.js';
import { OneTxPayment } from '../../../contracts/OneTxPayment/1/OneTxPayment.js';
import {
  addAugments,
  AugmentedEstimate,
  AugmentedOneTxPayment,
} from './augments/commonAugments.js';
import { AugmentedIColony } from '../../Core/augments/commonAugments.js';

type OneTxPaymentEstimate = AugmentedEstimate<OneTxPayment>;

export interface OneTxPaymentClientV1
  extends AugmentedOneTxPayment<OneTxPayment> {
  clientVersion: 1;
  estimateGas: OneTxPaymentEstimate;
}

export default function getOneTxPaymentClient(
  colonyClient: AugmentedIColony,
  address: string,
): OneTxPaymentClientV1 {
  const oneTxPaymentClient = OneTxPaymentFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as OneTxPaymentClientV1;

  oneTxPaymentClient.clientType = ClientType.OneTxPaymentClient;
  oneTxPaymentClient.clientVersion = 1;
  addAugments(oneTxPaymentClient, colonyClient);

  return oneTxPaymentClient;
}
