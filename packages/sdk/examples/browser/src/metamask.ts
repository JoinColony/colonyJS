import { providers, Signer } from 'ethers';

import { ColonyNetwork } from '../../../src/index.js';

// If MetaMask is installed there will be an `ethereum` object on the `window`
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const provider = new providers.Web3Provider((window as any).ethereum);

// Get the Colony's XDAI funding in the ROOT pot (id 1)
const getMetaColony = async (signer: Signer) => {
  const colonyNetwork = new ColonyNetwork(signer);
  return colonyNetwork.getMetaColony();
};

// As soon as we issue `eth_requestAccounts`, MetaMask will prompt the user to allow a connection to the site
// We then return the `signer` that is provided by MetaMask which will act as the user's wallet
const connect = async () => {
  await provider.send('eth_requestAccounts', []);
  return provider.getSigner();
};

// Just some basic setup to display the UI
const button = document.querySelector('#button');
const errElm: HTMLParagraphElement | null = document.querySelector('#error');
const resultElm: HTMLParagraphElement | null =
  document.querySelector('#result');

if (!button || !errElm || !resultElm) {
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
  speak('Thinking...');
  try {
    const signer = await connect();
    const metaColonyClient = await getMetaColony(signer);
    speak(
      `Connected to metaColonyClient with version ${metaColonyClient.version}`,
    );
  } catch (e) {
    panik(`Found an error: ${(e as Error).message}`);
    speak('');
  }
});
