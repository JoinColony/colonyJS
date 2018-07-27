// Import big number library
const BN = require('bn.js');

// An example using the moveFundsBetweenPots method
const moveFundsBetweenPots = async (colonyClient, fromPot, toPot, amount, token) => {

  // Get pot balance before move
  const fromPotBalanceBefore = await colonyClient.getPotBalance.call({
    potId: fromPot,
    token,
  });

  // Check out the log to see the pot balance before the move
  console.log('From Pot Balance Before: ' + fromPotBalanceBefore.balance.toNumber());

  // Get pot balance before move
  const toPotBalanceBefore = await colonyClient.getPotBalance.call({
    potId: toPot,
    token,
  });

  // Check out the log to see the pot balance before the move
  console.log('To Pot Balance Before: ' + toPotBalanceBefore.balance.toNumber());

  // Move funds between pots
  await colonyClient.moveFundsBetweenPots.send({
    fromPot,
    toPot,
    amount: new BN(amount),
    token,
  });

  // Get pot balance after move
  const fromPotBalanceAfter = await colonyClient.getPotBalance.call({
    potId: fromPot,
    token,
  });

  // Check out the log to see the pot balance after the move
  console.log('From Pot Balance After: ' + fromPotBalanceAfter.balance.toNumber());

  // Get pot balance after move
  const toPotBalanceAfter = await colonyClient.getPotBalance.call({
    potId: toPot,
    token,
  });

  // Check out the log to see the pot balance after the move
  console.log('To Pot Balance After: ' + toPotBalanceAfter.balance.toNumber());

  return toPotBalanceAfter;

}

module.exports = moveFundsBetweenPots;
