import { ClientType } from '../../../constants.js';
import { OneTxPayment__factory as OneTxPaymentFactory } from '../../../contracts/OneTxPayment/2/factories/OneTxPayment__factory.js';
import { OneTxPayment } from '../../../contracts/OneTxPayment/2/OneTxPayment.js';
import {
  addAugments,
  AugmentedEstimate,
  AugmentedOneTxPayment,
} from './augments/commonAugments.js';
import { AugmentedIColony } from '../../Core/augments/commonAugments.js';

type OneTxPaymentEstimate = AugmentedEstimate<OneTxPayment>;

export interface OneTxPaymentClientV2
  extends AugmentedOneTxPayment<OneTxPayment> {
  clientVersion: 2;
  estimateGas: OneTxPaymentEstimate;
}

export default function getOneTxPaymentClient(
  colonyClient: AugmentedIColony,
  address: string,
): OneTxPaymentClientV2 {
  const oneTxPaymentClient = OneTxPaymentFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as OneTxPaymentClientV2;

  oneTxPaymentClient.clientType = ClientType.OneTxPaymentClient;
  oneTxPaymentClient.clientVersion = 2;
  addAugments(oneTxPaymentClient, colonyClient);

  return oneTxPaymentClient;
}
