// An example action using the mintTokens method
const mintTokens = async (colonyClient, amount) => {

  // Mint tokens
  await colonyClient.mintTokens.send({ amount });

  // Get the total supply of tokens
  const totalSupply = await colonyClient.tokenClient.getTotalSupply.call();

  // Check out the logs to see the total supply of tokens
  console.log('Total Supply Amount: ' + totalSupply.amount);

  // Return the total supply of tokens
  return totalSupply;

}

// Export mintTokens action
module.exports = mintTokens;
