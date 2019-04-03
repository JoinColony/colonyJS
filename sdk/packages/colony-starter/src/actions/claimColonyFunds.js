// An example action using the "claimColonyFunds" method
module.exports = async (colonyClient, token) => {

  // Get the colony pot balance before claiming funds
  const potBalanceBefore = await colonyClient.getFundingPotBalance.call({
    potId: 1,
    token,
  });

  // Claim funds on behalf of the colony
  await colonyClient.claimColonyFunds.send({ token });

  // Get the colony pot balance after claiming funds
  const potBalanceAfter = await colonyClient.getFundingPotBalance.call({
    potId: 1,
    token,
  });

  // Check out the logs to see the colony pot balance before claiming funds
  console.log('Colony Pot (Before): ' + potBalanceBefore.balance);

  // Check out the logs to see the colony pot balance after claiming funds
  console.log('Colony Pot (After): ' + potBalanceAfter.balance);

  // Return the colony pot balance after claiming funds
  return potBalanceAfter;

};
