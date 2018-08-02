// Import big number library
const BN = require('bn.js');

// An example using the moveFundsBetweenPots method
const moveFundsBetweenPots = async (colonyClient, fromPot, toPot, amount, token) => {

  // Move funds between pots
  await colonyClient.moveFundsBetweenPots.send({
    fromPot,
    toPot,
    amount: new BN(amount),
    token,
  });

  // Get the balance for the pot that funds were withdrawn from
  const fromPotBalance = await colonyClient.getPotBalance.call({
    potId: fromPot,
    token,
  });

  // Check out the log to see the pot balance
  console.log('Pot Balance (From): ' + fromPotBalance.balance.toNumber());

  // Get the balance for the pot that funds were deposited into
  const toPotBalance = await colonyClient.getPotBalance.call({
    potId: toPot,
    token,
  });

  // Check out the log to see the pot balance
  console.log('Pot Balance (To): ' + toPotBalance.balance.toNumber());

  // Return the balance for the pot that funds were deposited into
  return toPotBalance;

}

module.exports = moveFundsBetweenPots;
