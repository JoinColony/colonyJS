/* @flow */
/* eslint-disable import/no-cycle */

import { providers } from 'ethers';
import EthersAdapter from '@colony/colony-js-adapter-ethers';
import NetworkLoader from '@colony/colony-js-contract-loader-network';
import { TrufflepigLoader } from '@colony/colony-js-contract-loader-http';
import ColonyNetworkClient from './ColonyNetworkClient/index';
import EthersWrappedWallet from './lib/EthersWrappedWallet/index';

export const defaultInfuraProjectId = '7d0d81d0919f4f05b9ab6634be01ee73';

// Adapted from Ethers 4.0 to include support for Goerli
const getInfuraProvider = (network: string, infuraProjectId?: string) => {
  let host;
  switch (network) {
    case 'homestead':
      host = 'mainnet.infura.io';
      break;
    case 'ropsten':
      host = 'ropsten.infura.io';
      break;
    case 'rinkeby':
      host = 'rinkeby.infura.io';
      break;
    case 'goerli':
      host = 'goerli.infura.io';
      break;
    case 'kovan':
      host = 'kovan.infura.io';
      break;
    default:
      throw new Error(
        `Could not get provider, unsupported network: ${network}`,
      );
  }

  return new providers.JsonRpcProvider(
    `https://${host}/v3/${infuraProjectId || defaultInfuraProjectId}`,
    network === 'goerli' ? undefined : network,
  );
};

// This method provides a simple way of getting an initialized network client
// that uses NetworkLoader for the remote network and TrufflePigLoader for a
// local testrpc network (TrufflePig must be installed and running).
const getNetworkClient = async (
  network: string,
  wallet: any,
  infuraProjectId?: string,
) => {
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
    provider = getInfuraProvider(network, infuraProjectId);
  }

  // Use EthersWrappedWallet if purser wallet
  const ethersWallet =
    wallet.type && wallet.subtype
      ? new EthersWrappedWallet(wallet, provider)
      : wallet;

  // Initialize adpaters using ethers
  const adapter = new EthersAdapter({
    loader,
    provider,
    // $FlowFixMe colonyJS types don't yet accept some methods as async
    wallet: ethersWallet,
  });

  // Initialize network client using ethers adapter and default query
  const networkClient = new ColonyNetworkClient({ adapter, query: {} });
  await networkClient.init();

  return networkClient;
};

export default getNetworkClient;
