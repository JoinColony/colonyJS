// Import big number library
const BN = require('bn.js');

// An example using the mintTokens method
const mintTokens = async (colonyClient, amount) => {

  // Get total supply before minting
  const totalSupplyBefore = await colonyClient.token.getTotalSupply.call();

  // Check out the logs to see the total supply amount before minting
  console.log('Total Supply Amount Before: ' + totalSupplyBefore.amount);

  // Mint tokens
  await colonyClient.mintTokens.send({ amount: new BN(amount) });

  // Get total supply after minting
  const totalSupplyAfter = await colonyClient.token.getTotalSupply.call();

  // Check out the logs to see the total supply amount after minting
  console.log('Total Supply Amount After: ' + totalSupplyAfter.amount);

  // Return total supply after minting
  return totalSupplyAfter;

}

module.exports = mintTokens;
