/* @flow */

import { providers } from 'ethers';
import EthersAdapter from '@colony/colony-js-adapter-ethers';
import NetworkLoader from '@colony/colony-js-contract-loader-network';
import { TrufflepigLoader } from '@colony/colony-js-contract-loader-http';
import ColonyNetworkClient from './ColonyNetworkClient/index';

// This method provides a simple way of getting an initialized network client
// that uses NetworkLoader for the remote network and TrufflePigLoader for a
// local testrpc network (TrufflePig must be installed and running).
const getNetworkClient = async (network: string, wallet: any) => {
  let loader;
  let provider;

  // Set loader and provider
  if (network === 'local') {
    loader = new TrufflepigLoader();

    // Throw custom error if TrufflePig is not installed and running
    loader.getAccounts().catch(() => {
      throw new Error('Make sure you have TrufflePig installed and running.');
    });

    provider = new providers.JsonRpcProvider();
  } else {
    loader = new NetworkLoader({ network });
    provider = providers.getDefaultProvider(network);
  }

  // Support offline wallets (wallets opened with purser)
  if (!wallet.provider) Object.assign(wallet, { provider });

  // Initialize adpaters using ethers
  const adapter = new EthersAdapter({
    loader,
    provider,
    wallet,
  });

  // Initialize network client using ethers adapter and default query
  const networkClient = new ColonyNetworkClient({ adapter, query: {} });
  await networkClient.init();

  return networkClient;
};

export default getNetworkClient;
