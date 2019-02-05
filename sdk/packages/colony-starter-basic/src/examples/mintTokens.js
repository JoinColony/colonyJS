// Import big number library
const BN = require('bn.js');

// An example using the mintTokens method
const mintTokens = async (colonyClient, amount) => {

  // Mint tokens
  await colonyClient.mintTokens.send({ amount: new BN(amount) });

  // Get the total supply of tokens
  const totalSupply = await colonyClient.tokenClient.getTotalSupply.call();

  // Check out the logs to see the total supply of tokens
  console.log('Total Supply Amount: ' + totalSupply.amount);

  // Return the total supply of tokens
  return totalSupply;

}

module.exports = mintTokens;
