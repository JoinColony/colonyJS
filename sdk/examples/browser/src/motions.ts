import { BigNumber, BigNumberish, providers, utils } from 'ethers';

import {
  Colony,
  ColonyNetwork,
  MotionState,
  toEth,
  toWei,
  Vote,
} from '../../../src';

const { isAddress } = utils;
// If MetaMask is installed there will be an `ethereum` object on the `window`
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const provider = new providers.Web3Provider((window as any).ethereum);

let currentWalletAddress: string;
let colonyNetwork: ColonyNetwork;
let colony: Colony;
let currentMotion: BigNumber;
let sideVoted: Vote;

// Connect to MetaMask by requesting the accounts list
const connect = async () => {
  await provider.send('eth_requestAccounts', []);
  return provider.getSigner();
};

// Instantiate a colony client, by connecting to a demo Colony
const connectColony = async (colonyAddress: string) => {
  const signer = await connect();
  currentWalletAddress = await signer.getAddress();
  colonyNetwork = new ColonyNetwork(signer);
  // Get an instance of the MetaColony
  colony = await colonyNetwork.getColony(colonyAddress);
};

const createPaymentMotion = async (amount: string): Promise<BigNumber> => {
  if (!colony.ext.motions || !colony.ext.oneTx) {
    throw new Error('Motions & Disputes extension not installed');
  }
  const [{ motionId }] = await colony.ext.oneTx
    .pay('0x27ff0c145e191c22c75cd123c679c3e1f58a4469', toWei(amount))
    .motion();

  if (!motionId) {
    // This case should not happen (rather the tx reverts) but we're making the check here for type-safety
    throw new Error('Could not get motionId from tx');
  }

  return motionId;
};

const getMotion = async (motionId: BigNumberish) => {
  if (!colony.ext.motions) {
    throw new Error('Motions & Disputes extension not installed');
  }
  const motion = await colony.ext.motions.getMotion(motionId);
  currentMotion = BigNumber.from(motionId);

  const remainingStakes = await colony.ext.motions.getRemainingStakes(motionId);

  const motionState = await colony.ext.motions.getMotionState(motionId);

  return {
    ...motion,
    motionState: MotionState[motionState],
    remainingStakes,
  };
};

const approveForStaking = async (amount: string) => {
  // Approve tokens for staking in the root domain
  await colony.ext.motions?.approveStake(toWei(amount));
};

const stakeYay = async (amount: BigNumber) => {
  await colony.ext.motions?.stakeMotion(currentMotion, Vote.Yay, amount);
};

const stakeNay = async (amount: BigNumber) => {
  await colony.ext.motions?.stakeMotion(currentMotion, Vote.Nay, amount);
};

const voteYay = async () => {
  await colony.ext.motions?.submitVote(currentMotion, Vote.Yay);
  sideVoted = Vote.Yay;
};

const voteNay = async () => {
  await colony.ext.motions?.submitVote(currentMotion, Vote.Nay);
  sideVoted = Vote.Nay;
};

const revealVote = async () => {
  await colony.ext.motions?.revealVote(currentMotion, sideVoted);
};

const finalize = async () => {
  await colony.ext.motions?.finalizeMotion(currentMotion);
};

// Some setup to display the UI
const currentWalletAddressElm: HTMLElement | null = document.querySelector(
  '#current-wallet-address',
);
const inputAddress: HTMLInputElement | null =
  document.querySelector('#address');
const inputApproveAmount: HTMLInputElement | null =
  document.querySelector('#stake_clny_amount');
const inputPaymentAmount: HTMLInputElement | null =
  document.querySelector('#payment_amount');
const inputStakeAmount: HTMLInputElement | null =
  document.querySelector('#stake_amount');
const buttonCreateMotion = document.querySelector('#button_create_motion');
const inputMotionId: HTMLInputElement | null =
  document.querySelector('#motion_id');
const buttonConnect = document.querySelector('#button_connect');
const buttonStakeClny = document.querySelector('#button_stake_clny');
const buttonGetMotion = document.querySelector('#button_get_motion');
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
  !inputApproveAmount ||
  !inputPaymentAmount ||
  !inputMotionId ||
  !inputStakeAmount ||
  !errElm ||
  !resultElm ||
  !buttonConnect ||
  !buttonStakeClny ||
  !buttonCreateMotion ||
  !buttonGetMotion ||
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
  const colonyAddress = inputAddress.value;
  if (!isAddress(colonyAddress)) {
    return panik(new Error('This is not a valid address'));
  }
  speak('Processing...');
  try {
    await connectColony(inputAddress.value);
    if (currentWalletAddressElm) {
      currentWalletAddressElm.innerText = currentWalletAddress;
    }
    speak(`
            Connected to Colony with address: ${colony.address}.
            Colony version: ${colony.version}.
            Motions & Disputes extension is ${
              colony.ext.motions ? 'installed' : 'not installed'
            }
        `);
  } catch (e) {
    panik(e as Error);
    speak('');
  } finally {
    inputAddress.value = '';
  }
  return null;
});

buttonStakeClny.addEventListener('click', async () => {
  kalm();
  speak('Processing...');
  try {
    await approveForStaking(inputApproveAmount.value);
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
    const { domainId, altTarget, motionState, remainingStakes } =
      await getMotion(motionId);

    const values = {
      domainId: domainId.toString(),
      altTarget,
      // action,
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
