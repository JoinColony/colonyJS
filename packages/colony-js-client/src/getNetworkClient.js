/* @flow */
/* eslint-disable import/no-cycle */

import type { WalletObjectType } from '@colony/purser-core';

import { providers } from 'ethers';
import EthersAdapter from '@colony/colony-js-adapter-ethers';
import NetworkLoader from '@colony/colony-js-contract-loader-network';
import { TrufflepigLoader } from '@colony/colony-js-contract-loader-http';
import ColonyNetworkClient from './ColonyNetworkClient/index';
import EthersWrappedWallet from './lib/EthersWrappedWallet/index';
import InfuraProvider from './lib/InfuraProvider/index';

// This method provides a simple way of getting an initialized network client
// that uses NetworkLoader for the remote network and TrufflePigLoader for a
// local testrpc network (TrufflePig must be installed and running).
const getNetworkClient = async (
  network: string,
  wallet: WalletObjectType,
  infuraProjectId?: string,
  verbose?: boolean,
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
    provider = new InfuraProvider(network, infuraProjectId, verbose);
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
  const networkClient = new ColonyNetworkClient({
    adapter,
    query: {},
    verbose,
  });
  await networkClient.init();

  return networkClient;
};

export default getNetworkClient;
