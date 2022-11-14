import { providers, utils, Wallet } from 'ethers';

import { ColonyNetwork } from '../../../src';

const { formatEther, isAddress } = utils;

const provider = new providers.JsonRpcProvider('http://127.0.0.1:8545');

const getWallet = () => {
  // This is the private key of the ganache account with index 0: 0xb77D57F4959eAfA0339424b83FcFaf9c15407461. In the contract deployments done with truffle this account is used as the owner of the MetaColony, so we have all the permissions. This will effectively replace MetaMask
  return new Wallet(
    '0x0355596cdb5e5242ad082c4fe3f8bbe48c9dba843fe1f99dd8272f487e70efae',
    provider,
  );
};

// Instantiate a colony client, connected to the local MetaColony and Reputation Oracle
// Then get the Colony's CLNY funding in the root domain
const getMetaColonyFunding = async (networkAddress: string) => {
  // Get the ethers wallet
  const signer = getWallet();
  // Connect to a locally deployed ColonyNetwork (EtherRouter address), with a local Reputation Oracle running on port 3000
  const colonyNetwork = new ColonyNetwork(signer, {
    networkClientOptions: {
      networkAddress,
      reputationOracleEndpoint: 'http://localhost:3000',
    },
  });
  // Get the locally deployed MetaColony...
  const colony = await colonyNetwork.getMetaColony();
  // ...and retrieve its CLNY funding
  const funding = await colony.getBalance();
  return formatEther(funding);
};

// Just some basic setup to display the UI
const addressInput: HTMLInputElement | null =
  document.querySelector('#address');
const button = document.querySelector('#button');
const errElm: HTMLParagraphElement | null = document.querySelector('#error');
const resultElm: HTMLParagraphElement | null =
  document.querySelector('#result');

if (!addressInput || !button || !errElm || !resultElm) {
  throw new Error('Could not find all required HTML elements');
}

const panik = (err: string) => {
  errElm.innerText = err;
};
const kalm = () => {
  errElm.innerText = '';
};
const speak = (msg: string) => {
  resultElm.innerText = msg;
};

button.addEventListener('click', async () => {
  kalm();
  const etherRouterAddress = addressInput.value;
  if (!isAddress(etherRouterAddress)) {
    return panik('This is not a valid address');
  }
  speak('Thinking...');
  addressInput.value = '';
  let funding: string;
  try {
    funding = await getMetaColonyFunding(etherRouterAddress);
    speak(`${funding} CLNY in root domain of local MetaColony`);
  } catch (e) {
    panik(`Found an error: ${(e as Error).message}`);
    speak('');
  }
  return null;
});
