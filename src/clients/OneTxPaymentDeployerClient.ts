import { Signer } from 'ethers';
import { Provider } from 'ethers/providers';

import {
  ClientType,
  Network,
  oneTxPaymentFactoryAddresses,
} from '../constants';
import { OneTxPaymentDeployerFactory } from '../contracts/5/OneTxPaymentDeployerFactory';
import { OneTxPaymentDeployer } from '../contracts/5/OneTxPaymentDeployer';

export interface OneTxPaymentFactoryClient extends OneTxPaymentDeployer {
  clientType: ClientType.OneTxPaymentFactoryClient;
}

const getOneTxPaymentFactoryClient = (
  network: Network,
  signerOrProvider: Signer | Provider,
  address?: string,
): OneTxPaymentFactoryClient => {
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
  ) as OneTxPaymentFactoryClient;

  oneTxPaymentClient.clientType = ClientType.OneTxPaymentFactoryClient;

  return oneTxPaymentClient;
};

export default getOneTxPaymentFactoryClient;
