import { ContractTransaction } from 'ethers';

import { ClientType } from '../constants';
import { OneTxPaymentFactory } from '../contracts/1/OneTxPaymentFactory';
import { OneTxPayment } from '../contracts/1/OneTxPayment';
import { ColonyClient } from '../index';

export interface ExtendedOneTxPayment extends OneTxPayment {
  clientType: ClientType.OneTxPaymentClient;

  makePaymentWithProofs(): Promise<ContractTransaction>;
  makePaymentFundedFromDomainWithProofs(): Promise<ContractTransaction>;
}

const getOneTxPaymentClient = (
  address: string,
  colonyClient: ColonyClient,
): ExtendedOneTxPayment => {
  const oneTxPaymentClient = OneTxPaymentFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as ExtendedOneTxPayment;

  oneTxPaymentClient.clientType = ClientType.OneTxPaymentClient;

  return oneTxPaymentClient;
};

export default getOneTxPaymentClient;
