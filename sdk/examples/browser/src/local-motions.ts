import { BigNumber, BigNumberish, providers, utils, Wallet } from 'ethers';

import { Colony, ColonyNetwork, toWei, w } from '../../../src';
import {
  setupOneTxPaymentExtension,
  setupVotingReputationExtension,
} from '../../helpers';

const { isAddress } = utils;
const provider = new providers.JsonRpcProvider('http://127.0.0.1:8545');

let metaColony: Colony;

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
  let colony = await colonyNetwork.getMetaColony();
  // Set up the OneTxPayment extension (we're using this for the `pay` method). This is usually already done for Colonies that were created with the Dapp
  await setupOneTxPaymentExtension(colony);
  // Set up the VotingReputation extension. This is usually already done for Colonies that were created with the Dapp
  await setupVotingReputationExtension(colony);
  // Re-initialize Colony after VotingReputationExtension is installed
  colony = await colonyNetwork.getMetaColony();
  // Mint CLNY and fund the Colony with it
  const token = colony.getToken();
  // Mint `amount` CLNY
  await token.mint(w`500`);
  // Claim the CLNY for the MetaColony (important!)
  await colony.claimFunds();
  // Pay 50 CLNY each to two addresses that we want to use for the motion
  // This will also give these addresses reputation in the ROOT team
  await colony.pay('0xb77D57F4959eAfA0339424b83FcFaf9c15407461', w`50`);
  await colony.pay('0x9df24e73f40b2a911eb254a8825103723e13209c', w`50`);
  // Advance time so to settle the reputation
  await jumpIntoTheFuture();
  return colony;
};

const createPaymentMotion = async (amount: string): Promise<BigNumber> => {
  if (!metaColony.ext.motions) {
    throw new Error('Motions & Disputes extension not installed');
  }
  const [{ motionId }] = await metaColony.ext.motions.create.pay(
    '0x27ff0c145e191c22c75cd123c679c3e1f58a4469',
    toWei(amount),
  );

  if (!motionId) {
    // This case should not happen (rather the tx reverts) but we're making the check here for type-safety
    throw new Error('Could not get motionId from tx');
  }

  return motionId;
};

const getMotion = async (motionId: BigNumberish) => {
  if (!metaColony.ext.motions) {
    throw new Error('Motions & Disputes extension not installed');
  }
  return metaColony.ext.motions.getMotion(motionId);
};

// We're using Ganache's evm_increaseTime and evm_mine methods to first increase the block time artificially by one hour and then force a block to mine. This will trigger the local reputation oracle/miner to award the pending reputation.
const jumpIntoTheFuture = async () => {
  await provider.send('evm_increaseTime', [3600]);
  await provider.send('evm_mine', []);
  await provider.send('evm_mine', []);
};

// Some setup to display the UI
const inputAddress: HTMLInputElement | null =
  document.querySelector('#address');
const buttonConnect = document.querySelector('#button_connect');
const inputPaymentAmount: HTMLInputElement | null =
  document.querySelector('#payment_amount');
const buttonCreateMotion = document.querySelector('#button_create_motion');
const inputMotionId: HTMLInputElement | null =
  document.querySelector('#motion_id');
const buttonGetMotion = document.querySelector('#button_get_motion');
const buttonJump = document.querySelector('#button_jump');

const errElm: HTMLParagraphElement | null = document.querySelector('#error');
const resultElm: HTMLParagraphElement | null =
  document.querySelector('#result');

if (
  !inputAddress ||
  !inputPaymentAmount ||
  !inputMotionId ||
  !errElm ||
  !resultElm ||
  !buttonConnect ||
  !buttonCreateMotion ||
  !buttonGetMotion ||
  !buttonJump
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

buttonCreateMotion.addEventListener('click', async () => {
  kalm();
  speak('Processing...');
  try {
    const paymentAmount = inputPaymentAmount.value;
    const motionId = await createPaymentMotion(paymentAmount);
    speak(`Motion created! Motion ID is: ${motionId}`);
  } catch (e) {
    panik(e as Error);
    speak('');
  } finally {
    inputPaymentAmount.value = '';
  }
  return null;
});

buttonGetMotion.addEventListener('click', async () => {
  const motionId = inputMotionId.value;
  speak('Processing...');
  try {
    const motion = await getMotion(motionId);
    speak(JSON.stringify(motion));
  } catch (e) {
    panik(e as Error);
    speak('');
  }
});

buttonJump.addEventListener('click', async () => {
  await jumpIntoTheFuture();
  speak('Whooo that was a hell of a ride. Welcome to the future');
});
