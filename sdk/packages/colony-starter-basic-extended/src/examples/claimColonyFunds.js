// An example using the claimColonyFunds method
const claimColonyFunds = async (colonyClient, token) => {

  // Claim funds for our colony from the given token
  await colonyClient.claimColonyFunds.send({ token });

  // Get the pot balance of our colony
  const potBalance = await colonyClient.getFundingPotBalance.call({
    potId: 1,
    token,
  });

  // Check out the logs to see the pot balance of our colony
  console.log('Colony Pot Balance: ' + potBalance.balance);

  // Return the pot balance of our colony
  return potBalance;

}

module.exports = claimColonyFunds;
