import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';

import { OneTxPayment__factory as OneTxPaymentFactory } from '../../../contracts/OneTxPayment/1/factories/OneTxPayment__factory.js';
import { ClientType } from '../../../constants.js';
import {
  type UnkonwnOneTxPaymentClient,
  addAugments,
} from './augments/commonAugments.js';

export default function getOneTxPaymentClient(
  colonyClient: AugmentedIColony,
  address: string,
) {
  const oneTxPaymentClient = OneTxPaymentFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as UnkonwnOneTxPaymentClient;

  oneTxPaymentClient.clientType = ClientType.OneTxPaymentClient;
  oneTxPaymentClient.clientVersion = 1;
  addAugments(oneTxPaymentClient, colonyClient);

  return oneTxPaymentClient;
}
