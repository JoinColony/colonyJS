import { Wallet, providers } from 'ethers';
import { isAddress } from 'web3-utils';

import {
  getTrufflepigLoader,
  getWallet,
  getEthersAdapter,
  getNetworkClient,
} from './utils/network-client-helpers';

test('Get a new instance going', async t => {
  /*
     * Setup the HTTP contract loader (retrieves contracts abis via TrufflePig)
     */
  const contractLoader = getTrufflepigLoader();
  t.true(Object.hasOwnProperty.call(contractLoader, '_endpoint'));
  t.true(Object.hasOwnProperty.call(contractLoader, '_transform'));
  /*
     * Get the first account's private key
     */
  const privateKey =
    global.ganacheAccounts.private_keys[
      Object.keys(global.ganacheAccounts.private_keys)[0]
    ];
  /*
     * Open a new wallet instance with the above private key
     */
  const clientWallet = await getWallet();
  t.is(clientWallet.privateKey, `0x${privateKey}`);
  /*
     * Setup the adapter
     */
  const ethersAdapter = await getEthersAdapter();
  t.true(Object.hasOwnProperty.call(ethersAdapter, 'loader'));
  t.true(Object.hasOwnProperty.call(ethersAdapter, 'provider'));
  t.true(Object.hasOwnProperty.call(ethersAdapter, 'wallet'));
  /*
     * Setup the Network Client Instance
     */
  const networkClient = await getNetworkClient();
  t.true(Object.hasOwnProperty.call(networkClient, 'addColonyVersion'));
  t.true(Object.hasOwnProperty.call(networkClient, 'addSkill'));
  t.true(Object.hasOwnProperty.call(networkClient, 'createColony'));
  t.true(Object.hasOwnProperty.call(networkClient, 'createMetaColony'));
  t.true(Object.hasOwnProperty.call(networkClient, 'events'));
  t.true(Object.hasOwnProperty.call(networkClient, 'getChildSkillId'));
  t.true(Object.hasOwnProperty.call(networkClient, 'getColony'));
  t.true(Object.hasOwnProperty.call(networkClient, 'getColonyCount'));
  t.true(Object.hasOwnProperty.call(networkClient, 'getColonyVersionResolver'));
  t.true(Object.hasOwnProperty.call(networkClient, 'getCurrentColonyVersion'));
  t.true(Object.hasOwnProperty.call(networkClient, 'getMetaColonyAddress'));
  t.true(Object.hasOwnProperty.call(networkClient, 'getParentSkillId'));
  t.true(Object.hasOwnProperty.call(networkClient, 'getRootGlobalSkillId'));
  t.true(Object.hasOwnProperty.call(networkClient, 'getSkill'));
  t.true(Object.hasOwnProperty.call(networkClient, 'getSkillCount'));
  t.true(Object.hasOwnProperty.call(networkClient, 'getTokenLocking'));
  t.true(Object.hasOwnProperty.call(networkClient, 'isColony'));
  t.true(Object.hasOwnProperty.call(networkClient, 'registerUserLabel'));
  t.true(Object.hasOwnProperty.call(networkClient, 'setTokenLocking'));
  t.true(Object.hasOwnProperty.call(networkClient, 'setupRegistrar'));
  t.true(Object.hasOwnProperty.call(networkClient, 'startTokenAuction'));
  t.true(Object.hasOwnProperty.call(networkClient.events, 'AuctionCreated'));
  t.true(Object.hasOwnProperty.call(networkClient.events, 'ColonyAdded'));
  t.true(Object.hasOwnProperty.call(networkClient.events, 'SkillAdded'));
  /*
     * The Meta Colony should be available
     */
  const metaColonyClient = await networkClient.getMetaColonyClient();
  t.truthy(isAddress(metaColonyClient.contract.address));
});
