import { providers, Wallet } from 'ethers';

import { ColonyNetwork, ColonyRpcEndpoint, w } from '../../src';

const provider = new providers.JsonRpcProvider(ColonyRpcEndpoint.Gnosis);

const start = async () => {
  // Create a new wallet from a private key. This key is stored in an environment variable called `PRIATE_KEY`
  const wallet = new Wallet(process.env.PRIVATE_KEY as string).connect(
    provider,
  );

  // Initialize the Colony Network
  const colonyNetwork = await ColonyNetwork.init(wallet);
  // Get an instance of your favourite colony
  const colony = await colonyNetwork.getColony(
    '0x5D70776164466eB2985C5d49d9b535e4EAc95A2d',
  );
  // Mint 100 of the colony's native token
  await colony.mint(w`100`).metaTx();
  // Claim these tokens for the colony
  await colony.claimFunds().metaTx();
  // Move all the funds from the Root team to the team with the number 2
  await colony.moveFundsToTeam(w`100`, 2).metaTx();
  if (colony.ext.oneTx) {
    // Pay an address 50 of the colony's native token from the funds of team 2
    await colony.ext.oneTx
      .pay('0x0AEFF664e8d75c13801be16bCfE8143Bf422135A', w`50`, 2)
      .metaTx();
  }
};

start();
