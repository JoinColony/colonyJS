import { providers, Wallet } from 'ethers';
import 'cross-fetch/dist/node-polyfill.js';

import { ColonyNetwork, ColonyRpcEndpoint, w } from '../../src/index.js';

const provider = new providers.JsonRpcProvider(ColonyRpcEndpoint.ArbitrumOne);

if (!process.env.PRIVATE_KEY) {
  throw new Error('Please provide PRIVATE_KEY as an environment variable');
}

const start = async () => {
  // Create a new wallet from a private key. This key is stored in an environment variable called `PRIATE_KEY`
  const wallet = new Wallet(process.env.PRIVATE_KEY as string).connect(
    provider,
  );

  // Initialize the Colony Network
  const colonyNetwork = new ColonyNetwork(wallet);
  // Get an instance of your favourite colony
  const colony = await colonyNetwork.getColony(
    // https://app.colony.io/neverland
    '0x9fBa8C85A1C7EEd48785A760E9399FcB6Fa5b04A',
  );

  // Define recipients and amounts to pay out
  const recipients = [
    '0xf24e6667C49f6272A7EbFdf4e5e7e9BBda0c89Bc',
    '0x7E676370a053Dcfa851DCA951E9a9F567503E33B',
    '0xD2c5D6D1f16d9B1e8bbD0e2EA784a67dC6aC8969',
    '0x3962e6380421c94d69584e69255EAd67C92BFD23',
  ];
  const amounts = [1, 2, 3, 4];

  // Mint 10 of the colony's native token
  await colony
    .mint(w`10`)
    .metaTx()
    .mined();
  // Claim these tokens for the colony
  await colony.claimFunds().metaTx().mined();
  // Move all the funds from the Root team to the team with the number 2
  await colony
    .moveFundsToTeam(w`10`, 2)
    .metaTx()
    .mined();
  if (colony.ext.oneTx) {
    // Pay a bunch of addresses the respective of the colony's native token from the funds of team 2
    await colony.ext.oneTx.pay(recipients, amounts, 2).metaTx().mined();
  }
};

start();
