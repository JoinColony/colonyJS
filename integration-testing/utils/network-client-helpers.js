import { Wallet, providers } from 'ethers';

import { TrufflepigLoader } from '../../packages/colony-js-contract-loader-http';
import EthersAdapter from '../../packages/colony-js-adapter-ethers';
import NetworkClient from '../../packages/colony-js-client';

const JSON_RPC = 'http://localhost:8545/';
const TRUFFLEPIG_URL = 'http://localhost:3030';

export const getTrufflepigLoader = () =>
  new TrufflepigLoader({
    endpoint: `${TRUFFLEPIG_URL}/contracts?name=%%NAME%%`,
  });

const provider = new providers.JsonRpcProvider(JSON_RPC);

/*
 * Optional address to use when instantiating the wallet.
 *
 * The corresponding prive key for this address will be taken from `global.ganacheAccounts`
 * which in turn comes from the local `ganache-accounts.json` file
 *
 * By default the first account will be used for most priviledged executions
 * (create the meta colony, usually it will be the manager role in tasks, etc)
 */
export const getWallet = (
  address = Object.keys(global.ganacheAccounts.private_keys)[0],
) => new Wallet(`0x${global.ganacheAccounts.private_keys[address]}`, provider);

export const getEthersAdapter = async address =>
  new EthersAdapter({
    loader: getTrufflepigLoader(),
    provider,
    wallet: await getWallet(address),
  });

export const getNetworkClient = async address => {
  const networkClient = new NetworkClient({
    adapter: await getEthersAdapter(address),
  });
  await networkClient.init();
  return networkClient;
};
