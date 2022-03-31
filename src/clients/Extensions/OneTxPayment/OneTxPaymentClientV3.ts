import { ClientType } from '../../../types';
import { OneTxPayment__factory as OneTxPaymentFactory } from '../../../contracts/OneTxPayment/3/factories/OneTxPayment__factory';
import { OneTxPayment } from '../../../contracts/OneTxPayment/3/OneTxPayment';
import {
  addAugments,
  AugmentedEstimate,
  AugmentedOneTxPayment,
} from './augments/commonAugments';
import { AugmentedIColony } from '../../Core/augments/commonAugments';

type OneTxPaymentEstimate = AugmentedEstimate<OneTxPayment>;

export interface OneTxPaymentClientV3
  extends AugmentedOneTxPayment<OneTxPayment> {
  clientVersion: 3;
  estimateGas: OneTxPaymentEstimate;
}

export default function getOneTxPaymentClient(
  colonyClient: AugmentedIColony,
  address: string,
): OneTxPaymentClientV3 {
  const oneTxPaymentClient = OneTxPaymentFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as OneTxPaymentClientV3;

  oneTxPaymentClient.clientType = ClientType.OneTxPaymentClient;
  oneTxPaymentClient.clientVersion = 3;
  addAugments(oneTxPaymentClient, colonyClient);

  return oneTxPaymentClient;
}
