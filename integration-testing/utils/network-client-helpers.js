/*
 * Importing the `colonyJS` packages directly since I couldn't make `jest` play nicely
 * with importing them from submodules.
 *
 * @TODO Write custom `jest` submodules resolver
 *
 * I think this can be resolved by using a custom `jest` resolver that will tell
 * it where to search.
 * I've put if off for now since it involves a bit of a time investment to
 * get it right.
 */
/* eslint-disable import/no-unresolved */
import { TrufflepigLoader } from '../../src/lib/colonyJS/packages/colony-js-contract-loader-http';
import { localhost } from '../../src/lib/colony-wallet/lib/es/providers';
import { software as wallet } from '../../src/lib/colony-wallet/lib/es/wallets';
import EthersAdapter from '../../src/lib/colonyJS/packages/colony-js-adapter-ethers';
import NetworkClient from '../../src/lib/colonyJS/packages/colony-js-client';

const JSON_RPC = 'http://localhost:8545/';
const TRUFFLEPIG_URL = 'http://localhost:3030';

export const getTrufflepigLoader = () =>
  new TrufflepigLoader({
    endpoint: `${TRUFFLEPIG_URL}/contracts?name=%%NAME%%`,
  });

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
) =>
  wallet.open({
    privateKey: `0x${global.ganacheAccounts.private_keys[address]}`,
    provider: localhost(JSON_RPC),
  });

export const getEthersAdapter = async address =>
  new EthersAdapter({
    loader: getTrufflepigLoader(),
    provider: localhost(JSON_RPC),
    wallet: await getWallet(address),
  });

export const getNetworkClient = async address => {
  const networkClient = new NetworkClient({
    adapter: await getEthersAdapter(address),
  });
  await networkClient.init();
  return networkClient;
};
