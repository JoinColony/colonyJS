// An example using the claimColonyFunds method
const claimColonyFunds = async (colonyClient, token) => {

  // Get pot balance before claim
  const potBalanceBefore = await colonyClient.getPotBalance.call({
    potId: 1,
    token,
  });

  // Check out the log to see the pot balance after the claim
  console.log('Colony Pot Balance Before: ' + potBalanceBefore.balance);

  // Claim Colony funds
  await colonyClient.claimColonyFunds.send({ token });

  // Get pot balance after claim
  const potBalanceAfter = await colonyClient.getPotBalance.call({
    potId: 1,
    token,
  });

  // Check out the log to see the pot balance after the claim
  console.log('Colony Pot Balance After: ' + potBalanceAfter.balance);

  // Return pot balance after claim
  return potBalanceAfter;

}

module.exports = claimColonyFunds;
