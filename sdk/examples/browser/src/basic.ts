import { providers, utils } from 'ethers';

import { ColonyNetwork, ColonyRpcEndpoint, Tokens } from '../../../src';

const { formatEther, isAddress } = utils;

const provider = new providers.JsonRpcProvider(ColonyRpcEndpoint.Gnosis);

// Get the Colony's CLNY funding in the root domain (on Gnosis chain)
const getColonyFunding = async (colonyAddress: string) => {
  const colonyNetwork = await ColonyNetwork.init(provider);
  const colony = await colonyNetwork.getColony(colonyAddress);
  const funding = await colony.getBalance(Tokens.Gnosis.CLNY);
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
  const colonyAddress = addressInput?.value;
  if (!isAddress(colonyAddress)) {
    return panik('This is not a valid address');
  }
  speak('Thinking...');
  addressInput.value = '';
  let funding: string;
  try {
    funding = await getColonyFunding(colonyAddress);
    speak(
      `${funding} CLNY in root domain of Colony with address: ${colonyAddress}`,
    );
  } catch (e) {
    panik(`Found an error: ${(e as Error).message}`);
    speak('');
  }
  return null;
});
