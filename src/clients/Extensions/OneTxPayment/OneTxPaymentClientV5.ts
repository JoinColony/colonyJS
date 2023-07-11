import { ClientType } from '../../../constants';
import { OneTxPayment__factory as OneTxPaymentFactory } from '../../../contracts/OneTxPayment/5/factories/OneTxPayment__factory';
import { OneTxPayment } from '../../../contracts/OneTxPayment/5/OneTxPayment';
import {
  addAugments,
  AugmentedEstimate,
  AugmentedOneTxPayment,
} from './augments/commonAugments';
import { AugmentedIColony } from '../../Core/augments/commonAugments';

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
