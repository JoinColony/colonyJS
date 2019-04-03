// An example action using the "makePayment" method
module.exports = async (colonyClient, worker, token, amount, domainId, skillId) => {

  // Make payment
  const transaction = await colonyClient.makePayment.send({
    worker,
    token,
    amount,
    domainId,
    skillId,
  });

  // Check out the logs to see the transaction hash
  console.log('Transaction Hash:', transaction.meta.transaction.hash);

  // Return the transaction
  return transaction;

};
