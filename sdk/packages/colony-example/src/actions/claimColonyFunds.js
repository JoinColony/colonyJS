// An example action using the claimColonyFunds method
const claimColonyFunds = async (colonyClient, token) => {

  // Claim funds on behalf of the colony
  await colonyClient.claimColonyFunds.send({ token });

  // Get the colony pot balance
  const potBalance = await colonyClient.getFundingPotBalance.call({
    potId: 1,
    token,
  });

  // Check out the logs to see the colony pot balance
  console.log('Colony Pot Balance: ' + potBalance.balance);

  // Return the colony pot balance
  return potBalance;

}

// Export claimColonyFunds action
module.exports = claimColonyFunds;
