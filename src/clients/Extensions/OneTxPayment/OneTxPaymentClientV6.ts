import { ClientType } from '../../../constants';
import { OneTxPayment__factory as OneTxPaymentFactory } from '../../../contracts/OneTxPayment/6/factories/OneTxPayment__factory';
import { OneTxPayment } from '../../../contracts/OneTxPayment/6/OneTxPayment';
import {
  addAugments,
  AugmentedEstimate,
  AugmentedOneTxPayment,
} from './augments/commonAugments';
import { AugmentedIColony } from '../../Core/augments/commonAugments';

type OneTxPaymentEstimate = AugmentedEstimate<OneTxPayment>;

export interface OneTxPaymentClientV6
  extends AugmentedOneTxPayment<OneTxPayment> {
  clientVersion: 6;
  estimateGas: OneTxPaymentEstimate;
}

export default function getOneTxPaymentClient(
  colonyClient: AugmentedIColony,
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
