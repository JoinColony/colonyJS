// Import the prerequisites
const Web3 = require('web3');

// Instantiate web3 instance
const web3 = new Web3('ws://localhost:8545');

// An example action for sending Ether
const sendEther = async (colonyClient, ether) => {

  // Get the colony ether balance before the transfer
  const balanceBefore = await web3.eth.getBalance(colonyClient.contract.address);

  // Send the amount from the wallet to the colony
  await colonyClient.adapter.wallet.send(colonyClient.contract.address, ether);

  // Get the colony ether balance after the transfer
  const balanceAfter = await web3.eth.getBalance(colonyClient.contract.address);

  // Check out the logs to see the colony ether balance before the transfer
  console.log('Colony Balance (Before):', balanceBefore.toString());

  // Check out the logs to see the colony ether balance after the transfer
  console.log('Colony Balance (After):', balanceAfter.toString());

  // Return the colony ether balance after the transfer
  return balanceAfter;

};

// Export sendEther action
module.exports = sendEther;
