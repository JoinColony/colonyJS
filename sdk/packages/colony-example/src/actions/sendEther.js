// Import the prerequisites
const Web3 = require('web3');

// Instantiate web3 instance
const web3 = new Web3('ws://localhost:8545');

// An example action for sending Ether
module.exports = async (colonyClient, to, amount) => {

  // Get the colony ether balance before the transfer
  const balanceBefore = await web3.eth.getBalance(to);

  // Send the amount from the wallet to the colony
  await colonyClient.adapter.wallet.send(to, amount);

  // Get the colony ether balance after the transfer
  const balanceAfter = await web3.eth.getBalance(to);

  // Check out the logs to see the colony ether balance before the transfer
  console.log('Colony Balance (Before):', balanceBefore.toString());

  // Check out the logs to see the colony ether balance after the transfer
  console.log('Colony Balance (After):', balanceAfter.toString());

  // Return the colony ether balance after the transfer
  return balanceAfter;

};
