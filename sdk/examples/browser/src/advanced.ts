import { providers, utils, Signer, ContractReceipt, BigNumber } from 'ethers';

import { Colony, ColonyNetwork } from '../../../src';

const { formatEther, isAddress, parseUnits } = utils;
const provider = new providers.Web3Provider((window as any).ethereum);

let colony: Colony;
const domainData: { fundingPotId?: BigNumber; domainId?: BigNumber } = {};

// Instantiate a colony client
const getColony = async (colonyAddress: string, signer: Signer) => {
  const colonyNetwork = new ColonyNetwork(signer);
  return colonyNetwork.getColony(colonyAddress);
};

// Get the Colony's native token funding in the ROOT pot (id 1)
const getColonyFunding = async () => {
  const funding = await colony.getBalance();
  return formatEther(funding);
};

// Create a new domain within that colony with the `domainName` as metadata
// Make sure the MetaMask user has the FUNDING and ADMINISTRATION permissions in the Root domain of the connected Colony (default if you have created that Colony)
const createTeam = async (): Promise<{
  domainId: BigNumber;
  fundingPotId: BigNumber;
  domainName: string;
  domainColor: string;
  domainPurpose: string;
}> => {
  // This is to demonstrate the Colony SDK's IPFS capabilities. For now, we would like to keep it agnostic to any IPFS upload mechanism, so you have to provide your own hash
  // You can see how the data looks like here: https://cloudflare-ipfs.com/ipfs/QmVgJC8WNJCzkZYLPuVPG5gvSzLvLZTxvb24Sj5Nca4jW2
  const ipfsTestHash = 'QmVgJC8WNJCzkZYLPuVPG5gvSzLvLZTxvb24Sj5Nca4jW2';
  const [{ domainId, fundingPotId }, , getMetadata] = await colony.createTeam(
    ipfsTestHash,
  );

  const { domainName, domainColor, domainPurpose } = await getMetadata();

  return {
    domainId,
    fundingPotId,
    domainName,
    domainColor,
    domainPurpose,
  };
};

// Move funds from the Root team (default) to the the newly created team
// Make sure there are enough funds of the native token in the Root teams pot (e.g. by minting them via the Dapp interface)
const moveFunds = async (): Promise<ContractReceipt> => {
  const [, receipt] = await colony.moveFundsToTeam(
    parseUnits('0.66'),
    domainData.domainId,
  );
  return receipt;
};

// Make a payment to a user from the newly created and funded domain. This will cause the user to have reputation in the new domain after the next reputation mining cycle (max 24h)
const makePayment = async (to: string): Promise<ContractReceipt> => {
  // Create payment in newly created domain
  const [, receipt] = await colony.pay(
    to,
    parseUnits('0.42'),
    domainData.domainId,
  );
  return receipt;
};

// Connect to MetaMask by requesting the accounts list
const connect = async () => {
  await provider.send('eth_requestAccounts', []);
  return provider.getSigner();
};

// Some setup to display the UI
const inputAddress: HTMLInputElement = document.querySelector('#address');
const buttonConnect = document.querySelector('#button_connect');
const buttonTeam = document.querySelector('#button_team');
const buttonFund = document.querySelector('#button_fund');
const inputRecipient: HTMLInputElement = document.querySelector('#recipient');
const buttonPay = document.querySelector('#button_pay');

const errElm: HTMLParagraphElement = document.querySelector('#error');
const resultElm: HTMLParagraphElement = document.querySelector('#result');

const panik = (err: Error) => {
  errElm.innerText = `Found an error: ${err.message}`;
  console.error(err);
};
const kalm = () => {
  errElm.innerText = '';
};
const speak = (msg: string) => {
  resultElm.innerText = msg;
};

buttonConnect.addEventListener('click', async () => {
  kalm();
  const colonyAddress = inputAddress.value;
  if (!isAddress(colonyAddress)) {
    return panik(new Error('This is not a valid address'));
  }
  speak('Processing...');
  const signer = await connect();
  try {
    const cc = await getColony(inputAddress.value, signer);
    colony = cc;
    const funding = await getColonyFunding();
    const token = cc.getToken();
    const tokenSymbol = await token.symbol();
    speak(`
            Connected to Colony with address: ${colonyAddress}.
            Colony version: ${cc.version}.
            Native token funding: ${funding} ${tokenSymbol}
        `);
  } catch (e) {
    panik(e);
    speak('');
  } finally {
    inputAddress.value = '';
  }
  return null;
});

buttonTeam.addEventListener('click', async () => {
  try {
    speak('Processing...');
    const { domainId, domainName, domainPurpose, fundingPotId } =
      await createTeam();
    domainData.domainId = domainId;
    domainData.fundingPotId = fundingPotId;
    speak(
      `Team with domainId ${domainId} and fundingPotId ${fundingPotId} successfully created. It is called "${domainName}" and has the purpose "${domainPurpose}"`,
    );
  } catch (e) {
    panik(e);
    speak('');
  }
});

buttonFund.addEventListener('click', async () => {
  if (!domainData.domainId || !domainData.fundingPotId) {
    return panik(new Error('Please create a domain first'));
  }
  speak('Processing...');
  try {
    const receipt = await moveFunds();
    console.info(receipt);
  } catch (e) {
    panik(e);
    speak('');
  }
  return speak(`Successfully funded domain ${domainData.domainId}`);
});

buttonPay.addEventListener('click', async () => {
  const recipient = inputRecipient.value;
  speak('Processing...');
  try {
    const receipt = await makePayment(recipient);
    console.info(receipt);
  } catch (e) {
    panik(e);
    speak('');
  }
  speak(`Successfully paid 0.42 tokens to ${recipient}`);
});
