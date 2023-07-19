import { ClientType } from '../../../constants.js';
import { OneTxPayment__factory as OneTxPaymentFactory } from '../../../contracts/OneTxPayment/5/factories/OneTxPayment__factory.js';
import { OneTxPayment } from '../../../contracts/OneTxPayment/5/OneTxPayment.js';
import {
  addAugments,
  AugmentedEstimate,
  AugmentedOneTxPayment,
} from './augments/commonAugments.js';
import { AugmentedIColony } from '../../Core/augments/commonAugments.js';

type OneTxPaymentEstimate = AugmentedEstimate<OneTxPayment>;

export interface OneTxPaymentClientV5
  extends AugmentedOneTxPayment<OneTxPayment> {
  clientVersion: 5;
  estimateGas: OneTxPaymentEstimate;
}

export default function getOneTxPaymentClient(
  colonyClient: AugmentedIColony,
  address: string,
): OneTxPaymentClientV5 {
  const oneTxPaymentClient = OneTxPaymentFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as OneTxPaymentClientV5;

  oneTxPaymentClient.clientType = ClientType.OneTxPaymentClient;
  oneTxPaymentClient.clientVersion = 5;
  addAugments(oneTxPaymentClient, colonyClient);

  return oneTxPaymentClient;
}
