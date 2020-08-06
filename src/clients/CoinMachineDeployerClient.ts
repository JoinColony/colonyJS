import { Signer } from 'ethers';
import { Provider } from 'ethers/providers';

import { ClientType, Network, coinMachineFactoryAddresses } from '../constants';
import { CoinMachineDeployerFactory } from '../contracts/5/CoinMachineDeployerFactory';
import { CoinMachineDeployer } from '../contracts/5/CoinMachineDeployer';

export interface CoinMachineFactoryClient extends CoinMachineDeployer {
  clientType: ClientType.CoinMachineFactoryClient;
}

const getCoinMachineFactoryClient = (
  network: Network,
  signerOrProvider: Signer | Provider,
  address?: string,
): CoinMachineFactoryClient => {
  const coinMachineFactoryAddress =
    address || coinMachineFactoryAddresses[network];

  if (!coinMachineFactoryAddress) {
    throw new Error(
      `Could not get CoinMachineFactory address for ${network}. Please specify`,
    );
  }

  const coinMachineFactoryClient = CoinMachineDeployerFactory.connect(
    coinMachineFactoryAddress,
    signerOrProvider,
  ) as CoinMachineFactoryClient;

  coinMachineFactoryClient.clientType = ClientType.CoinMachineFactoryClient;

  return coinMachineFactoryClient;
};

export default getCoinMachineFactoryClient;
