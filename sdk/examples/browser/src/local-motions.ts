import { BigNumber, BigNumberish, providers, utils, Wallet } from 'ethers';

import {
  Colony,
  ColonyNetwork,
  MotionState,
  toEth,
  toWei,
  Vote,
  w,
} from '../../../src';
import {
  setupOneTxPaymentExtension,
  setupVotingReputationExtension,
} from '../../helpers';

const { isAddress } = utils;
const provider = new providers.JsonRpcProvider('http://127.0.0.1:8545');

let colonyNetwork: ColonyNetwork;
let metaColony: Colony;
let currentMotion: BigNumber;

const getWallet = () => {
  // This is the private key of the ganache account with index 0: 0xb77D57F4959eAfA0339424b83FcFaf9c15407461. In the contract deployments done with truffle this account is used as the owner of the MetaColony, so we have all the permissions. This will effectively replace MetaMask
  return new Wallet(
    '0x0355596cdb5e5242ad082c4fe3f8bbe48c9dba843fe1f99dd8272f487e70efae',
    provider,
  );
};

// Instantiate a colony client, connected to the local MetaColony and Reputation Oracle
const connectMetaColony = async (networkAddress: string) => {
  const signer = getWallet();
  colonyNetwork = new ColonyNetwork(signer, {
    networkClientOptions: {
      networkAddress,
      reputationOracleEndpoint: 'http://localhost:3000',
    },
  });
  // Get an instance of the MetaColony
  metaColony = await colonyNetwork.getMetaColony();
};

const installVotingReputation = async () => {
  // Set up the OneTxPayment extension (we're using this for the `pay` method). This is usually already done for Colonies that were created with the Dapp
  await setupOneTxPaymentExtension(metaColony);
  // Set up the VotingReputation extension. This is usually already done for Colonies that were created with the Dapp
  await setupVotingReputationExtension(metaColony);
  // Re-initialize Colony after VotingReputationExtension is installed
  metaColony = await colonyNetwork.getMetaColony();
  if (!metaColony.ext.oneTx) {
    throw new Error('OneTxPayment extension not installed');
  }
  // Mint CLNY and fund the Colony with it
  const token = await metaColony.getToken();
  await token.mint(w`500`).forceTx();
  // Claim the CLNY for the MetaColony (important!)
  await metaColony.claimFunds().forceTx();
  // Pay some CLNY each to two addresses (we are going to use the first for staking)
  // This will also give these addresses reputation in the ROOT team
  await metaColony.ext.oneTx
    .pay('0xb77D57F4959eAfA0339424b83FcFaf9c15407461', w`100`)
    .forceTx();
  await metaColony.ext.oneTx
    .pay('0x9df24e73f40b2a911eb254a8825103723e13209c', w`20`)
    .forceTx();
};

const createPaymentMotion = async (amount: string): Promise<BigNumber> => {
  if (!metaColony.ext.motions) {
    throw new Error('VotingReputation extension not installed');
  }
  if (!metaColony.ext.oneTx) {
    throw new Error('OneTxPayment extension not installed');
  }
  const [{ motionId }] = await metaColony.ext.oneTx
    .pay('0x27ff0c145e191c22c75cd123c679c3e1f58a4469', toWei(amount))
    .motionTx();

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
  const motion = await metaColony.ext.motions.getMotion(motionId);
  currentMotion = BigNumber.from(motionId);

  const remainingStakes = await metaColony.ext.motions?.getRemainingStakes(
    motionId,
  );

  const motionState = await metaColony.ext.motions.getMotionState(motionId);

  return {
    ...motion,
    motionState: MotionState[motionState],
    remainingStakes,
  };
};

const approveForStaking = async () => {
  const token = await metaColony.getToken();
  // This will activate 20 tokens for Motion staking, for the user address 0xb77D57F4959eAfA0339424b83FcFaf9c15407461.
  // Essentially you first "activate" them for use in the Colony in general and then approve some amount of that for staking in the VotingReputation extension
  await token.approve(w`20`);
  // Deposit all of approved the tokens
  await token.deposit(w`20`);
  // Approve 20 tokens for staking in the root domain
  await metaColony.ext.motions?.approveStake(w`20`);
};

const stakeYay = async (amount: BigNumber) => {
  await metaColony.ext.motions?.stakeMotion(currentMotion, Vote.Yay, amount);
};

const stakeNay = async (amount: BigNumber) => {
  await metaColony.ext.motions?.stakeMotion(currentMotion, Vote.Nay, amount);
};

const voteYay = async () => {
  await metaColony.ext.motions?.submitVote(currentMotion, Vote.Yay);
};

const voteNay = async () => {
  await metaColony.ext.motions?.submitVote(currentMotion, Vote.Nay);
};

const revealVote = async () => {
  await jumpIntoTheFuture(7 * 60);
  await metaColony.ext.motions?.revealVote(currentMotion);
};

const finalize = async () => {
  await jumpIntoTheFuture(7 * 60);
  await metaColony.ext.motions?.finalizeMotion(currentMotion);
};

// We're using Ganache's evm_increaseTime and evm_mine methods to first increase the block time artificially by one hour and then force a block to mine. This will trigger the local reputation oracle/miner to award the pending reputation.
const jumpIntoTheFuture = async (seconds: number) => {
  await provider.send('evm_increaseTime', [seconds]);
  await provider.send('evm_mine', []);
};

// Some setup to display the UI
const inputAddress: HTMLInputElement | null =
  document.querySelector('#address');
const inputPaymentAmount: HTMLInputElement | null =
  document.querySelector('#payment_amount');
const inputStakeAmount: HTMLInputElement | null =
  document.querySelector('#stake_amount');
const buttonCreateMotion = document.querySelector('#button_create_motion');
const inputMotionId: HTMLInputElement | null =
  document.querySelector('#motion_id');
const buttonConnect = document.querySelector('#button_connect');
const buttonBootstrap = document.querySelector('#button_bootstrap');
const buttonStakeClny = document.querySelector('#button_stake_clny');
const buttonGetMotion = document.querySelector('#button_get_motion');
const buttonJump = document.querySelector('#button_jump');
const buttonStakeYay = document.querySelector('#button_stake_yay');
const buttonStakeNay = document.querySelector('#button_stake_nay');
const buttonVoteYay = document.querySelector('#button_vote_yay');
const buttonVoteNay = document.querySelector('#button_vote_nay');
const buttonReveal = document.querySelector('#button_reveal');
const buttonFinalize = document.querySelector('#button_finalize');

const errElm: HTMLParagraphElement | null = document.querySelector('#error');
const resultElm: HTMLParagraphElement | null =
  document.querySelector('#result');

if (
  !inputAddress ||
  !inputPaymentAmount ||
  !inputMotionId ||
  !inputStakeAmount ||
  !errElm ||
  !resultElm ||
  !buttonConnect ||
  !buttonBootstrap ||
  !buttonStakeClny ||
  !buttonCreateMotion ||
  !buttonGetMotion ||
  !buttonJump ||
  !buttonStakeYay ||
  !buttonStakeNay ||
  !buttonVoteYay ||
  !buttonVoteNay ||
  !buttonReveal ||
  !buttonFinalize
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
    await connectMetaColony(inputAddress.value);
    speak(`
            Connected to Colony with address: ${metaColony.address}.
            Colony version: ${metaColony.version}.
        `);
  } catch (e) {
    panik(e as Error);
    speak('');
  } finally {
    inputAddress.value = '';
  }
  return null;
});

buttonBootstrap.addEventListener('click', async () => {
  kalm();
  speak('Processing...');
  try {
    await installVotingReputation();
  } catch (e) {
    panik(e as Error);
    speak('');
  }
  speak(
    `Everything was set up successfully. You may now proceed. Remember, this is only necessary once for this example (even after reload)`,
  );
});

buttonStakeClny.addEventListener('click', async () => {
  kalm();
  speak('Processing...');
  try {
    await approveForStaking();
  } catch (e) {
    panik(e as Error);
    speak('');
  }
  speak(`Successfully approved tokens for use in staking`);
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
    const { domainId, altTarget, action, motionState, remainingStakes } =
      await getMotion(motionId);

    const values = {
      domainId: domainId.toString(),
      altTarget,
      action,
      motionState,
      remainingYayStakes: toEth(remainingStakes.remainingToFullyYayStaked),
      remainingNayStakes: toEth(remainingStakes.remainingToFullyNayStaked),
    };
    speak(JSON.stringify(values));
  } catch (e) {
    panik(e as Error);
    speak('');
  }
});

buttonJump.addEventListener('click', async () => {
  await jumpIntoTheFuture(3600);
  speak('Whooo that was a hell of a ride. Welcome to the future');
});

buttonStakeYay.addEventListener('click', async () => {
  kalm();
  if (!currentMotion) {
    panik(
      new Error(
        'Please get a motion first (in the previous step) to stake for',
      ),
    );
    return;
  }
  speak('Processing...');
  const stakeAmount = toWei(inputStakeAmount.value);
  try {
    await stakeYay(stakeAmount);
  } catch (e) {
    panik(e as Error);
    speak('');
    return;
  }
  speak('Staked! Feel free to refresh the motion to see the new values');
});

buttonStakeNay.addEventListener('click', async () => {
  kalm();
  if (!currentMotion) {
    panik(
      new Error(
        'Please get a motion first (in the previous step) to stake for',
      ),
    );
    return;
  }
  speak('Processing...');
  const stakeAmount = toWei(inputStakeAmount.value);
  try {
    await stakeNay(stakeAmount);
  } catch (e) {
    panik(e as Error);
    speak('');
    return;
  }
  speak('Staked! Feel free to refresh the motion to see the new values');
});

buttonVoteYay.addEventListener('click', async () => {
  kalm();
  if (!currentMotion) {
    panik(
      new Error(
        'Please get a motion first (in the previous step) to stake for',
      ),
    );
    return;
  }
  speak('Processing...');
  try {
    await voteYay();
  } catch (e) {
    panik(e as Error);
    speak('');
    return;
  }
  speak('Voted yay!');
});

buttonVoteNay.addEventListener('click', async () => {
  kalm();
  if (!currentMotion) {
    panik(
      new Error(
        'Please get a motion first (in the previous step) to stake for',
      ),
    );
    return;
  }
  speak('Processing...');
  try {
    await voteNay();
  } catch (e) {
    panik(e as Error);
    speak('');
    return;
  }
  speak('Voted nay!');
});

buttonReveal.addEventListener('click', async () => {
  kalm();
  if (!currentMotion) {
    panik(
      new Error(
        'Please get a motion first (in the previous step) to stake for',
      ),
    );
    return;
  }
  speak('Processing...');
  try {
    await revealVote();
  } catch (e) {
    panik(e as Error);
    speak('');
    return;
  }
  speak('Vote successfully revealed!');
});

buttonFinalize.addEventListener('click', async () => {
  kalm();
  if (!currentMotion) {
    panik(
      new Error(
        'Please get a motion first (in the previous step) to stake for',
      ),
    );
    return;
  }
  speak('Processing...');
  try {
    await finalize();
  } catch (e) {
    panik(e as Error);
    speak('');
    return;
  }
  speak(
    `Motion was successfully finailzed. The action was executed and rewards are paid out`,
  );
});
