// An example action using the "claimPayment" method
module.exports = async (colonyClient, payment, token) => {

  // Get the pot balance before
  const potBalanceBefore = await colonyClient.getFundingPotBalance.call({
    potId: payment.potId,
    token,
  });

  // Claim the payment
  await colonyClient.claimPayment.send({
    paymentId: payment.id,
    token,
  });

  // Get the pot balance after
  const potBalanceAfter = await colonyClient.getFundingPotBalance.call({
    potId: payment.potId,
    token,
  });

  // Check out the logs to see the pot balance before it was claimed
  console.log('Pot Balance (Before): ' + potBalanceBefore.balance);

  // Check out the logs to see the pot balance after it was claimed
  console.log('Pot Balance (After): ' + potBalanceAfter.balance);

  // Return the pot balance after it was claimed
  return potBalanceAfter;

};
