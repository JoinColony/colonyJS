/* @flow */
/* eslint-disable import/no-cycle */

import type { WalletObjectType } from '@colony/purser-core';

import { providers } from 'ethers';
import EthersAdapter from '@colony/colony-js-adapter-ethers';
import NetworkLoader from '@colony/colony-js-contract-loader-network';
import { TrufflepigLoader } from '@colony/colony-js-contract-loader-http';
import ColonyNetworkClient from './ColonyNetworkClient/index';
import EthersWrappedWallet from './lib/EthersWrappedWallet/index';

export const defaultInfuraProjectId = '7d0d81d0919f4f05b9ab6634be01ee73';

// Custom provider for use with Infura which retries query requests if the
// result is unexpected data.
// Related issue: https://github.com/INFURA/infura/issues/157
class InfuraProvider extends providers.JsonRpcProvider {
  constructor(
    networkName: string,
    infuraProjectId?: string,
    verbose?: boolean,
  ) {
    let host;
    switch (networkName) {
      case 'homestead':
      case 'mainnet':
        host = 'mainnet.infura.io';
        break;
      case 'goerli':
        host = 'goerli.infura.io';
        break;
      default:
        throw new Error(
          `Could not get provider, unsupported network: ${networkName}`,
        );
    }

    const url = `https://${host}/v3/${infuraProjectId ||
      defaultInfuraProjectId}`;
    const network =
      networkName === 'goerli'
        ? {
            chainId: 5,
            ensAddress: '0x112234455c3a32fd11230c42e7bccd4a84e02010',
            name: 'goerli',
          }
        : networkName;

    super(url, network);
    this._verbose = verbose;
  }

  async perform(method, params) {
    const result = await super.perform(method, params);
    if (
      (method === 'call' ||
        method === 'estimateGas' ||
        method.startsWith('get')) &&
      result === '0x'
    ) {
      if (this._verbose) {
        console.info(`Bad Infura response for method "${method}"; retrying.`, {
          method,
          params,
          result,
        });
      }
      return super.perform(method, params);
    }
    return result;
  }
}

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
    provider = new InfuraProvider(network, infuraProjectId);
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
