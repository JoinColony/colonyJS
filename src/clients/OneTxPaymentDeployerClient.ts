import { Signer } from 'ethers';
import { Provider } from 'ethers/providers';

import {
  ClientType,
  Network,
  oneTxPaymentFactoryAddresses,
} from '../constants';
import { OneTxPaymentDeployerFactory } from '../contracts/1/OneTxPaymentDeployerFactory';
import { OneTxPaymentDeployer } from '../contracts/1/OneTxPaymentDeployer';

export interface ExtendedOneTxPaymentDeployer extends OneTxPaymentDeployer {
  clientType: ClientType.OneTxPaymentClient;
}

const getOneTxPaymentDeployerClient = (
  network: Network,
  signerOrProvider: Signer | Provider,
  address?: string,
): ExtendedOneTxPaymentDeployer => {
  const oneTxPaymentFactoryAddress =
    address || oneTxPaymentFactoryAddresses[network];

  if (!oneTxPaymentFactoryAddress) {
    throw new Error(
      `Could not get OneTxPaymentFactory address for ${network}. Please specify`,
    );
  }

  const oneTxPaymentClient = OneTxPaymentDeployerFactory.connect(
    oneTxPaymentFactoryAddress,
    signerOrProvider,
  ) as ExtendedOneTxPaymentDeployer;

  oneTxPaymentClient.clientType = ClientType.OneTxPaymentClient;

  return oneTxPaymentClient;
};

export default getOneTxPaymentDeployerClient;
