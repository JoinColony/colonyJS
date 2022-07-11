import { providers, utils, Wallet } from 'ethers';

import { Colony, ColonyNetwork } from '../../../src';
import { setupOneTxPaymentExtension } from '../../helpers';

const { isAddress, formatUnits, parseUnits } = utils;
const provider = new providers.JsonRpcProvider('http://127.0.0.1:8545');

let metaColony: Colony;
let recipient: string;

const getWallet = () => {
  // This is the private key of the ganache account with index 0: 0xb77D57F4959eAfA0339424b83FcFaf9c15407461. In the contract deployments done with truffle this account is used as the owner of the MetaColony, so we have all the permissions. This will effectively replace MetaMask
  return new Wallet(
    '0x0355596cdb5e5242ad082c4fe3f8bbe48c9dba843fe1f99dd8272f487e70efae',
    provider,
  );
};

// Instantiate a colony client, connected to the local MetaColony and Reputation Oracle
const getMetaColony = async (networkAddress: string) => {
  const signer = getWallet();
  const colonyNetwork = new ColonyNetwork(signer, {
    networkAddress,
    reputationOracleEndpoint: 'http://localhost:3000',
  });
  // Get an instance of the MetaColony
  const colony = await colonyNetwork.getMetaColony();
  // Set up the OneTxPayment extension. This is usually already done for Colonys that were created with the Dapp
  await setupOneTxPaymentExtension(colony);
  return colony;
};

// Mint CLNY and fund the Colony with it
const fundColony = async (amount: string) => {
  const token = metaColony.getToken();
  // Mint `amount` CLNY
  await token.mint(utils.parseUnits(amount));
  // Claim the CLNY for the MetaColony (important!)
  await metaColony.claimFunds();
  // Look up the funds
  const funding = await metaColony.getBalance();
  return formatUnits(funding);
};

// Make a payment to the given user in the MetaColony's native token (CLNY). This will cause the user to have reputation in the new domain after the next reputation mining cycle (max 24h)
const makePayment = async (to: string) => {
  // Pay 10 CLNY to the recipient
  return metaColony.pay(to, parseUnits('10'));
};

// We're using Ganache's evm_increaseTime and evm_mine methods to first increase the block time artificially by one hour and then force a block to mine. This will trigger the local reputation oracle/miner to award the pending reputation.
const jumpIntoTheFuture = async () => {
  await provider.send('evm_increaseTime', [3600]);
  await provider.send('evm_mine', []);
  await provider.send('evm_mine', []);
};

const getReputation = async (userAddress: string): Promise<string> => {
  const reputation = await metaColony.getReputation(userAddress);
  return reputation.toString();
};

// Some setup to display the UI
const inputAddress: HTMLInputElement | null =
  document.querySelector('#address');
const buttonConnect = document.querySelector('#button_connect');
const inputFunding: HTMLInputElement | null =
  document.querySelector('#funding_amount');
const buttonFund = document.querySelector('#button_fund');
const inputRecipient: HTMLInputElement | null =
  document.querySelector('#recipient');
const buttonPay = document.querySelector('#button_pay');
const buttonJump = document.querySelector('#button_jump');
const buttonReputation = document.querySelector('#button_get_reputation');

const errElm: HTMLParagraphElement | null = document.querySelector('#error');
const resultElm: HTMLParagraphElement | null =
  document.querySelector('#result');

if (
  !inputAddress ||
  !inputFunding ||
  !inputRecipient ||
  !errElm ||
  !resultElm ||
  !buttonConnect ||
  !buttonFund ||
  !buttonPay ||
  !buttonJump ||
  !buttonReputation
) {
  throw new Error('Could not find all required HTML elements');
}

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
  const etherRouterAddress = inputAddress.value;
  if (!isAddress(etherRouterAddress)) {
    return panik(new Error('This is not a valid address'));
  }
  speak('Processing...');
  try {
    const colony = await getMetaColony(inputAddress.value);
    metaColony = colony;
    speak(`
            Connected to Colony with address: ${colony.address}.
            Colony version: ${colony.version}.
        `);
  } catch (e) {
    panik(e as Error);
    speak('');
  } finally {
    inputAddress.value = '';
  }
  return null;
});

buttonFund.addEventListener('click', async () => {
  kalm();
  speak('Processing...');
  try {
    const fundingAmount = inputFunding.value;
    const funding = await fundColony(fundingAmount);
    speak(`Funded MetaColony! Current funding: ${funding} CLNY`);
  } catch (e) {
    panik(e as Error);
    speak('');
  } finally {
    inputAddress.value = '';
  }
  return null;
});

buttonPay.addEventListener('click', async () => {
  recipient = inputRecipient.value;
  speak('Processing...');
  try {
    await makePayment(recipient);
  } catch (e) {
    panik(e as Error);
    speak('');
  }
  speak(`Successfully paid 10 CLNY to ${recipient}`);
});

buttonJump.addEventListener('click', async () => {
  await jumpIntoTheFuture();
  speak('Whooo that was a hell of a ride. Welcome to the future');
});

buttonReputation.addEventListener('click', async () => {
  const reputation = await getReputation(recipient);
  speak(`User ${recipient} has ${formatUnits(reputation)} reputation points`);
});
