// Import the prerequisites
const { EMPTY_ADDRESS } = require('@colony/colony-js-client');

// An example method for sending Ether
const sendEther = async (colonyClient, ether) => {

  // Get the wallet balance in ether before the transfer
  const balanceBefore = await colonyClient.adapter.wallet.getBalance();

  // Send ether amount from wallet to colony
  await colonyClient.adapter.wallet.send(colonyClient.contract.address, ether);

  // Get the wallet balance in ether after the transfer
  const balanceAfter = await colonyClient.adapter.wallet.getBalance();

  console.log('Wallet Balance (Before):', balanceBefore.toString());

  console.log('Wallet Balance (After):', balanceAfter.toString());

  // Return balance after
  return balanceAfter;

};

// Export sendEther example
module.exports = sendEther;
