/* @flow */

import { providers } from 'ethers';
import EthersAdapter from '@colony/colony-js-adapter-ethers';
import NetworkLoader from '@colony/colony-js-contract-loader-network';
import ColonyNetworkClient from './ColonyNetworkClient/index';

const getNetworkClient = async (network: string, wallet: any) => {
  const loader = new NetworkLoader({ network });
  const provider = providers.getDefaultProvider(network);
  const adapter = new EthersAdapter({
    loader,
    provider,
    wallet,
  });
  const networkClient = new ColonyNetworkClient({ adapter, query: {} });
  await networkClient.init();
  return networkClient;
};

export default getNetworkClient;
