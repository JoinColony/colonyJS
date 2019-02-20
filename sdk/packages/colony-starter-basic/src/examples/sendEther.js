// Import the prerequisites
const Web3 = require('web3');

// Instantiate web3 instance
const web3 = new Web3('ws://localhost:8545');

// An example method for sending Ether
const sendEther = async (colonyClient, ether) => {

  // Get the wallet balance in ether before the transfer
  const balanceBefore = await web3.eth.getBalance(colonyClient.contract.address);

  // Send ether amount from wallet to colony
  await colonyClient.adapter.wallet.send(colonyClient.contract.address, ether.toString());

  // Get the wallet balance in ether after the transfer
  const balanceAfter = await web3.eth.getBalance(colonyClient.contract.address);

  console.log('Colony Balance (Before):', balanceBefore.toString());

  console.log('Colony Balance (After):', balanceAfter.toString());

  // Return balance after
  return balanceAfter;

};

// Export sendEther example
module.exports = sendEther;
