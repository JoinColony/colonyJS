// Import the prerequisites
const { EMPTY_ADDRESS } = require('@colony/colony-js-client');
const Web3 = require('web3');

// Instantiate web3 instance
const web3 = new Web3('ws://localhost:8545');

// An example action using the "makePayment" method
module.exports = async (colonyClient, worker, token, amount, domainId, skillId) => {

  // Declare balance variables
  let balanceBefore
  let balanceAfter

  // Check token address
  if (token === EMPTY_ADDRESS) {

    // Get the worker balance before the payment
    balanceBefore = await web3.eth.getBalance(worker);

  } else {

    // Get the worker balance before the payment
    balanceBefore = await colonyClient.tokenClient.getBalanceOf.call({
      sourceAddress: worker,
    }).then(balance => balance.amount.toString());

  }

  // Make payment
  const transaction = await colonyClient.makePayment.send({
    worker,
    token,
    amount,
    domainId,
    skillId,
  });

  // Check token address
  if (token === EMPTY_ADDRESS) {

    // Get the worker balance after the payment
    balanceAfter = await web3.eth.getBalance(worker);

  } else {

    // Get the worker balance before the payment
    balanceAfter = await colonyClient.tokenClient.getBalanceOf.call({
      sourceAddress: worker,
    }).then(balance => balance.amount.toString());

  }

  // Check out the logs to see the transaction hash
  console.log('Worker Balance (Before):', balanceBefore);

  // Check out the logs to see the transaction hash
  console.log('Worker Balance (After):', balanceAfter);

  // Return the transaction
  return transaction;

};
