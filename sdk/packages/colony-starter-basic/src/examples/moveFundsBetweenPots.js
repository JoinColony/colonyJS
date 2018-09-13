// Import big number library
const BN = require('bn.js');

// An example using the moveFundsBetweenPots method
const moveFundsBetweenPots = async (colonyClient, fromPot, toPot, amount, token) => {

  // Get the balance for the pot that funds were withdrawn from
  const fromPotBalanceBefore = await colonyClient.getPotBalance.call({
    potId: fromPot,
    token,
  });

  // Get the balance for the pot that funds were deposited into
  const toPotBalanceBefore = await colonyClient.getPotBalance.call({
    potId: toPot,
    token,
  });

  // Move funds between pots
  await colonyClient.moveFundsBetweenPots.send({
    fromPot,
    toPot,
    amount: new BN(amount),
    token,
  });

  // Get the balance for the pot that funds were withdrawn from
  const fromPotBalanceAfter = await colonyClient.getPotBalance.call({
    potId: fromPot,
    token,
  });

  // Get the balance for the pot that funds were deposited into
  const toPotBalanceAfter = await colonyClient.getPotBalance.call({
    potId: toPot,
    token,
  });

  // Check out the log to see the pot balance
  console.log('Pot Balance From (Before): ' + fromPotBalanceBefore.balance.toNumber());

  // Check out the log to see the pot balance
  console.log('Pot Balance To (Before): ' + toPotBalanceBefore.balance.toNumber());

  // Check out the log to see the pot balance
  console.log('Pot Balance From (After): ' + fromPotBalanceAfter.balance.toNumber());

  // Check out the log to see the pot balance
  console.log('Pot Balance To (After): ' + toPotBalanceAfter.balance.toNumber());

  // Return the balance for the pot that funds were deposited into
  return toPotBalanceAfter;

}

module.exports = moveFundsBetweenPots;
